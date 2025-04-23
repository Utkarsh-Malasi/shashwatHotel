import React from 'react'
import { Link } from 'react-router-dom'
import room1Image from './images/superdeluxeRoom4.jpg'
import room5Image from './images/deluxeRoom3.jpg'
import premiumImage from './images/executiveRoom.jpg'

const Rooms = () => {
  const roomData = [
    {
      id: 1,
      name: 'Executive Suite - Forest View',
      image: premiumImage,
      price: '₹5500',
      description: 'Our most luxurious accommodation at Forest View, the #1 best luxury hotel in Mussoorie, with exclusive amenities and personalized service for an unforgettable stay.',
      features: ['King-sized bed', 'Living area', 'Premium bar', 'Butler service', 'Panoramic view', 'Biometric room access', 'Private security service'],
      link: '/rooms/executive'
    },
    {
      id: 2,
      name: 'Super Deluxe - Forest View',
      image: room1Image,
      price: '₹4500',
      description: 'Spacious suite at Shashwat Hotels Forest View with premium amenities, king-sized bed, and stunning mountain views in the heart of Mussoorie.',
      features: ['King-sized bed', 'Free Wi-Fi', 'Mini bar', 'Room service', 'Air conditioning', 'Electronic safe', 'Secure key card access'],
      link: '/rooms/superdeluxe'
    },
    {
      id: 3,
      name: 'Deluxe Room - Forest View',
      image: room5Image,
      price: '₹3500',
      description: 'Comfortable and elegant room at the best luxury hotel in Mussoorie with all essential amenities for a pleasant and relaxing mountain getaway.',
      features: ['Queen-sized bed', 'Free Wi-Fi', 'Work desk', 'Coffee maker', 'Air conditioning', 'In-room safe', 'Security alarm'],
      link: '/rooms/deluxe'
    }
  ];

  return (
    <section id="rooms" className="py-16 sm:py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 relative inline-block">
            <span className="relative z-10">Forest View Luxury Rooms</span>
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-amber-600 to-amber-400"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4 text-sm sm:text-base">Experience the #1 best luxury hotel in Mussoorie with our selection of premium rooms and suites at Shashwat Hotels Forest View, designed for your comfort, relaxation, and complete security during your stay.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 fade-in-delay-1">
          {roomData.map((room) => (
            <div key={room.id} className="bg-gradient-to-b from-white to-amber-50 rounded-lg overflow-hidden shadow-lg card-hover border border-amber-200">
              <div className="h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden img-hover-zoom">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
                />
              </div>
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">{room.name}</h3>
                  <span className="text-amber-600 font-bold text-lg sm:text-xl">{room.price}<span className="text-gray-500 text-xs sm:text-sm"> / night</span></span>
                </div>
                <p className="text-gray-600 mb-4 sm:mb-5 leading-relaxed text-sm sm:text-base">{room.description}</p>
                <div className="mb-5 sm:mb-6">
                  <h4 className="text-gray-800 font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Room Features:</h4>
                  <ul className="text-gray-600 grid grid-cols-1 sm:grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-1 sm:gap-y-2 text-sm sm:text-base">
                    {room.features.map((feature, index) => (
                      <li key={index} className="flex items-center transition-all duration-300 hover:text-amber-700">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600 mr-1 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to={room.link} 
                  className="block w-full text-center bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-all duration-300 btn-hover-effect shadow-lg shadow-amber-300/20 text-sm sm:text-base"
                >
                  <div className="flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path>
                    </svg>
                    View Details
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms