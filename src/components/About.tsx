const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-background to-hsl(var(--zen-cream))">
      <div className="max-w-3xl mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif text-center mb-8 text-foreground">
            A Journey Through Time
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </div>
        
        <div className="space-y-8 text-lg md:text-xl leading-relaxed text-muted-foreground animate-fade-in-slow">
          <p className="text-balance">
            For centuries, Vietnamese tea culture has been woven into the fabric of daily life—a ritual of connection, mindfulness, and tranquility. From the misty highlands where tender leaves are harvested at dawn, to the quiet ceremony of sharing tea with loved ones, each cup tells a story.
          </p>
          
          <p className="text-balance">
            Zen Tea honors this ancient tradition while embracing the clarity and simplicity of modern Zen philosophy. We source premium teas from Vietnam's most revered gardens, crafting each blend with intention and care.
          </p>
          
          <p className="text-balance font-medium text-foreground">
            Our mission is simple: to bring the peace and presence of traditional tea ceremony into your everyday life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
