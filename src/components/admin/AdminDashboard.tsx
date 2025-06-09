
import { useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import AdminSidebar from './AdminSidebar';
import MenuManager from './MenuManager';
import GalleryManager from './GalleryManager';
import BookingManager from './BookingManager';
import InstagramManager from './InstagramManager';
import DashboardOverview from './DashboardOverview';

interface AdminDashboardProps {
  user: User;
}

const AdminDashboard = ({ user }: AdminDashboardProps) => {
  const [activeSection, setActiveSection] = useState('overview');

  const handleSignOut = () => {
    supabase.auth.signOut();
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <DashboardOverview />;
      case 'menu':
        return <MenuManager />;
      case 'gallery':
        return <GalleryManager />;
      case 'bookings':
        return <BookingManager />;
      case 'instagram':
        return <InstagramManager />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        user={user}
        onSignOut={handleSignOut}
      />
      <main className="flex-1 overflow-auto">
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
