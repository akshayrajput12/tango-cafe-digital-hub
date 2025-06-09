
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="block">Taco Tango</span>
          <span className="block text-3xl md:text-4xl font-normal text-cafe-beige">
            & New Range Cafe
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-cafe-beige animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Where youth meets flavor in perfect harmony
        </p>
        
        <p className="text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          A trendy space designed for college students and young professionals. 
          Discover our unique menu, vibrant events, and cozy ambiance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            size="lg" 
            onClick={scrollToMenu}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          >
            Explore Menu
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={scrollToContact}
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
          >
            Book a Table
          </Button>
        </div>

        {/* Status Badge */}
        <div className="mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-200 border border-green-500/30">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Open Now • Closes at 11 PM
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;
