
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';
import { X, ZoomIn } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
  category: string;
  alt_text: string;
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filters = [
    { id: 'all', name: 'All', emoji: '🌟' },
    { id: 'ambience', name: 'Ambience', emoji: '✨' },
    { id: 'food', name: 'Food', emoji: '🌮' },
    { id: 'events', name: 'Events', emoji: '🎉' },
    { id: 'customers', name: 'Happy Faces', emoji: '😊' },
  ];

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_items')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setGalleryImages(data || []);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  if (loading) {
    return (
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.div 
              className="animate-spin rounded-full h-12 w-12 border-b-4 border-primary mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-lg text-secondary">Loading our beautiful gallery...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl">📸</div>
        <div className="absolute top-10 right-20 text-4xl">🎨</div>
        <div className="absolute bottom-32 left-32 text-5xl">🖼️</div>
        <div className="absolute bottom-10 right-10 text-3xl">✨</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
            Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Moments that make Taco Tango special. Every picture tells a story of joy, flavor, and community.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-xl scale-105'
                  : 'bg-cafe-beige text-primary hover:bg-primary/10 hover:scale-105 shadow-lg'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <span>{filter.emoji}</span>
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelectedImage(image)}
                layout
              >
                <motion.img
                  src={image.image_url}
                  alt={image.alt_text}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-white text-center"
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm font-medium">View Image</span>
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm truncate">{image.title}</h3>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl max-h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors z-10"
                >
                  <X size={24} />
                </button>
                <img
                  src={selectedImage.image_url}
                  alt={selectedImage.alt_text}
                  className="w-full h-full object-contain rounded-lg"
                />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-sm opacity-80">{selectedImage.alt_text}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Instagram CTA */}
        <motion.div 
          className="text-center mt-16 p-8 bg-gradient-to-r from-cafe-beige/50 to-cafe-white/50 rounded-3xl shadow-xl backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ 
              y: [0, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-4xl mb-4 block">📱</span>
          </motion.div>
          <h3 className="font-display text-3xl font-bold text-primary mb-4">
            Follow us on Instagram
          </h3>
          <p className="text-secondary mb-6 text-lg">
            Tag us @tacotango_cafe for a chance to be featured in our gallery!
          </p>
          <motion.a 
            href="#" 
            className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            @tacotango_cafe
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
