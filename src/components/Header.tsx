
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.header 
      className="bg-primary text-primary-foreground sticky top-0 z-50 backdrop-blur-md bg-primary/95"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-2xl font-bold font-display"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Taco Tango
        </motion.h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {[
            { id: 'home', name: 'Home' },
            { id: 'about', name: 'About' },
            { id: 'menu', name: 'Menu' },
            { id: 'gallery', name: 'Gallery' },
            { id: 'events', name: 'Events' },
            { id: 'contact', name: 'Contact' }
          ].map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative hover:text-accent transition-colors font-medium"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-primary-foreground text-primary p-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-2">
            {[
              { id: 'home', name: 'Home' },
              { id: 'about', name: 'About' },
              { id: 'menu', name: 'Menu' },
              { id: 'gallery', name: 'Gallery' },
              { id: 'events', name: 'Events' },
              { id: 'contact', name: 'Contact' }
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left hover:text-accent transition-colors py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
