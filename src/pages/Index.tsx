
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Gallery from '@/components/Gallery';
import Events from '@/components/Events';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Events />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
