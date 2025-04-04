
import { Button } from "@/components/ui/button";

const foodItems = [
  {
    id: 1,
    name: "Flame-boiled dish",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    price: 15.99,
    rating: 4.8
  },
  {
    id: 2,
    name: "Seafood pasta",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8",
    price: 17.99,
    rating: 4.7
  },
  {
    id: 3,
    name: "Grilled salmon",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    price: 19.99,
    rating: 4.9
  }
];

const PopularItemsSection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-brand-orange font-medium">Menu</span>
            <h2 className="heading-lg mt-2 flex items-center gap-3">
              Most Popular Items
              <img src="/lovable-uploads/5f28344f-f5fd-4116-9e21-f19150a67979.png" alt="Food emoji" className="w-10 h-10" />
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {foodItems.map((item) => (
            <div key={item.id} className="food-card group">
              <div className="overflow-hidden relative h-60">
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md font-medium text-sm flex items-center gap-1">
                  <span className="text-brand-orange">★</span> {item.rating}
                </div>
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">Bestseller</p>
                </div>
                <div className="text-brand-orange font-semibold">
                  ${item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-primary">See More Items</Button>
        </div>
      </div>
    </section>
  );
};

export default PopularItemsSection;
