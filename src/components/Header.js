import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5">
        <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-lg">Jarurat Care</h1>
        <nav className="space-x-6 flex items-center">
          <Link to="/" className="px-3 py-1 rounded-lg transition duration-200 hover:bg-white hover:text-blue-700 font-semibold">Home</Link>
          <Link to="/patients" className="px-3 py-1 rounded-lg transition duration-200 hover:bg-white hover:text-blue-700 font-semibold">Patients</Link>
          <Link to="/about" className="px-3 py-1 rounded-lg transition duration-200 hover:bg-white hover:text-blue-700 font-semibold">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
