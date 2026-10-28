import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus } from 'lucide-react';

export default function FloatingJoinBtn() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const joinSection = document.getElementById('join');
      
      let isNearJoin = false;
      if (joinSection) {
        const rect = joinSection.getBoundingClientRect();
        // If join section is in viewport, hide floating button
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          isNearJoin = true;
        }
      }

      // Show after scrolling past hero (approx 400px), except when already in Join section
      if (scrollY > 400 && !isNearJoin) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-5 z-40 md:hidden"
        >
          <a
            href="#join"
            className="flex items-center gap-2 px-5 py-3.5 bg-gradient-to-r from-emerald to-leaf text-white font-medium text-sm rounded-full shadow-lg shadow-emerald/30 border border-lime/40 active:scale-95 transition-transform"
            style={{ minHeight: '44px', minWidth: '44px' }}
          >
            <UserPlus className="w-4 h-4 text-lime" />
            <span>Join Eco Club</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
