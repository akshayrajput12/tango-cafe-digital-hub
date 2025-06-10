
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, Star, Clock, MapPin, Coffee, Heart } from 'lucide-react';

const TypedHero = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'Serving Love... ☕',
          'Brewing Happiness... 🍰',
          'Creating Memories... 🌮',
          'Your Daily Dose of Joy... ✨'
        ],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 2000,
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Parallax */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
        
        {/* Animated Overlay Patterns */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
            backgroundSize: '100px 100px'
          }}
        />
      </motion.div>

      {/* Floating Coffee Elements */}
      <motion.div
        className="absolute top-20 right-16 text-white/30 text-7xl"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ☕
      </motion.div>

      <motion.div
        className="absolute top-32 left-20 text-white/25 text-5xl"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        🌮
      </motion.div>

      <motion.div
        className="absolute bottom-40 right-32 text-white/20 text-6xl"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 8, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        🍰
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 text-center text-white max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Brand Logo/Name */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-8"
        >
          <motion.div 
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-cafe-beige/20 to-white/10 backdrop-blur-lg border border-white/20 mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Coffee className="w-12 h-12 text-cafe-beige" />
          </motion.div>
          
          <h1 className="font-display text-7xl md:text-9xl font-bold mb-4">
            <span className="block bg-gradient-to-r from-white via-cafe-beige to-white bg-clip-text text-transparent drop-shadow-2xl">
              Taco Tango
            </span>
            <span className="block text-4xl md:text-6xl font-normal text-cafe-beige mt-4 drop-shadow-lg">
              & New Range Cafe
            </span>
          </h1>
        </motion.div>

        {/* Typed Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-light text-cafe-beige mb-6 min-h-[3rem] flex items-center justify-center">
            <Heart className="w-8 h-8 mr-4 text-red-400 animate-pulse" />
            <span ref={typedRef}></span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
            A trendy sanctuary where college dreams meet culinary artistry. 
            Every sip tells a story, every bite creates a memory.
          </p>
        </motion.div>

        {/* Animated Feature Highlights */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          {[
            { icon: Star, text: "4.8★ Rating", color: "text-yellow-400", bg: "from-yellow-400/20 to-yellow-600/20" },
            { icon: Clock, text: "Fast Service", color: "text-green-400", bg: "from-green-400/20 to-green-600/20" },
            { icon: MapPin, text: "Prime Location", color: "text-blue-400", bg: "from-blue-400/20 to-blue-600/20" },
            { icon: Coffee, text: "Premium Coffee", color: "text-amber-400", bg: "from-amber-400/20 to-amber-600/20" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center space-x-3 bg-gradient-to-r ${item.bg} backdrop-blur-md px-6 py-4 rounded-full border border-white/20 shadow-2xl`}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 + index * 0.1 }}
            >
              <item.icon className={`${item.color} drop-shadow-lg`} size={24} />
              <span className="text-white font-medium text-lg">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToMenu}
              className="bg-gradient-to-r from-primary via-cafe-taupe to-secondary hover:from-secondary hover:to-primary text-primary-foreground px-12 py-6 text-xl font-bold shadow-2xl border-2 border-white/20 backdrop-blur-sm"
            >
              <Coffee className="mr-3" size={24} />
              Explore Our Menu
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="border-3 border-white/50 bg-white/10 text-white hover:bg-white hover:text-primary px-12 py-6 text-xl font-bold backdrop-blur-md shadow-2xl"
            >
              <Heart className="mr-3" size={24} />
              Book Your Table
            </Button>
          </motion.div>
        </motion.div>

        {/* Status Badge with Enhanced Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.3 }}
        >
          <motion.div 
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-200 border-2 border-green-400/50 backdrop-blur-lg shadow-2xl"
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0.4)",
                "0 0 0 20px rgba(34, 197, 94, 0)",
                "0 0 0 0 rgba(34, 197, 94, 0)"
              ]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity
            }}
          >
            <motion.div 
              className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-4 shadow-lg"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            />
            <span className="text-lg font-semibold">Open Now • Closes at 11 PM</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          animate={{ 
            y: [0, 15, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex flex-col items-center text-white/80"
        >
          <span className="text-sm font-medium mb-2 tracking-wide">Discover More</span>
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
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
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
          <ChevronDown className="w-6 h-6 mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TypedHero;
