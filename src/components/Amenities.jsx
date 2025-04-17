import React from 'react'


// Import images for amenity categories
import parkingImage from './images/photo_2025-04-06_14-49-33.jpg'
import spaImage from './images/area5.avif'
import restaurantImage from './images/rest1.avif'
import roomServiceImage from './images/photo_2025-04-06_14-49-15.jpg'
import securityImage from './images/Shlogo2.jpg'
import wellnessImage from './images/mission.avif'
import businessImage from './images/photo_2025-04-06_14-49-21.jpg'
import commonAreaImage from './images/reception.avif'

// Import SVG icons as React components
import { ParkingIcon, SpaIcon, RestaurantIcon, SmokingIcon, PowerIcon, NewspaperIcon, 
  RoomServiceIcon, DiningIcon, FireExtinguisherIcon, CCTVIcon, FirstAidIcon, 
  LuggageIcon, CaretakerIcon, DoctorIcon, StaffIcon, SeatingIcon, BalconyIcon } from './images/icons/icons.jsx'

const Amenities = () => {
  // Categorized amenities data
  const amenitiesCategories = [
    {
      id: 1,
      category: 'Highlighted Amenities',
      image: parkingImage,
      items: ['Free Parking', 'Spa', 'Restaurant with Open Terrace (48+ items)']
    },
    {
      id: 2,
      category: 'Basic Facilities',
      image: roomServiceImage,
      items: ['Smoking Rooms', 'Free Parking', 'Power Backup', 'Newspaper', 'Room Service', '4 More']
    },
    {
      id: 3,
      category: 'Food and Drinks',
      image: restaurantImage,
      items: ['Restaurant with Open Terrace (48+ items)', 'Dining Area', 'Breakfast Buffet', 'Lunch Buffet', 'Dinner À la carte']
    },
    {
      id: 4,
      category: 'Safety and Security',
      image: securityImage,
      items: ['Fire Extinguishers', 'CCTV']
    },
    {
      id: 5,
      category: 'Health and Wellness',
      image: wellnessImage,
      items: ['First-aid Services']
    },
    {
      id: 6,
      category: 'General Services',
      image: roomServiceImage,
      items: ['Luggage Storage', 'Caretaker', 'Doctor on Call', 'Luggage Assistance', 'Multilingual Staff']
    },
    {
      id: 7,
      category: 'Beauty and Spa',
      image: spaImage,
      items: ['Spa']
    },
    {
      id: 8,
      category: 'Common Area',
      image: commonAreaImage,
      items: ['Seating Area', 'Balcony/Terrace', 'Reception']
    },
    {
      id: 9,
      category: 'Business Center and Conferences',
      image: businessImage,
      items: ['Printer', 'Photocopying']
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 relative inline-block">
            <span className="relative z-10">Hotel Amenities</span>
            <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-gradient-to-r from-primary-600 to-primary-400"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mt-4">Discover our range of premium amenities designed to make your stay exceptional, memorable, and above all, comfortable. Everything you need for a perfect stay.</p>
        </div>
        
        {/* Amenities Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-delay-1">
          {amenitiesCategories.map((category) => (
            <div key={category.id} className="bg-gradient-to-br from-white to-primary-50 rounded-lg overflow-hidden shadow-lg flex flex-col card-hover border border-primary-200 h-full">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={category.image} 
                  alt={category.category} 
                  className="w-full h-full object-cover brightness-[0.95] transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/70 to-transparent flex items-end">
                  <h3 className="text-xl font-bold text-white p-4 w-full">
                    {category.category}
                  </h3>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <ul className="space-y-2">
                  {category.items.map((item, index) => {
                    // Determine which icon to use based on the amenity name
                    let AmenityIcon;
                    switch(item.toLowerCase()) {
                      case 'free parking':
                      case 'parking':
                        AmenityIcon = ParkingIcon;
                        break;
                      case 'spa':
                        AmenityIcon = SpaIcon;
                        break;
                      case 'restaurant':
                        AmenityIcon = RestaurantIcon;
                        break;
                      case 'smoking rooms':
                        AmenityIcon = SmokingIcon;
                        break;
                      case 'power backup':
                        AmenityIcon = PowerIcon;
                        break;
                      case 'newspaper':
                        AmenityIcon = NewspaperIcon;
                        break;
                      case 'room service':
                        AmenityIcon = RoomServiceIcon;
                        break;
                      case 'dining area':
                        AmenityIcon = DiningIcon;
                        break;
                      case 'fire extinguishers':
                        AmenityIcon = FireExtinguisherIcon;
                        break;
                      case 'cctv':
                        AmenityIcon = CCTVIcon;
                        break;
                      case 'first-aid services':
                        AmenityIcon = FirstAidIcon;
                        break;
                      case 'luggage storage':
                      case 'luggage assistance':
                        AmenityIcon = LuggageIcon;
                        break;
                      case 'caretaker':
                        AmenityIcon = CaretakerIcon;
                        break;
                      case 'doctor on call':
                        AmenityIcon = DoctorIcon;
                        break;
                      case 'multilingual staff':
                        AmenityIcon = StaffIcon;
                        break;
                      case 'seating area':
                        AmenityIcon = SeatingIcon;
                        break;
                      case 'balcony/terrace':
                        AmenityIcon = BalconyIcon;
                        break;
                      case 'reception':
                        AmenityIcon = RoomServiceIcon;
                        break;
                      case 'printer':
                        AmenityIcon = PowerIcon;
                        break;
                      case 'photocopying':
                        AmenityIcon = NewspaperIcon;
                        break;
                      default:
                        // Default icon for any other amenities
                        AmenityIcon = () => (
                          <svg className="w-5 h-5 text-primary-600 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                        );
                    }
                    
                    return (
                      <li key={index} className="flex items-start">
                        <AmenityIcon />
                        <span className="text-gray-700 ml-2">{item}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities