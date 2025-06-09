
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DashboardOverview = () => {
  const [stats, setStats] = useState({
    totalMenuItems: 0,
    totalGalleryItems: 0,
    pendingBookings: 0,
    totalBookings: 0,
    instagramPosts: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [menuItems, galleryItems, pendingBookings, totalBookings, instagramPosts] = await Promise.all([
        supabase.from('menu_items').select('id', { count: 'exact', head: true }),
        supabase.from('gallery_items').select('id', { count: 'exact', head: true }),
        supabase.from('bookings').select('id', { count: 'exact', head: true }).eq('status', 'pending'),
        supabase.from('bookings').select('id', { count: 'exact', head: true }),
        supabase.from('instagram_posts').select('id', { count: 'exact', head: true }),
      ]);

      setStats({
        totalMenuItems: menuItems.count || 0,
        totalGalleryItems: galleryItems.count || 0,
        pendingBookings: pendingBookings.count || 0,
        totalBookings: totalBookings.count || 0,
        instagramPosts: instagramPosts.count || 0,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-6">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Menu Items</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{stats.totalMenuItems}</p>
            <p className="text-sm text-muted-foreground">Total items in menu</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Gallery Images</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{stats.totalGalleryItems}</p>
            <p className="text-sm text-muted-foreground">Images in gallery</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pending Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-orange-600">{stats.pendingBookings}</p>
            <p className="text-sm text-muted-foreground">Awaiting approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{stats.totalBookings}</p>
            <p className="text-sm text-muted-foreground">All time bookings</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Instagram Posts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{stats.instagramPosts}</p>
            <p className="text-sm text-muted-foreground">Featured posts</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
