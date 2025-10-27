'use client'
import { useEffect } from "react";

export default function TurnstileSystemPage() {
  useEffect(() => {
    document.title = "Turnstile System";
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header Logo */}
        <div className="text-center mb-10">
            <img 
              src="/placeholder-ad-logo.png" 
              alt="Turnstile Control Solutions"
              className="mx-auto transform hover:scale-105 transition-transform duration-300"
              style={{ height: '35px', width: '450px', maxWidth: '100%' }}
            />
        </div>

        {/* Main Header */}
        <div className="text-center mb-12">
          <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                <span className="text-xl">🚪</span>
              </div>
              <h1 className="text-2xl font-bold mb-3">Turnstile Control System</h1>
              <p className="text-blue-100">
                Advanced Access Control Solutions
              </p>
            </div>
          </div>
        </div>

        {/* Main Turnstile Image */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-12 text-center border border-white/20">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
            <img 
              src="/placeholder-turnstile-main.png" 
              alt="Turnstile Systems"
              className="mx-auto rounded-lg transform hover:scale-105 transition-transform duration-500"
              style={{ height: '500px', width: '100%', maxWidth: '600px', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
              Complete Turnstile Control Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive hardware and software solutions for modern access control systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🔐",
                title: "Access Control",
                description: "Secure access by card number (1D & 2D Barcode, RFID Number)"
              },
              {
                icon: "📅",
                title: "Entry Period Control",
                description: "Valid entry control by date ranges with daily, weekly, monthly, and yearly options"
              },
              {
                icon: "🔢",
                title: "Entry Validation",
                description: "Number of valid entries determines access validity"
              },
              {
                icon: "📊",
                title: "Real-time Tracking",
                description: "Track latest scanned entries and maintain complete history"
              },
              {
                icon: "⚙️",
                title: "Custom Integration",
                description: "Customizable solutions with data interface to your back-end system"
              },
              {
                icon: "🏢",
                title: "Versatile Applications",
                description: "Suitable for buildings, theme parks, clubs, employee attendance, and more"
              },
              {
                icon: "🎫",
                title: "POS Integration",
                description: "Seamless integration with POS systems for E-Ticketing"
              },
              {
                icon: "📱",
                title: "Modern Technology",
                description: "Barcode Art Card & Wristband access to Turnstile systems"
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-white to-gray-50 rounded-xl p-5 shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                <div className="text-2xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Software Section */}
        <div className="bg-gradient-to-r from-slate-800 to-gray-900 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-4 shadow-md">
              <span className="text-xl">💻</span>
            </div>
            <h2 className="text-2xl font-bold mb-3">Control System Software</h2>
            <p className="text-gray-300">
              Fully customizable to meet your specific requirements
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <img 
              src="/placeholder-turnstile-software.png" 
              alt="Turnstile Software"
              className="mx-auto rounded-lg transform hover:scale-105 transition-transform duration-500"
              style={{ height: '350px', width: '100%', maxWidth: '500px', objectFit: 'contain' }}
            />
          </div>
        </div>

        {/* Hardware Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
              Premium Hardware Solutions
            </h2>
            <p className="text-gray-600">State-of-the-art turnstile systems</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/placeholder-speed-gate.png",
                alt: "Speed Gate",
                title: "Speed Gate",
                description: "High-speed access control with modern design"
              },
              {
                src: "/placeholder-turnstile.png",
                alt: "Turnstile",
                title: "Standard Turnstile",
                description: "Reliable and durable entry control solution"
              },
              {
                src: "/placeholder-turnstile-05.png",
                alt: "Turnstile 05",
                title: "Compact Turnstile",
                description: "Space-efficient design for modern facilities"
              }
            ].map((hardware, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 mb-4 transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={hardware.src} 
                    alt={hardware.alt}
                    className="mx-auto rounded-lg"
                    style={{ height: '200px', width: '100%', objectFit: 'contain' }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{hardware.title}</h3>
                <p className="text-gray-600 text-sm">{hardware.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Input Methods Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-xl p-8 mb-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-3">Advanced Input Methods</h2>
            <p className="text-blue-100">Multiple authentication options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-bold mb-3">1D & 2D Barcode</h3>
              <img 
                src="/placeholder-1d-2d-input.png" 
                alt="1D 2D Input"
                className="mx-auto rounded-lg transform hover:scale-110 transition-transform duration-300"
                style={{ height: '120px', width: '100%', objectFit: 'contain' }}
              />
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10">
              <div className="text-3xl mb-3">🪪</div>
              <h3 className="text-lg font-bold mb-3">IC/ID Card</h3>
              <img 
                src="/placeholder-ic-id-card.png" 
                alt="IC ID Card"
                className="mx-auto rounded-lg transform hover:scale-110 transition-transform duration-300"
                style={{ height: '120px', width: '100%', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* Scan Methods Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 border border-white/20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
              Scan Method Technologies
            </h2>
            <p className="text-gray-600">Innovative scanning solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: "/placeholder-scan-method-5.png", alt: "Scan Method 5" },
              { src: "/placeholder-scan-method-2.png", alt: "Scan Method 2" },
              { src: "/placeholder-scan-method-3.png", alt: "Scan Method 3" },
              { src: "/placeholder-scan-method-4.png", alt: "Scan Method 4" }
            ].map((scan, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-5 text-center border border-gray-200/50 hover:shadow-lg transition-all duration-500">
                <img 
                  src={scan.src} 
                  alt={scan.alt}
                  className="mx-auto rounded-lg transform group-hover:scale-105 transition-transform duration-300"
                  style={{ height: '160px', width: '100%', objectFit: 'contain' }}
                />
                <h3 className="text-md font-semibold text-gray-800 mt-3">{scan.alt}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Demo Video Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-xl p-8 mb-12 text-white text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
            <span className="text-2xl">🎬</span>
          </div>
          <h2 className="text-2xl font-bold mb-3">
            Live System Demonstration
          </h2>
          <p className="text-purple-100 mb-6">
            See our ticketing system integration in action
          </p>
          
          <a 
            href="http://alphadigital.my/wp-content/uploads/2022/02/WhatsApp-Video-2022-02-12-at-9.49.18-AM.mp4" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <span className="mr-2">▶️</span>
            Watch Video Demo
          </a>
        </div>

        {/* Contact Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-4 shadow-md">
              <span className="text-xl">📞</span>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600">
              Contact us for a customized turnstile solution
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { href: "tel:+6062849931", src: "/placeholder-phone-button.png", alt: "Call +6062849931", label: "Phone", color: "from-blue-500 to-blue-600" },
              { href: "https://wa.me/+6062849931", src: "/placeholder-whatsapp-button.png", alt: "WhatsApp", label: "WhatsApp", color: "from-green-500 to-green-600" },
              { href: "mailto:alphadigital@yahoo.com", src: "/placeholder-email-button.png", alt: "Email", label: "Email", color: "from-red-500 to-red-600" },
              { href: "https://goo.gl/maps/XT66kTYe2huYH3zm9", src: "/placeholder-map-button.png", alt: "Map Location", label: "Location", color: "from-purple-500 to-purple-600" }
            ].map((button, index) => (
              <a 
                key={index}
                href={button.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${button.color} rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 mb-2`}>
                  <img 
                    src={button.src} 
                    alt={button.alt}
                    className="h-12 w-full object-contain mx-auto transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors duration-300">
                  {button.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Logo */}
        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 inline-block border border-white/20">
            <img 
              src="/placeholder-ad-logo.png" 
              alt="Alpha Digital"
              className="mx-auto transform hover:scale-105 transition-transform duration-300"
              style={{ height: '30px', width: '350px', maxWidth: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}