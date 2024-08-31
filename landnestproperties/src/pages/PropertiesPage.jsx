import React, { useState } from 'react';
import { Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [properties, setProperties] = useState([
    { id: 1, title: 'Scenic Hilltop Land', area: '5 acres', price: '$500,000', location: 'Hilltop Valley' },
    { id: 2, title: 'Riverside Plot', area: '3 acres', price: '$350,000', location: 'Riverbank County' },
    { id: 3, title: 'Commercial Land', area: '2 acres', price: '$750,000', location: 'Downtown District' },
    { id: 4, title: 'Agricultural Land', area: '10 acres', price: '$400,000', location: 'Farmville' },
  ]);

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Properties</h2>
      <div className="mb-4 relative">
        <input
          type="text"
          placeholder="Search properties..."
          className="w-full p-2 pl-10 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesPage;