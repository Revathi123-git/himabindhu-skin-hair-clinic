import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CLINIC, TEL_URL } from "@/lib/clinic";
import logo from "../../assets/logo.jpg";
const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        transparent ? "bg-transparent" : "glass shadow-soft"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-18 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full gradient-hero flex items-center justify-center shadow-glow">
            
    {/* Logo Image */}
    <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-glow flex items-center justify-center">
      <img
  src={logo}
  alt="Dr Himabindu Logo"
    style={{
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "cover"
  }}
  className="w-full h-full object-contain"
/>
    </div>
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base font-semibold text-foreground">Dr Himabindu's</div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">Skin · Hair · Aesthetics</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-smooth relative"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={TEL_URL}
            className="hidden md:inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-smooth"
          >
            <Phone className="w-4 h-4" /> {CLINIC.phone}
          </a>
          <Link
            to="/appointment"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-hero text-primary-foreground text-sm font-medium shadow-soft hover:shadow-glow transition-smooth"
          >
            Book Appointment
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-full hover:bg-muted transition-smooth"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border/50">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-muted transition-smooth"
                activeProps={{ className: "text-primary bg-muted" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              className="mt-2 px-5 py-3 rounded-full gradient-hero text-primary-foreground text-center font-medium"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
