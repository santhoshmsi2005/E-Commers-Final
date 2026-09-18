import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">

      {/* Image */}
      <div className="w-full h-72 bg-gray-200"></div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <div className="h-4 w-20 bg-gray-200 rounded mb-3"></div>

        {/* Product Name */}
        <div className="h-6 w-3/4 bg-gray-200 rounded mb-3"></div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full bg-gray-200"
            />
          ))}
        </div>

        {/* Price */}
        <div className="h-6 w-24 bg-gray-200 rounded mb-5"></div>

        {/* Button */}
        <div className="h-11 w-full rounded-xl bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;