import React from 'react';
import { Search, User, Heart, ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
              Furniro
            </a>
          </div>

          <nav className="hidden md:flex space-x-8">
            {['Home', 'Shop', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            {[Search, User, Heart, ShoppingCart].map((Icon, index) => (
              <button
                key={index}
                className="p-2 hover:bg-primary-50 rounded-full transition-colors group"
              >
                <Icon className="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}