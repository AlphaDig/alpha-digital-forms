export default function AlphaDigitalForm() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-8 px-4">
      <div className="max-w-4xl w-full">
        {/* Header Logo */}
        <div className="text-center mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 mx-auto max-w-md">
            <button type="button" className="mx-auto transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/placeholder-adlogo.png" 
                className="mx-auto" 
                width={200}
                height={86}
                alt="Alpha Digital Logo"
                style={{ aspectRatio: '200 / 86.1538' }}
              />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-white/95">
          {/* Company Header */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl py-4 px-6 shadow-md mb-4">
              <h2 className="text-2xl font-bold mb-1">
                ALPHA DIGITAL (M) SDN BHD
              </h2>
              <p className="text-blue-100">REG: 202001029665 (1385985-D)</p>
            </div>
            <p className="text-lg text-gray-700 font-medium">
              No: 31, Jalan Tun Perak, 75300 Melaka, Malaysia.
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { src: "/placeholder-phone-button.png", alt: "Call", href: "tel:+6062849931" },
              { src: "/placeholder-email-button.png", alt: "Email", href: "mailto:alphadigital@yahoo.com" },
              { src: "/placeholder-whatsapp-button.png", alt: "WhatsApp", href: "https://wa.me/message/TKZ2IEPZQ7BZH1" },
              { src: "/placeholder-map-button.png", alt: "Map", href: "https://goo.gl/maps/XT66kTYe2huYH3zm9" }
            ].map((button, index) => (
              <a 
                key={index}
                href={button.href} 
                rel="nofollow"
                className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden"
              >
                <img 
                  src={button.src} 
                  alt={button.alt}
                  width={140}
                  height={42}
                  className="rounded-lg"
                />
              </a>
            ))}
          </div>

          {/* Malaysia Digital Company Image */}
          <div className="text-center mb-8 bg-gray-50 rounded-xl p-6 shadow-inner">
            <img 
              src="/placeholder-whatsapp-digital-company.png" 
              alt="Malaysia Digital Company"
              className="mx-auto rounded-lg shadow-sm"
              width={500}
              height={226}
            />
          </div>

          {/* Divider */}
          <div className="text-center mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent w-3/4 mx-auto rounded-full"></div>
          </div>

          {/* Services Section */}
          <div className="text-center space-y-8">
            {/* Specialized Section */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
              <img 
                src="/placeholder-specialized-in.png" 
                alt="Specialized"
                className="mx-auto mb-4"
                width={300}
                height={104}
              />
              <h3 className="text-blue-600 text-xl font-bold mb-4 bg-white py-2 rounded-lg shadow-sm">
                iT Solutions & Services
              </h3>
              <img 
                src="/placeholder-main-project-structure.png" 
                alt="Project Structure"
                className="mx-auto mb-4 rounded-lg shadow-sm"
                width={200}
                height={152}
              />
              <p className="text-gray-700 leading-relaxed">
                We have a group of IT professionals to help you implement IT solutions and services for your business.
              </p>
            </div>

            {/* Divider */}
            <div className="text-center">
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent w-2/3 mx-auto rounded-full"></div>
            </div>

            {/* Manufacturing Solutions */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-blue-600 text-xl font-bold mb-4 bg-white py-2 rounded-lg shadow-sm">
                Manufacturing Information Solutions
              </h3>
              <div className="flex justify-center gap-4 mb-4 flex-wrap">
                {[
                  { src: "/placeholder-factory-clip-art.jpg", alt: "Factory", width: 150, height: 122 },
                  { src: "/placeholder-factory-idea.png", alt: "Factory Idea", width: 140, height: 134 },
                  { src: "/placeholder-pallet.png", alt: "Pallet", width: 140, height: 129 }
                ].map((img, index) => (
                  <img 
                    key={index}
                    src={img.src} 
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-3 leading-relaxed">
                We are developing software and customize according to your needs. Just provide your specification and process flow, we will develop the solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Types of services provided are Mobile Computing, Server Computing or Cloud Computing.
              </p>
            </div>

            {/* Continue with similar styling for other sections... */}

            {/* E-Ticketing Solutions */}
            <div className="bg-blue-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-blue-600 text-xl font-bold mb-4 bg-white py-2 rounded-lg shadow-sm">
                E-Ticketing Solutions
              </h3>
              <div className="flex justify-center gap-4 mb-4 flex-wrap">
                {[
                  { src: "/placeholder-wristband.jpg", alt: "Wristband", width: 120, height: 55 },
                  { src: "/placeholder-art-card.png", alt: "Art Card", width: 130, height: 62 },
                  { src: "/placeholder-scan-method-5.png", alt: "Scan Method", width: 130, height: 66 }
                ].map((img, index) => (
                  <img 
                    key={index}
                    src={img.src} 
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="rounded-lg shadow-sm"
                  />
                ))}
              </div>
              <a 
                href="http://alphadigital.my/wp-content/uploads/2022/02/WhatsApp-Video-2022-02-12-at-9.49.18-AM.mp4" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                rel="nofollow"
              >
                Click to Video
              </a>
            </div>

            {/* Continue styling other sections similarly... */}

          </div>

          {/* Website Links */}
          <div className="mt-8 space-y-4 bg-gray-50 rounded-xl p-6 shadow-sm">
            {[
              { label: "www.alphadigital.my", href: "http://www.alphadigital.my" },
              { label: "www.adpos.my", href: "http://www.adpos.my" }
            ].map((link, index) => (
              <p key={index} className="text-center">
                <span className="text-red-500 font-bold italic text-sm">GoTo&gt;</span>{' '}
                <a 
                  href={link.href} 
                  className="text-blue-600 hover:text-blue-800 underline text-lg font-medium transition-colors"
                  rel="nofollow"
                >
                  {link.label}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}