
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Food at P.Palace is really awesome. Food is everything we are. It's an extension of nationalist feeling, ethnic feeling, your personal history, your province, your region, your tribe, your grandma. It's inseparable from those from the get-go.",
    name: "Jessica Parker",
    title: "Product Designer @ prince",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360"
  },
  {
    id: 2,
    quote: "The ambiance and service at P.Palace are unmatched. Every visit feels like a special occasion. The staff's attention to detail and the chef's creative dishes keep me coming back for more. Absolutely worth every penny!",
    name: "Michael Rodriguez",
    title: "Marketing Director",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
  },
  {
    id: 3,
    quote: "As a food blogger, I've been to countless restaurants, but P.Palace stands out for its consistency and quality. Their seasonal menu never disappoints, and the fusion of flavors is truly inspirational. A must-visit for anyone who appreciates culinary artistry.",
    name: "Sophia Lee",
    title: "Food Critic & Blogger",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-brand-orange font-medium">Testimonial</span>
            <h2 className="heading-lg">That's what our<br />Client Says</h2>
            <blockquote className="text-gray-600 border-l-4 border-brand-orange pl-6">
              "{currentTestimonial.quote}"
            </blockquote>
            <div className="pt-4">
              <h4 className="font-bold text-xl">{currentTestimonial.name}</h4>
              <p className="text-gray-500">{currentTestimonial.title}</p>
            </div>
            
            <div className="flex gap-2 pt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-brand-orange' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="flex gap-4 pt-2">
              <button 
                onClick={handlePrevious}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={currentTestimonial.image} 
              alt={`${currentTestimonial.name} testimonial`} 
              className="w-full h-auto rounded-lg shadow-xl transition-opacity duration-300"
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
