
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Lock, Clock, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-20 bg-gradient-to-r from-brand-orange/10 to-brand-orange/5">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-4">Privacy Policy</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            We value your privacy and are committed to protecting your personal information
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
              <Shield className="text-brand-orange" />
              <span className="font-medium">Secure & Protected</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
              <Lock className="text-brand-orange" />
              <span className="font-medium">Data Encryption</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
              <Clock className="text-brand-orange" />
              <span className="font-medium">Updated April 2025</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container-custom">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8 space-y-10">
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <FileText className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">1. Information We Collect</h2>
                  <p className="text-gray-600">
                    We collect personal information that you provide to us, such as your name, email address, phone number, and delivery address when you create an account, place an order, or make a reservation. We may also collect information about your device and how you interact with our services.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <FileText className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">2. How We Use Your Information</h2>
                  <p className="text-gray-600">
                    We use your information to process your orders, provide customer service, send you promotional offers (if you've opted in), improve our services, and ensure the security of our platform. We may also use your information for analytical purposes to better understand our customers' preferences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <FileText className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">3. Information Sharing</h2>
                  <p className="text-gray-600">
                    We do not sell your personal information to third parties. We may share your information with service providers who help us operate our business, such as payment processors and delivery services. We may also disclose your information if required by law or to protect our rights.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <FileText className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">4. Cookies and Similar Technologies</h2>
                  <p className="text-gray-600">
                    We use cookies and similar technologies to enhance your experience on our website, analyze usage patterns, and deliver personalized content and advertisements. You can control cookies through your browser settings.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <FileText className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">5. Data Security</h2>
                  <p className="text-gray-600">
                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <FileText className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">6. Your Rights</h2>
                  <p className="text-gray-600">
                    Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or restrict our use of your data. To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <FileText className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">7. Children's Privacy</h2>
                  <p className="text-gray-600">
                    Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will promptly delete that information.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <FileText className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">8. Changes to Privacy Policy</h2>
                  <p className="text-gray-600">
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website. Your continued use of our services after such modifications will constitute your acknowledgment of the modified Privacy Policy.
                  </p>
                </div>
              </div>
              
              <div className="pt-8 text-center text-gray-500 border-t">
                <p className="font-medium">Last updated: April 4, 2025</p>
                <p className="mt-4">
                  If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@ppalace.com" className="text-brand-orange font-medium">privacy@ppalace.com</a>
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

export default Privacy;
