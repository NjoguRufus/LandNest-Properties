import React from 'react';

const PropertyCard = ({ property }) => (
  <div className="bg-white p-4 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
    <p className="text-gray-600 mb-2">{property.location}</p>
    <p className="mb-2">Area: {property.area}</p>
    <p className="text-lg font-bold text-blue-600">{property.price}</p>
    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
      View Details
    </button>
  </div>
);

export default PropertyCard;