import teaSet1 from "@/assets/tea-set-1.png";
import teaSet2 from "@/assets/tea-set-2.png";
import teaSet3 from "@/assets/tea-set-3.png";
import teaSet4 from "@/assets/tea-set-4.png";

const products = [
  {
    id: 1,
    name: "Ceremonial Matcha Set",
    description: "Handcrafted ceramic bowl with traditional bamboo whisk",
    image: teaSet1,
  },
  {
    id: 2,
    name: "Minimalist Tea Collection",
    description: "Curated selection of premium Vietnamese teas",
    image: teaSet2,
  },
  {
    id: 3,
    name: "Premium Matcha Powder",
    description: "Stone-ground organic matcha from northern highlands",
    image: teaSet3,
  },
  {
    id: 4,
    name: "Zen Tea Ceremony Set",
    description: "Complete ritual set on handmade bamboo tray",
    image: teaSet4,
  },
];

const Products = () => {
  const handleProductClick = (productId: number) => {
    // In a real app, this would navigate to product detail page
    console.log(`Product ${productId} clicked`);
    // You could add a modal or redirect to product page here
  };

  return (
    <section id="products" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-serif mb-6 text-foreground">
            Our Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each piece is carefully selected to elevate your tea ritual
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div 
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-zen transition-all duration-500 hover-lift">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
