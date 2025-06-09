
import { Button } from '@/components/ui/button';
import { ChevronDown, Star, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 text-white/20 text-6xl"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🌮
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-10 text-white/20 text-4xl"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        ☕
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center text-white max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-white to-cafe-beige bg-clip-text text-transparent">
              Taco Tango
            </span>
            <span className="block text-3xl md:text-5xl font-normal text-cafe-beige mt-2">
              & New Range Cafe
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          className="text-2xl md:text-3xl mb-8 text-cafe-beige font-light"
          variants={itemVariants}
        >
          Where youth meets flavor in perfect harmony
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          A trendy space designed for college students and young professionals. 
          Discover our unique menu, vibrant events, and cozy ambiance that makes every visit memorable.
        </motion.p>

        {/* Feature Highlights */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-10"
          variants={itemVariants}
        >
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Star className="text-yellow-400" size={20} />
            <span className="text-sm font-medium">4.8 Rating</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <Clock className="text-green-400" size={20} />
            <span className="text-sm font-medium">Fast Service</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
            <MapPin className="text-blue-400" size={20} />
            <span className="text-sm font-medium">Prime Location</span>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToMenu}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 text-lg font-semibold shadow-2xl"
            >
              Explore Menu
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToContact}
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              Book a Table
            </Button>
          </motion.div>
        </motion.div>

        {/* Status Badge */}
        <motion.div 
          className="mt-8"
          variants={itemVariants}
        >
          <motion.span 
            className="inline-flex items-center px-6 py-3 rounded-full bg-green-500/20 text-green-200 border border-green-500/30 backdrop-blur-sm"
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(34, 197, 94, 0.3)",
                "0 0 0 10px rgba(34, 197, 94, 0)",
                "0 0 0 0 rgba(34, 197, 94, 0)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity
            }}
          >
            <motion.span 
              className="w-3 h-3 bg-green-400 rounded-full mr-3"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ 
                duration: 2,
                repeat: Infinity
              }}
            ></motion.span>
            Open Now • Closes at 11 PM
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <ChevronDown className="text-white w-8 h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;
