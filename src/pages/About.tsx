
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-20 bg-brand-orange/5">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-4">About Us</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Learn more about P.Palace and our journey to bring you the best culinary experience
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="heading-lg">Our Story</h2>
            <p className="text-gray-600">
              P.Palace was founded in 2015 with a simple mission - to serve delicious, high-quality food made from the freshest ingredients. What started as a small family-owned restaurant has grown into a beloved culinary destination.
            </p>
            <p className="text-gray-600">
              Our passionate team of chefs brings decades of experience and creativity to every dish, combining traditional techniques with innovative approaches.
            </p>
            <p className="text-gray-600">
              We believe in sustainable practices, supporting local farmers and producers to ensure the highest quality ingredients while minimizing our environmental footprint.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1556761223-4c4282c73f77" 
              alt="Our restaurant" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-orange/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              The talented individuals who make P.Palace a special place
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1566554273541-37a9ca77b91f" 
                alt="Chef John" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl">John Martinez</h3>
                <p className="text-brand-orange">Executive Chef</p>
                <p className="text-gray-600 mt-4">
                  With over 15 years of culinary experience, Chef John brings creativity and expertise to every dish.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46" 
                alt="Chef Sarah" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl">Sarah Chen</h3>
                <p className="text-brand-orange">Pastry Chef</p>
                <p className="text-gray-600 mt-4">
                  Sarah's passion for desserts has resulted in our signature sweet creations that customers love.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548" 
                alt="Manager Michael" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl">Michael Johnson</h3>
                <p className="text-brand-orange">Restaurant Manager</p>
                <p className="text-gray-600 mt-4">
                  Michael ensures that every guest experience at P.Palace is exceptional from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
