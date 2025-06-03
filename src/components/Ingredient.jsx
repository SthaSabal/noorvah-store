import React from "react";
import IMG72511 from "../assets/IMG_7264.jpeg";

export const Ingredient = () => {
  return (
    <div className="flex items-center justify-center px-4 bg-white mt-24">
      <div className="w-full max-w-6xl bg-white shadow-md p-4 sm:p-6 md:p-10 lg:p-0 flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <img
          src={IMG72511}
          alt="Candle"
          className="w-full max-w-[681px] h-auto object-cover"
        />

        {/* Text Section */}
        <div className="max-w-md text-black">
          <p className="text-[15px] tracking-[4.35px] font-serif uppercase">
            The Essence of Light
          </p>
          <h2 className="text-2xl font-medium tracking-[1.68px] font-[Montserrat] mt-2">
            Natural Ingredients
          </h2>

          <ul className="list-disc pl-6 mt-6 space-y-3 text-sm font-[Montserrat] leading-[21px]">
            <li>100% Natural Soy Wax (No paraffin, no chemicals)</li>
            <li>All Natural Fragrance (Oil-based & toxin-free)</li>
            <li>Plant-Based Natural Colorants</li>
            <li>No Animal Testing / No Animal Products</li>
            <li>Recyclable, Reusable Jars</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
