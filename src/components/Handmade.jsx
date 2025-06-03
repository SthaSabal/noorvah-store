import React from "react";
import coffeeLight1 from "../assets/products/Coffee-light.png";
import image from "../assets/496514979_673054238943852_6891599487052713599_n.jpg";
import noovahLogo3 from "../assets/noovah-logo.png";
// import image8 from "../assets/products/image 8.png";

export default function Handmade() {
  return (
    <div className="">
      
      <div className="relative w-full max-w-[1155px] h-auto mx-auto mt-24 px-4">
        {/* Mobile Layout */}
        <div className="block md:hidden">
          {/* Mobile Stack Layout */}
          <div className="space-y-6">
            {/* Left image */}
            <div className="w-full h-[300px] bg-cover bg-center rounded-lg animate-fade-in-left"
                 style={{ backgroundImage: `url(${image})` }} />
            
            {/* Logo and title */}
            <div className="text-center animate-fade-in-up">
              <img
                className="w-32 h-32 mx-auto object-cover mb-4 transition-transform duration-500 hover:rotate-6 animate-float"
                alt="Noovah Logo"
                src={noovahLogo3}
              />
              <div className="text-2xl text-center tracking-[2.52px] font-medium text-black font-[Montserrat] animate-slide-up-delay-1">
                Hand Made In Nepal
              </div>
            </div>

            {/* Product image */}
            <img
              className="w-full h-[250px] object-cover rounded-lg animate-fade-in-right"
              alt="Handmade Product"
              src={coffeeLight1}
            />

            {/* Testimonial box */}
            <div className="w-full bg-[#f1f0ec] p-6 rounded-lg animate-fade-in-up">
              <div className="text-center">
                <div className="rotate-[-180deg] text-[48px] text-center font-normal text-black leading-none mb-2">
                  ,,
                </div>
                <p className="text-sm text-center font-normal text-black leading-[21px] font-[Montserrat] mb-4 animate-slide-up-delay-3">
                  "I love this candle so much! I always buy one at the
                  beginning of the holiday season. The scent reminds me of
                  when I was a little girl in the village on a special day
                  that year..."
                </p>
                <div className="text-base text-center font-medium text-black animate-slide-up-delay-2">
                  Nirjala Shrestha
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-6">
            {/* Left column */}
            <div className="space-y-6">
              <div className="w-full h-[400px] bg-cover bg-center rounded-lg animate-fade-in-left"
                   style={{ backgroundImage: `url(${image})` }} />
              
              <div className="text-center animate-fade-in-up">
                <img
                  className="w-36 h-36 mx-auto object-cover mb-4 transition-transform duration-500 hover:rotate-6 animate-float"
                  alt="Noovah Logo"
                  src={noovahLogo3}
                />
                <div className="text-3xl text-center tracking-[2.52px] font-medium text-black animate-slide-up-delay-1">
                  Hand Made In Nepal
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6">
              <img
                className="w-full h-[300px] object-cover rounded-lg animate-fade-in-right"
                alt="Handmade Product"
                src={coffeeLight1}
              />

              <div className="w-full bg-[#f1f0ec] p-6 rounded-lg animate-fade-in-up">
                <div className="text-center">
                  <div className="rotate-[-180deg] text-[56px] text-center font-normal text-black leading-none mb-2">
                    ,,
                  </div>
                  <p className="text-sm text-center font-normal text-black leading-[21px] mb-4 animate-slide-up-delay-3">
                    "I love this candle so much! I always buy one at the
                    beginning of the holiday season. The scent reminds me of
                    when I was a little girl in the village on a special day
                    that year..."
                  </p>
                  <div className="text-base text-center font-medium text-black animate-slide-up-delay-2">
                    Nirjala Shrestha
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original Design */}
        <div className="hidden lg:block">
          <div className="relative h-[545px]">
            <div className="">
              <div className="">
                {/* Left image with fade-in-left */}
                <div
                  className="absolute w-[365px] h-[545px] top-0 left-0 bg-cover bg-center animate-fade-in-left"
                  style={{ backgroundImage: `url(${image})` }}
                />

                {/* Logo and title with slide-up animations */}
                <div className="absolute w-[286px] h-[291px] top-[27px] left-[417px] animate-fade-in-up">
                  <div className="relative w-72 h-[291px]">
                    <div className="absolute w-[286px] top-[203px] left-0 text-4xl text-center tracking-[2.52px] font-medium text-black animate-slide-up-delay-1">
                      Hand Made In Nepal
                    </div>
                    <img
                      className="absolute w-[184px] h-[184px] top-0 left-[51px] object-cover mb-4 transition-transform duration-500 hover:rotate-6 animate-float"
                      alt="Noovah Logo"
                      src={noovahLogo3}
                    />
                  </div>
                </div>
              </div>

              {/* Testimonial box */}
              <div className="absolute w-[755px] h-[202px] top-[343px] left-[365px] bg-[#f1f0ec] animate-fade-in-up">
                <div className="relative w-[551px] h-[150px] top-[26px] left-[103px]">
                  <div className="absolute top-[129px] left-[210px] text-base text-center font-medium text-black opacity-0 animate-slide-up-delay-2">
                    Nirjala Shrestha
                  </div>

                  <div className="absolute w-[553px] h-[110px] top-0 left-0">
                    <div className="relative w-[549px] h-[110px]">
                      <div className="absolute top-0 left-[257px] rotate-[-180deg] text-[64px] text-center font-normal text-black leading-none">
                        ,,
                      </div>
                      <p className="absolute w-[549px] top-12 left-0 text-sm text-center font-normal text-black leading-[21px] opacity-0 animate-slide-up-delay-3">
                        "I love this candle so much! I always buy one at the
                        beginning of the holiday season. The scent reminds me of
                        when I was a little girl in the village on a special day
                        that year..."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product image with floating effect */}
            <img
              className="absolute w-[365px] h-[343px] top-0 left-[755px] object-cover animate-fade-in-right"
              alt="Handmade Product"
              src={coffeeLight1}
            />
          </div>
        </div>
      </div>

      {/* Animation styles */}
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

        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out 0.2s forwards;
          opacity: 0;
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

        .animate-float-delayed {
          animation: floatDelayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  );
}