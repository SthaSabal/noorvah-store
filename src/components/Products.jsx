import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import { candles } from "../data/Allproducts";

export default function Products() {
  return (
    <section className="w-full max-w-[963px] mx-auto px-4 pt-24">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl tracking-[3px] font-medium text-black mt-2">
          Our Products
        </h2>
      </div>

      {/* Candle Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {candles.map((candle) => (
          <Link
            to={`/ProductDetail/${candle.id}`} // Link to product detail page
            key={candle.id}
            className="w-full h-[333px] relative group cursor-pointer"
          >

            <img
              src={candle.image}
              alt={candle.name}
              className="w-full h-[285px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center transition-transform duration-300 group-hover:-translate-y-1">
              <p className="text-sm font-medium text-black">{candle.name}</p>
              <p className="text-xs font-normal text-black mt-1">
                {candle.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
