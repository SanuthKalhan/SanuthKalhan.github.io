"use client";
import { motion } from "framer-motion";

type HighlightMode = "load" | "scroll";

export function Highlight({
  children,
  delay = 0,
  mode = "scroll",
}: {
  children: React.ReactNode;
  delay?: number;
  mode?: HighlightMode;
}) {
  const motionProps =
    mode === "load"
      ? {
          initial: { scaleX: 0 },
          animate: { scaleX: 1 },
        }
      : {
          initial: { scaleX: 0 },
          whileInView: { scaleX: 1 },
          viewport: { once: true, margin: "-20%" },
        };

  return (
    <span className="relative inline-block">
      <motion.span
        className="absolute left-0 bottom-1 w-full h-[0.7em] bg-emerald-400/30 -z-10"
        {...motionProps}
        transition={{
          duration: 0.6,
          delay,
          ease: "easeOut",
        }}
        style={{ transformOrigin: "left" }}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}
