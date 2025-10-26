export default function POSSystemPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header with Horizontal Logo */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 mx-auto max-w-full sm:max-w-3xl lg:max-w-4xl border border-white/20">
            {/* Horizontal Logo Container */}
            <div className="mb-6 sm:mb-8 px-4 sm:px-8 py-4 sm:py-6">
              <img 
                src="/placeholder-ad-logo.png" 
                alt="Alpha Digital"
                className="mx-auto transform hover:scale-105 transition-transform duration-300 w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]"
                style={{ aspectRatio: '600 / 50' }}
              />
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              Retail and Restaurant POS System
            </h3>
            <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl">
              Complete Hardware, Software and Support Solutions
            </p>
          </div>
        </div>

        {/* Main Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-6 sm:p-8 text-center hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 border border-white/20">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
              <img 
                 src="/placeholder-adpos-fnb.png" 
                alt="ADPOS FNB"
                className="mx-auto rounded-lg sm:rounded-xl transform hover:scale-105 transition-transform duration-300 w-full h-[160px] sm:h-[180px] lg:h-[220px] object-contain"
              />
            </div>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">F&B POS Solutions</h4>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl p-6 sm:p-8 text-center hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 border border-white/20">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6">
              <img 
                src="/placeholder-android-pos.png" 
                alt="Android POS"
                className="mx-auto rounded-lg sm:rounded-xl transform hover:scale-105 transition-transform duration-300 w-full h-[200px] sm:h-[220px] lg:h-[260px] object-contain"
              />
            </div>
            <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Android POS Systems</h4>
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="relative my-12 sm:my-16 lg:my-20">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gray-300/50"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold shadow-lg">
              SYSTEM FEATURES
            </span>
          </div>
        </div>

        {/* Description Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-8 sm:p-12 mb-12 sm:mb-16 lg:mb-20 border border-white/20">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Complete Hardware & Software Solutions
            </p>
          </div>
          
          {/* Benefits Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-8 sm:mb-12 shadow-inner border border-blue-200/50">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full mb-4 shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">✓</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Benefits of Our System</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                "Most comprehensive POS system in Malaysia",
                "Plug and play - Simple to use",
                "Easy and low maintenance",
                "Data transfer via USB port",
                "E-Invoice, GST and SST Ready",
                "Cloud POS system option available"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3 bg-white/80 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-inner border border-emerald-200/50">
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-emerald-500 rounded-full mb-4 shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl">+</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Additional Hardware & Services</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
                <div key={index} className="text-center bg-white/80 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold text-lg">⌗</span>
                  </div>
                  <span className="text-gray-700 text-base sm:text-lg font-medium leading-tight">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ADPOS System Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white/20 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
                <span className="text-2xl sm:text-3xl">💻</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">ADPOS System</h1>
              <p className="text-blue-100 text-xl sm:text-2xl">
                Advanced Retail and Restaurant Solutions
              </p>
            </div>
          </div>
        </div>

        {/* POS System Gallery */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20 lg:mb-24">
          {[
            { src: "/placeholder-10-inch-adpos.png", alt: "10 Inch ADPOS", title: "10\" Touch POS" },
            { src: "/placeholder-10-inch-adpos-stand.png", alt: "10 Inch ADPOS Stand", title: "POS with Stand" },
            { src: "/placeholder-android-pos-transparent.png", alt: "Android POS", title: "Android POS" },
            { src: "/placeholder-untitled-pos.png", alt: "POS System", title: "Compact POS" },
            { src: "/placeholder-12-inch-adpos.png", alt: "12 Inch ADPOS", title: "12\" Display POS" },
            { src: "/placeholder-adpos-ecr.png", alt: "ADPOS ECR", title: "ECR System" },
            { src: "/placeholder-686a00-pos.png", alt: "POS System", title: "All-in-One POS" }
          ].map((image, index) => (
            <div key={index} className="group bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20">
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl p-4 sm:p-6 mb-4">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="mx-auto rounded-lg sm:rounded-xl transform group-hover:scale-110 transition-transform duration-500 w-full h-[140px] sm:h-[160px] lg:h-[180px] object-contain"
                />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {image.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Accessories Section */}
        <div className="bg-gradient-to-r from-slate-800 to-gray-900 rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-12 text-white mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Premium Accessories</h3>
            <p className="text-gray-300 text-xl sm:text-2xl">
              TSC / Zebra / Honeywell / Posiflex
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="bg-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 backdrop-blur-sm border border-white/10">
              <img 
                src="/placeholder-pos-accessories.png" 
                alt="POS Accessories"
                className="mx-auto rounded-lg sm:rounded-xl w-full h-[280px] sm:h-[320px] lg:h-[360px] object-contain"
              />
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm border border-white/10">
                <img 
                  src="/placeholder-weighing-scale.png" 
                  alt="Weighing Scale"
                  className="mx-auto rounded-lg sm:rounded-xl transform hover:scale-105 transition-transform duration-300 w-full max-w-[160px] sm:max-w-[180px] lg:max-w-[200px] h-[160px] sm:h-[180px] lg:h-[200px] object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {["Barcode Printers", "Scanners", "Receipt Printers", "Cash Drawers"].map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 sm:p-6 text-center backdrop-blur-sm border border-white/10">
                    <span className="text-gray-200 text-lg sm:text-xl font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-12 mb-16 sm:mb-20 lg:mb-24 border border-white/20">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-500 rounded-full mb-6 shadow-lg">
              <span className="text-white text-2xl sm:text-3xl">🎬</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Video Demonstrations
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
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
                className={`group bg-gradient-to-r ${video.color} rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}
              >
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">📹</div>
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{video.text}</h4>
                <p className="text-white/80 text-base sm:text-lg">Click to watch demonstration</p>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-12 border border-white/20">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-full mb-6 shadow-lg">
              <span className="text-white text-2xl sm:text-3xl">📞</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4 sm:mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-600 text-xl sm:text-2xl">
              Ready to transform your business? Contact us today!
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-full sm:max-w-4xl mx-auto">
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
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 mb-3 border border-gray-100">
                  <img 
                    src={button.src} 
                    alt={button.alt}
                    className="h-12 sm:h-16 lg:h-20 w-full object-contain mx-auto transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-gray-700 font-semibold text-lg sm:text-xl group-hover:text-blue-600 transition-colors duration-300">
                  {button.label}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}