
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Gift, Coffee, Heart, CheckCircle } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubscribed(true);
    setEmail('');

    // Reset after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000);
  };

  const benefits = [
    {
      icon: Coffee,
      title: "Exclusive Menu Updates",
      description: "Be the first to know about new dishes and seasonal specials"
    },
    {
      icon: Gift,
      title: "Special Offers",
      description: "Get exclusive discounts and birthday treats just for subscribers"
    },
    {
      icon: Heart,
      title: "Event Invitations",
      description: "Priority access to our workshops, live music, and special events"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-cafe-beige/20 to-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl animate-float">📧</div>
        <div className="absolute top-32 right-20 text-4xl animate-float" style={{ animationDelay: '1s' }}>🎁</div>
        <div className="absolute bottom-32 left-32 text-5xl animate-float" style={{ animationDelay: '2s' }}>☕</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-float" style={{ animationDelay: '3s' }}>💌</div>
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
            <Mail className="w-10 h-10 text-primary" />
          </motion.div>
          
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
            Join Our Coffee Family
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Subscribe to our newsletter and never miss out on the latest updates, exclusive offers, and special events.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Newsletter Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-2xl overflow-hidden mb-12">
              <CardContent className="p-12">
                {!isSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-6xl mb-6"
                    >
                      💌
                    </motion.div>
                    
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                      Get Your Daily Dose of Happiness
                    </h3>
                    <p className="text-lg text-secondary mb-8 max-w-2xl mx-auto">
                      Join over 5,000 coffee lovers who get weekly updates about new menu items, 
                      exclusive discounts, and upcoming events straight to their inbox.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                      <div className="flex-1">
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-14 text-lg px-6 border-2 border-primary/20 focus:border-primary rounded-full"
                          required
                        />
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          type="submit"
                          disabled={isLoading}
                          className="h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white font-bold text-lg rounded-full shadow-xl"
                        >
                          {isLoading ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              <Mail className="mr-2" size={20} />
                              Subscribe
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>

                    <p className="text-sm text-gray-500 mt-4">
                      We respect your privacy. Unsubscribe anytime with just one click.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
                    >
                      <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    </motion.div>
                    
                    <h3 className="font-display text-3xl font-bold text-primary mb-4">
                      Welcome to the Family! 🎉
                    </h3>
                    <p className="text-lg text-secondary">
                      Thank you for subscribing! Check your email for a special welcome gift.
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/20 mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <benefit.icon className="w-8 h-8 text-primary" />
                </motion.div>
                
                <h4 className="font-bold text-xl text-primary mb-3">
                  {benefit.title}
                </h4>
                <p className="text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Media Follow */}
          <motion.div 
            className="mt-16 text-center p-8 bg-gradient-to-r from-cafe-beige/30 to-cafe-white/50 rounded-3xl border border-white/20 shadow-xl backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-2xl font-bold text-primary mb-4">
              Follow Us for Daily Inspiration
            </h3>
            <p className="text-secondary mb-6">
              Get your daily dose of coffee culture and foodie content on social media
            </p>
            
            <div className="flex justify-center gap-4">
              {[
                { name: 'Instagram', handle: '@tacotango_cafe', color: 'from-pink-500 to-purple-500' },
                { name: 'Facebook', handle: '/tacotangocafe', color: 'from-blue-500 to-blue-600' },
                { name: 'Twitter', handle: '@tacotango_cafe', color: 'from-blue-400 to-blue-500' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`px-6 py-3 bg-gradient-to-r ${social.color} text-white rounded-full font-medium shadow-lg`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {social.handle}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
