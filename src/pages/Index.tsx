import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Philosophy from "@/components/Philosophy";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Philosophy />
      <Testimonials />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
