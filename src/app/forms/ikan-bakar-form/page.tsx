export default function IkanBakarForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header with Horizontal Logo */}
        <div className="text-center mb-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 mx-auto max-w-3xl border border-white/20">
            {/* Horizontal Logo Container */}
            <div className="mb-6 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-md">
              <img 
                src="/placeholder-ad-logo.png" 
                className="mx-auto transform hover:scale-105 transition-transform duration-300" 
                width={400}
                height={40}
                alt="Ikan Bakar POS System Logo"
                style={{ aspectRatio: '400 / 40' }}
              />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
              Ikan Bakar Restaurant POS System
            </h1>
            <p className="text-lg text-gray-600">
              Specialized Seafood Restaurant Management Solution
            </p>
          </div>
        </div>

        {/* Main Form Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-10 border border-white/20">
          {/* System Structure Image */}
          <div className="text-center mb-10">
            <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-6 shadow-inner border border-orange-200/50">
              <img 
                src="/placeholder-ikan-bakar-structure.png" 
                alt="System Structure"
                className="mx-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
                width={600}
                height={340}
              />
            </div>
          </div>

          {/* Elegant Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-orange-300/50"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md">
                SYSTEM BENEFITS
              </span>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-10">
            {/* Malay Benefits */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-6 mb-8 shadow-inner border border-orange-200/50">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full mb-2 shadow-md">
                  <span className="text-white font-bold text-sm">🍽️</span>
                </div>
                <h3 className="text-xl font-bold text-orange-700 mb-3">
                  Faedah dari Sistem Ini
                </h3>
              </div>
              
              <div className="space-y-3">
                {[
                  "Secara Automatik: Item (Sea Food), Berat & Harga dari Mesin Timbang akan ditransaksi ke dalam Bil Pelanggan. Cara ini yang terbaik untuk mengelakkan Item (Sea Food) kurang caj di Bil Pelanggan kerana salah pengendalian nota kepada juruwang.",
                  "Dapur akan diberitahu oleh sistem jenis masakan dan nombor maje.",
                  "Harga item (Sea Food) boleh dikemas kini bila-bila masa di PC Server dan sistem automatik kemas kini kepada juruwang & mesin timbang."
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white/80 rounded-lg p-3 shadow-sm">
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* English Benefits */}
            <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-xl p-6 shadow-inner border border-red-200/50">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-red-500 rounded-full mb-2 shadow-md">
                  <span className="text-white font-bold text-sm">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-red-700 mb-3">
                  Benefits of this System
                </h3>
              </div>
              
              <div className="space-y-3">
                {[
                  "Scale transaction's will be auto transferred into Table Bill. Item, Weigh and Price. This will avoid missing item charge into Table Bill due to mishandling note to cashier.",
                  "Chefs/Cooks will be able to know the type of cooking from the kitchen note.",
                  "Sea Food selling price can be updated at PC Server anytime and auto update to Cashier and Scale."
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white/80 rounded-lg p-3 shadow-sm">
                    <div className="flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scale Software Section */}
          <div className="text-center mb-10">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg p-6 text-white mb-6">
              <h2 className="text-2xl font-bold mb-2">
                Scale Software (Timbang)
              </h2>
              <p className="text-orange-100">Advanced Weighing System Integration</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-inner border border-gray-200/50">
              <img 
                src="/placeholder-ikan-bakar-system.png" 
                alt="Software"
                className="mx-auto rounded-lg shadow-md"
                width={600}
                height={750}
              />
            </div>
          </div>

          {/* Receipt Section */}
          <div className="mb-10">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">
                  Receipt, Bar Note & Kitchen Note
                </h2>
                <p className="text-green-100 text-sm">Complete Documentation System</p>
              </div>
            </div>

            {/* Receipt Images Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-xl p-4 shadow-inner border border-blue-200/50">
                <img 
                  src="/placeholder-receipt.png" 
                  alt="Receipt"
                  className="mx-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                  width={500}
                  height={820}
                />
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-4 shadow-inner border border-purple-200/50">
                  <img 
                    src="/placeholder-scale-note.png" 
                    alt="Scale Note"
                    className="mx-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                    width={280}
                    height={200}
                  />
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-4 shadow-inner border border-yellow-200/50">
                  <img 
                    src="/placeholder-bar-note.png" 
                    alt="Bar Note"
                    className="mx-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                    width={300}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Demo Section */}
          <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-xl p-6 mb-10 shadow-inner border border-red-200/50">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 rounded-full mb-3 shadow-md">
                <span className="text-white text-lg">🎬</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Demo on the Ikan Bakar Scale POS System
              </h2>
              <p className="text-gray-600 mb-4">Click Video link below</p>
              
              <a 
                href="https://bit.ly/3zMYzwX" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
                rel="nofollow"
              >
                <span className="mr-2">📹</span>
                VIDEO DEMO
              </a>
            </div>
          </div>

          {/* Hardware/Software Section */}
          <div className="text-center mb-10">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl shadow-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-3">
                We provide hardware and software for Ikan Bakar Restaurant Solutions.
              </h2>
              <p className="text-gray-300 text-sm">Complete end-to-end restaurant management system</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border border-gray-200/50">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full mb-3 shadow-md">
                <span className="text-white text-lg">📞</span>
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                Contact Information
              </h2>
              <p className="text-gray-600">
                Ready to transform your restaurant? Contact us today!
              </p>
            </div>

            {/* Contact Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                { href: "tel:+6062849931", src: "/placeholder-phone-button.png", alt: "Call", label: "Phone" },
                { href: "https://wa.me/+6062849931", src: "/placeholder-whatsapp-button.png", alt: "WhatsApp", label: "WhatsApp" },
                { href: "mailto:alphadigital@yahoo.com", src: "/placeholder-email-button.png", alt: "Email", label: "Email" },
                { href: "https://goo.gl/maps/XT66kTYe2huYH3zm9", src: "/placeholder-map-button.png", alt: "Map", label: "Location" }
              ].map((button, index) => (
                <a 
                  key={index}
                  href={button.href} 
                  rel="nofollow"
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
        </div>

        {/* Footer Logo */}
        <div className="text-center mt-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 inline-block">
            <img 
              src="/placeholder-ad-logo.png" 
              className="mx-auto opacity-90" 
              width={300}
              height={30}
              alt="Ikan Bakar POS System Logo"
              style={{ aspectRatio: '300 / 30' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}