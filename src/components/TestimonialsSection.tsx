
const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-brand-orange font-medium">Testimonial</span>
            <h2 className="heading-lg">That's what our<br />Client Says</h2>
            <blockquote className="text-gray-600 border-l-4 border-brand-orange pl-6">
              "Food at P.Palace is really awesome. Food is everything we are. It's an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. It's inseparable from those from the get-go."
            </blockquote>
            <div className="pt-4">
              <h4 className="font-bold text-xl">Jessica Parker</h4>
              <p className="text-gray-500">Product Designer @ prince</p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1520072959219-c595dc870360" 
              alt="Delicious food plate" 
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8" 
              alt="Sauce bottle" 
              className="absolute -bottom-10 -right-5 w-32 sm:w-48 h-auto transform rotate-12 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default TestimonialsSection;
