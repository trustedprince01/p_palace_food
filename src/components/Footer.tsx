
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white font-semibold border-2 border-brand-orange">
                P
              </div>
              <span className="font-bold text-xl">P.Palace</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-xs">
              The best food delivery experience. Fresh ingredients, chef-crafted meals, delivered to your door.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Our menu</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-gray-600 hover:text-brand-orange transition-colors">Breakfast</Link></li>
              <li><Link to="/menu" className="text-gray-600 hover:text-brand-orange transition-colors">Lunch</Link></li>
              <li><Link to="/menu" className="text-gray-600 hover:text-brand-orange transition-colors">Dinner</Link></li>
              <li><Link to="/menu" className="text-gray-600 hover:text-brand-orange transition-colors">Dessert</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Information</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-brand-orange transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-brand-orange transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-brand-orange transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="text-brand-orange w-5 h-5 mt-1" />
                <span className="text-gray-600">123 Food Street, Culinary Ave, Kitchen City, 90210</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-brand-orange w-5 h-5" />
                <a href="mailto:info@ppalace.com" className="text-gray-600 hover:text-brand-orange transition-colors">info@ppalace.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-brand-orange w-5 h-5" />
                <a href="tel:+15551234567" className="text-gray-600 hover:text-brand-orange transition-colors">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} P.Palace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
