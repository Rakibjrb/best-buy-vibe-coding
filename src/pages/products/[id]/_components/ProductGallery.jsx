import React, { useState } from "react";
import Badge from "../../../../components/ui/Badge";

export default function ProductGallery({ product }) {
  // Use product image and complementary representations
  const images = [
    product.image,
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  const discountPercent =
    product.originalPrice && product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100
        )
      : null;

  return (
    <div className="space-y-4">
      {/* Main Large Image */}
      <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-center p-4">
        <img
          src={activeImage}
          alt={product.name}
          className="w-full h-full object-cover rounded-2xl transition-all duration-300"
        />

        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {discountPercent && discountPercent > 0 && (
            <Badge variant="rose">Save {discountPercent}%</Badge>
          )}
          {product.isNew && <Badge variant="blue">Brand New</Badge>}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-3">
        {images.map((imgUrl, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveImage(imgUrl)}
            className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all p-1 bg-white dark:bg-slate-900 cursor-pointer ${
              activeImage === imgUrl
                ? "border-blue-600 shadow-md scale-95"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={imgUrl}
              alt={`${product.name} thumbnail ${idx + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
