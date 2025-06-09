
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set SEO metadata
    document.title = 'Taco Tango & New Range Cafe - Where Youth Meets Flavor | Student Hangout Spot';
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Taco Tango & New Range Cafe is the perfect hangout spot for college students and young professionals. Enjoy delicious tacos, great coffee, study spaces, and vibrant events in a trendy atmosphere.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Taco Tango & New Range Cafe is the perfect hangout spot for college students and young professionals. Enjoy delicious tacos, great coffee, study spaces, and vibrant events in a trendy atmosphere.';
      document.head.appendChild(meta);
    }

    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'taco restaurant, student cafe, college hangout, tacos, coffee, study space, events, student discount, campus food, trendy cafe');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'taco restaurant, student cafe, college hangout, tacos, coffee, study space, events, student discount, campus food, trendy cafe';
      document.head.appendChild(meta);
    }

    // Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: 'Taco Tango & New Range Cafe - Where Youth Meets Flavor' },
      { property: 'og:description', content: 'The perfect hangout spot for college students and young professionals. Delicious tacos, great coffee, and vibrant atmosphere.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Taco Tango & New Range Cafe' },
      { name: 'twitter:description', content: 'Where youth meets flavor in perfect harmony' }
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        if (tag.property) {
          meta.setAttribute('property', tag.property);
        } else {
          meta.setAttribute('name', tag.name);
        }
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Taco Tango & New Range Cafe",
      "description": "A trendy space designed for college students and young professionals offering delicious tacos, coffee, and vibrant events.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 University Avenue",
        "addressLocality": "Campus City",
        "postalCode": "500032",
        "addressCountry": "IN"
      },
      "telephone": "+91 98765 43210",
      "openingHours": [
        "Mo-Th 09:00-22:00",
        "Fr-Sa 09:00-23:00",
        "Su 10:00-22:00"
      ],
      "servesCuisine": ["Mexican", "Cafe", "Coffee"],
      "priceRange": "₹₹",
      "image": "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "url": window.location.origin,
      "hasMenu": true,
      "acceptsReservations": true
    };

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  return (
    <motion.div 
      className="min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Header />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Events />
        <About />
        <Contact />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
