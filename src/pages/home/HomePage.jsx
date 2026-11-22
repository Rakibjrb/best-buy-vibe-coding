import React from "react";
import Hero from "./_components/Hero";
import TopCategories from "./_components/TopCategories";
import TopProducts from "./_components/TopProducts";
import CouponSection from "./_components/CouponSection";
import Newsletter from "./_components/Newsletter";

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <TopCategories />
      <TopProducts />
      <CouponSection />
      <Newsletter />
    </div>
  );
}
