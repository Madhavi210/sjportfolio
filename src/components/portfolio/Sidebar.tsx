import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home, User, Briefcase, BookOpen, Newspaper, Sparkles, Award,
  FileText, Mail, Linkedin, Phone, Download, MapPin, Menu, X,
} from "lucide-react";
const profileImg = "/profile/profile.jpg";

const NAV = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "knowledge", label: "Knowledge Hub", icon: BookOpen },
  { id: "blogs", label: "Blogs", icon: Newspaper },
  { id: "skills", label: "Skills", icon: Sparkles },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "resume", label: "Resume", icon: FileText },
  { id: "contact", label: "Contact", icon: Mail },
];

export function Sidebar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  const Content = (
    <div className="flex h-full flex-col gap-6 p-6">
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full opacity-70 blur-md" style={{ background: "var(--gradient-primary)" }} />
          <div className="relative rounded-full p-[2px]" style={{ background: "var(--gradient-primary)", animation: "pulse-glow 3s ease-in-out infinite" }}>
            <img
              src={profileImg}
              alt="Siddharth Jani"
              width={112}
              height={112}
              className="h-28 w-28 rounded-full object-cover ring-4 ring-background"
            />
          </div>
        </div>
        <h2 className="mt-4 text-lg font-semibold tracking-tight">Siddharth Jani</h2>
        <p className="text-sm text-primary">Regulatory Affairs Professional</p>
        <p className="mt-1 text-xs text-muted-foreground">EU/UK Labelling & Lifecycle Management</p>
        <p className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" /> Ahmedabad, Gujarat, India
        </p>
        <div className="mt-4 flex items-center gap-2">
          {[
            { href: "https://www.linkedin.com/in/siddharth-jani-/", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:siddharth.jani.56@gmail.com", icon: Mail, label: "Email" },
            { href: "tel:+919512323133", icon: Phone, label: "Phone" },
            { href: "/resume/resume.pdf", icon: Download, label: "Resume", download: true },
          ].map(({ href, icon: Icon, label, download }) => (
            <a
              key={label}
              href={href}
              target={download ? undefined : "_blank"}
              rel="noreferrer"
              {...(download ? { download: true } : {})}
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/60 text-primary transition-all hover:-translate-y-0.5 hover:glow-ring"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {NAV.map((n) => {
          const Icon = n.icon;
          const isActive = active === n.id;
          return (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-xl border border-primary/30"
                  style={{ background: "color-mix(in oklab, var(--color-primary) 12%, transparent)", boxShadow: "var(--shadow-glow)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className={`relative h-4 w-4 ${isActive ? "text-primary" : ""}`} />
              <span className="relative font-medium tracking-wide uppercase text-xs">{n.label}</span>
            </button>
          );
        })}
      </nav>

    </div>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-border bg-background/70 px-4 py-3 backdrop-blur-md lg:hidden">
        <span className="text-sm font-semibold tracking-tight">Siddharth Jani</span>
        <button onClick={() => setOpen(true)} aria-label="Open menu" className="rounded-md border border-border p-2">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-border bg-sidebar/70 backdrop-blur-xl lg:block">
        {Content}
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] overflow-y-auto border-r border-border bg-sidebar lg:hidden"
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
            >
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="absolute right-3 top-3 rounded-md border border-border p-2">
                <X className="h-5 w-5" />
              </button>
              {Content}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}