
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, Scale, Clock, AlertCircle } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="py-20 bg-gradient-to-r from-brand-orange/10 to-brand-orange/5">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-4">Terms of Service</h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Please read these terms carefully before using our services
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
              <Scale className="text-brand-orange" />
              <span className="font-medium">Legal Agreement</span>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
              <FileText className="text-brand-orange" />
              <span className="font-medium">Service Terms</span>
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
                  <AlertCircle className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">1. Acceptance of Terms</h2>
                  <p className="text-gray-600">
                    By accessing or using P.Palace's services, including our website, mobile applications, and dining services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <AlertCircle className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">2. Use of Services</h2>
                  <p className="text-gray-600">
                    Our services are provided for your personal, non-commercial use. You agree not to modify, reproduce, distribute, or create derivative works based on our content unless explicitly authorized by P.Palace.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <AlertCircle className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">3. Online Ordering and Reservations</h2>
                  <p className="text-gray-600">
                    When placing orders or making reservations through our platforms, you agree to provide accurate and complete information. P.Palace reserves the right to refuse service, terminate accounts, or cancel orders at our discretion.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <AlertCircle className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">4. User Accounts</h2>
                  <p className="text-gray-600">
                    You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <AlertCircle className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">5. Modifications to Service</h2>
                  <p className="text-gray-600">
                    P.Palace reserves the right to modify or discontinue, temporarily or permanently, any part of our services with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the service.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <AlertCircle className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">6. Limitation of Liability</h2>
                  <p className="text-gray-600">
                    P.Palace shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <AlertCircle className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">7. Governing Law</h2>
                  <p className="text-gray-600">
                    These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which P.Palace is registered, without regard to its conflict of law provisions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-full">
                  <AlertCircle className="text-brand-orange" size={24} />
                </div>
                <div className="space-y-3">
                  <h2 className="heading-md">8. Changes to Terms</h2>
                  <p className="text-gray-600">
                    P.Palace reserves the right to update or change these terms at any time. We will provide notice of any material changes by posting the new Terms on our website. Your continued use of our services constitutes acceptance of such changes.
                  </p>
                </div>
              </div>
              
              <div className="pt-8 text-center text-gray-500 border-t">
                <p className="font-medium">Last updated: April 4, 2025</p>
                <p className="mt-4">
                  If you have any questions about these Terms, please contact us at <a href="mailto:terms@ppalace.com" className="text-brand-orange font-medium">terms@ppalace.com</a>
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

export default Terms;
