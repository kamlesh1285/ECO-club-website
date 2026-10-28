import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Video, Play, ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';
import { galleryItems, sampleVideos } from '../data/gallery';
import SectionHeading from '../components/SectionHeading';
import Modal from '../components/Modal';

const categories = ["All", "Drives", "Workshops", "Awareness", "Plantation"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);

  // Filtered items
  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;

      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || lightboxIndex === null) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-cream-warm/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          badge="CAMPUS ARCHIVE"
          title="Eco Drives & Activity"
          highlight="Gallery"
          description="A visual journal of student-led environmental drives, workshops, clean-ups, and campus awareness campaigns."
          sampleDisclaimer="Sample images & videos — stored in /public/assets/gallery/"
        />

        {/* Filter Chips */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-forest-deep text-lime shadow-md border border-lime/30'
                  : 'bg-white text-forest/75 hover:bg-white/80 border border-cream-border'
              }`}
              style={{ minHeight: '44px' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setLightboxIndex(idx)}
                className="bg-white rounded-2xl overflow-hidden border border-cream-border shadow-soft-organic group cursor-pointer hover:shadow-lifted hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] bg-forest-surface overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-forest-deep/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-forest-deep/80 text-lime border border-lime/40">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>
                  <span className="absolute top-2.5 right-2.5 text-[10px] font-mono px-2 py-0.5 rounded bg-forest-deep/80 text-lime border border-lime/30">
                    SAMPLE
                  </span>
                </div>

                {/* Caption text */}
                <div className="p-4">
                  <span className="text-[10px] font-mono font-semibold text-emerald-600 uppercase">
                    {item.categoryLabel}
                  </span>
                  <h4 className="text-sm font-display font-bold text-forest group-hover:text-emerald transition-colors line-clamp-1 mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-forest/60 mt-1">
                    {item.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Highlights Subsection */}
        <div className="mt-16 pt-12 border-t border-cream-border">
          <div className="flex items-center gap-2 mb-6">
            <Video className="w-5 h-5 text-emerald-600" />
            <h3 className="text-xl sm:text-2xl font-display font-bold text-forest">
              Video Spotlights
            </h3>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-leaf ml-2">
              SAMPLE EMBEDS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sampleVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="bg-white rounded-3xl p-4 sm:p-5 border border-cream-border shadow-soft-organic flex flex-col sm:flex-row gap-5 items-center group cursor-pointer hover:border-emerald-300 transition-all"
              >
                {/* Thumbnail */}
                <div className="relative w-full sm:w-48 aspect-video sm:aspect-[4/3] rounded-2xl bg-forest-surface overflow-hidden flex-shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-forest-deep/40 flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-lime text-forest-deep flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/70 text-white">
                    {video.duration}
                  </span>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase">
                    {video.category} · SAMPLE
                  </span>
                  <h4 className="text-base font-display font-bold text-forest group-hover:text-emerald transition-colors mt-1">
                    {video.title}
                  </h4>
                  <p className="text-xs text-forest/70 mt-1.5 leading-relaxed">
                    {video.description}
                  </p>
                  <span className="inline-block mt-3 text-xs font-mono text-emerald-600 group-hover:underline">
                    Watch demo reel →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal with Keyboard & Touch navigation */}
      <AnimatePresence>
        {currentLightboxItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/95 backdrop-blur-md p-4 sm:p-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-forest-surface text-gray-300 hover:text-white border border-forest-border"
              aria-label="Close Lightbox"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
              }}
              className="absolute left-4 sm:left-8 z-20 p-3 rounded-full bg-forest-surface/80 hover:bg-forest-surface text-white border border-forest-border"
              aria-label="Previous Image"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
              }}
              className="absolute right-4 sm:right-8 z-20 p-3 rounded-full bg-forest-surface/80 hover:bg-forest-surface text-white border border-forest-border"
              aria-label="Next Image"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <div className="max-w-4xl w-full flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border border-lime/30 shadow-2xl max-h-[70vh] bg-forest-surface">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  className="max-h-[70vh] w-auto object-contain mx-auto"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center text-white">
                <span className="text-xs font-mono text-lime font-bold uppercase">
                  {currentLightboxItem.categoryLabel} · SAMPLE IMAGE
                </span>
                <h3 className="text-xl font-display font-bold mt-1">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-xs text-gray-300 mt-1">
                  {currentLightboxItem.description}
                </p>
                <span className="text-[11px] font-mono text-gray-400 mt-2 block">
                  Image {lightboxIndex + 1} of {filteredItems.length} (Use keyboard ← / → or swipe)
                </span>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Embed Modal */}
      <Modal
        isOpen={Boolean(activeVideo)}
        onClose={() => setActiveVideo(null)}
        title={activeVideo ? activeVideo.title : "Sample Video"}
        maxWidth="max-w-3xl"
      >
        {activeVideo && (
          <div className="space-y-4">
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-forest-deep">
              <iframe
                src={activeVideo.videoUrl}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-xs text-forest/75">
              {activeVideo.description}
            </p>
            <div className="p-3 rounded-xl bg-cream border border-cream-border text-[11px] font-mono text-emerald-800">
              * Note: Video placeholder embed for sample demonstration purposes.
            </div>
          </div>
        )}
      </Modal>

    </section>
  );
}
