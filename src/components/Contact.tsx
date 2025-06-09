
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const [isBooking, setIsBooking] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you! We\'ll get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-cafe-beige/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Your table is waiting. Let's make it official!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <MapPin className="mr-3" size={24} />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  123 University Avenue<br />
                  Student Quarter, Campus City<br />
                  PIN: 500032
                </p>
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Interactive Map Coming Soon</span>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Phone className="mr-3" size={20} />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+919876543210" className="text-lg font-medium text-primary hover:text-secondary transition-colors">
                    +91 98765 43210
                  </a>
                  <p className="text-sm text-gray-600 mt-2">Available 9 AM - 11 PM</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Clock className="mr-3" size={20} />
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Mon - Thu</span>
                      <span className="font-medium">9 AM - 10 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fri - Sat</span>
                      <span className="font-medium">9 AM - 11 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">10 AM - 10 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-green-500 text-white border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Quick Chat on WhatsApp</h3>
                  <p className="mb-4 opacity-90">Get instant answers to your questions</p>
                  <Button className="bg-white text-green-500 hover:bg-green-50 font-medium">
                    Chat with Us
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking/Contact Form */}
          <Card className="bg-white border-0 shadow-lg">
            <CardHeader>
              <div className="flex space-x-4 mb-4">
                <button
                  onClick={() => setIsBooking(true)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    isBooking
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Calendar className="inline mr-2" size={16} />
                  Book Table
                </button>
                <button
                  onClick={() => setIsBooking(false)}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    !isBooking
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Send Message
                </button>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

                {isBooking && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />
                      <Input
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Input
                      name="guests"
                      type="number"
                      placeholder="Number of Guests"
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={handleInputChange}
                      required
                    />
                  </>
                )}

                <Textarea
                  name="message"
                  placeholder={isBooking ? "Special requests or dietary requirements..." : "Your message..."}
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                />

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  {isBooking ? 'Reserve Table' : 'Send Message'}
                </Button>
              </form>

              {isBooking && (
                <div className="mt-4 p-4 bg-cafe-beige/50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Table reservations are confirmed within 30 minutes. 
                    For immediate bookings, please call us directly.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
