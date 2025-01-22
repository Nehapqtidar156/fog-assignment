import React from 'react';
import { Heart, Share2, LayoutGrid } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 card-hover-effect animate-fade-in">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        {product.discount && (
          <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium animate-slide-up">
            -{product.discount}%
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-4 right-4 bg-emerald-500 text-white text-sm px-3 py-1 rounded-full font-medium animate-slide-up">
            New
          </span>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">{product.category}</p>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xl font-bold text-primary-600 block">
              Rp {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through block">
                Rp {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-gray-100">
        <div className="flex items-center justify-between gap-2">
          <button className="flex-1 btn-primary">
            Add to cart
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <Share2 className="w-5 h-5 text-gray-600 hover:text-primary-600 transition-colors" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <LayoutGrid className="w-5 h-5 text-gray-600 hover:text-primary-600 transition-colors" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
            <Heart className="w-5 h-5 text-gray-600 hover:text-primary-600 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  );
}