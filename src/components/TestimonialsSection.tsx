
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  date: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "College Student",
      content: "This place is my second home! Perfect for studying with friends and the tacos are absolutely divine. The WiFi is super fast and the ambiance is just what every student needs.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Arjun Patel",
      role: "Young Professional",
      content: "Best coffee in town hands down! I come here every morning before work. The staff knows my order by heart and the breakfast burritos are incredible. Highly recommend!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Sneha Reddy",
      role: "Freelance Designer",
      content: "The aesthetic here is everything! Perfect lighting for my Instagram shots and the food tastes as good as it looks. Their matcha latte is my new obsession.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      date: "3 days ago"
    },
    {
      id: 4,
      name: "Rahul Kumar",
      role: "Startup Founder",
      content: "Had my first client meeting here and it went amazingly! The ambiance is professional yet relaxed. Great for business discussions over amazing food and coffee.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      date: "5 days ago"
    },
    {
      id: 5,
      name: "Ananya Singh",
      role: "Content Creator",
      content: "This cafe understands the Gen-Z vibe perfectly! From the music to the menu, everything resonates with young energy. Plus, their vegan options are fantastic!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      date: "1 week ago"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-cafe-white via-cafe-beige/30 to-cafe-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 text-6xl animate-float">💬</div>
        <div className="absolute top-32 right-20 text-4xl animate-float" style={{ animationDelay: '1s' }}>⭐</div>
        <div className="absolute bottom-32 left-32 text-5xl animate-float" style={{ animationDelay: '2s' }}>❤️</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-float" style={{ animationDelay: '3s' }}>👥</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20 mb-6"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Quote className="w-10 h-10 text-primary" />
          </motion.div>
          
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
            What Our Family Says
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Real stories from our amazing community of coffee lovers, food enthusiasts, and creative souls.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div 
          className="max-w-5xl mx-auto mb-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-2xl overflow-hidden">
                <CardContent className="p-12">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Avatar */}
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gradient-to-br from-primary to-secondary shadow-xl">
                        <img 
                          src={testimonials[currentIndex].avatar} 
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <motion.div
                        className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full p-2"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Quote size={16} />
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Stars */}
                      <div className="flex justify-center md:justify-start gap-1 mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Quote */}
                      <motion.blockquote 
                        className="text-xl md:text-2xl text-gray-700 font-medium mb-6 leading-relaxed italic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        "{testimonials[currentIndex].content}"
                      </motion.blockquote>

                      {/* Author Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h4 className="text-xl font-bold text-primary mb-1">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-secondary text-lg mb-2">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonials[currentIndex].date}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6">
          {/* Previous Button */}
          <motion.button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-primary to-secondary scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </motion.button>
        </div>

        {/* Social Proof Stats */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { number: "2000+", label: "Happy Customers", icon: "😊" },
            { number: "4.8/5", label: "Average Rating", icon: "⭐" },
            { number: "500+", label: "Google Reviews", icon: "📝" },
            { number: "100%", label: "Love Rate", icon: "💝" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
              whileHover={{ y: -5, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-secondary font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
