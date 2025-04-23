import React from 'react'
import rest1Image from './images/lobby.jpg'
import CallButtons from './CallButtons';

const Contact = () => {
  // Function to handle phone call
  const handleCall = () => {
    window.location.href = 'tel:+919910597907';
  };
  
  // Function to handle email
  const handleEmail = () => {
    window.location.href = 'mailto:info@luxuryhotel.com';
  };
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 relative inline-block">
            <span className="relative z-10">Contact Us</span>
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-amber-500 to-amber-300"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4">Have questions or want to make a special request? Reach out to our friendly team.</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 fade-in-delay-1">
          <div className="md:w-1/2 bg-gradient-to-b from-white to-blue-50 rounded-lg overflow-hidden shadow-lg card-hover border border-blue-100">
            <div className="h-64 overflow-hidden img-hover-zoom">
              <img 
                src={rest1Image} 
                alt="Hotel Lobby" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-5 relative inline-block">
                <span>Get In Touch</span>
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-amber-500"></span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-800 font-medium">Address</p>
                    <p className="text-gray-600">1st Floor,Prakash Complex, Opp. Radha Krishna Mandir Veraval 363365</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-gray-800 font-medium">Phone</p>
                    <p className="text-gray-600">+919910597907</p>
                  </div>
                </div>
                
                               <div className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-gray-800 font-medium">Email</p>
                    <p className="text-gray-600">shashwathotel@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 bg-gradient-to-b from-white to-blue-50 rounded-lg shadow-lg p-8 border border-blue-100 fade-in-delay-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 relative inline-block">
              <span>Connect With Us</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h3>
            
            {/* Direct Contact Buttons */}
            <div className="mb-8 space-y-5">
              <button 
                onClick={handleCall}
                className="w-full flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-semibold py-3 px-4 rounded-md transition-all duration-300 shadow-lg shadow-amber-300/20 btn-hover-effect"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </button>
              
              <button 
                onClick={handleEmail}
                className="w-full flex items-center justify-center bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-3 px-4 rounded-md transition-all duration-300 shadow-lg shadow-blue-100/20 btn-hover-effect"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </button>
              <CallButtons/>
            </div>
            
            {/* Social Media Section */}
            <div>
              <h4 className="text-lg font-bold text-gray-800 mb-5 relative inline-block">
                <span>Follow Us</span>
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-amber-500"></span>
              </h4>
              <div className="flex space-x-5">
                {/* Facebook */}
                <a href="https://www.facebook.com/share/p/JSpp5HREMMrwqZon/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer" className="bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-600 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                
                {/* Instagram */}
                <a href="https://www.instagram.com/shashwat_mussorie?utm_source=qr&igsh=cnQ2NjlpZzFxNnVl" target="_blank" rel="noopener noreferrer" className="bg-pink-100 hover:bg-pink-600 hover:text-white text-pink-600 p-3 rounded-full transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
                
                {/* Twitter/X */}
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-600 hover:text-white text-gray-600 p-3 rounded-full transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                {/* LinkedIn 
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-100 hover:bg-blue-700 hover:text-white text-blue-700 p-3 rounded-full transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>*/}
              </div>
            </div>
          </div>
        </div>
        
        {/* Booking Section */}
        <div id="booking" className="mt-20 fade-in-delay-3">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 relative inline-block">
              <span className="relative z-10">Book Your Stay</span>
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-amber-500 to-amber-300"></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4">Reserve your room at Grand Valley Hotel Mussoorie through your preferred booking platform.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* makemytrip */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-blue-100">
            <div className="h-20 bg-gradient-to-r from-blue-700 to-blue-500 flex items-center justify-center">
                <img src="data:image/png;base64,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" alt="Agoda" className="h-12" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Book on Make my trip </h3>
                <p className="text-gray-600 mb-5">Access exclusive deals and earn rewards with Booking.com's loyalty program.</p>
                <a 
                  href="https://www.makemytrip.com/hotels/shashwat_grand_valley-details-mussoorie.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition-all duration-300 text-center"
                >
                  Book Now
                </a>
              </div>
            </div>
            {/* TripAdvisor */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-green-100">
            <div className="h-20 bg-gradient-to-r from-green-700 to-green-500 flex items-center justify-center">
                <img src="data:image/png;base64,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" alt="Trip Adviser" className="h-12" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Book on TripAdvisor</h3>
                <p className="text-gray-600 mb-5">Read reviews, compare prices, and find the best deals from multiple booking sites.</p>
                <a 
                  href="https://www.tripadvisor.in/Hotel_Review-g297689-d28105936-Reviews-Shashwat_Grand_Valley-Mussoorie_Dehradun_District_Uttarakhand.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-md transition-all duration-300 text-center"
                >
                  Book Now
                </a>
              </div>
            </div>
            {/* Agoda */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100">
              <div className="h-20 bg-gradient-to-r from-gray-700 to-gray-500 flex items-center justify-center">
                <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="Agoda" className="h-12" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Book on Agoda</h3>
                <p className="text-gray-600 mb-5">Find great deals and instant confirmation on Agoda for your stay.</p>
                <a 
                  href="https://www.agoda.com/en-in/search?city=17094&hotel=grand-valley-mussoorie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-4 rounded-md transition-all duration-300 text-center"
                >
                  Book Now
                </a>
              </div>
            </div>
            {/* Airbnb */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-pink-100">
              <div className="h-20 bg-gradient-to-r from-pink-500 to-pink-400 flex items-center justify-center">
                <img src="https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png" alt="Airbnb" className="h-12" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Book on Airbnb</h3>
                <p className="text-gray-600 mb-5">Book unique stays and experiences on Airbnb for your next trip.</p>
                <a 
                  href="https://www.airbnb.co.in/rooms/1094797289460010397?source_impression_id=p3_1744797732_P3ZZ6U_-nXqaYI8G" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-md transition-all duration-300 text-center"
                >
                  Book Now
                </a>
              </div>
            </div>
            {/* goibibo */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-orange-100">
              <div className="h-20  bg-gradient-to-r from-orange-500 to-orange-400 flex items-center justify-center">
                <img  src="data:image/jpeg;base64,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" alt="Goibibo" className="h-12" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Book on Justdial</h3>
                <p className="text-gray-600 mb-5">Contact and book directly via Goibibo for instant assistance.</p>
                <a 
                  href="https://www.goibibo.com/hotels/shashwat-grand-valley-hotel-in-mussoorie-7073631944539546424/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-md transition-all duration-300 text-center"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Contact