
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Star, Coffee, Heart, MapPin, Clock } from 'lucide-react';

const TypedHero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'Where Students Unite ✨',
          'Fresh Flavors Daily 🌮',
          'Your Study Sanctuary ☕',
          'Memories in Every Bite 💫'
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 2500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });

      return () => typed.destroy();
    }
  }, []);

  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Main Hero Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
      </motion.div>

      {/* Floating Food Elements */}
      <motion.div
        className="absolute top-16 right-12 text-6xl opacity-20"
        animate={{ 
          y: [0, -25, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🌮
      </motion.div>

      <motion.div
        className="absolute top-40 left-16 text-5xl opacity-25"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        ☕
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 text-4xl opacity-20"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 12, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        🥗
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          
          {/* Brand Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-cafe-beige/30 backdrop-blur-lg border border-white/30 shadow-2xl">
              <Coffee className="w-10 h-10 text-cafe-beige" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-6"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 leading-tight">
              <span className="block bg-gradient-to-r from-white via-cafe-beige to-white bg-clip-text text-transparent">
                Taco Tango
              </span>
              <span className="block text-2xl md:text-4xl font-light text-cafe-beige mt-2 opacity-90">
                & New Range Cafe
              </span>
            </h1>
          </motion.div>

          {/* Typed Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-3xl font-light text-white/90 min-h-[2.5rem] flex items-center justify-center">
              <Heart className="w-6 h-6 mr-3 text-red-400 animate-pulse" />
              <span ref={typedRef}></span>
            </h2>
          </motion.div>

          {/* Quick Stats */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            {[
              { icon: Star, text: "4.8★", color: "text-yellow-400" },
              { icon: Clock, text: "Fast Service", color: "text-green-400" },
              { icon: MapPin, text: "Prime Location", color: "text-blue-400" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <item.icon className={`${item.color}`} size={18} />
                <span className="text-white font-medium text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                onClick={scrollToMenu}
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white px-8 py-4 text-lg font-semibold shadow-xl border border-white/20"
              >
                <Coffee className="mr-2" size={20} />
                Explore Menu
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToContact}
                className="border-2 border-white/60 bg-white/5 text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold backdrop-blur-md"
              >
                Book Table
              </Button>
            </motion.div>
          </motion.div>

          {/* Status Indicator */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2.1 }}
          >
            <motion.div 
              className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/20 text-green-200 border border-green-400/40 backdrop-blur-lg"
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(34, 197, 94, 0.3)",
                  "0 0 0 15px rgba(34, 197, 94, 0)",
                  "0 0 0 0 rgba(34, 197, 94, 0)"
                ]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity
              }}
            >
              <motion.div 
                className="w-3 h-3 bg-green-400 rounded-full mr-3"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity
                }}
              />
              <span className="font-medium">Open Now • Until 11 PM</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center text-white/70 cursor-pointer"
          onClick={scrollToMenu}
        >
          <span className="text-xs font-medium mb-2 tracking-wider">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-2 bg-white/60 rounded-full mt-2"
            />
          </div>
          <ChevronDown className="w-5 h-5 mt-1" />
        </motion.div>
      </motion.div>

      {/* Background Decoration */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          backgroundSize: '200px 200px'
        }}
      />
    </section>
  );
};

export default TypedHero;
