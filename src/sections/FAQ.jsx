import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const faqs = [
  {
    question: "Who can join?",
    answer: "Any enrolled student at ABES Engineering College across all branches (CSE, IT, ECE, EN, ME, MCA) and all academic years can join. No prior environmental or programming experience is required—just an interest in making our campus greener."
  },
  {
    question: "What do members do?",
    answer: "Members take part in weekend tree plantations, campus cleanups, e-waste segregation drives, conceptualize environmental IoT and software projects, organize workshops, and run digital awareness campaigns."
  },
  {
    question: "How do I register?",
    answer: "Simply submit the online membership form in the Join Us section below, or visit our desk during semester recruitment drives. Membership is open to all students."
  },
  {
    question: "Where do we meet?",
    answer: "We gather for weekly division coordination at the Student Activity Center and Tech Innovation Block. The exact recurring schedule is pending club confirmation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-cream relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - 1 heading + max 2 lines subtitle */}
        <SectionHeading
          badge="QUESTIONS & ANSWERS"
          title="Frequently Asked"
          highlight="Questions"
          description="Clear answers about student membership, campus activities, and meeting venues."
        />

        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-cream-border overflow-hidden shadow-soft-organic transition-all hover:border-emerald-300"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-4.5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-lime"
                  style={{ minHeight: '52px' }}
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-lg text-forest">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-cream flex items-center justify-center text-forest transition-transform flex-shrink-0 ${isOpen ? 'rotate-180 bg-lime text-forest-deep' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-forest/80 leading-relaxed border-t border-cream-border/60">
                    <p className="max-w-[70ch]">
                      {faq.answer.includes("pending club confirmation") ? (
                        <>
                          We gather for weekly division coordination at the Student Activity Center and Tech Innovation Block. The exact recurring schedule is <span className="inline-block px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-mono text-xs font-semibold">pending club confirmation</span>.
                        </>
                      ) : (
                        faq.answer
                      )}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
