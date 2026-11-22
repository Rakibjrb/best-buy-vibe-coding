import React from "react";
import ProductCard from "../../../../components/ui/ProductCard";
import { PRODUCTS } from "../../../../data/products";

export default function RelatedProducts({ currentProductId, categorySlug }) {
  const related = PRODUCTS.filter(
    (item) => item.categorySlug === categorySlug && item.id !== currentProductId
  ).slice(0, 4);

  if (related.length === 0) return null;

  return (
    <div className="space-y-6 pt-6">
      <div>
        <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Related Products
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Customers who viewed this item also explored these recommendations.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {related.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
