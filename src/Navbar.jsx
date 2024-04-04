import React from 'react';

export default function Navbar() {
  return (
    <div className='flex justify-around items-center bg-black text-white mb-10 mt-2 h-24'>
      <div className="flex flex-col items-center">
        <div>UNot</div>
      </div>
      <div className="flex flex-col items-center relative">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKp_C-q2sH8QNtOsVJIRxy3sr-2fip5Y7NqjrJoWqcQQ&s' alt="notification" className="w-10"/>
        <span className="absolute bg-red-600 -mt-3 -mr-7">2</span>
      </div> 
      <div className="flex flex-col items-center relative">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlUilCuELVQO2LLuSjqbVkAGvVRjqElk6OQzfkvddVA&s' alt="message" className="w-10"/>
        <span className="absolute bg-red-600 -mt-3 -mr-7">3</span>
      </div> 
    </div>
  );
}
