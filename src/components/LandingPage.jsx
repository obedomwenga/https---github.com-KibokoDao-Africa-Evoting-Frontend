import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to the eVoting Platform</h1>
        <p className="text-lg mb-8">A secure and transparent way to vote on proposals and petitions.</p>
        <Link to="/register" className="bg-blue-500 text-white py-2 px-4 rounded">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
