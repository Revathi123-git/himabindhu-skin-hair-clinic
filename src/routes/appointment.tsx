import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Calendar, CheckCircle2, MessageCircle } from "lucide-react";
import { CLINIC, WHATSAPP_URL } from "@/lib/clinic";
import { SERVICES } from "@/lib/services";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment | Dr Himabindu's Clinic" },
      { name: "description", content: "Schedule a dermatology consultation with Dr. M. Himabindu. Book online or via WhatsApp." },
    ],
  }),
  component: AppointmentPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit phone"),
  email: z.string().trim().email("Invalid email").max(120),
  treatment: z.string().min(1, "Select a treatment"),
  date: z.string().min(1, "Select a preferred date"),
  message: z.string().max(500).optional(),
});
type FormValues = z.infer<typeof schema>;

function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    const text = encodeURIComponent(
      `Hi ${CLINIC.shortName}, I'd like to book an appointment.\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nTreatment: ${data.treatment}\nDate: ${data.date}\nMessage: ${data.message ?? "-"}`
    );
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank");
    toast.success("Appointment request sent! We'll confirm shortly.");
    setSubmitted(true);
    reset();
  };

  return (
    <div>
      <section className="pt-32 pb-12 gradient-soft relative overflow-hidden">
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto px-4 lg:px-8 relative text-center">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">Book Appointment</span>
            <h1 className="font-display mt-3 text-4xl md:text-6xl">Schedule your consultation</h1>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">A personalized treatment plan starts with a conversation.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
       <div className="container mx-auto px-4 lg:px-8 flex justify-center gap-12">
          <Reveal>
            <div className="space-y-5">
              <div className="p-6 rounded-3xl bg-card border border-border/60">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl mt-3">Working Hours</h3>
                <p className="text-muted-foreground mt-2">{CLINIC.hours}</p>
              </div>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="block p-6 rounded-3xl gradient-hero text-primary-foreground hover-lift">
                <MessageCircle className="w-6 h-6" />
                <h3 className="font-display text-xl mt-3">WhatsApp Booking</h3>
                <p className="opacity-90 mt-2">Quickest way to confirm your slot.</p>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:col-span-2 p-8 lg:p-10 rounded-3xl bg-card border border-border/60 shadow-soft">
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="w-16 h-16 mx-auto text-primary" />
                  <h2 className="font-display text-3xl mt-5">You're booked in!</h2>
                  <p className="text-muted-foreground mt-3">We've received your request and opened WhatsApp to confirm details. Our team will reach out within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 text-primary font-medium">Book another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" error={errors.name?.message}>
                    <input {...register("name")} className={inputCls} placeholder="Your name" />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message}>
                    <input {...register("phone")} className={inputCls} placeholder="10-digit mobile" />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input {...register("email")} type="email" className={inputCls} placeholder="you@example.com" />
                  </Field>
                  <Field label="Preferred Date" error={errors.date?.message}>
                    <input {...register("date")} type="date" className={inputCls} />
                  </Field>
                  <Field label="Treatment Type" error={errors.treatment?.message} className="sm:col-span-2">
                    <select {...register("treatment")} className={inputCls} defaultValue="">
                      <option value="" disabled>Select a treatment</option>
                      {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                      <option value="General Consultation">General Consultation</option>
                    </select>
                  </Field>
                  <Field label="Message (optional)" error={errors.message?.message} className="sm:col-span-2">
                    <textarea {...register("message")} rows={4} className={inputCls} placeholder="Tell us about your concern..." />
                  </Field>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="sm:col-span-2 px-7 py-4 rounded-full gradient-hero text-primary-foreground font-medium shadow-soft hover:shadow-glow transition-smooth disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Request Appointment"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

const inputCls = "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-smooth";

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-medium text-foreground/80">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
