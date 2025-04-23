import React from 'react'
import roomImage from './images/executiveRoom.jpg'

const Hero = () => {

  
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {/* Hero Image with enhanced overlay */}
      <div className="absolute inset-0">
        <img 
          src={roomImage} 
          alt="#1 Best Luxury Hotel in Mussoorie - Forest View by Shashwat Hotels" 
          className="w-full h-full object-cover brightness-[0.85] transition-all duration-700 transform scale-105 hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/20"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <h1 className="pt-18 sm:pt-24 md:pt-30 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6  tracking-tight drop-shadow-lg">
          <span className="font-serif">Experience Luxury</span> in
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-400 font-bold ml-2">Mussoorie</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-4 sm:mb-6 md:mb-8 max-w-3xl  leading-relaxed font-light drop-shadow-md px-2 sm:px-4 md:px-6">
          Discover the perfect blend of elegance, comfort, and breathtaking mountain views at Shashwat Hotels Forest View - the #1 best luxury hotel in Mussoorie where every stay becomes an unforgettable experience.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5  w-full max-w-2xl mx-auto px-2 sm:px-4 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-4 sm:mb-0 p-2 sm:p-3 md:p-4 rounded-xl border border-amber-300/50 bg-black/30 backdrop-blur-sm shadow-elegant gold-shimmer">
            <div className="flex items-center gap-2">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
              </svg>
              <span className="text-white text-xs sm:text-sm md:text-base font-medium">24/7 Security</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001z" clipRule="evenodd"></path>
              </svg>
              <span className="text-white text-xs sm:text-sm md:text-base font-medium">Mountain Views</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 sm:w-5 h-4 sm:h-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
              <span className="text-white text-xs sm:text-sm md:text-base font-medium">Luxury Experience</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full mb-4 sm:mb-0">
            <a 
              href="#rooms" 
              className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-amber-600/20 btn-hover-effect flex items-center justify-center"
            >
              Explore Rooms
            </a>
            <a 
              href="#contact" 
              className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-3 px-4 rounded-lg transition-colors border border-white/30 shadow-lg shadow-black/5 btn-hover-effect flex items-center justify-center "
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero