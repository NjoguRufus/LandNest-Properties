import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">LandNest Properties</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-200">Home</Link>
        <Link to="/properties" className="hover:text-blue-200">Properties</Link>
        <Link to="/title-deeds" className="hover:text-blue-200">Title Deeds</Link>
        <Link to="/land-division" className="hover:text-blue-200">Land Division</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;