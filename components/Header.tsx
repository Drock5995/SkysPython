import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 shadow-md flex items-center justify-center">
      <h1 className="text-2xl font-bold text-pink-500 tracking-wider">
        Skyleah's Python
      </h1>
      <span className="text-xl ml-2 animate-pulse">💔</span>
    </header>
  );
};

export default Header;
