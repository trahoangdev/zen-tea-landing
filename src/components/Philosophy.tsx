import philosophyBg from "@/assets/philosophy-bg.jpg";

const Philosophy = () => {
  return (
    <section id="philosophy" className="relative py-40 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={philosophyBg} 
          alt="Zen garden"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
        <div className="space-y-8">
          <h2 className="text-6xl md:text-7xl font-serif text-foreground tracking-tight">
            Calm.
          </h2>
          <h2 className="text-6xl md:text-7xl font-serif text-foreground tracking-tight">
            Clarity.
          </h2>
          <h2 className="text-6xl md:text-7xl font-serif text-foreground tracking-tight">
            Connection.
          </h2>
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            In every cup, find a moment of stillness. In every ritual, discover presence. 
            In every breath, embrace harmony.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
