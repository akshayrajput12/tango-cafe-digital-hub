
import { useState } from 'react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'ambience', name: 'Ambience' },
    { id: 'food', name: 'Food' },
    { id: 'events', name: 'Events' },
    { id: 'customers', name: 'Happy Faces' },
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'ambience',
      alt: 'Cozy cafe interior with warm lighting'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'food',
      alt: 'Delicious taco platter'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'ambience',
      alt: 'Outdoor seating area'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'events',
      alt: 'Live music event at the cafe'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'customers',
      alt: 'Happy customers enjoying their meal'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'food',
      alt: 'Fresh coffee and pastries'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'ambience',
      alt: 'Study corner with comfortable seating'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'events',
      alt: 'Open mic night performance'
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Gallery
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Moments that make Taco Tango special
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-cafe-beige text-primary hover:bg-primary/10'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-medium bg-primary/80 px-4 py-2 rounded-full">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12 p-8 bg-cafe-beige/30 rounded-2xl">
          <h3 className="font-display text-2xl font-bold text-primary mb-4">
            Follow us on Instagram
          </h3>
          <p className="text-secondary mb-6">
            Tag us @tacotango_cafe for a chance to be featured!
          </p>
          <a 
            href="#" 
            className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            @tacotango_cafe
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
