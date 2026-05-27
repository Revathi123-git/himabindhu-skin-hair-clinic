import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { CLINIC, MAIL_URL, TEL_URL, WHATSAPP_URL } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-foreground text-background">
      <div className="absolute inset-0 gradient-radial opacity-30 pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 py-16 relative">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center shadow-glow">
                <span className="font-display text-primary-foreground text-xl font-bold">H</span>
              </div>
              <div>
                <div className="font-display text-lg">Dr Himabindu's</div>
                <div className="text-[11px] tracking-[0.2em] uppercase opacity-70">Skin · Hair · Aesthetics</div>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              Personalized, evidence-based dermatology by {CLINIC.doctor}. {CLINIC.experience} of trusted care since {CLINIC.established}.
            </p>
         <div className="flex gap-3 mt-6">
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-primary transition-smooth"
  >
    <MessageCircle className="w-4 h-4" />
  </a>

  <a
    href="https://www.instagram.com/drhimabindumamidala?igsh=OWo0d3J1aTl0Y3oy"
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-primary transition-smooth"
  >
    <Instagram className="w-4 h-4" />
  </a>

  <a
    href="https://www.facebook.com/share/1CyhYvQxRt/"
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-primary transition-smooth"
  >
    <Facebook className="w-4 h-4" />
  </a>
</div>
</div>
          <div>
            <h4 className="font-display text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm opacity-80">
              {[
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/gallery", label: "Gallery" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/blog", label: "Blog" },
                { to: "/appointment", label: "Book Appointment" },
              ].map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-accent transition-smooth">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5">Contact</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-accent" /><a href={TEL_URL}>{CLINIC.phone}</a></li>
              <li className="flex items-start gap-2"><MessageCircle className="w-4 h-4 mt-0.5 text-accent" /><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">{CLINIC.whatsapp} (WhatsApp)</a></li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-accent" /><a href={MAIL_URL}>{CLINIC.email}</a></li>
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-accent" /><span>{CLINIC.address}</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-5">Hours</h4>
            <p className="text-sm opacity-80">{CLINIC.hours}</p>
            <p className="text-sm opacity-80 mt-1">Sunday: By appointment</p>
            <div className="mt-6 p-4 rounded-2xl glass-dark">
              <p className="text-xs opacity-70">Reg No.</p>
              <p className="font-display text-lg">{CLINIC.regNo}</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs opacity-60">
          <p>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</p>
          <p>Crafted with care for radiant skin & confident smiles.</p>
        </div>
      </div>
    </footer>
  );
}
