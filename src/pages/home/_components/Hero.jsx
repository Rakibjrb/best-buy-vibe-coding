import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import {
  FiArrowRight,
  FiShield,
  FiTruck,
  FiRefreshCw,
  FiHeadphones,
} from "react-icons/fi";
import { HERO_SLIDES } from "../../../data/products";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default function Hero() {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Swiper Slider */}
      <div className="relative">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={800}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass:
              "!bg-blue-500 !w-8 !rounded-full transition-all duration-300",
            bulletClass:
              "inline-block w-2.5 h-2.5 bg-white/40 rounded-full cursor-pointer mx-1 transition-all",
          }}
          navigation={true}
          className="w-full h-[520px] sm:h-[580px] lg:h-[620px]"
        >
          {HERO_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id} className="relative w-full h-full">
              {/* Background with overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/85 to-transparent"></div>
              </div>

              {/* Slide Content */}
              <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-8 xl:px-0 flex items-center">
                <div className="max-w-2xl space-y-6 animate-in fade-in duration-700">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                    {slide.tag}
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      to={slide.ctaLink}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:translate-x-1 cursor-pointer"
                    >
                      <span>Shop Deal Now</span>
                      <FiArrowRight className="text-lg" />
                    </Link>

                    <Link
                      to="/products"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-md transition-all cursor-pointer"
                    >
                      Browse Catalog
                    </Link>
                  </div>

                  <div className="text-xs font-semibold tracking-wide uppercase text-amber-400 flex items-center gap-2 pt-2">
                    <span className="px-2 py-0.5 rounded bg-amber-400/20 border border-amber-400/30">
                      Limited Offer
                    </span>
                    {slide.discount}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Trust Badges Strip */}
      <div className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <FiTruck className="text-xl" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Free Express Shipping
              </h4>
              <p className="text-xs text-slate-400">On all orders over $50</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <FiShield className="text-xl" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                2-Year Official Warranty
              </h4>
              <p className="text-xs text-slate-400">
                100% genuine authentic tech
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <FiRefreshCw className="text-xl" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                30-Day Easy Returns
              </h4>
              <p className="text-xs text-slate-400">Hassle-free replacement</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <FiHeadphones className="text-xl" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                24/7 Expert Support
              </h4>
              <p className="text-xs text-slate-400">
                Direct tech agent assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
