
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from '@/components/Header';
import TypedHero from '@/components/TypedHero';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import About from '@/components/About';
import TestimonialsSection from '@/components/TestimonialsSection';
import Contact from '@/components/Contact';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

    // Enhanced SEO metadata
    document.title = 'Taco Tango & New Range Cafe - Where Youth Meets Flavor | Premium Student Hangout Spot';
    
    // Comprehensive meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Taco Tango & New Range Cafe - The ultimate hangout destination for college students and young professionals. Experience our artisanal tacos, premium coffee, vibrant events, and Instagram-worthy ambiance. Student discounts available!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Taco Tango & New Range Cafe - The ultimate hangout destination for college students and young professionals. Experience our artisanal tacos, premium coffee, vibrant events, and Instagram-worthy ambiance. Student discounts available!';
      document.head.appendChild(meta);
    }

    // Enhanced keywords for better SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'taco restaurant, artisanal coffee, student cafe, college hangout, young professionals, Instagram cafe, premium tacos, study space, live events, student discount, campus food, trendy cafe, food photography, cafe culture, Mexican fusion, specialty coffee, workspace cafe, millennial dining, gen-z hangout, social dining');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'taco restaurant, artisanal coffee, student cafe, college hangout, young professionals, Instagram cafe, premium tacos, study space, live events, student discount, campus food, trendy cafe, food photography, cafe culture, Mexican fusion, specialty coffee, workspace cafe, millennial dining, gen-z hangout, social dining';
      document.head.appendChild(meta);
    }

    // Enhanced Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: 'Taco Tango & New Range Cafe - Where Youth Meets Flavor' },
      { property: 'og:description', content: 'The ultimate hangout destination for college students and young professionals. Premium tacos, artisanal coffee, and vibrant atmosphere.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'Taco Tango & New Range Cafe' },
      { property: 'og:locale', content: 'en_US' },
      
      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@tacotango_cafe' },
      { name: 'twitter:creator', content: '@tacotango_cafe' },
      { name: 'twitter:title', content: 'Taco Tango & New Range Cafe - Where Youth Meets Flavor' },
      { name: 'twitter:description', content: 'Ultimate hangout spot for students & young professionals. Premium tacos, artisanal coffee, vibrant events.' },
      { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
      { name: 'twitter:image:alt', content: 'Taco Tango Cafe - Modern, vibrant cafe interior perfect for students and young professionals' }
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

    // Enhanced structured data for local business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Taco Tango & New Range Cafe",
      "description": "A trendy sanctuary where college dreams meet culinary artistry. Premium tacos, artisanal coffee, and vibrant events for students and young professionals.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 University Avenue",
        "addressLocality": "Campus City",
        "postalCode": "500032",
        "addressCountry": "IN"
      },
      "telephone": "+91 98765 43210",
      "email": "hello@tacotango.cafe",
      "openingHours": [
        "Mo-Th 09:00-22:00",
        "Fr-Sa 09:00-23:00",
        "Su 10:00-22:00"
      ],
      "servesCuisine": ["Mexican", "Fusion", "Coffee", "Cafe"],
      "priceRange": "₹₹",
      "image": [
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      ],
      "url": window.location.origin,
      "hasMenu": true,
      "acceptsReservations": true,
      "paymentAccepted": ["Cash", "Credit Card", "UPI", "Digital Wallet"],
      "smokingAllowed": false,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      },
      "amenityFeature": [
        {
          "@type": "LocationFeatureSpecification",
          "name": "Free WiFi",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification", 
          "name": "Student Discount",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Study Space",
          "value": true
        },
        {
          "@type": "LocationFeatureSpecification",
          "name": "Instagram Worthy",
          "value": true
        }
      ],
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": window.location.origin + "/#contact"
        },
        "result": {
          "@type": "Reservation",
          "name": "Table Reservation"
        }
      }
    };

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(structuredData, null, 2);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData, null, 2);
      document.head.appendChild(script);
    }

    // Additional SEO meta tags
    const additionalMetas = [
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'author', content: 'Taco Tango Cafe' },
      { name: 'publisher', content: 'Taco Tango Cafe' },
      { name: 'theme-color', content: '#362417' },
      { name: 'msapplication-TileColor', content: '#362417' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'format-detection', content: 'telephone=yes' }
    ];

    additionalMetas.forEach(metaData => {
      const existingMeta = document.querySelector(`meta[name="${metaData.name}"]`);
      if (!existingMeta) {
        const meta = document.createElement('meta');
        meta.name = metaData.name;
        meta.content = metaData.content;
        document.head.appendChild(meta);
      }
    });

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
      className="min-h-screen bg-gradient-to-br from-cafe-white to-cafe-beige/30"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Header />
      <main>
        <TypedHero />
        
        <div data-aos="fade-up">
          <Menu />
        </div>
        
        <div data-aos="fade-up" data-aos-delay="100">
          <Gallery />
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200">
          <Events />
        </div>
        
        <div data-aos="fade-up" data-aos-delay="300">
          <TestimonialsSection />
        </div>
        
        <div data-aos="fade-up" data-aos-delay="400">
          <About />
        </div>
        
        <div data-aos="fade-up" data-aos-delay="500">
          <Contact />
        </div>
        
        <div data-aos="fade-up" data-aos-delay="600">
          <NewsletterSection />
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default Index;
