
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';

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
        return 'bg-orange-100 text-orange-800';
      case 'vegan':
      case 'healthy':
        return 'bg-green-100 text-green-800';
      case 'spicy':
        return 'bg-red-100 text-red-800';
      case 'student special':
      case 'value deal':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <section id="menu" className="py-20 bg-cafe-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Loading menu...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20 bg-cafe-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Crafted with love for the young and hungry souls
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.slug)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.slug
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-white text-primary hover:bg-primary/10 hover:scale-105'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">
                    ₹{item.price}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {item.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags?.map((tag) => (
                    <Badge 
                      key={tag} 
                      className={`${getTagColor(tag)} border-0`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-primary hover:text-secondary font-medium text-lg transition-colors"
          >
            Download Full Menu PDF →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
