import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tea.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Serene tea ceremony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/85" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-slow">
        <h1 className="text-6xl md:text-8xl font-serif font-medium mb-6 text-foreground tracking-tight animate-fade-in-up hero-title">
          The Art of <span className="gradient-text">Zen Tea</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-12 font-medium tracking-wide hero-subtitle">
          Vietnamese tea culture reimagined for the modern world
        </p>
        <Button 
          onClick={scrollToAbout}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-zen transition-all duration-500 hover:shadow-xl hover:scale-105"
        >
          Explore the Essence
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce group cursor-pointer"
        aria-label="Scroll to about section"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary/50 flex items-start justify-center p-2 transition-colors duration-300">
          <div className="w-1 h-3 bg-muted-foreground/50 group-hover:bg-primary/50 rounded-full transition-colors duration-300" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
