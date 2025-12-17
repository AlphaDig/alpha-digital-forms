'use client';

import { CheckCircle2, Shield, BarChart3, FileText, CloudUpload, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function EInvoiceServiceModern() {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "E-Invoice System",
      description: "Complete digital invoicing solution"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Backup Support & Maintenance",
      description: "24/7 technical support and regular updates"
    },
    {
      icon: <CloudUpload className="w-8 h-8" />,
      title: "Auto Submission to LHDN",
      description: "Monthly automated tax compliance"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Monthly Reports",
      description: "Detailed analytics and insights"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Cost-Efficient Solution",
      description: "No expensive software purchases needed"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-4 md:p-8">
      {/* Animated Background Elements */}

      <div className="bg-white py-6 px-8 border-b">
          <div className="text-center">
            <img 
              src="/placeholder-ad-logo.png" 
              alt="Alpha Digital - Enquiry"
              className="mx-auto max-w-full h-auto"
              style={{ height: '44px', width: '620px' }}
            />
          </div>
        </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 backdrop-blur-sm">
          {/* Header Section with Gradient */}
          <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"></div>
            <div className="relative px-8 md:px-12 py-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm mb-6">
                <span className="text-3xl font-bold">#</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                E-Invoice Service
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90">
                You run your business, and we handle the<br />
                <span className="font-semibold">e-invoice process</span> for you
              </p>
            </div>
            
            {/* Decorative Waves */}
            <div className="h-6 bg-gradient-to-b from-blue-600/20 to-transparent"></div>
          </div>

          {/* Main Content */}
          <div className="px-8 md:px-12 py-12">
            {/* Title with Badge */}
            <div className="flex flex-col items-center mb-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-6">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">All-Inclusive Package</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent text-center">
                E-INVOICING
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4"></div>
            </div>

            {/* Pricing Card */}
            <div className="max-w-2xl mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 md:p-10 border-2 border-blue-100 shadow-lg">
                {/* Decorative Corner */}
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl -rotate-12"></div>
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl -rotate-12 flex items-center justify-center">
                  <span className="text-white font-bold text-lg rotate-12">BEST VALUE</span>
                </div>

                <div className="text-center relative z-10">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-4">
                    <span className="text-6xl md:text-7xl font-bold text-gray-900">RM 150</span>
                    <div className="flex flex-col items-start">
                      <span className="text-2xl text-gray-600">/month</span>
                      <span className="text-lg font-bold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">Only</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8">Cancel anytime • No hidden fees</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                          <div className="text-blue-600">
                            {feature.icon}
                          </div>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* T&C Feature */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                        <CheckCircle2 className="w-8 h-8 text-gray-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Terms & Conditions</h3>
                      <p className="text-gray-600 text-sm">Full compliance with LHDN regulations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="text-center pt-10 border-t border-gray-200">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-4 rounded-2xl mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AD</span>
                </div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold text-gray-900">
                    Alpha Digital (M) Sdn Bhd
                  </p>
                  <p className="text-xl text-gray-700 mt-1">
                    <span className="text-blue-600 font-semibold">Tel:</span> 06-2849931
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">© 2024 All rights reserved. Trusted by 500+ Malaysian businesses</p>
            </div>
          </div>

          {/* Floating Action Button */}
          <div className="fixed bottom-8 right-8">
            <button className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span className="text-xl">💬</span>
              <Link href="https://wa.me/+6062849931">Chat with Sales</Link>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-6xl mx-auto mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">LHDN</div>
            <div className="text-sm text-gray-600">Compliant</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200">
            <div className="text-2xl font-bold text-blue-600">500+</div>
            <div className="text-sm text-gray-600">Clients</div>
          </div>
        </div>
      </div>
    </div>
  );
}