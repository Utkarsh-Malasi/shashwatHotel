import React from 'react'
import { Link } from 'react-router-dom'
import room1Image from '../images/room1.avif'
import bathroom3Image from '../images/bathroom3.jpg'
import bathroom4Image from '../images/bathroom4.jpg'

const Executive = () => {
  // Function to handle phone call booking
  const handleCallBooking = () => {
    window.location.href = 'tel:+15551234567';
  };

  return (
    <div className="pt-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center text-gray-500 text-sm mb-6 fade-in">
          <Link to="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/#rooms" className="hover:text-amber-600 transition-colors">Rooms</Link>
          <span className="mx-2">/</span>
          <span className="text-amber-600">Executive Room</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Room Images */}
          <div className="lg:col-span-2 fade-in">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-6 border border-amber-100">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={room1Image} 
                  alt="Executive Room" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
                <div className="absolute  bottom-0 right-0 bg-amber-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                  ₹5500 / night
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg h-48 border border-amber-100">
                <img 
                  src={bathroom3Image} 
                  alt="Executive Room Bathroom" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg h-48 border border-amber-100">
                <img 
                  src={bathroom4Image} 
                  alt="Executive Room Bathroom 2" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Room Details */}
          <div className="fade-in-delay-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 card-hover border border-amber-100">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Executive Room</h1>
              <div className="flex items-center mb-4">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 ml-2">5.0 (250 reviews)</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-4">
                <p className="text-gray-600 mb-4">
                  Indulge in the ultimate luxury experience in our Premium Suite. This expansive accommodation offers unparalleled comfort, breathtaking views, and exclusive amenities for the most discerning guests.
                </p>
                <p className="text-gray-600">
                  Featuring a separate living area, premium furnishings, and personalized service, our Premium Suite represents the pinnacle of hospitality.
                </p>
              </div>

              <button 
                onClick={handleCallBooking}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center mb-4 btn-hover-effect"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call to Book Now
              </button>

              <Link 
                to="/#rooms" 
                className="w-full block text-center bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 px-4 rounded-lg transition-colors border border-gray-200"
              >
                Back to All Rooms
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 card-hover border border-amber-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Room Details</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <p className="text-gray-800">Room Size</p>
                    <p className="text-gray-600">750 sq ft</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <p className="text-gray-800">Bed Type</p>
                    <p className="text-gray-600">1 King Bed + Sofa Bed</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <p className="text-gray-800">Occupancy</p>
                    <p className="text-gray-600">2 Adults</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <p className="text-gray-800">View</p>
                    <p className="text-gray-600">Panoramic Mountain View</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Room Amenities Section */}
        <div className="mt-8 fade-in-delay-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Premium Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-lg card-hover border border-amber-100">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-amber-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800">Ultra-Fast Wi-Fi</h3>
              </div>
              <p className="text-gray-600">Dedicated high-speed internet connection for seamless streaming and work.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg card-hover border border-amber-100">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-amber-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800">LED TV</h3>
              </div>
              <p className="text-gray-600">State-of-the-art LED television with dedicated sound system.</p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-lg card-hover border border-amber-100">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-amber-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800">Private Drinks</h3>
              </div>
              <p className="text-gray-600">Fully stocked premium stock with top-shelf spirits and fine drinks.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg card-hover border border-amber-100">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-amber-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800">Butler Service</h3>
              </div>
              <p className="text-gray-600">Dedicated butler service available 24/7 for all your needs.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-lg card-hover border border-amber-100">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-amber-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-800">Luxury  Bathroom</h3>
              </div>
              <p className="text-gray-600">Marble bathroom with shower, and luxury toiletries.</p>
            </div>
          </div>
        </div>

        {/* Premium Benefits Section */}
        <div className="mt-8 bg-amber-50 rounded-lg shadow-lg p-6 fade-in-delay-3 border border-amber-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Premium Guest Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Exclusive Services</h3>
              <ul className="space-y-2 text-gray-600">
            
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Priority restaurant reservations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Daily turndown services
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Premium Policies</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Flexible check-in and check-out times
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Free cancellation up to 72 hours before arrival
                </li>
             
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Access to exclusive Premium Lounge
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Executive