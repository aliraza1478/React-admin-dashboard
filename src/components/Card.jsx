// Card.js

import React from 'react';

const Card = ({ icon, title, value, onClick }) => {
  return (
    <div onClick={onClick} className='bg-white p-4 dark:bg-gray-800 rounded-lg shadow-md cursor-pointer'>
      <div className='flex items-center justify-between'>
        <div className='text-3xl'>{icon}</div>
        <div className='text-right'>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <p className='text-2xl'>{value}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
