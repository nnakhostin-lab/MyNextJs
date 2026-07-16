"use client"
import { motion, useMotionValue, useSpring } from "framer-motion";
import "../LiquidGlassButton.css";
import Link from "next/link";

export default function LiquidGlassButton() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 150, damping: 15 });
  const rotateY = useSpring(x, { stiffness: 150, damping: 15 });

  function move(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    x.set((px / rect.width - 0.5) * 20);
    y.set((py / rect.height - 0.5) * -20);
  }

  function leave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      className="glass-btn"
      onMouseMove={move}
      onMouseLeave={leave}
      style={{
        rotateX,
        rotateY,
      }}
    >
      <div className="shine"></div>

      <span>
        <Link href="../form"> Continue </Link>
      </span>
    </motion.button>
  );
}