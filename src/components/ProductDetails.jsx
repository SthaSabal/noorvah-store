import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { candles } from "../data/Allproducts";
import bgImg from "/unsplash_mFTOFzUKdl0.png";

export default function ProductDetails() {
  const { id } = useParams();
  const product = candles.find((item) => item.id === parseInt(id));
  const [quantity, setQuantity] = useState(4);
  const [selectedSize, setSelectedSize] = useState("M");
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!product) {
    return (
      <div className="pt-24 text-center min-h-screen flex items-center justify-center">
        <div className="animate-fade-in">
          <h2 className="text-2xl mb-4">Product not found</h2>
          <Link to="/products" className="text-blue-500 underline hover:text-blue-700 transition-colors duration-300">
            Go back to Products
          </Link>
        </div>
      </div>
    );
  }

  const allImages = [product.image, ...(product.extraImages || [])];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 🔹 Animated Background Section */}
      <div
        className={`absolute top-0 left-0 w-full h-[200px] sm:h-[250px] md:h-[350px] bg-cover bg-center transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20"></div>
      </div>

      {/* 🔹 Main Content */}
      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 md:pt-26 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 xl:gap-20">

          {/* Left: Product Images */}
          <div className="relative w-full order-1 lg:order-1">
            {/* Main Product Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[539px] mb-4 rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl group">
              <img
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                src={allImages[selectedImage]}
                alt={product.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Image Navigation Arrows */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : allImages.length - 1)}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setSelectedImage(selectedImage < allImages.length - 1 ? selectedImage + 1 : 0)}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full h-[70px] sm:h-[90px] md:h-[100px] lg:h-[127px]">
              {allImages.slice(0, 4).map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg cursor-pointer group transition-all duration-300 transform hover:scale-105 ${selectedImage === index
                      ? 'ring-2 ring-orange-500 shadow-lg scale-105'
                      : 'hover:shadow-md'
                    }`}
                >
                  <img
                    className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                    alt={`Product view ${index + 1}`}
                    src={img}
                  />
                  <div className={`absolute inset-0 transition-all duration-300 ${selectedImage === index ? 'bg-orange-500/20' : 'bg-black/0 group-hover:bg-black/10'
                    }`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="relative w-full order-2 lg:order-2">
            {/* Product Info */}
            <div className={`space-y-4 sm:space-y-6 mb-6 sm:mb-8 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
              <div className="tracking-[2px] sm:tracking-[4.35px] text-black text-xs sm:text-[15px] font-serif uppercase animate-fade-in-up">
                The Essence of Light
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 animate-fade-in-up animation-delay-100">
                {product.name}
              </div>
              <div className="inline-block px-3 sm:px-4 py-2 sm:py-2.5 bg-white/60 backdrop-blur-sm rounded-lg text-center border border-white/30 shadow-lg animate-fade-in-up animation-delay-200 hover:bg-white/80 transition-all duration-300">
                <span className="text-base sm:text-lg font-medium text-gray-900">
                  Rs:{product.price}
                </span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-gray-700 animate-fade-in-up animation-delay-300">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div className={`mb-6 sm:mb-8 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
              <h4 className="font-semibold text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900">Size/Volume</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["S", "M", "L", "XL"].map((size, index) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 sm:w-12 sm:h-[41px] border-2 rounded-lg flex items-center justify-center font-medium text-sm sm:text-base transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${selectedSize === size
                        ? "bg-black text-white border-black shadow-lg scale-105"
                        : "border-gray-300 hover:border-black bg-white hover:bg-gray-50"
                      }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Specifications */}
            <div className={`space-y-3 sm:space-y-4 mb-6 sm:mb-8 transition-all duration-700 delay-900 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}>
              {[
                { label: "Size:", value: product.size || "Text here will represent size of the candle." },
                { label: "Weight:", value: product.weight || "Text here will represent weight of the candle." },
                { label: "Burn Hour:", value: product.burnHour || "Text here will represent burn time of the candle." }
              ].map((spec, index) => (
                <div key={spec.label} className={`flex flex-col sm:flex-row sm:items-start animate-fade-in-up`} style={{ animationDelay: `${index * 100 + 900}ms` }}>
                  <div className="text-sm sm:text-[15px] font-semibold text-black mb-1 sm:mb-0 sm:mr-4 sm:min-w-[80px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {spec.label}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Quantity and Shop Now */}
            <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-1100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
              {/* Quantity Selector */}
              <div className="flex items-center bg-gray-200/80 backdrop-blur-sm rounded-lg border border-gray-300/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <button
                  onClick={decrease}
                  className="w-10 h-10 sm:w-12 sm:h-[38px] flex items-center justify-center border-r border-gray-300/50 hover:bg-white/80 transition-all duration-300 group-hover:bg-white/60"
                  disabled={quantity <= 1}
                >
                  <div className={`w-3 sm:w-3.5 h-0.5 transition-all duration-300 ${quantity <= 1 ? 'bg-gray-400' : 'bg-black group-hover:bg-orange-500'}`}></div>
                </button>

                <div className="flex-1 px-4 py-2 sm:py-2.5 text-center text-lg sm:text-xl font-medium bg-white/60 transition-all duration-300 group-hover:bg-white/80">
                  {quantity}
                </div>

                <button
                  onClick={increase}
                  className="w-10 h-10 sm:w-12 sm:h-[38px] flex items-center justify-center border-l border-gray-300/50 hover:bg-white/80 transition-all duration-300 group-hover:bg-white/60"
                >
                  <div className="relative w-3 sm:w-3.5 h-3 sm:h-3.5">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 sm:w-3.5 h-0.5 bg-black group-hover:bg-orange-500 transition-colors duration-300"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-0.5 h-3 sm:h-3.5 bg-black group-hover:bg-orange-500 transition-colors duration-300"></div>
                    </div>
                  </div>
                </button>
              </div>

              {/* Shop Now Button */}

              <button className="w-[132px] h-[38px] rounded-md bg-gradient-to-r from-[#f26521] to-[#f78f1d] flex items-center justify-center hover:from-[#e55a1f] hover:to-[#f0851a] transition-all duration-300"> <div className="font-medium text-white text-sm tracking-[0.98px] leading-normal" style={{ fontFamily: 'Montserrat, sans-serif' }}> Shop Now </div> </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        @media (max-width: 640px) {
          .grid {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}