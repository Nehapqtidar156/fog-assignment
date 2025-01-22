import React from 'react';
import { FilterOptions } from '../types';

interface FilterSidebarProps {
  options: FilterOptions;
  selectedBrands: string[];
  selectedCategories: string[];
  selectedPriceRange: [number, number];
  onBrandChange: (brands: string[]) => void;
  onCategoryChange: (categories: string[]) => void;
  onPriceRangeChange: (range: [number, number]) => void;
}

export function FilterSidebar({
  options,
  selectedBrands,
  selectedCategories,
  selectedPriceRange,
  onBrandChange,
  onCategoryChange,
  onPriceRangeChange,
}: FilterSidebarProps) {
  return (
    <div className="w-64 bg-white p-6 rounded-xl shadow-sm space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Brands</h3>
        <div className="space-y-3">
          {options.brands.map((brand) => (
            <label key={brand} className="flex items-center group cursor-pointer">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={(e) => {
                  if (e.target.checked) {
                    onBrandChange([...selectedBrands, brand]);
                  } else {
                    onBrandChange(selectedBrands.filter((b) => b !== brand));
                  }
                }}
                className="form-checkbox h-4 w-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-primary-600 transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-3">
          {options.categories.map((category) => (
            <label key={category} className="flex items-center group cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={(e) => {
                  if (e.target.checked) {
                    onCategoryChange([...selectedCategories, category]);
                  } else {
                    onCategoryChange(selectedCategories.filter((c) => c !== category));
                  }
                }}
                className="form-checkbox h-4 w-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
              />
              <span className="ml-3 text-gray-700 group-hover:text-primary-600 transition-colors">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-4">
          <input
            type="range"
            min={options.priceRange.min}
            max={options.priceRange.max}
            value={selectedPriceRange[1]}
            onChange={(e) => {
              const newMax = parseInt(e.target.value);
              onPriceRangeChange([selectedPriceRange[0], newMax]);
            }}
            className="price-range-slider"
          />
          <div className="flex justify-between text-sm font-medium text-primary-600">
            <span>Rp {selectedPriceRange[0].toLocaleString()}</span>
            <span>Rp {selectedPriceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}