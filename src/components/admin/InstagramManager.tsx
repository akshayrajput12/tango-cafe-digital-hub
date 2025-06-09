
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Plus, Trash2, Star } from 'lucide-react';

interface InstagramPost {
  id: string;
  post_url: string;
  image_url: string;
  caption: string;
  is_featured: boolean;
  created_at: string;
}

const InstagramManager = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    post_url: '',
    image_url: '',
    caption: '',
    is_featured: false,
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('instagram_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch Instagram posts",
        variant: "destructive",
      });
    } else {
      setPosts(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('instagram_posts')
        .insert([formData]);

      if (error) throw error;

      toast({ title: "Success", description: "Instagram post added successfully" });
      resetForm();
      fetchPosts();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add Instagram post",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleFeatured = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('instagram_posts')
      .update({ is_featured: !currentStatus })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update featured status",
        variant: "destructive",
      });
    } else {
      toast({ title: "Success", description: "Featured status updated" });
      fetchPosts();
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this Instagram post?')) return;

    const { error } = await supabase
      .from('instagram_posts')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete Instagram post",
        variant: "destructive",
      });
    } else {
      toast({ title: "Success", description: "Instagram post deleted successfully" });
      fetchPosts();
    }
  };

  const resetForm = () => {
    setFormData({
      post_url: '',
      image_url: '',
      caption: '',
      is_featured: false,
    });
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Instagram Posts</h1>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Instagram Post
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={post.image_url}
                  alt="Instagram post"
                  className="w-full h-48 object-cover rounded-t"
                />
                {post.is_featured && (
                  <Star className="absolute top-2 right-2 text-yellow-500 fill-current" size={20} />
                )}
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {post.caption}
                </p>
                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFeatured(post.id, post.is_featured)}
                  >
                    <Star className={`h-4 w-4 ${post.is_featured ? 'fill-current text-yellow-500' : ''}`} />
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(post.post_url, '_blank')}
                    >
                      View
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(post.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Add Instagram Post</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Instagram Post URL"
                  value={formData.post_url}
                  onChange={(e) => setFormData({ ...formData, post_url: e.target.value })}
                  required
                />
                <Input
                  placeholder="Image URL"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Caption"
                  value={formData.caption}
                  onChange={(e) => setFormData({ ...formData, caption: e.target.value })}
                />
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                  />
                  <label>Featured Post</label>
                </div>
                <div className="flex gap-2">
                  <Button type="submit" disabled={loading}>
                    {loading ? 'Adding...' : 'Add Post'}
                  </Button>
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default InstagramManager;
