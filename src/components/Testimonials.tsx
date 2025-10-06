const testimonials = [
  {
    id: 1,
    quote: "Every morning with Zen Tea is a meditation. The ritual has become my anchor.",
    author: "Mai Nguyen",
    role: "Mindfulness Coach"
  },
  {
    id: 2,
    quote: "The quality is unmatched. Each cup reminds me to slow down and be present.",
    author: "James Chen",
    role: "Designer"
  },
  {
    id: 3,
    quote: "I've tried many teas, but Zen Tea captures something truly special—peace in a cup.",
    author: "Sarah Martinez",
    role: "Yoga Instructor"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-6 bg-hsl(var(--zen-cream))">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-foreground">
            Moments of Peace
          </h2>
          <p className="text-xl text-muted-foreground">
            Reflections from our community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative p-10 bg-background rounded-2xl shadow-soft hover:shadow-zen transition-all duration-500 border border-border/50 hover-lift">
                {/* Quote mark */}
                <div className="absolute top-6 left-6 text-6xl font-serif text-primary/20">
                  "
                </div>
                
                <div className="relative pt-8">
                  <p className="text-lg text-foreground leading-relaxed mb-8 italic">
                    {testimonial.quote}
                  </p>
                  
                  <div className="border-t border-border pt-6">
                    <p className="font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
