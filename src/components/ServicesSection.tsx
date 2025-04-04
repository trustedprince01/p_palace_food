
import { Utensils, ThumbsUp, Truck } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-medium">Features</span>
          <h2 className="heading-lg mt-2">Our Awesome Services</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="text-center p-6 hover:shadow-lg transition-all rounded-lg hover:bg-white">
            <div className="circle-badge mx-auto mb-6">
              <Utensils className="text-brand-orange" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality Food</h3>
            <p className="text-gray-600 text-sm">
              Keep healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter.
            </p>
          </div>

          {/* Service 2 */}
          <div className="text-center p-6 hover:shadow-lg transition-all rounded-lg hover:bg-white">
            <div className="circle-badge mx-auto mb-6">
              <ThumbsUp className="text-brand-orange" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Super Taste</h3>
            <p className="text-gray-600 text-sm">
              Keep healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter.
            </p>
          </div>

          {/* Service 3 */}
          <div className="text-center p-6 hover:shadow-lg transition-all rounded-lg hover:bg-white">
            <div className="circle-badge mx-auto mb-6">
              <Truck className="text-brand-orange" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              Keep healthy food readily available. When you get hungry, you're more likely to eat the first thing you see on the counter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
