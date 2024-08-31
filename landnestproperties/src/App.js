import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home, MapOutline, FileText, Divide } from 'lucide-react';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
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

        <main className="container mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/title-deeds" element={<TitleDeedsPage />} />
            <Route path="/land-division" element={<LandDivisionPage />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            &copy; 2024 LandNest Properties. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
};

const HomePage = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-4">Welcome to LandNest Properties</h2>
    <p className="mb-8">Your one-stop solution for land sales, title deeds, and land division.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureCard icon={<MapOutline size={48} />} title="Land Sales" description="Find your perfect plot with our extensive land listings." />
      <FeatureCard icon={<FileText size={48} />} title="Title Deed Issuance" description="Secure your property with our efficient title deed services." />
      <FeatureCard icon={<Divide size={48} />} title="Land Division" description="Expert land division services for all your needs." />
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const PropertiesPage = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Available Properties</h2>
    {/* Add property listings here */}
  </div>
);

const TitleDeedsPage = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Title Deed Services</h2>
    {/* Add title deed information and services here */}
  </div>
);

const LandDivisionPage = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Land Division Services</h2>
    {/* Add land division information and services here */}
  </div>
);

export default App;