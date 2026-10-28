import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Lightbulb, RefreshCw, CheckCircle, ArrowRight, Sparkles, AlertTriangle, Share2 } from 'lucide-react';
import { quizQuestions, calculateResult } from '../data/carbonQuiz';
import { ecoTips } from '../data/ecoTips';
import SectionHeading from '../components/SectionHeading';
import WaveDivider from '../components/WaveDivider';

export default function EcoTools() {
  // Calculator State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  // Daily Tip State
  const [tipIndex, setTipIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Carbon Quiz Handlers
  const handleSelectOption = (questionId, optionIndex) => {
    const updated = { ...selectedAnswers, [questionId]: optionIndex };
    setSelectedAnswers(updated);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const res = calculateResult(updated);
      setQuizResult(res);
      setQuizCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setQuizResult(null);
  };

  // Next Tip Handler
  const handleNextTip = () => {
    setTipIndex((prev) => (prev + 1) % ecoTips.length);
    setCopied(false);
  };

  const handleCopyTip = () => {
    const activeTip = ecoTips[tipIndex];
    navigator.clipboard.writeText(`🌱 Campus Eco Tip: ${activeTip.title} - ${activeTip.tip}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentQ = quizQuestions[currentQuestionIndex];
  const activeTip = ecoTips[tipIndex];

  return (
    <section id="tools" className="relative bg-cream pt-0 pb-24">
      {/* Wave transition from dark tech to light */}
      <WaveDivider from="forest" to="cream" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="CLIENT-SIDE APPS"
          title="Interactive Environmental"
          highlight="Tools"
          description="Evaluate your daily ecological footprint and discover actionable campus sustainability habits—all computed live in your browser."
        />

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tool 1: Carbon Footprint Calculator (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-cream-border shadow-lifted">
            <div className="flex items-center justify-between pb-4 border-b border-cream-border mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-leaf flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-forest text-lg sm:text-xl">
                    Student Carbon Calculator
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-700">
                    Runs 100% locally in your browser
                  </span>
                </div>
              </div>

              {!quizCompleted && (
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-cream text-leaf">
                  Step {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
              )}
            </div>

            {/* Quiz Progress Line */}
            {!quizCompleted && (
              <div className="w-full h-1.5 bg-cream rounded-full overflow-hidden mb-6">
                <div
                  className="h-full bg-gradient-to-r from-emerald to-lime transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            )}

            {/* Quiz Body */}
            <AnimatePresence mode="wait">
              {!quizCompleted ? (
                <motion.div
                  key={currentQ.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-600 font-semibold">
                      {currentQ.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-display font-bold text-forest mt-1">
                      {currentQ.title}
                    </h4>
                  </div>

                  {/* Options List */}
                  <div className="space-y-2.5 pt-2">
                    {currentQ.options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(currentQ.id, idx)}
                        className="w-full text-left p-4 rounded-2xl border border-cream-border bg-cream/30 hover:bg-emerald-50 hover:border-emerald-300 transition-all flex items-center justify-between group active:scale-[0.99]"
                        style={{ minHeight: '44px' }}
                      >
                        <span className="text-xs sm:text-sm font-medium text-forest group-hover:text-leaf">
                          {opt.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>

                  {/* Back / Navigation button if past step 1 */}
                  {currentQuestionIndex > 0 && (
                    <button
                      onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
                      className="text-xs font-mono text-forest/60 hover:text-forest underline pt-2"
                    >
                      ← Back to previous question
                    </button>
                  )}
                </motion.div>
              ) : (
                /* Quiz Results View */
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Score Pill */}
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-cream-warm to-emerald-50/60 border border-emerald-200 text-center">
                    <span className="text-xs font-mono uppercase tracking-wider text-forest/60 font-semibold">
                      Estimated Carbon Footprint
                    </span>
                    <div className="flex items-baseline justify-center gap-1.5 my-2">
                      <span className="text-5xl font-display font-extrabold text-forest">
                        {quizResult.score}
                      </span>
                      <span className="text-lg font-display font-bold text-emerald">
                        Tons CO₂e / yr
                      </span>
                    </div>
                    <div className={`text-sm font-display font-bold ${quizResult.statusColor}`}>
                      {quizResult.status}
                    </div>
                    <p className="text-xs text-forest/75 mt-2 max-w-md mx-auto">
                      {quizResult.verdict}
                    </p>
                  </div>

                  {/* 3 Personalized Tips */}
                  <div>
                    <h4 className="text-sm font-display font-bold text-forest mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald" />
                      <span>3 Personal Recommendations For You:</span>
                    </h4>
                    <div className="space-y-2.5">
                      {quizResult.tips.map((item, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-cream/60 border border-cream-border text-xs text-forest/80 flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-forest block">{item.category}:</strong>
                            <span>{item.tip}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Approximation Disclaimer */}
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] leading-relaxed flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Disclaimer:</strong> This calculation is an approximation based on representative student consumption models for awareness purposes.
                    </span>
                  </div>

                  <button
                    onClick={handleResetQuiz}
                    className="w-full py-3 rounded-xl bg-forest-deep text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 hover:bg-forest-surface transition-colors"
                    style={{ minHeight: '44px' }}
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Recalculate Footprint</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tool 2: Daily Sustainability Tip (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-cream-border shadow-lifted flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-cream-border mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-lime/20 text-leaf-dark flex items-center justify-center">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-forest text-lg sm:text-xl">
                      Daily Eco Tip
                    </h3>
                    <span className="text-[11px] font-mono text-emerald-700">
                      20+ verified campus habits
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-forest/60">
                  #{tipIndex + 1} / {ecoTips.length}
                </span>
              </div>

              {/* Tip Content Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTip.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-cream to-cream-warm/70 border border-cream-border"
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-leaf uppercase tracking-wider">
                      {activeTip.category}
                    </span>
                    <span className="text-[10px] font-mono text-forest/50">
                      {activeTip.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-display font-bold text-forest mb-2">
                    {activeTip.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-forest/80 leading-relaxed">
                    “{activeTip.tip}”
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-cream-border flex items-center gap-3">
              <button
                onClick={handleNextTip}
                className="flex-1 py-3 px-4 rounded-xl bg-forest text-lime font-mono text-xs font-bold tracking-wider hover:bg-forest-surface transition-all flex items-center justify-center gap-2"
                style={{ minHeight: '44px' }}
              >
                <span>NEXT ECO TIP</span>
                <RefreshCw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleCopyTip}
                aria-label="Copy sustainability tip"
                className="py-3 px-4 rounded-xl bg-cream border border-cream-border text-forest hover:bg-white transition-all text-xs flex items-center justify-center gap-1.5"
                style={{ minHeight: '44px' }}
                title="Copy tip to clipboard"
              >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">{copied ? "Copied!" : "Share"}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
