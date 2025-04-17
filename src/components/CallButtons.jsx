import React from 'react';
import { FaPhone } from 'react-icons/fa';

const CallButtons = () => {
  const phoneNumbers = [
    { id: 1, number: '+91-9910597907', label: 'Manager' },
    { id: 2, number: '+91-9998974059', label: 'Booking' },
    { id: 3, number: '+91-9910597907', label: 'Manager' },
    { id: 4, number: '+91-6355505195', label: 'Manager' }
  ];

  return (
    <div className="z-50 bg-black-50 backdrop-blur-md py-2 px-4 flex-col justify-center items-center gap-2 border-b border-blue-200 shadow-sm ">
      {phoneNumbers.map(({ id, number, label }) => (
        <a
          key={id}
          href={`tel:${number}`}
          className="flex items-center gap-1 px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm lg:text-base
                   bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full
                   hover:from-amber-600 hover:to-amber-700 transition-all duration-300
                   transform hover:scale-105 shadow-md hover:shadow-lg border border-amber-300
                   font-medium"
        >
          <FaPhone className="w-3 h-3 md:w-4 md:h-4" />
          <span className="hidden md:inline">{label}:</span>
          <span>{number}</span>
        </a>
      ))}
    </div>
  );
};

export default CallButtons;