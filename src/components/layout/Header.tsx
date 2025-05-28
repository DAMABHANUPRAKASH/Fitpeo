import React from 'react';
import { Bell, PlusCircle, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      <div className="flex items-center">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="pl-10 pr-4 py-2 w-80 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center">
          <div className="w-9 h-9 rounded-lg bg-cyan-400 flex items-center justify-center mr-2">
            <span className="text-white text-sm font-medium">👨‍⚕️</span>
          </div>
        </div>
        
        <button className="w-9 h-9 rounded-lg bg-indigo-700 flex items-center justify-center text-white">
          <PlusCircle className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;