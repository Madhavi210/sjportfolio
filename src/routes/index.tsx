import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText, Download, BookOpen, ArrowRight, ExternalLink,
  ShieldCheck, Landmark, Tag, ArrowLeftRight, CalendarCheck, FolderOpen,
  Paintbrush, Database, Dna, BadgeCheck, Mail, Phone, Linkedin, MapPin,
  Clock, Search, GraduationCap, Languages, Target, Sparkles, Award,
} from "lucide-react";
import { Sidebar } from "@/components/portfolio/Sidebar";
import { Section } from "@/components/portfolio/Section";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";
import blogs from "@/data/blogs.json";
import experience from "@/data/experience.json";
import skills from "@/data/skills.json";
import certifications from "@/data/certifications.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siddharth Jani — Regulatory Affairs Professional" },
      { name: "description", content: "Premium portfolio & regulatory knowledge hub: EU/UK labelling, artwork management, CMC documentation and lifecycle management." },
      { property: "og:title", content: "Siddharth Jani — Regulatory Affairs Professional" },
      { property: "og:description", content: "EU/UK Labelling, Artwork Management, CMC Documentation & Lifecycle Management." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/profile/profile.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const HUB = [
  { icon: ShieldCheck, title: "EU Regulations", desc: "Guidelines & Updates", color: "text-primary" },
  { icon: Landmark, title: "UK (MHRA)", desc: "Guidance & Procedures", color: "text-secondary" },
  { icon: Tag, title: "Labelling", desc: "SmPC, PIL, Labels", color: "text-amber-300" },
  { icon: ArrowLeftRight, title: "Variations", desc: "IA, IB, II & Others", color: "text-primary" },
  { icon: CalendarCheck, title: "Post Approval", desc: "Lifecycle Management", color: "text-fuchsia-300" },
  { icon: FolderOpen, title: "CTD / ACTD", desc: "Dossier Preparation", color: "text-primary" },
  { icon: Paintbrush, title: "Artwork", desc: "Management & Review", color: "text-secondary" },
  { icon: Database, title: "CMC", desc: "CMC & Quality Docs", color: "text-primary" },
  { icon: Dna, title: "Biosimilars", desc: "Guidelines & Updates", color: "text-fuchsia-300" },
  { icon: BadgeCheck, title: "Compliance", desc: "cGMP & Quality", color: "text-primary" },
];

const ABOUT_CARDS = [
  {
    icon: Target,
    title: "Professional Summary",
    body: "Regulatory Affairs professional specializing in EU/UK labelling, artwork management, CMC documentation and product lifecycle management for generic and biosimilar portfolios.",
  },
  {
    icon: Sparkles,
    title: "Core Competencies",
    body: "Type IA/IB/II variations, SmPC & PIL authoring, artwork lifecycle, CTD/ACTD dossiers, PSUR/PADER, cGMP compliance and change control.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "P.G. Diploma in Global Regulatory Affairs and Drug Regulatory Affairs (CMC for Biologics and Biosimilars).",
  },
  {
    icon: Languages,
    title: "Languages",
    body: "English (Professional) · Hindi (Native) · Gujarati (Native).",
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Sidebar />
      <main className="lg:pl-72">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 lg:pt-8 lg:px-10">
          <Hero />
          <ExperienceTimeline />
          <FeaturedBlogs />
          <KnowledgeHub />
          <Skills />
          <Certifications />
          <About />
          <ResumeBlock />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="relative overflow-hidden rounded-3xl border border-border glass">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, color-mix(in oklab, var(--color-background) 80%, transparent) 0%, color-mix(in oklab, var(--color-background) 30%, transparent) 60%, transparent 100%)" }} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <div className="relative grid gap-8 px-6 py-12 md:grid-cols-[1.4fr_1fr] md:px-12 md:py-20">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="text-sm font-medium text-primary"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-2 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl"
            >
              Siddharth <span className="text-gradient">Jani</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-3 text-xl font-medium text-primary"
            >
              Regulatory Affairs Professional
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-4 max-w-xl text-base text-muted-foreground"
            >
              Specialized in <span className="text-foreground">EU/UK Labelling</span>, <span className="text-foreground">Artwork Management</span>,
              <span className="text-foreground"> CMC Documentation</span> & <span className="text-foreground">Lifecycle Management</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="rounded-full font-medium" style={{ background: "var(--gradient-primary)", color: "var(--primary-foreground)", boxShadow: "var(--shadow-glow)" }}>
                <a href="/resume/resume.pdf" target="_blank" rel="noreferrer">
                  <FileText className="mr-1 h-4 w-4" /> View Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg"   className="rounded-full border-primary/30 bg-card/40 backdrop-blur
                  text-primary hover:text-primary
                  hover:bg-card/70 hover:border-primary
                  transition-all duration-300">
                <a href="/resume/resume.pdf" download>
                  <Download className="mr-1 h-4 w-4" /> Download Resume
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full
                  text-primary
                  hover:text-primary
                  hover:bg-card/50
                  transition-all duration-300">
                <a href="#blogs">
                  <BookOpen className="mr-1 h-4 w-4" /> Read Blogs
                </a>
              </Button>
            </motion.div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-primary" style={{ boxShadow: "0 0 10px var(--color-primary)" }} /> Available for new opportunities</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Ahmedabad, India</span>
            </div>
          </div>

          <div className="relative hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <div className="h-64 w-64 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-primary)" }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Experience Timeline ---------- */
function ExperienceTimeline() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <div className="glass rounded-2xl p-6 md:p-8">
        <div className="relative">
          <div className="absolute left-[88px] top-2 bottom-2 w-px bg-border md:left-[110px]" />
          <div className="flex flex-col gap-8">
            {experience.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="grid grid-cols-[80px_1fr] items-start gap-4 md:grid-cols-[100px_1fr]"
              >
                <div className="text-right">
                  <div className="text-sm font-semibold">{e.year}</div>
                  {e.subYear && <div className="text-xs text-muted-foreground">{e.subYear}</div>}
                </div>
                <div className="relative pl-8 md:pl-10">
                  <span
                    className={`absolute -left-[5px] top-1.5 h-3 w-3 rounded-full ${i === 0 ? "" : "bg-muted-foreground/40"}`}
                    style={i === 0 ? { background: "var(--color-primary)", boxShadow: "0 0 0 4px color-mix(in oklab, var(--color-primary) 25%, transparent)" } : undefined}
                  />
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold md:text-lg">{e.role}</h3>
                      <p className="text-sm text-primary">{e.company}</p>
                      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{e.description}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="rounded-full border-primary/30 bg-card/50 text-primary hover:bg-primary/15 hover:text-primary">
                          View Details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="border-border bg-card">
                        <DialogHeader>
                          <DialogTitle>{e.role}</DialogTitle>
                          <DialogDescription className="text-primary">{e.company} · {e.year}{e.subYear ? ` — ${e.subYear}` : ""}</DialogDescription>
                        </DialogHeader>
                        <p className="text-sm text-muted-foreground">{e.details}</p>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Featured Blogs ---------- */
function FeaturedBlogs() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(blogs.map((b) => b.category)))], []);
  const filtered = blogs.filter(
    (b) =>
      (cat === "All" || b.category === cat) &&
      (b.title.toLowerCase().includes(q.toLowerCase()) || b.category.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <Section
      id="blogs"
      eyebrow="Insights"
      title="Featured Articles"
      action={
        <a></a>
        // <a href="#" className="hidden text-sm text-primary hover:underline md:inline-flex">View All Articles →</a>
      }
    >
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles…"
            className="border-border bg-card/50 pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                cat === c
                  ? "border-primary/40 bg-primary/15 text-primary"
                  : "border-border bg-card/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((b) => (
          <motion.button
            key={b.title}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={() => window.open(b.url, "_blank")}
            className="group overflow-hidden rounded-2xl border border-border bg-card/60 text-left backdrop-blur hover:border-primary/30"
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <img
                src={b.image}
                alt={b.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <Badge className="absolute left-3 top-3 border-0 bg-background/70 text-[10px] uppercase tracking-wider text-primary backdrop-blur">
                {b.category}
              </Badge>
            </div>
            <div className="p-4">
              <h3 className="line-clamp-2 text-sm font-semibold leading-snug group-hover:text-primary">
                {b.title}
              </h3>
              <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" /> {b.readTime} read</span>
                <span>·</span>
                <span>{b.date}</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted-foreground">No articles match your search.</p>
      )}
    </Section>
  );
}

/* ---------- Knowledge Hub ---------- */
function KnowledgeHub() {
  return (
    <Section
      id="knowledge"
      eyebrow="Library"
      title="Regulatory Knowledge Hub"
      action={<a href="#blogs" className="hidden text-sm text-primary hover:underline md:inline-flex">Explore All →</a>}
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {HUB.map((h) => {
          const Icon = h.icon;
          return (
            <motion.div
              key={h.title}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-5 text-center backdrop-blur transition-colors hover:border-primary/30"
            >
              <div className="absolute inset-x-0 -top-12 mx-auto h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60" style={{ background: "var(--gradient-primary)" }} />
              <div className="relative">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl border border-border bg-background/60">
                  <Icon className={`h-5 w-5 ${h.color}`} />
                </div>
                <h3 className="mt-3 text-sm font-semibold">{h.title}</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">{h.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- Skills ---------- */
function Skills() {
  return (
    <Section id="skills" eyebrow="Expertise" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">{s.name}</h3>
              <span className="text-xs text-primary">{s.level}%</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted/40">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="h-full rounded-full"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Certifications ---------- */
function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Achievements"
      title="Certifications"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {certifications.map((c) => (
          <motion.div
            key={c.title}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur hover:border-primary/30"
          >
            <Award className="mb-3 h-5 w-5 text-primary" />
            <h3 className="text-sm font-semibold leading-snug">{c.title}</h3>
            <p className="mt-2 text-xs text-muted-foreground">{c.org}</p>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full" style={{ background: "var(--gradient-primary)" }} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <Section id="about" eyebrow="Profile" title="About Me">
      <div className="grid gap-4 sm:grid-cols-2">
        {ABOUT_CARDS.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background/60 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{c.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ---------- Resume CTA ---------- */
function ResumeBlock() {
  return (
    <Section id="resume">
      <div className="relative overflow-hidden rounded-2xl border border-border glass p-6 md:p-8">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
        <div className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-background/60 text-primary">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Download My Resume</h3>
              <p className="text-sm text-muted-foreground">Get a copy of my latest resume in PDF format.</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" className="rounded-full border-border bg-card/50">
              <a href="/resume/resume.pdf" target="_blank" rel="noreferrer"><FileText className="mr-1 h-4 w-4" /> View</a>
            </Button>
            <Button asChild className="rounded-full" style={{ background: "var(--gradient-primary)", color: "var(--primary-foreground)" }}>
              <a href="/resume/resume.pdf" download><Download className="mr-1 h-4 w-4" /> Download Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  return (
    <Section id="contact" eyebrow="Let's Connect" title="Contact">
      <div className="grid gap-5 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: "siddharth.jani.56@gmail.com", href: "mailto:siddharth.jani.56@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 9512323133", href: "tel:+919512323133" },
            { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/siddharth-jani-", href: "https://www.linkedin.com/in/siddharth-jani-/" },
            { icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat, India" },
          ].map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-4 backdrop-blur transition-colors hover:border-primary/30">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background/60 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="truncate text-sm font-medium">{value}</p>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{inner}</a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}

/* ---------- Footer ---------- */
function ContactForm() {
  const STORAGE_KEY = "contact_messages.json";
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const entry = {
      id: crypto.randomUUID(),
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
      createdAt: new Date().toISOString(),
    };
    try {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      const next = Array.isArray(existing) ? [...existing, entry] : [entry];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next, null, 2));
      toast.success("Message saved! I'll get back to you shortly.");
      form.reset();
    } catch {
      toast.error("Couldn't save your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Name</label>
          <Input name="name" required className="mt-1 border-border bg-background/40" placeholder="Your name" />
        </div>
        <div>
          <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Email</label>
          <Input name="email" required type="email" className="mt-1 border-border bg-background/40" placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Message</label>
        <Textarea name="message" required rows={5} className="mt-1 border-border bg-background/40" placeholder="How can I help?" />
      </div>
      <Button type="submit" disabled={submitting} className="w-full rounded-full" style={{ background: "var(--gradient-primary)", color: "var(--primary-foreground)", boxShadow: "var(--shadow-glow)" }}>
        {submitting ? "Saving…" : "Send Message"} <ExternalLink className="ml-1 h-4 w-4" />
      </Button>
    </form>
  );
}

function Footer() {
  return (
    <footer className="mt-10 border-t border-border pt-8 pb-2 text-center text-xs text-muted-foreground">
      <p>© {new Date().getFullYear()} Siddharth Jani. All rights reserved.</p>
    </footer>
  );
}
