
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'combos', name: 'Combos' },
    { id: 'desserts', name: 'Desserts' },
  ];

  const menuItems = [
    {
      id: 1,
      name: 'Tango Cold Brew',
      category: 'beverages',
      price: '₹180',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Rich, smooth cold brew with a hint of vanilla',
      tags: ['Bestseller', 'Caffeinated']
    },
    {
      id: 2,
      name: 'Spicy Chicken Taco',
      category: 'snacks',
      price: '₹220',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Grilled chicken with jalapeños and cheese',
      tags: ['Spicy', 'Popular']
    },
    {
      id: 3,
      name: 'Study Buddy Combo',
      category: 'combos',
      price: '₹350',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Coffee + sandwich + cookie - perfect for long study sessions',
      tags: ['Student Special', 'Value Deal']
    },
    {
      id: 4,
      name: 'Avocado Toast',
      category: 'snacks',
      price: '₹240',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Multigrain bread topped with fresh avocado and herbs',
      tags: ['Vegan', 'Healthy']
    },
    {
      id: 5,
      name: 'Chocolate Lava Cake',
      category: 'desserts',
      price: '₹180',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Warm chocolate cake with molten center',
      tags: ['Sweet', 'Popular']
    },
    {
      id: 6,
      name: 'Mango Smoothie',
      category: 'beverages',
      price: '₹160',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Fresh mango blended with yogurt and honey',
      tags: ['Fresh', 'Seasonal']
    }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

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
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
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
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">
                    {item.price}
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
                  {item.tags.map((tag) => (
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
