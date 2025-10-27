'use client'
import { useEffect } from "react";

export default function AlphaDigitalForm() {

  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-4 sm:py-6 lg:py-8 px-3 sm:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="  p-4 sm:p-6 mx-auto max-w-full sm:max-w-md border border-white/20">
            <button type="button" className="mx-auto transform hover:scale-105 transition-transform duration-300">
              <img 
                src="/placeholder-adlogo.png" 
                className="mx-auto w-full max-w-[180px] sm:max-w-[200px] lg:max-w-[220px]" 
                alt="Alpha Digital Logo"
                style={{ aspectRatio: '220 / 95' }}
              />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 border border-white/20">
          {/* Company Header */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg sm:rounded-xl py-3 sm:py-4 px-4 sm:px-6 shadow-md mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">
                ALPHA DIGITAL (M) SDN BHD
              </h2>
              <p className="text-blue-100 text-xs sm:text-sm">REG: 202001029665 (1385985-D)</p>
            </div>
            <p className="text-gray-700 font-medium text-sm sm:text-base lg:text-lg">
              No: 31, Jalan Tun Perak, 75300 Melaka, Malaysia.
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
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
                className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg rounded-lg overflow-hidden flex-shrink-0"
              >
                <img 
                  src={button.src} 
                  alt={button.alt}
                  className="rounded-lg w-[170px] sm:w-[160px] lg:w-[160px] h-[36px] sm:h-[38px] lg:h-[42px] object-cover"
                />
              </a>
            ))}
          </div>

          {/* Malaysia Digital Company Image */}
          <div className="text-center mb-6 sm:mb-8 bg-gray-50/80 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-inner border border-gray-200/50">
            <img 
              src="/placeholder-whatsapp-digital-company.png" 
              alt="Malaysia Digital Company"
              className="mx-auto rounded-lg shadow-sm w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px]"
              style={{ aspectRatio: '500 / 226' }}
            />
          </div>

          {/* Divider */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent w-3/4 mx-auto rounded-full"></div>
          </div>

          {/* Services Section */}
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Specialized Section */}
            <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-blue-200/50">
              <img 
                src="/placeholder-specialized-in.png" 
                alt="Specialized"
                className="mx-auto mb-3 sm:mb-4 w-full max-w-[250px] sm:max-w-[280px] lg:max-w-[300px]"
                style={{ aspectRatio: '300 / 104' }}
              />
              <h3 className="text-blue-600 text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-white/80 py-2 rounded-lg shadow-sm">
                iT Solutions & Services
              </h3>
              <img 
                src="/placeholder-main-project-structure.png" 
                alt="Project Structure"
                className="mx-auto mb-3 sm:mb-4 rounded-lg shadow-sm w-full max-w-[160px] sm:max-w-[180px] lg:max-w-[200px]"
                style={{ aspectRatio: '200 / 152' }}
              />
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                We have a group of IT professionals to help you implement IT solutions and services for your business.
              </p>
            </div>

            {/* Divider */}
            <div className="text-center">
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent w-2/3 mx-auto rounded-full"></div>
            </div>

            {/* Manufacturing Solutions */}
            <div className="bg-gray-50/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200/50">
              <h3 className="text-blue-600 text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-white/80 py-2 rounded-lg shadow-sm">
                Manufacturing Information Solutions
              </h3>
              <div className="flex justify-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
                {[
                  { src: "/placeholder-factory-clip-art.jpg", alt: "Factory" },
                  { src: "/placeholder-factory-idea.png", alt: "Factory Idea" },
                  { src: "/placeholder-pallet.png", alt: "Pallet" }
                ].map((img, index) => (
                  <img 
                    key={index}
                    src={img.src} 
                    alt={img.alt}
                    className="rounded-lg shadow-sm hover:shadow-md transition-shadow w-[100px] sm:w-[120px] lg:w-[140px] h-auto"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base">
                We are developing software and customize according to your needs. Just provide your specification and process flow, we will develop the solutions.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Types of services provided are Mobile Computing, Server Computing or Cloud Computing.
              </p>
            </div>

            {/* Divider */}
            <div className="text-center">
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent w-2/3 mx-auto rounded-full"></div>
            </div>

            {/* E-Ticketing Solutions */}
            <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-blue-200/50">
              <h3 className="text-blue-600 text-lg sm:text-xl font-bold mb-3 sm:mb-4 bg-white/80 py-2 rounded-lg shadow-sm">
                E-Ticketing Solutions
              </h3>
              <div className="flex justify-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
                {[
                  { src: "/placeholder-wristband.jpg", alt: "Wristband" },
                  { src: "/placeholder-art-card.png", alt: "Art Card" },
                  { src: "/placeholder-scan-method-5.png", alt: "Scan Method" }
                ].map((img, index) => (
                  <img 
                    key={index}
                    src={img.src} 
                    alt={img.alt}
                    className="rounded-lg shadow-sm w-[90px] sm:w-[100px] lg:w-[120px] h-auto"
                  />
                ))}
              </div>
              <a 
                href="http://alphadigital.my/wp-content/uploads/2022/02/WhatsApp-Video-2022-02-12-at-9.49.18-AM.mp4" 
                className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-sm sm:text-base font-medium"
                rel="nofollow"
              >
                Click to Video
              </a>
            </div>

            {/* Add more sections with similar responsive styling... */}

            {/* Turnstile & Speed Gate Section */}
            <div className="bg-gray-50/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200/50">
              <a 
                href="https://form.jotform.com/222111230034028" 
                className="text-blue-600 hover:text-blue-800 underline text-lg sm:text-xl font-bold mb-3 sm:mb-4 block transition-colors"
                rel="nofollow"
              >
                Turnstile & Speed Gate Access Solutions
              </a>
              <div className="flex justify-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
                {[
                  { src: "/placeholder-speed-gate.png", alt: "Speed Gate" },
                  { src: "/placeholder-turnstile.png", alt: "Turnstile" },
                  { src: "/placeholder-turnstile-05.png", alt: "Turnstile 05" }
                ].map((img, index) => (
                  <img 
                    key={index}
                    src={img.src} 
                    alt={img.alt}
                    className="rounded-lg shadow-sm w-[80px] sm:w-[90px] lg:w-[100px] h-auto"
                  />
                ))}
              </div>
              <a 
                href="https://drive.google.com/file/d/1JeVIIsZtre2wl2kRo47ZNk9y32mP9NmA/view?usp=sharing" 
                className="text-blue-600 hover:text-blue-800 underline text-sm sm:text-base transition-colors"
                rel="nofollow"
              >
                Click to Detail
              </a>
            </div>

            {/* Divider */}
            <div className="text-center">
              <div className="h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent w-2/3 mx-auto rounded-full"></div>
            </div>

            {/* POS Solutions */}
            <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-blue-200/50">
              <a 
                href="https://form.jotform.com/222124273264448" 
                className="text-blue-600 hover:text-blue-800 underline text-lg sm:text-xl font-bold mb-3 sm:mb-4 block transition-colors"
                rel="nofollow"
              >
                Account, Stock Control, Retail & FnB POS
              </a>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                {[
                  { src: "/placeholder-imin-swan1png", alt: "Imin Swan" },
                  { src: "/placeholder-adpos-transparent.png", alt: "ADPOS" },
                  { src: "/placeholder-c86a-front-and-back.jpg", alt: "C86A" },
                  { src: "/placeholder-cas-weight-scale.jpg", alt: "CAS Scale" },
                  { src: "/placeholder-mmexport.jpg", alt: "Mobile Export" }
                ].map((img, index) => (
                  <img 
                    key={index}
                    src={img.src} 
                    alt={img.alt}
                    className="rounded-lg shadow-sm w-[70px] sm:w-[80px] lg:w-[90px] h-auto"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed max-w-4xl mx-auto">
                Point of Sales: Cash collection, Inventory Management and Business Intelligence – all in one place. Seamless integration makes it easy to sell your products and accept multiple payments.
              </p>
            </div>

          </div>

          {/* Website Links */}
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 bg-gray-50/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200/50">
            {[
              { label: "www.alphadigital.my", href: "http://www.alphadigital.my" },
              { label: "www.adpos.my", href: "http://www.adpos.my" }
            ].map((link, index) => (
              <p key={index} className="text-center">
                <span className="text-red-500 font-bold italic text-xs sm:text-sm">GoTo&gt;</span>{' '}
                <a 
                  href={link.href} 
                  className="text-blue-600 hover:text-blue-800 underline text-base sm:text-lg font-medium transition-colors"
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