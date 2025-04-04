
import { Button } from "@/components/ui/button";

const AppDownloadSection = () => {
  return (
    <section className="py-20 bg-brand-orange/5 relative overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543" 
            alt="Food bowl" 
            className="w-3/4 h-auto rounded-lg shadow-xl mx-auto"
          />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3/4 transform rotate-12">
            <img 
              src="https://www.freepnglogos.com/uploads/mobile-png/mobile-phone-png-download-images-phone-39.png" 
              alt="Mobile app" 
              className="w-full h-auto"
            />
          </div>
        </div>
        
        <div className="space-y-6 order-1 md:order-2">
          <span className="text-brand-orange font-medium">Take Away</span>
          <h2 className="heading-lg">Simple Way To Order Your Food</h2>
          <p className="text-gray-600">
            Keep healthy food readily available. When you get hungry, you're more likely to eat the first 
            thing you see on the counter or in the cupboard.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png" alt="App Store" className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </a>
            <a href="#" className="bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/1024px-Google_Play_Arrow_logo.svg.png" alt="Google Play" className="w-8 h-8" />
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
