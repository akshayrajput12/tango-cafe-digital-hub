
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  event_time: string;
  image_url: string;
  price: string;
  recurring: string;
  status: string;
}

interface Offer {
  id: string;
  title: string;
  description: string;
  valid_until: string;
  code: string;
  status: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEventsAndOffers();
  }, []);

  const fetchEventsAndOffers = async () => {
    try {
      // Fetch events (only active ones, ordered by date in reverse)
      const { data: eventsData, error: eventsError } = await supabase
        .from('events')
        .select('*')
        .eq('status', 'active')
        .order('event_date', { ascending: false });

      if (eventsError) throw eventsError;

      // Fetch offers (only active ones)
      const { data: offersData, error: offersError } = await supabase
        .from('offers')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      if (offersError) throw offersError;

      setEvents(eventsData || []);
      setOffers(offersData || []);
    } catch (error) {
      console.error('Error fetching events and offers:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (timeString: string) => {
    if (timeString === '00:00:00') return 'All Day';
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  if (loading) {
    return (
      <section id="events" className="py-20 bg-cafe-beige/30">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Loading events and offers...</p>
          </div>
        </div>
      </section>
    );
  }

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
          {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card 
                  key={event.id} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image_url || 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {event.recurring && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                          {event.recurring}
                        </span>
                      </div>
                    )}
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
                          {formatDate(event.event_date)}
                        </span>
                      </div>
                      <div className="flex items-center text-secondary">
                        <Clock size={16} className="mr-2" />
                        <span className="text-sm">{formatTime(event.event_time)}</span>
                      </div>
                      {event.price && (
                        <div className="flex items-center text-secondary">
                          <MapPin size={16} className="mr-2" />
                          <span className="text-sm">{event.price}</span>
                        </div>
                      )}
                    </div>
                    
                    {event.description && (
                      <p className="text-gray-600 mb-4">{event.description}</p>
                    )}
                    
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Reserve Spot
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="text-lg">No upcoming events at the moment.</p>
              <p>Check back soon for exciting new events!</p>
            </div>
          )}
        </div>

        {/* Current Offers */}
        <div>
          <h3 className="font-display text-3xl font-bold text-primary mb-8 text-center">
            Current Offers
          </h3>
          {offers.length > 0 ? (
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
                        <span className="font-medium">{offer.valid_until}</span>
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
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="text-lg">No active offers at the moment.</p>
              <p>Check back soon for amazing deals!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
