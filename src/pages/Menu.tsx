
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";

const categories = [
  "All", "Breakfast", "Lunch", "Dinner", "Dessert", "Drinks", "Specials"
];

const menuItems = [
  {
    id: 1,
    name: "Avocado Toast",
    category: "Breakfast",
    description: "Fresh avocado spread on artisan toast with poached eggs",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2"
  },
  {
    id: 2,
    name: "Seafood Pasta",
    category: "Lunch",
    description: "Fresh seafood with al dente pasta in a creamy sauce",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8"
  },
  {
    id: 3,
    name: "Grilled Salmon",
    category: "Dinner",
    description: "Fresh salmon fillet grilled to perfection with seasonal vegetables",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288"
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    category: "Dessert",
    description: "Warm chocolate cake with a molten chocolate center",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51"
  },
  {
    id: 5,
    name: "Caesar Salad",
    category: "Lunch",
    description: "Fresh romaine lettuce with Caesar dressing, croutons and parmesan",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  },
  {
    id: 6,
    name: "Steak & Potatoes",
    category: "Dinner",
    description: "Grilled ribeye steak with roasted potatoes and vegetables",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1579366948929-444eb79881eb"
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-20 bg-brand-orange/5">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-4">Our Menu</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Explore our carefully crafted menu items made with fresh, seasonal ingredients
          </p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(category => (
            <button 
              key={category}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === category 
                ? "bg-brand-orange text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="food-card group">
              <div className="overflow-hidden h-60">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="mb-4 flex justify-between items-start">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <span className="text-brand-orange font-bold">${item.price}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <Button className="w-full btn-primary">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
