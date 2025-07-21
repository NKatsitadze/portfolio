import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  "Frontend-focused full-stack developer",
  "Full-stack coverage",
  "Pixel-perfect, flexible UIs",
  "Optimizing and improving workflows",
]

export default function OwnerSection({ repositories, about }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % phrases.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-owner">
      <div className="section-owner__flex">
        <div className="tagline-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.5 }}
              className="tagline"
            >
              {phrases[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        <img
          className="section-owner__image"
          src={repositories[0]?.owner.avatar_url || "/"}
          alt="image of owner"
          loading="lazy"
        />
        <div>
          <h1 className="text-xl">{about.name}</h1>
          <h2 className="text-l b">{about.role}</h2>
        </div>
      </div>
    </section>
  );
}
