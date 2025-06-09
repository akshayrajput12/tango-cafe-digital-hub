
import { useState, useEffect } from 'react';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { User as SupabaseUser } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Taco Tango</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <button onClick={() => scrollToSection('home')} className="hover:text-accent transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-accent transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('menu')} className="hover:text-accent transition-colors">
            Menu
          </button>
          <button onClick={() => scrollToSection('gallery')} className="hover:text-accent transition-colors">
            Gallery
          </button>
          <button onClick={() => scrollToSection('events')} className="hover:text-accent transition-colors">
            Events
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition-colors">
            Contact
          </button>
          
          {user ? (
            <div className="flex items-center space-x-2">
              <User size={20} />
              <span className="text-sm">{user.email}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleSignOut}
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <LogOut size={16} className="mr-1" />
                Sign Out
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/auth')}
              className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <User size={16} className="mr-1" />
              Sign In
            </Button>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-primary-foreground text-primary p-4">
          <nav className="flex flex-col space-y-2">
            <button onClick={() => scrollToSection('home')} className="text-left hover:text-accent transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-accent transition-colors py-2">
              About
            </button>
            <button onClick={() => scrollToSection('menu')} className="text-left hover:text-accent transition-colors py-2">
              Menu
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-accent transition-colors py-2">
              Gallery
            </button>
            <button onClick={() => scrollToSection('events')} className="text-left hover:text-accent transition-colors py-2">
              Events
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-accent transition-colors py-2">
              Contact
            </button>
            
            {user ? (
              <div className="pt-2 border-t border-primary/20">
                <p className="text-sm mb-2">Signed in as: {user.email}</p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleSignOut}
                  className="w-full"
                >
                  <LogOut size={16} className="mr-1" />
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="pt-2 border-t border-primary/20">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/auth')}
                  className="w-full"
                >
                  <User size={16} className="mr-1" />
                  Sign In
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
