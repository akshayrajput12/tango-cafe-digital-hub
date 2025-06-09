
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Open Mic Night',
      date: '2024-06-15',
      time: '7:00 PM - 10:00 PM',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Showcase your talent! Poetry, music, comedy - all welcome.',
      price: 'Free Entry',
      recurring: 'Every Friday'
    },
    {
      id: 2,
      title: 'Study Group Sunday',
      date: '2024-06-16',
      time: '2:00 PM - 8:00 PM',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Dedicated study space with free WiFi and unlimited coffee refills.',
      price: '₹199 per person',
      recurring: 'Every Sunday'
    },
    {
      id: 3,
      title: 'Taco Tuesday Special',
      date: '2024-06-18',
      time: 'All Day',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Buy 2 Tacos, Get 1 Free! Valid on all taco varieties.',
      price: 'Special Pricing',
      recurring: 'Every Tuesday'
    }
  ];

  const offers = [
    {
      id: 1,
      title: 'Student Discount',
      description: '20% off on all items with valid student ID',
      validUntil: '2024-12-31',
      code: 'STUDENT20'
    },
    {
      id: 2,
      title: 'Happy Hours',
      description: 'Buy 1 Get 1 Free on all beverages',
      validUntil: 'Daily 4-6 PM',
      code: 'HAPPY4TO6'
    },
    {
      id: 3,
      title: 'Group Booking',
      description: '15% off for groups of 6 or more',
      validUntil: 'Ongoing',
      code: 'GROUP15'
    }
  ];

  return (
    <section id="events" className="py-20 bg-cafe-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Events & Offers
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Where memories are made and stories begin
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <h3 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card 
                key={event.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {event.recurring}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-primary">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-secondary">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center text-secondary">
                      <Clock size={16} className="mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-secondary">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{event.price}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Reserve Spot
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Offers */}
        <div>
          <h3 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            Current Offers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <Card 
                key={offer.id} 
                className="bg-gradient-to-br from-primary to-secondary text-primary-foreground border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold">
                    {offer.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 opacity-90">{offer.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm opacity-75">Valid Until:</span>
                      <span className="font-medium">{offer.validUntil}</span>
                    </div>
                    <div className="bg-white/20 p-3 rounded-lg text-center">
                      <span className="text-sm opacity-75">Use Code:</span>
                      <div className="font-bold text-lg tracking-wider">{offer.code}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
