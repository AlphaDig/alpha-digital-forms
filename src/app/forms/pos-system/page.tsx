export default function POSSystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header with Horizontal Logo */}
        <div className="text-center mb-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mx-auto max-w-3xl border border-white/20">
            {/* Horizontal Logo Container */}
            <div className="mb-6 px-6 py-4">
              <img 
                src="/placeholder-ad-logo.png" 
                className="mx-auto transform hover:scale-105 transition-transform duration-300" 
                width={350}
                height={70}
                alt="Alpha Digital Logo"
                style={{ aspectRatio: '650 / 80' }}
              />
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
              Retail and Restaurant POS System
            </h3>
            <p className="text-gray-600">
              Complete Hardware, Software and Support Solutions
            </p>
          </div>
        </div>

        {/* Main Images Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-500 border border-white/20">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 mb-3">
              <img 
                src="/placeholder-adpos-fnb.png" 
                alt="ADPOS FNB"
                className="mx-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
                style={{ height: '160px', width: '100%', objectFit: 'contain' }}
              />
            </div>
            <h4 className="text-md font-semibold text-gray-800">F&B POS Solutions</h4>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-500 border border-white/20">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-4 mb-3">
              <img 
                src="/placeholder-android-pos.png" 
                alt="Android POS"
                className="mx-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
                style={{ height: '220px', width: '100%', objectFit: 'contain' }}
              />
            </div>
            <h4 className="text-md font-semibold text-gray-800">Android POS Systems</h4>
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="relative my-12">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md">
              SYSTEM FEATURES
            </span>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12 border border-white/20">
          <div className="text-center mb-8">
            <p className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Complete Hardware & Software Solutions for Retail and Restaurant
            </p>
          </div>
          
          {/* Benefits Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 mb-8 shadow-inner border border-blue-200/50">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full mb-2 shadow-md">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Benefits of Our System</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Most comprehensive POS system in Malaysia",
                "Plug and play - Simple to use",
                "Easy and low maintenance",
                "Data transfer via USB port",
                "E-Invoice, GST and SST Ready",
                "Cloud POS system option available"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-2 bg-white/80 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-xl p-6 shadow-inner border border-emerald-200/50">
            <div className="text-center mb-4">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-500 rounded-full mb-2 shadow-md">
                <span className="text-white font-bold text-sm">+</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Additional Hardware & Services</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                "Barcode Printers",
                "Barcode Scanners",
                "Receipt Printers", 
                "Cash Drawers",
                "Weighing Scales",
                "Receipt Paper",
                "Barcode Stickers",
                "Technical Support"
              ].map((service, index) => (
                <div key={index} className="text-center bg-white/80 rounded-lg p-3 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center mx-auto mb-1">
                    <span className="text-blue-600 font-bold text-xs">⌗</span>
                  </div>
                  <span className="text-gray-700 text-xs font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ADPOS System Header */}
        <div className="text-center mb-12">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl shadow-xl p-8 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                <span className="text-xl">💻</span>
              </div>
              <h1 className="text-3xl font-bold mb-3">ADPOS System</h1>
              <p className="text-blue-100">
                Advanced Retail and Restaurant Solutions
              </p>
            </div>
          </div>
        </div>

        {/* POS System Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-16">
          {[
            { src: "/placeholder-10-inch-adpos.png", alt: "10 Inch ADPOS", title: "10\" Touch POS" },
            { src: "/placeholder-10-inch-adpos-stand.png", alt: "10 Inch ADPOS Stand", title: "POS with Stand" },
            { src: "/placeholder-android-pos-transparent.png", alt: "Android POS", title: "Android POS" },
            { src: "/placeholder-untitled-pos.png", alt: "POS System", title: "Compact POS" },
            { src: "/placeholder-12-inch-adpos.png", alt: "12 Inch ADPOS", title: "12\" Display POS" },
            { src: "/placeholder-adpos-ecr.png", alt: "ADPOS ECR", title: "ECR System" },
            { src: "/placeholder-686a00-pos.png", alt: "POS System", title: "All-in-One POS" }
          ].map((image, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-white/20">
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-lg p-4 mb-3">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="mx-auto rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                  style={{ height: '150px', width: '100%', objectFit: 'contain' }}
                />
              </div>
              <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {image.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Accessories Section */}
        <div className="bg-gradient-to-r from-slate-800 to-gray-900 rounded-2xl shadow-xl p-8 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">Premium Accessories</h3>
            <p className="text-gray-300">
              TSC / Zebra / Honeywell / Posiflex
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <img 
                src="/placeholder-pos-accessories.png" 
                alt="POS Accessories"
                className="mx-auto rounded-lg"
                style={{ height: '300px', width: '100%', objectFit: 'contain' }}
              />
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 backdrop-blur-sm border border-white/10">
                <img 
                  src="/placeholder-weighing-scale.png" 
                  alt="Weighing Scale"
                  className="mx-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
                  style={{ height: '150px', width: '150px', objectFit: 'contain' }}
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Barcode Printers", "Scanners", "Receipt Printers", "Cash Drawers"].map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-3 text-center backdrop-blur-sm border border-white/10">
                    <span className="text-gray-200 text-xs font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-8 mb-16 border border-white/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 rounded-full mb-3 shadow-md">
              <span className="text-white text-lg">🎬</span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Video Demonstrations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { href: "https://youtu.be/cV-AIj8EosA", text: "Retail & FnB Demo Video", color: "from-blue-500 to-cyan-500" },
              { href: "https://youtu.be/lBRTIRIc7Ew", text: "Mobile Ordering Demo Video", color: "from-green-500 to-emerald-500" },
              { href: "https://youtu.be/4tdJbCrrmws", text: "QR Code Ordering Demo", color: "from-purple-500 to-pink-500" },
              { href: "https://form.jotform.com/222122257254447", text: "Ikan Bakar Restaurant POS", color: "from-orange-500 to-red-500" }
            ].map((video, index) => (
              <a 
                key={index}
                href={video.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`group bg-gradient-to-r ${video.color} rounded-xl p-6 text-white text-center shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:scale-105`}
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">📹</div>
                <h4 className="text-lg font-bold mb-2">{video.text}</h4>
                <p className="text-white/80 text-xs">Click to watch demonstration</p>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-3 shadow-md">
              <span className="text-white text-lg">📞</span>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
              Get In Touch
            </h2>
            <p className="text-gray-600">
              Ready to transform your business? Contact us today!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { href: "tel:+6062849931", src: "/placeholder-phone-button.png", alt: "Call +6062849931", label: "Phone" },
              { href: "https://wa.me/+6062849931", src: "/placeholder-whatsapp-button.png", alt: "WhatsApp", label: "WhatsApp" },
              { href: "https://goo.gl/maps/XT66kTYe2huYH3zm9", src: "/placeholder-map-button.png", alt: "Map Location", label: "Location" },
              { href: "mailto:alphadigital@yahoo.com", src: "/placeholder-email-button.png", alt: "Email", label: "Email" }
            ].map((button, index) => (
              <a 
                key={index}
                href={button.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group text-center transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 mb-2 border border-gray-100">
                  <img 
                    src={button.src} 
                    alt={button.alt}
                    className="h-12 w-full object-contain mx-auto transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-gray-700 font-medium text-sm group-hover:text-blue-600 transition-colors duration-300">
                  {button.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Logo */}
        <div className="text-center mt-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 inline-block">
            <img 
              src="/placeholder-adlogo.png" 
              className="mx-auto opacity-90" 
              width={250}
              height={50}
              alt="Alpha Digital Logo"
              style={{ aspectRatio: '250 / 50' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}