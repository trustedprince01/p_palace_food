
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 z-10">
          <div className="inline-block px-4 py-1 bg-brand-orange/10 rounded-full text-brand-orange font-medium text-sm">
            Restaurant
          </div>
          <h1 className="heading-xl">
            Good F<span className="inline-block"><img src="/lovable-uploads/5f28344f-f5fd-4116-9e21-f19150a67979.png" alt="Food Emoji" className="w-10 h-10 inline" /></span>
            <span className="inline-block"><img src="/lovable-uploads/5f28344f-f5fd-4116-9e21-f19150a67979.png" alt="Food Emoji" className="w-10 h-10 inline" /></span>d<br />
            Good M<span className="inline-block"><img src="/lovable-uploads/5f28344f-f5fd-4116-9e21-f19150a67979.png" alt="Food Emoji" className="w-10 h-10 inline" /></span>
            <span className="inline-block"><img src="/lovable-uploads/5f28344f-f5fd-4116-9e21-f19150a67979.png" alt="Food Emoji" className="w-10 h-10 inline" /></span>d
          </h1>
          <p className="text-gray-600 max-w-lg">
            The food palace is an established food retailer serving seasonal and chef-curated dishes for the best experience.
          </p>
          <div className="flex gap-3">
            <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" 
              alt="Delicious pasta dish" 
              className="w-full h-full object-cover rounded-full border-8 border-white shadow-xl"
            />
            
            {/* Food items floating around main image */}
            <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" 
                alt="Food item" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-8 left-1/4 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" 
                alt="Food item" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/4 -right-10 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187" 
                alt="Food item" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;
