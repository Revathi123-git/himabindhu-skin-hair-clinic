import "./lib/error-capture";

import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (
    request: Request,
    env: unknown,
    ctx: unknown
  ) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) =>
        (m as { default?: ServerEntry }).default ??
        (m as unknown as ServerEntry)
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

/* -------------------------
   SIMPLIFIED (NO SSR TRAP LOGIC)
   ------------------------- */
async function normalizeCatastrophicSsrResponse(
  response: Response
): Promise<Response> {
  // ALWAYS return something
  return response;
}

/* -------------------------
   SERVER ENTRY
   ------------------------- */
export default {
  async fetch(
    request: Request,
    env: unknown,
    ctx: unknown
  ): Promise<Response> {
    try {
      const handler = await getServerEntry();

      const response = await handler.fetch(request, env, ctx);

      // always return response (important for SSR stability)
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error("SSR ERROR:", error);
      return brandedErrorResponse();
    }
  },
};