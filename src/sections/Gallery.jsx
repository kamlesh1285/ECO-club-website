import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Play, ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';
import { galleryItems, sampleVideos } from '../data/gallery';
import SectionHeading from '../components/SectionHeading';
import Modal from '../components/Modal';
import SampleBadge from '../components/SampleBadge';

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
      setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (distance < -minSwipeDistance) {
      setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-cream-warm/40 relative">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading - 1 title + at most 2 lines subtitle */}
        <SectionHeading
          badge="CAMPUS ARCHIVE"
          title="Eco Drives & Activity"
          highlight="Gallery"
          description="A visual journal of student environmental drives, workshops, clean-ups, and campus awareness campaigns."
          sampleDisclaimer="Sample images of student drives and workshops"
        />

        {/* Filter Chips */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
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

        {/* Gallery Grid - 4 columns on desktop, 3 on tablet, 2 on mobile (Point 14) */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightboxIndex(idx)}
                className="bg-white rounded-2xl overflow-hidden border border-cream-border shadow-soft-organic group cursor-pointer hover:shadow-lifted hover:border-emerald-300 transition-all flex flex-col justify-between"
              >
                {/* Image Container with onError fallback (Point 19) */}
                <div className="relative aspect-[4/3] bg-forest-surface overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/logo-icon.png';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-forest-deep/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2.5 rounded-full bg-forest-deep/80 text-lime border border-lime/40">
                      <Eye className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="absolute top-2 right-2">
                    <SampleBadge text="Sample" dark={true} />
                  </div>
                </div>

                {/* Readable Captions (Point 11) */}
                <div className="p-3 sm:p-4">
                  <span className="text-xs font-mono font-semibold text-emerald-600 uppercase">
                    {item.categoryLabel}
                  </span>
                  <h4 className="text-xs sm:text-sm font-display font-bold text-forest group-hover:text-emerald transition-colors line-clamp-1 mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-forest/65 mt-0.5">
                    {item.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Highlights */}
        <div className="mt-14 pt-10 border-t border-cream-border">
          <div className="flex items-center gap-2 mb-5">
            <Video className="w-5 h-5 text-emerald-600" />
            <h3 className="heading-card font-display font-bold text-forest">
              Video Spotlights
            </h3>
            <SampleBadge text="Sample" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {sampleVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="bg-white rounded-3xl p-4 sm:p-5 border border-cream-border shadow-soft-organic flex flex-col sm:flex-row gap-4 items-center group cursor-pointer hover:border-emerald-300 transition-all"
              >
                <div className="relative w-full sm:w-44 aspect-video sm:aspect-[4/3] rounded-2xl bg-forest-surface overflow-hidden flex-shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = '/assets/logo-icon.png';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-forest-deep/40 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-lime text-forest-deep flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 text-xs font-mono px-1.5 py-0.5 rounded bg-black/70 text-white">
                    {video.duration}
                  </span>
                </div>

                <div className="flex-1 w-full text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-emerald-600 uppercase">
                      {video.category}
                    </span>
                    <SampleBadge text="Sample" />
                  </div>
                  <h4 className="text-sm sm:text-base font-display font-bold text-forest group-hover:text-emerald transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-xs text-forest/70 mt-1 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {currentLightboxItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-forest-deep/95 backdrop-blur-md p-4 sm:p-8"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-forest-surface text-gray-300 hover:text-white border border-forest-border focus:outline-none"
              aria-label="Close Lightbox"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
              }}
              className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-forest-surface/80 hover:bg-forest-surface text-white border border-forest-border focus:outline-none"
              aria-label="Previous Image"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
              }}
              className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-forest-surface/80 hover:bg-forest-surface text-white border border-forest-border focus:outline-none"
              aria-label="Next Image"
              style={{ minHeight: '44px', minWidth: '44px' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border border-lime/30 shadow-2xl max-h-[70vh] bg-forest-surface">
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/assets/logo-icon.png';
                  }}
                  className="max-h-[70vh] w-auto object-contain mx-auto"
                />
              </div>

              <div className="mt-4 text-center text-white">
                <span className="text-xs font-mono text-lime font-bold uppercase">
                  {currentLightboxItem.categoryLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold mt-1">
                  {currentLightboxItem.title}
                </h3>
                <p className="text-xs text-gray-300 mt-1 max-w-[70ch]">
                  {currentLightboxItem.description}
                </p>
                <span className="text-xs font-mono text-gray-400 mt-2 block">
                  Image {lightboxIndex + 1} of {filteredItems.length} (Use keyboard ← / → or swipe)
                </span>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
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
            <p className="text-xs sm:text-sm text-forest/75 leading-relaxed">
              {activeVideo.description}
            </p>
          </div>
        )}
      </Modal>

    </section>
  );
}
