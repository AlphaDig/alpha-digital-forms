'use client';

import { CheckCircle2, Shield, BarChart3, FileText, CloudUpload, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function EInvoiceServiceModern() {
  const features = [
    {
      icon: <FileText className="w-6 h-6 md:w-8 md:h-8" />,
      title: "E-Invoice System",
      description: "Complete digital invoicing solution"
    },
    {
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Backup Support & Maintenance",
      description: ""
    },
    {
      icon: <CloudUpload className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Auto Submission to LHDN",
      description: "Monthly automated tax compliance"
    },
    {
      icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Monthly Reports",
      description: "Detailed analytics and insights"
    },
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Cost-Efficient Solution",
      description: "No expensive software purchases needed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4 py-6 sm:p-6 md:p-8">
      {/* Company Logo Header - Responsive */}
      <div className="bg-white py-4 sm:py-6 px-4 sm:px-6 md:px-8 border-b rounded-t-lg">
        <div className="text-center max-w-3xl mx-auto">
          <img 
            src="/placeholder-ad-logo.png" 
            alt="Alpha Digital"
            className="mx-auto w-full max-w-[280px] sm:max-w-[400px] md:max-w-[620px] h-auto"
            style={{ 
              height: 'auto',
              maxHeight: '40px',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      {/* Animated Background Elements - Responsive */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl sm:blur-2xl md:blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl sm:blur-2xl md:blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Main Card - Responsive */}
        <div className="bg-white rounded-lg sm:rounded-xl md:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl overflow-hidden border border-gray-100">
          {/* Header Section with Gradient - Responsive */}
          <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:10px_10px] sm:bg-[size:15px_15px] md:bg-[size:20px_20px]"></div>
            <div className="relative px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-12 text-center">
              {/* Replaced "#" with square image placeholder */}
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-xl sm:rounded-2xl backdrop-blur-sm mb-4 sm:mb-5 md:mb-6 border-2 border-white/20 overflow-hidden">
                {/* Square image placeholder - replace with your actual image */}
                <div className="w-full h-full flex items-center justify-center">
                  {/* If you have an actual image, use this instead: */}
                  <img 
            src="/myinvois-portal.png" 
            alt="Alpha Digital"
            className="mx-auto w-full max-w-[280px] sm:max-w-[400px] md:max-w-[620px] h-auto"
            style={{ 
              height: 'auto',
              maxHeight: '100px',
              objectFit: 'contain'
            }}
          />
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 tracking-tight">
                E-Invoice Service
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto opacity-90">
                You run your business, and we handle the<br className="hidden sm:block" />
                <span className="font-semibold">e-invoice process</span> for you
              </p>
            </div>
            
            {/* Decorative Waves */}
            <div className="h-4 sm:h-5 md:h-6 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
          </div>

          {/* Main Content - Responsive Padding */}
          <div className="px-4 sm:px-6 md:px-12 py-8 sm:py-10 md:py-12">
            {/* Title with Badge - Responsive */}
            <div className="flex flex-col items-center mb-8 sm:mb-10 md:mb-12">
              <div className="inline-flex items-center gap-1 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-4 sm:mb-5 md:mb-6">
                <span className="text-blue-600 font-semibold text-xs sm:text-sm md:text-sm uppercase tracking-wider">All-Inclusive Package</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent text-center leading-tight">
                E-INVOICING
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 sm:mt-3 md:mt-4"></div>
            </div>

            {/* Pricing Card - Responsive */}
            <div className="max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
              <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border-2 border-blue-100 shadow-lg">
                {/* Decorative Corner - Hidden on Mobile */}
               

                <div className="text-center relative z-10">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-4">
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">RM 150</span>
                    <div className="flex flex-col items-center sm:items-start mt-1 sm:mt-0">
                      <span className="text-lg sm:text-xl md:text-2xl text-gray-600">/month</span>
                      <span className="text-sm sm:text-base md:text-lg font-bold text-blue-600 bg-blue-100 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full mt-1">Only</span>
                    </div>
                  </div>
                  {/* Removed "Cancel anytime" text and added 24/7 support text */}
                  <div className="mt-4 mb-2">
                    <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                      <Shield className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-700">24/7 Support & Maintenance</span>
                    </div>
                  </div>
                </div>

                {/* Features Grid - Responsive */}
                <div className="mt-8 sm:mt-10">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                    What's Included:
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="group bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md sm:hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="flex flex-col items-center text-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                            <div className="text-blue-600">
                              {feature.icon}
                            </div>
                          </div>
                          <h3 className="font-bold text-gray-900 text-base sm:text-lg md:text-lg mb-1 sm:mb-2">{feature.title}</h3>
                          <p className="text-gray-600 text-xs sm:text-sm md:text-sm leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                    
                    {/* T&C Feature */}
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-gray-200 col-span-full sm:col-span-2 lg:col-span-1">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-200 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-gray-600" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg md:text-lg mb-1 sm:mb-2">Terms & Conditions</h3>
                        <p className="text-gray-600 text-xs sm:text-sm md:text-sm">Full compliance with LHDN regulations</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Company Info - Responsive */}
            <div className="text-center pt-6 sm:pt-8 md:pt-10 border-t border-gray-200">
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 sm:px-6 md:px-8 py-4 sm:py-4 md:py-4 rounded-lg sm:rounded-2xl mb-3 sm:mb-4 max-w-2xl mx-auto">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm sm:text-base md:text-xl">AD</span>
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                    Alpha Digital (M) Sdn Bhd
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-1">
                    <span className="text-blue-600 font-semibold">Tel:</span> 06-2849931
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm md:text-sm">© 2024 All rights reserved. Trusted by 500+ Malaysian businesses</p>
            </div>
          </div>
        </div>
      </div>


      {/* Floating WhatsApp Button - Responsive */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Link 
          href="https://wa.me/+6062849931" 
          target="_blank"
          className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="text-lg sm:text-xl">💬</span>
          <span className="text-sm sm:text-base">WhatsApp Now</span>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
        </Link>
      </div>
    </div>
  );
}