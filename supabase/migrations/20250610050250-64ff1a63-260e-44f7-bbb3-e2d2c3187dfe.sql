
-- Create events table
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  event_time TIME NOT NULL,
  image_url TEXT,
  price TEXT,
  recurring TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create offers table
CREATE TABLE public.offers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  valid_until TEXT NOT NULL,
  code TEXT NOT NULL,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.offers ENABLE ROW LEVEL SECURITY;

-- Create policies for events (public read, admin write)
CREATE POLICY "Anyone can view active events" 
  ON public.events 
  FOR SELECT 
  USING (status = 'active');

CREATE POLICY "Admins can manage events" 
  ON public.events 
  FOR ALL 
  USING (public.is_admin());

-- Create policies for offers (public read, admin write)
CREATE POLICY "Anyone can view active offers" 
  ON public.offers 
  FOR SELECT 
  USING (status = 'active');

CREATE POLICY "Admins can manage offers" 
  ON public.offers 
  FOR ALL 
  USING (public.is_admin());

-- Insert some sample events
INSERT INTO public.events (title, description, event_date, event_time, image_url, price, recurring) VALUES
('Open Mic Night', 'Showcase your talent! Poetry, music, comedy - all welcome.', '2024-06-15', '19:00:00', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'Free Entry', 'Every Friday'),
('Study Group Sunday', 'Dedicated study space with free WiFi and unlimited coffee refills.', '2024-06-16', '14:00:00', 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', '₹199 per person', 'Every Sunday'),
('Taco Tuesday Special', 'Buy 2 Tacos, Get 1 Free! Valid on all taco varieties.', '2024-06-18', '00:00:00', 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 'Special Pricing', 'Every Tuesday');

-- Insert some sample offers
INSERT INTO public.offers (title, description, valid_until, code) VALUES
('Student Discount', '20% off on all items with valid student ID', '2024-12-31', 'STUDENT20'),
('Happy Hours', 'Buy 1 Get 1 Free on all beverages', 'Daily 4-6 PM', 'HAPPY4TO6'),
('Group Booking', '15% off for groups of 6 or more', 'Ongoing', 'GROUP15');
