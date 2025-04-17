import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoImage from './images/Shlogo.png'
import './logo-styles.css'
import './header-styles.css'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll event to add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Function to handle booking button click - redirects to booking section
  const handleBookNow = () => {
    window.scrollTo(0, document.getElementById('booking')?.offsetTop || 0);
  };
  
  // Function to handle phone call booking
  const handleCallBooking = () => {
    window.location.href = 'tel:+91-9910597907';
  };

  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
   <>
   <div className="relative"> 
      <div className="fixed top-11 left-0 right-0 z-50 w-full">
     <div className="w-full max-w-[2000px] mx-auto">
       {/* Removed window.innerWidth check for padding */}
       <div className={`w-full h-[70px] md:h-[75px] lg:h-[90px] header-fixed backdrop-blur-md flex justify-between items-center bg-amber-50/80 px-4 sm:px-5 md:px-6 lg:px-12 ${scrolled ? 'header-shadow' : 'border-b border-amber-100'} transition-all duration-300 ease-in-out`}>
         <div className='flex items-center space-x-1 md:space-x-2'>
           <Link to="/" onClick={() => window.scrollTo(0, 0)} className="logo-container flex items-center">
             {/* Removed window.innerWidth check for logo size */}
             <div className={`logo-circular w-10 h-10 md:w-12 md:h-12`}>
               <img src={logoImage} alt="Hotel Logo" className='logo-image' />
             </div>
             <div className="logo-text hidden md:block ml-2 lg:ml-4">
               {/* Removed window.innerWidth check for text size */}
               <h1 className={`text-base md:text-lg lg:text-2xl font-semibold`}>
                 <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 text-transparent bg-clip-text font-bold">Shashwat</span>
                 <span> </span>
                 <span className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-500 text-transparent bg-clip-text font-bold">Hotels</span>
               </h1>
             </div>
           </Link>
         </div>
         
         {/* Desktop Navigation - Changed breakpoint from md to lg */}
         <div className='hidden lg:flex justify-around md:gap-2 lg:gap-5'>
           <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-amber-500 hover:text-black hover:shadow-amber-300 hover:bg-amber-200 hover:backdrop-blur-lg rounded-md font-bold transition-all duration-300 py-2 md:py-2 lg:py-3 px-2 md:px-2.5 lg:px-4 relative group text-sm md:text-sm lg:text-base">
             Home
             <span className="absolute bottom-0 left-0 w-0 h-0.8 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full group-hover:h-1 rounded-full"></span>
           </Link>
           <Link to="/" onClick={() => { window.scrollTo(0, document.getElementById('about')?.offsetTop || 0); }} className="text-amber-500 hover:text-black hover:shadow-amber-300 hover:bg-amber-200 hover:backdrop-blur-lg rounded-md font-bold transition-all duration-300 py-2 md:py-2.5 lg:py-3 px-2.5 md:px-3 lg:px-4 relative group text-sm md:text-base">
             About Us
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full group-hover:h-1 rounded-full"></span>
           </Link>
           <Link to="/" onClick={() => { window.scrollTo(0, document.getElementById('rooms')?.offsetTop || 0); }} className="text-amber-500 hover:text-black hover:shadow-amber-300 hover:bg-amber-200 hover:backdrop-blur-lg rounded-md font-bold transition-all duration-300 py-2 md:py-2.5 lg:py-3 px-2.5 md:px-3 lg:px-4 relative group text-sm md:text-base">
             Rooms
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full group-hover:h-1 rounded-full"></span>
           </Link>
           <Link to="/" onClick={() => { window.scrollTo(0, document.getElementById('amenities')?.offsetTop || 0); }} className="text-amber-500 hover:text-black hover:shadow-amber-300 hover:bg-amber-200 hover:backdrop-blur-lg rounded-md font-bold transition-all duration-300 py-2 md:py-2.5 lg:py-3 px-2.5 md:px-3 lg:px-4 relative group text-sm md:text-base">
             Amenities
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full group-hover:h-1 rounded-full"></span>
           </Link>
           <Link to="/" onClick={() => { window.scrollTo(0, document.getElementById('contact')?.offsetTop || 0); }} className="text-amber-500 hover:text-black hover:shadow-amber-300 hover:bg-amber-200 hover:backdrop-blur-lg rounded-md font-bold transition-all duration-300 py-2 md:py-2.5 lg:py-3 px-2.5 md:px-3 lg:px-4 relative group text-sm md:text-base">
             Contact
             <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-300 group-hover:w-full group-hover:h-1 rounded-full"></span>
           </Link>
           <button 
             onClick={handleCallBooking}
             className="border-amber-500 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-semibold py-2 md:py-2 lg:py-3 px-3 md:px-4 lg:px-6 rounded-lg transition-all duration-300 flex items-center shadow-lg shadow-amber-600/30 transform hover:-translate-y-1 border hover:bg-amber-300 hover:text-black text-sm md:text-sm lg:text-base ml-1 md:ml-2">
             <svg className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 mr-1.5 md:mr-2" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
             </svg>
             Book Now
           </button>
         </div>
         
         {/* Mobile Menu Button - Changed breakpoint from md to lg */}
         <div className="lg:hidden">
           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="mobile-menu-button text-amber-700 p-2 rounded-md hover:bg-amber-100 transition-all duration-300 shadow-md border border-amber-200">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
             </svg>
           </button>
         </div>
         
         {/* Mobile Menu Overlay */}
         <div className={`fixed inset-0 z-1200 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm mobile-menu-overlay" onClick={closeMenu}></div>
           <div className={`absolute right-0 h-full w-72 bg-amber-50 mobile-menu-panel transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
             <div className="p-4 space-y-3 bg-amber-50">
               <button onClick={closeMenu} className="absolute top-3 right-3 text-amber-700 hover:text-amber-900">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                 </svg>
               </button>
               <div className="space-y-3 mt-6">
                 <Link to="/" onClick={() => { closeMenu(); window.scrollTo(0, 0); }} className="bg-amber-200/50 block text-amber-700 hover:text-black hover:bg-amber-300 rounded-md font-bold py-1.5 px-3 transition-all duration-300 text-sm">
                   Home
                 </Link>
                 <Link to="/" onClick={() => { closeMenu(); window.scrollTo(0, document.getElementById('about')?.offsetTop || 0); }} className="bg-amber-200/50 block text-amber-700 hover:text-black hover:bg-amber-300 rounded-md font-bold py-1.5 px-3 transition-all duration-300 text-sm">
                   About Us
                 </Link>
                 <Link to="/" onClick={() => { closeMenu(); window.scrollTo(0, document.getElementById('rooms')?.offsetTop || 0); }} className="bg-amber-200/50 block text-amber-700 hover:text-black hover:bg-amber-300 rounded-md font-bold py-1.5 px-3 transition-all duration-300 text-sm">
                   Rooms
                 </Link>
                 <Link to="/" onClick={() => { closeMenu(); window.scrollTo(0, document.getElementById('amenities')?.offsetTop || 0); }} className="bg-amber-200/50 block text-amber-700 hover:text-black hover:bg-amber-300 rounded-md font-bold py-1.5 px-3 transition-all duration-300 text-sm">
                   Amenities
                 </Link>
                 <Link to="/" onClick={() => { closeMenu(); window.scrollTo(0, document.getElementById('contact')?.offsetTop || 0); }} className="bg-amber-200/50 block text-amber-700 hover:text-black hover:bg-amber-300 rounded-md font-bold py-1.5 px-3 transition-all duration-300 text-sm">
                   Contact
                 </Link>
                 <button onClick={() => { closeMenu(); handleBookNow(); }} className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-amber-600/20 text-sm mt-2">
                   <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                   </svg>
                   Book Now
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
   </div>
   </>
  );
} 
export default Header