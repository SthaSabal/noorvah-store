import React from "react";
import heroBg from "../assets/Rectangle 2.png";
import { candles as allCandles } from "../data/Allproducts";
import { Link } from "react-router-dom";

export default function Menu() {
  const featuredCandles = allCandles.filter((candle) => candle.is_featured);

  return (
    <div>
      {/* --- Hero Section --- */}
      <section className="relative w-full h-[526px] overflow-hidden">
        {/* Background Image */}
        <img
          src={heroBg}
          alt="Hero Background"
          className="w-full h-full object-cover absolute top-0 left-0 -z-10 animate-zoom-in"
        />

        {/* Bottom Left Text */}
        <div className="absolute bottom-6 left-5 text-white animate-slide-up-left">
          <p className="text-base font-semibold">Mixed Fruit</p>
          <p className="text-sm font-light">Natural Soy Candles</p>
        </div>

        {/* Main Hero Text */}
        <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-center px-6 md:px-20 text-white">
          <h1 className="text-3xl md:text-4xl font-medium max-w-xl leading-snug animate-fade-in-up">
            Let Your Moments Shine <br />
            And Celebrate The <br />
            Warmth Of Life
          </h1>

          {/* Shop Now Button */}
          <div className="mt-6 animate-fade-in-up">
            <Link to="/Product">
              <button className="px-6 py-2 rounded-md text-white text-sm font-medium tracking-wide bg-gradient-to-r from-[#f26521] to-[#f78f1d] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-[#e55a1e] hover:to-[#e6831a]">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </section>


      {/* --- Picks For This Season Section --- */}
      <section className="w-full max-w-[963px] mx-auto px-4 mt-24">
        {/* Title */}
        <div className="text-center mb-10 animate-fade-in-up">
          <p className="text-[15px] tracking-[4.35px] font-normal text-black uppercase opacity-0 animate-slide-up-delay-1">
            The Essence of Light
          </p>
          <h2 className="text-2xl tracking-[3px] font-medium text-black mt-2 animate-slide-up-delay-2">
            Picks For This Season
          </h2>
        </div>

        {/* Candle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredCandles.map((candle, index) => (
            <div
              key={candle.id}
              className={"w-full h-[333px] relative group"}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={candle.image}
                  alt={candle.name}
                  className="w-full h-[285px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                <p className="text-sm font-medium text-black transition-colors duration-300 group-hover:text-gray-800">
                  {candle.name}
                </p>
                <p className="text-xs font-normal text-black mt-1 transition-colors duration-300 group-hover:text-gray-600">
                  {candle.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`}</style>
      </section>

      <style jsx>{`
        @keyframes zoomIn {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpLeft {
          from {
            opacity: 0;
            transform: translate(-30px, 30px);
          }
          to {
            opacity: 1;
            transform: translate(0, 0);
          }
        }

        @keyframes slideUpDelay1 {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUpDelay2 {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardAnimation1 {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardAnimation2 {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardAnimation3 {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-zoom-in {
          animation: zoomIn 1.5s ease-out;
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .animate-slide-up-left {
          animation: slideUpLeft 1s ease-out 0.6s both;
        }

        .animate-slide-up-delay-1 {
          animation: slideUpDelay1 0.8s ease-out 0.2s forwards;
        }

        .animate-slide-up-delay-2 {
          animation: slideUpDelay2 0.8s ease-out 0.4s forwards;
        }

        .animate-card-1 {
          animation: cardAnimation1 0.8s ease-out 0.6s forwards;
        }

        .animate-card-2 {
          animation: cardAnimation2 0.8s ease-out 0.8s forwards;
        }

        .animate-card-3 {
          animation: cardAnimation3 0.8s ease-out 1s forwards;
        }
      `}</style>
      <div className="text-center mt-10">
          <Link to="/Product">
              <button className="px-6 py-2 rounded-md text-white text-sm font-medium tracking-wide bg-gradient-to-r from-[#f26521] to-[#f78f1d] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-[#e55a1e] hover:to-[#e6831a]">
                View All Products
              </button>
            </Link>
      </div>
    </div>
  );
}