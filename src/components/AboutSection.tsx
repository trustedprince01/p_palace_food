
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20 bg-brand-orange/5 relative overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1" 
            alt="Delicious food plate" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
          <img 
            src="https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8" 
            alt="Ketchup bottle" 
            className="absolute -bottom-10 -right-5 w-32 sm:w-48 h-auto transform rotate-12 shadow-lg"
          />
        </div>
        
        <div className="space-y-6">
          <span className="text-brand-orange font-medium">About us</span>
          <h2 className="heading-lg">Simple Way of Eating Delicious</h2>
          <p className="text-gray-600">
            Keep healthy food readily available. When you get hungry, you're more likely to eat the first 
            thing you see on the counter or in the cupboard.
          </p>
          <Button className="btn-primary" asChild>
            <Link to="/about">Explore Our Story</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
