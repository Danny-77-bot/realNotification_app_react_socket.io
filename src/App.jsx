import React, { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";

export default function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  
  const handleLoginClick = () => {
    setUser(input);
  };
  
  return (
    <div>
      {user ? (
        <div>
          <Navbar/>
          <Home/> 
        </div>
      ) : (
        <div className="bg-blue-100 flex flex-col items-center justify-center gap-4 px-6 py-8 rounded-lg shadow-md w-72 sm:w-80 md:w-96 mx-auto my-40">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            value={input}
            onChange={handleInputChange}
          />
          <button
            className="w-full py-3 px-4 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
