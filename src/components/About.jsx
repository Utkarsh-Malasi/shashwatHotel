import React from 'react'
import Image from './images/area5.avif'
import securityImage from './images/reception.avif'
import visionImage from './images/photo_2025-04-06_14-49-33.jpg'

const About = () => {

  
  return (
    <section id="about" className="pt-20 bg-gradient-to-b from-amber-100 to-primary-50">
      <div className="container mx-auto px-4">
        {/* About Our Hotel Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20 ">
          <div className="md:w-1/2 mt-8 md:mt-0 md:order-last transform transition-all duration-500 hover:scale-[1.02]">
            <div className="rounded-xl overflow-hidden shadow-card relative group">
              <img 
                src={Image} 
                alt="Hotel Reception" 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-600/90 to-transparent p-4">
                <div className="flex items-center text-white">
                  <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-medium">24/7 Secured Premises</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 mb-6 relative inline-block">
              <span className="relative z-10">About Our Hotel</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform -skew-x-12"></span>
            </h2>
            <div className="flex items-center mb-6 bg-gradient-to-r from-primary-50 to-primary-100 p-4 rounded-lg border-l-3 border-primary-500 shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
              <svg className="w-6 h-6 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span className="text-gray-700 font-medium">Certified Security Standards</span>
            </div>
            <p className="text-gray-600 mb-4">
              Welcome to Shashwat Hotels, where elegance meets comfort and security. Established in 2010, our hotel has been providing exceptional hospitality services with an unwavering commitment to guest safety and peace of mind.
            </p>
            <p className="text-gray-600 mb-4">
              Our commitment to excellence is reflected in every aspect of our service, from our meticulously designed rooms to our attentive staff who are dedicated to making your stay memorable and secure. All our staff undergo rigorous security training and background checks.
            </p>
            <p className="text-gray-600 mb-4">
              Located in the heart of the city, we offer easy access to major attractions, shopping centers, and business districts, making us the perfect choice for both leisure and business travelers.
            </p>
            <p className="text-gray-600 mb-6">
              Our state-of-the-art security systems include 24/7 surveillance, secure key card access to all rooms and facilities, and a dedicated security team patrolling the premises around the clock for your complete peace of mind.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-lg shadow-elegant transform transition-all duration-300 hover:shadow-card hover:-translate-y-2 border-l-3 border-amber-500">
                <div className="text-primary-600 font-bold text-3xl mb-2 font-serif">10+</div>
                <div className="text-gray-700 font-medium">Years of Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-lg shadow-elegant transform transition-all duration-300 hover:shadow-card hover:-translate-y-2 border-l-3 border-amber-500">
                <div className="text-primary-600 font-bold text-3xl mb-2 font-serif">100%</div>
                <div className="text-gray-700 font-medium">Secure Access</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-lg shadow-elegant transform transition-all duration-300 hover:shadow-card hover:-translate-y-2 border-l-3 border-amber-500">
                <div className="text-primary-600 font-bold text-3xl mb-2 font-serif">24/7</div>
                <div className="text-gray-700 font-medium">Security Monitoring</div>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-lg shadow-elegant transform transition-all duration-300 hover:shadow-card hover:-translate-y-2 border-l-3 border-amber-500">
                <div className="text-primary-600 font-bold text-3xl mb-2 font-serif">4.9/5</div>
                <div className="text-gray-700 font-medium">Safety Rating</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission and Vision Section */}
        <div className="mb-20 ">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-800 mb-4">Our Mission & Vision</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full shadow-sm"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission Section */}
            <div className="bg-gradient-to-br from-amber-300 to-amber-50 rounded-xl overflow-hidden shadow-card transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border-t border-amber-200">
              <div className="relative">
                <img 
                  src={securityImage} 
                  alt="Our Mission" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-700/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                    <svg className="w-6 h-6 text-white mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                    Our Mission
                  </h3>
                </div>
              </div>
              <div className="p-7">
                <p className="text-gray-700 mb-5 leading-relaxed">
                To establish Shashwat Hotels & Resorts as a symbol of trust and excellence in the value-driven hospitality sector. We aim to offer transformative experiences that exceed guest expectations while ensuring sustainable growth for our investors.Our mission is to transform every stayinto a WOW experience, ensuring guests feel valued and inspired.
                </p>
                <p className="text-gray-700 mb-5 leading-relaxed">
                  We are committed to creating a warm, welcoming environment where every guest feels valued and cared for. Our dedicated team strives to anticipate and fulfill the unique needs of each visitor, ensuring their stay is comfortable, memorable, and stress-free.
                </p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Deliver exceptional service that creates lasting memories
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Maintain the highest standards of cleanliness and comfort
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Embrace and showcase local culture and hospitality
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Vision Section */}
            <div className="bg-gradient-to-br from-amber-200 to-amber-50 rounded-xl overflow-hidden shadow-card transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border-t border-amber-200">
              <div className="relative">
                <img 
                  src={visionImage} 
                  alt="Our Vision" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-700/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                    <svg className="w-6 h-6 text-white mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                    </svg>
                    Our Vision
                  </h3>
                </div>
              </div>
              <div className="p-7">
                <p className="text-gray-700 mb-5 leading-relaxed">
                At Shashwat Hotels & Resorts, our vision is to redefine "True Value-Hospitality" by turning ordinary stays into extraordinary WOW-experiences. Anchored in India's rich cultural heritage and guided by the principle "Atithi Devo Bhavah," we are dedicated to creating unforgettable moments for every guest.
                </p>
                <p className="text-gray-700 mb-5 leading-relaxed">
                  We aspire to expand our presence globally while maintaining the personalized touch that defines the Shashwat Hotels experience. Through continuous innovation and adaptation to evolving guest preferences, we aim to remain at the forefront of the hospitality industry.
                </p>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Lead the industry in sustainable luxury hospitality
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Create innovative experiences that anticipate future trends
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-amber-600 mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Build a global presence while maintaining our commitment to excellence
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About