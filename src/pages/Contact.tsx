
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-20 bg-brand-orange/5">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Have questions or feedback? Reach out to us - we'd love to hear from you!
          </p>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="heading-md mb-6">Get in Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  placeholder="Please write your message here..."
                />
              </div>

              <div>
                <Button type="submit" className="btn-primary">
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div>
            <h2 className="heading-md mb-6">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="circle-badge shrink-0">
                  <MapPin className="text-brand-orange" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Our Location</h3>
                  <p className="text-gray-600">
                    123 Food Street, Culinary Ave<br />
                    Kitchen City, 90210
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="circle-badge shrink-0">
                  <Phone className="text-brand-orange" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone Number</h3>
                  <p className="text-gray-600">
                    <a href="tel:+15551234567" className="hover:text-brand-orange transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="tel:+15559876543" className="hover:text-brand-orange transition-colors">
                      +1 (555) 987-6543
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="circle-badge shrink-0">
                  <Mail className="text-brand-orange" size={28} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Address</h3>
                  <p className="text-gray-600">
                    <a href="mailto:info@ppalace.com" className="hover:text-brand-orange transition-colors">
                      info@ppalace.com
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <a href="mailto:support@ppalace.com" className="hover:text-brand-orange transition-colors">
                      support@ppalace.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg overflow-hidden h-64">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584424!2d-118.24314658517594!3d34.05012388060504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64a33a41b13%3A0x53a0e1b2cab10a11!2sRestaurant%20Row!5e0!3m2!1sen!2sus!4v1617742694125!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
