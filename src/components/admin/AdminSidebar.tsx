
import { User } from '@supabase/supabase-js';
import { 
  LayoutDashboard, 
  Menu, 
  Image, 
  Calendar, 
  Instagram, 
  LogOut 
} from 'lucide-react';

interface AdminSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  user: User;
  onSignOut: () => void;
}

const AdminSidebar = ({ activeSection, setActiveSection, user, onSignOut }: AdminSidebarProps) => {
  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'menu', label: 'Menu Management', icon: Menu },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
    { id: 'instagram', label: 'Instagram Posts', icon: Instagram },
  ];

  return (
    <div className="w-64 bg-primary text-primary-foreground flex flex-col">
      <div className="p-6 border-b border-primary-foreground/20">
        <h1 className="text-xl font-bold">Taco Tango Admin</h1>
        <p className="text-sm opacity-75">{user.email}</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-primary-foreground text-primary'
                      : 'hover:bg-primary-foreground/10'
                  }`}
                >
                  <Icon size={20} className="mr-3" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-primary-foreground/20">
        <button
          onClick={onSignOut}
          className="w-full flex items-center px-4 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors"
        >
          <LogOut size={20} className="mr-3" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
