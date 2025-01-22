import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { FilterSidebar } from './components/FilterSidebar';
import { Pagination } from './components/Pagination';
import { Product, FilterOptions, SortOption } from './types';
import { Grid, List } from 'lucide-react';

// Mock data - In a real app, this would come from an API
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Syltherine',
    category: 'Stylish cafe chair',
    brand: 'Luxspace',
    price: 2500000,
    originalPrice: 3500000,
    description: 'Stylish cafe chair',
    imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    discount: 30
  },
  {
    id: '2',
    name: 'Leviosa',
    category: 'Stylish cafe chair',
    brand: 'Luxspace',
    price: 2500000,
    description: 'Stylish cafe chair',
    imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80',
  },
  {
    id: '3',
    name: 'Lolito',
    category: 'Luxury big sofa',
    brand: 'Homestead',
    price: 7000000,
    originalPrice: 14000000,
    description: 'Luxury big sofa',
    imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    discount: 50
  },
  {
    id: '4',
    name: 'Respira',
    category: 'Outdoor bar table and stool',
    brand: 'Homestead',
    price: 500000,
    description: 'Outdoor bar table and stool',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    isNew: true
  },
  {
    id: '5',
    name: 'Grifo',
    category: 'Modern dining table',
    brand: 'Luxspace',
    price: 4500000,
    description: 'Modern dining table with sleek design',
    imageUrl: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    isNew: true
  },
  {
    id: '6',
    name: 'Muggo',
    category: 'Office chair',
    brand: 'Homestead',
    price: 1500000,
    originalPrice: 2000000,
    description: 'Ergonomic office chair',
    imageUrl: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    discount: 25
  },
  {
    id: '7',
    name: 'Pingky',
    category: 'Kids bed',
    brand: 'Luxspace',
    price: 3200000,
    description: 'Colorful kids bed with storage',
    imageUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    isNew: true
  },
  {
    id: '8',
    name: 'Potty',
    category: 'Luxury big sofa',
    brand: 'Homestead',
    price: 6000000,
    originalPrice: 8000000,
    description: 'Premium leather sofa',
    imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    discount: 25
  },
  {
    id: '9',
    name: 'Tiddy',
    category: 'Modern bookshelf',
    brand: 'Luxspace',
    price: 3800000,
    description: 'Contemporary bookshelf design',
    imageUrl: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
  },
  {
    id: '10',
    name: 'Nimbus',
    category: 'Office chair',
    brand: 'Homestead',
    price: 1800000,
    originalPrice: 2200000,
    description: 'Premium mesh office chair',
    imageUrl: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    discount: 18
  },
  {
    id: '11',
    name: 'Luna',
    category: 'Modern dining table',
    brand: 'Luxspace',
    price: 5200000,
    description: 'Round marble dining table',
    imageUrl: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    isNew: true
  },
  {
    id: '12',
    name: 'Cozy',
    category: 'Kids bed',
    brand: 'Homestead',
    price: 2800000,
    originalPrice: 3500000,
    description: 'Bunk bed with desk',
    imageUrl: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    discount: 20
  }
];

const FILTER_OPTIONS: FilterOptions = {
  brands: ['Luxspace', 'Homestead'],
  categories: [
    'Stylish cafe chair',
    'Luxury big sofa',
    'Outdoor bar table and stool',
    'Modern dining table',
    'Office chair',
    'Kids bed',
    'Modern bookshelf'
  ],
  priceRange: {
    min: 0,
    max: 10000000,
  },
};

function App() {
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number]>([0, 10000000]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState<SortOption>({ field: 'name', direction: 'asc' });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const itemsPerPage = 8;

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= selectedPriceRange[0] && product.price <= selectedPriceRange[1];
      return matchesBrand && matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      if (sortOption.field === 'name') {
        return sortOption.direction === 'asc' 
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else {
        return sortOption.direction === 'asc'
          ? a.price - b.price
          : b.price - a.price;
      }
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop</h1>
          <div className="flex items-center text-sm text-gray-500">
            <a href="/" className="hover:text-gray-900">Home</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Shop</span>
          </div>
        </div>

        <div className="flex gap-8">
          <FilterSidebar
            options={FILTER_OPTIONS}
            selectedBrands={selectedBrands}
            selectedCategories={selectedCategories}
            selectedPriceRange={selectedPriceRange}
            onBrandChange={setSelectedBrands}
            onCategoryChange={setSelectedCategories}
            onPriceRangeChange={setSelectedPriceRange}
          />

          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-gray-100' : ''}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-gray-100' : ''}`}
                >
                  <List className="w-5 h-5" />
                </button>
                <span className="text-sm text-gray-500">
                  Showing {currentProducts.length} of {filteredProducts.length} results
                </span>
              </div>

              <select
                value={`${sortOption.field}-${sortOption.direction}`}
                onChange={(e) => {
                  const [field, direction] = e.target.value.split('-');
                  setSortOption({ 
                    field: field as 'name' | 'price',
                    direction: direction as 'asc' | 'desc'
                  });
                }}
                className="border rounded-md px-3 py-2"
              >
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
              </select>
            </div>

            <div className={`grid ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            } gap-6`}>
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">High Quality</h3>
              <p className="text-sm text-gray-600">Crafted from top materials</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Warranty Protection</h3>
              <p className="text-sm text-gray-600">Over 2 years</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Free Shipping</h3>
              <p className="text-sm text-gray-600">Order over 150 $</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">24 / 7 Support</h3>
              <p className="text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;