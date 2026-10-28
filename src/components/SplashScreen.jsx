import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest-deep text-white pointer-events-none select-none"
        >
          <div className="relative flex flex-col items-center">
            {/* Pulsing ambient glow */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.25, 1], opacity: [0.2, 0.6, 0.4] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-44 h-44 rounded-full bg-lime/20 blur-2xl"
            />

            {/* Logo Emblem with growing circuit line animation */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-28 h-28 p-2 rounded-2xl bg-forest-surface border border-lime/30 shadow-glow-lime flex items-center justify-center"
            >
              <img
                src="/assets/logo-icon.png"
                alt="Eco Club Emblem"
                className="w-20 h-20 object-contain drop-shadow"
              />
            </motion.div>

            {/* Typography */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-center"
            >
              <h1 className="text-xl sm:text-2xl font-display font-bold tracking-wider uppercase text-white">
                ECO CLUB <span className="text-lime">ABES</span>
              </h1>
              <p className="mt-1 text-xs font-mono text-lime/80 tracking-widest uppercase">
                Think · Act · Code · Work Greener
              </p>
            </motion.div>

            {/* Subtle loading bar indicator */}
            <div className="w-36 h-1 mt-6 bg-forest-border rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-emerald to-lime"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
