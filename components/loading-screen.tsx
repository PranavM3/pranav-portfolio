"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  className="h-2.5 w-2.5 rounded-full bg-[#f4b6c2]"
                  animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 0.9, delay: dot * 0.12, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
            <p className="text-sm uppercase tracking-[0.34em] text-zinc-300">
              Preparing a premium experience
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
