import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left"
        style={{ scaleX: x, background: "var(--gradient-primary)" }}
      />
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full text-primary-foreground transition-transform hover:-translate-y-0.5"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}