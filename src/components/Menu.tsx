
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { Star, Clock, Flame } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  tags: string[];
  is_available: boolean;
  menu_categories: {
    name: string;
    slug: string;
  };
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      // Fetch categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('menu_categories')
        .select('*')
        .order('name');

      if (categoriesError) throw categoriesError;

      // Fetch menu items with categories
      const { data: menuData, error: menuError } = await supabase
        .from('menu_items')
        .select(`
          *,
          menu_categories (
            name,
            slug
          )
        `)
        .eq('is_available', true)
        .order('created_at', { ascending: false });

      if (menuError) throw menuError;

      setCategories(categoriesData || []);
      setMenuItems(menuData || []);
    } catch (error) {
      console.error('Error fetching menu data:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.menu_categories?.slug === activeCategory);

  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'bestseller':
      case 'popular':
        return 'bg-gradient-to-r from-orange-400 to-orange-600 text-white';
      case 'vegan':
      case 'healthy':
        return 'bg-gradient-to-r from-green-400 to-green-600 text-white';
      case 'spicy':
        return 'bg-gradient-to-r from-red-400 to-red-600 text-white';
      case 'student special':
      case 'value deal':
        return 'bg-gradient-to-r from-blue-400 to-blue-600 text-white';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-600 text-white';
    }
  };

  const getTagIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'bestseller':
      case 'popular':
        return <Star size={12} />;
      case 'spicy':
        return <Flame size={12} />;
      default:
        return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  if (loading) {
    return (
      <section id="menu" className="py-20 bg-gradient-to-br from-cafe-beige/20 to-cafe-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.div 
              className="animate-spin rounded-full h-12 w-12 border-b-4 border-primary mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-lg text-secondary">Loading our delicious menu...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-cafe-beige/20 to-cafe-white/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🌮</div>
        <div className="absolute top-32 right-20 text-4xl">☕</div>
        <div className="absolute bottom-20 left-20 text-5xl">🥑</div>
        <div className="absolute bottom-10 right-10 text-3xl">🌶️</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Crafted with love for the young and hungry souls. Every dish tells a story of flavor and passion.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setActiveCategory('all')}
            className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-xl scale-105'
                : 'bg-white text-primary hover:bg-primary/10 hover:scale-105 shadow-lg'
            }`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
          >
            All Items
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.slug)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.slug
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-xl scale-105'
                  : 'bg-white text-primary hover:bg-primary/10 hover:scale-105 shadow-lg'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5, rotateY: 5 }}
              className="perspective-1000"
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 bg-white border-0 overflow-hidden relative">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full h-52 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4">
                    <motion.span 
                      className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      ₹{item.price}
                    </motion.span>
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Button size="sm" className="bg-white/90 text-primary hover:bg-white">
                      <Clock size={14} className="mr-1" />
                      Order Now
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                    {item.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((tag) => (
                      <Badge 
                        key={tag} 
                        className={`${getTagColor(tag)} border-0 shadow-md flex items-center gap-1`}
                      >
                        {getTagIcon(tag)}
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 text-lg font-semibold shadow-xl">
              Download Full Menu PDF
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
