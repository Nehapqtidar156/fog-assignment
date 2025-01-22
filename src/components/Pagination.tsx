import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
            currentPage === page
              ? 'bg-primary-600 text-white shadow-md hover:bg-primary-700'
              : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-primary-600'
          }`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-100 hover:text-primary-600 font-medium transition-all duration-200"
        >
          Next
        </button>
      )}
    </div>
  );
}