import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiChevronRight, FiArrowLeft } from "react-icons/fi";
import { PRODUCTS } from "../../../data/products";
import ProductGallery from "./_components/ProductGallery";
import ProductInfo from "./_components/ProductInfo";
import ProductSpecs from "./_components/ProductSpecs";
import RelatedProducts from "./_components/RelatedProducts";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="py-24 max-w-xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
          Product Not Found
        </h2>
        <p className="text-sm text-slate-500 mb-6">
          The requested product could not be located in our store catalog.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl text-sm"
        >
          <FiArrowLeft /> Back to All Products
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <FiChevronRight className="text-slate-400" />
          <Link
            to="/products"
            className="hover:text-blue-600 transition-colors"
          >
            Products
          </Link>
          <FiChevronRight className="text-slate-400" />
          <Link
            to={`/products?category=${product.categorySlug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {product.category}
          </Link>
          <FiChevronRight className="text-slate-400" />
          <span className="text-slate-900 dark:text-white font-semibold truncate max-w-xs">
            {product.name}
          </span>
        </nav>

        {/* Product Main Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        {/* Technical Specs & Details */}
        <ProductSpecs specs={product.specs} />

        {/* Related Products */}
        <RelatedProducts
          currentProductId={product.id}
          categorySlug={product.categorySlug}
        />
      </div>
    </div>
  );
}
