import React from "react";
import coffeeLight1 from "../assets/products/Coffee-light.png";
import image from "../assets/496514979_673054238943852_6891599487052713599_n.jpg";
import noovahLogo3 from "../assets/noovah-logo.png";
import image8 from "../assets/products/image 8.png";

export default function Handmade() {
  return (
    <div className="w-full bg-[#f1f0ec] overflow-hidden flex flex-col lg:flex-row items-center justify-center mt-24">
      {/* Left Image */}
      <div className="w-full lg:w-[455px] h-[300px] lg:h-auto animate-fade-in-left">
        <img
          src={image}
          alt="Background"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-10 text-center animate-fade-in-up">
        <div className="w-full max-w-md">
          <img
            src={noovahLogo3}
            alt="Noovah Logo"
            className="w-[180px] sm:w-[200px] lg:w-[220px] h-[180px] sm:h-[200px] lg:h-[220px] mx-auto object-cover mb-6 transition-transform duration-500 hover:rotate-6"
          />
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-medium tracking-wide text-black opacity-0 animate-slide-up-delay-1">
            Hand Made In Nepal
          </h2>
          <p className="text-sm sm:text-base lg:text-[15px] font-normal text-black leading-[1.6] mt-4 px-2 sm:px-4 opacity-0 animate-slide-up-delay-2">
            Born from the soul of the Himalayas and the strength of a Nepali
            woman's vision
          </p>

          <div className="mt-6 flex justify-center opacity-0 animate-slide-up-delay-3">
            <button className="px-6 py-2 rounded-md text-white text-sm font-medium tracking-wide bg-gradient-to-r from-[#f26521] to-[#f78f1d] transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-[#e55a1e] hover:to-[#e6831a]">
              About
            </button>
          </div>
        </div>
      </div>

      {/* Right Stacked Images */}
      <div className="relative w-full lg:w-[466px] h-[320px] sm:h-[380px] lg:h-[605px] mt-6 lg:mt-0 animate-fade-in-right">
        <img
          src={image8}
          alt="Image 8"
          className="absolute top-6 right-4 sm:right-12 md:right-20 lg:right-40 w-[160px] sm:w-[200px] lg:w-[328px] h-[120px] sm:h-[160px] lg:h-[264px] transition-transform duration-500 hover:scale-110 animate-float-delayed"
        />
        <img
          src={coffeeLight1}
          alt="Coffee Light"
          className="absolute bottom-4 left-4 sm:left-10 lg:left-4 w-[140px] sm:w-[180px] lg:w-[300px] h-[160px] sm:h-[180px] lg:h-[264px] transition-transform duration-500 hover:scale-110 animate-float-delayed"
        />
      </div>

      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        @keyframes slideUpDelay3 {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatDelayed {
          50%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-slide-up-delay-1 {
          animation: slideUpDelay1 0.6s ease-out 0.3s forwards;
        }

        .animate-slide-up-delay-2 {
          animation: slideUpDelay2 0.6s ease-out 0.5s forwards;
        }

        .animate-slide-up-delay-3 {
          animation: slideUpDelay3 0.6s ease-out 0.7s forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: floatDelayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>



  );
}