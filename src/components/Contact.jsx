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
    window.location.href = 'mailto:shashwathotel@gmail.com';
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
                    <p className="text-gray-600 font-bold">SHASHWAT GROUP OF HOTELS</p>
                    <p className="text-gray-600">Shop no.22 , Casa The Status , Near Ananya Vidhayala ,Chandkela - 382424</p>

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
                <a href="https://wa.me/919910597907" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-600 hover:text-white text-gray-600 p-3 rounded-full transition-colors">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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
                  href="https://www.makemytrip.com/hotels/hotel-details/?hotelId=201812021345122257&_uCurrency=INR&checkin=05232025&checkout=05242025&city=CTXMS&country=IN&lat=30.45826&lng=78.07053&locusId=CTXMS&locusType=city&rank=1&reference=hotel&rf=directSearch&roomStayQualifier=2e0e&rsc=1e2e0e&searchText=The+Forest+View+by+DL+Hotels+%26+Resorts&topHtlId=201812021345122257&type=hotel&mtkeys=undefined&isPropSearch=T" 
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
                  href="https://www.tripadvisor.in/Hotel_Review-g297689-d23268404-Reviews-The_Forest_View_By_Shashwat_Hotels-Mussoorie_Dehradun_District_Uttarakhand.html" 
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
                  href="https://www.agoda.com/hotel-forest-view-by-dl-hotels/hotel/mussoorie-in.html?countryId=35&finalPriceView=1&isShowMobileAppPrice=false&cid=1918349&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2025-08-10&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&los=1&searchrequestid=c692e0d4-decd-4d47-8f5e-fcc783b676e1&ds=QdgeQYvMndmVrrC1" 
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
                <img src="https://images.seeklogo.com/logo-png/28/2/booking-logo-png_seeklogo-286041.png?v=1962823536342987408" alt="Airbnb" className="h-12" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Book on Booking.com</h3>
                <p className="text-gray-600 mb-5">Book unique stays and experiences on Booking.com for your next trip.</p>
                <a 
                  href="https://www.booking.com/searchresults.en-gb.html?aid=356980&label=gog235jc-1BCAsobEIodGhlLWZvcmVzdC12aWV3LWJ5LWRsLWhvdGVscy1hbmQtcmVzb3J0c0gzWANobIgBAZgBCbgBF8gBDNgBAegBAYgCAagCA7gC95fpwAbAAgHSAiQyOWQ0N2FmZC04OWI5LTRkYjgtYjQ2My0yZTlmNTE4ZGRiNjLYAgXgAgE&highlighted_hotels=10992507&redirected=1&city=-2105202&hlrd=user_sh&source=hotel&expand_sb=1&keep_landing=1&sid=198057fd836a02f3409e709401ec503b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-4 rounded-md transition-all duration-300 text-center"
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