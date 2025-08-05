import React from "react";

import img1 from "../assets/20250604_152151 1.png";
import img2 from "../assets/20250604_162115 1.png";
import img3 from "../assets/20250605_145800 1.png";
import img4 from "../assets/20250605_151938 1.png";
import bgImage from "../assets/CandleBackground.jpg";
import storyImg from "../assets/58f817126c591bf76024c3f2d9fda821ccfec1e8.jpg";
import passionImg from "../assets/20250604_161647 1.png";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function AboutUs() {
  return (
    <section className="relative w-full max-w-[1440px] h-auto mx-auto overflow-hidden">
      <Header />
      
      {/* CSS Hover Effects & Responsive Styles */}
      <style jsx>{`
        .image-hover {
          transition: transform 0.3s ease-out, filter 0.3s ease-out;
        }
        
        .image-hover:hover {
          transform: scale(1.03);
          filter: brightness(1.05);
        }
        
        .text-hover {
          transition: color 0.3s ease-out;
        }
        
        .text-hover:hover {
          color: #8B5A3C;
        }
        
        .section-hover {
          transition: transform 0.3s ease-out;
        }
        
        .section-hover:hover {
          transform: translateY(-2px);
        }
        
        /* Responsive Styles */
        @media (max-width: 1200px) {
          .desktop-layout {
            display: none;
          }
        }
        
        @media (min-width: 1201px) {
          .responsive-layout {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .hero-text {
            padding: 0 1rem;
          }
          
          .mobile-spacing {
            margin-top: 2rem;
          }
        }
      `}</style>

      {/* --- Background Section with Text --- */}
      <div
        className="w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="text-center max-w-md mx-4 hero-text">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[2.5px] text-black mb-4 text-hover">
            About Us
          </h2>
          <p className="text-sm md:text-base text-black leading-relaxed">
            Have Questions, Ideas, Or Just Want To Say Hello? We'd Love To Hear From You.
          </p>
        </div>
      </div>

      {/* --- Image Layout --- */}
      {/* Desktop Layout (>1200px) */}
      <div className="desktop-layout relative w-[1347px] h-[200px] left-1/2 -translate-x-1/2 top-[-160px]">
        <img src={img1} alt="Visual 1" className="absolute w-[411px] h-[397px] top-0.5 left-0 object-cover image-hover" />
        <img src={img4} alt="Visual 2" className="absolute w-[411px] h-[400px] top-0 left-[624px] image-hover" />
        <img src={img2} alt="Visual 3" className="absolute w-[411px] h-[323px] top-[39px] left-[936px] image-hover" />
        <img src={img3} alt="Visual 4" className="absolute w-[411px] h-[323px] top-[39px] left-[312px] image-hover" />
      </div>

      {/* Responsive Layout (<1200px) */}
      <div className="responsive-layout relative w-full max-w-[1000px] mx-auto px-4 -mt-20 md:-mt-32 mb-8">
        {/* Tablet Layout */}
        <div className="hidden md:grid grid-cols-2 gap-4">
          <img src={img1} alt="Visual 1" className="w-full h-64 object-cover rounded-lg image-hover" />
          <img src={img2} alt="Visual 2" className="w-full h-64 object-cover rounded-lg image-hover" />
          <img src={img3} alt="Visual 3" className="w-full h-64 object-cover rounded-lg image-hover" />
          <img src={img4} alt="Visual 4" className="w-full h-64 object-cover rounded-lg image-hover" />
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden grid grid-cols-2 gap-2">
          <img src={img1} alt="Visual 1" className="w-full h-32 object-cover rounded image-hover" />
          <img src={img2} alt="Visual 2" className="w-full h-32 object-cover rounded image-hover" />
          <img src={img3} alt="Visual 3" className="w-full h-32 object-cover rounded image-hover" />
          <img src={img4} alt="Visual 4" className="w-full h-32 object-cover rounded image-hover" />
        </div>
      </div>

      {/* Our Story Section */}
      {/* Desktop Layout (>1200px) */}
      <div className="desktop-layout relative w-[1119px] h-[404px] left-1/2 -translate-x-1/2 mt-8 section-hover">
        <div className="absolute w-[524px] h-60 top-[82px] left-0">
          <h2 className="absolute w-[322px] top-0 left-0 text-4xl font-medium tracking-[2.52px] text-black text-hover">
            Our story
          </h2>
          <p className="absolute w-[520px] top-[94px] left-0 text-sm text-black leading-[21px] text-justify">
            As Our Name Suggests, Noorvah (derived From "noor", Meaning Light) Represents The Soul Of Light Itself.
            We Believe That Light Is More Than Just Illumination—it&apos;s An Experience, A Mood, And A Way Of Life.
            With Every Candle We Craft, We Capture The Essence Of Luxury, Elegance, And Serenity. Our Scented Soy
            Candles Are More Than Just Products; They Are A Journey Into A World Of Refined Scents And Glowing Ambiance,
            Designed To Elevate Your Space And Enrich Your Moments.
          </p>
        </div>
        <img
          className="absolute w-[520px] h-[404px] top-0 left-[599px] image-hover"
          alt="Our Story"
          src={storyImg}
        />
      </div>

      {/* Responsive Layout (<1200px) */}
      <div className="responsive-layout relative w-full max-w-[1000px] mx-auto px-4 mt-8 md:mt-16 section-hover">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-medium tracking-[2.52px] text-black mb-6 text-hover">
              Our story
            </h2>
            <p className="text-sm md:text-base text-black leading-[21px] md:leading-[24px] text-justify">
              As Our Name Suggests, Noorvah (derived From "noor", Meaning Light) Represents The Soul Of Light Itself.
              We Believe That Light Is More Than Just Illumination—it's An Experience, A Mood, And A Way Of Life.
              With Every Candle We Craft, We Capture The Essence Of Luxury, Elegance, And Serenity. Our Scented Soy
              Candles Are More Than Just Products; They Are A Journey Into A World Of Refined Scents And Glowing Ambiance,
              Designed To Elevate Your Space And Enrich Your Moments.
            </p>
          </div>
          <div className="flex-1">
            <img
              className="w-full h-64 md:h-80 object-cover rounded-lg image-hover"
              alt="Our Story"
              src={storyImg}
            />
          </div>
        </div>
      </div>

      {/* Crafted with Passion Section */}
      {/* Desktop Layout (>1200px) */}
      <div className="desktop-layout relative w-[1120px] h-[444px] left-1/2 -translate-x-1/2 mt-30 section-hover">
        <img
          className="absolute w-[520px] h-[444px] top-0 left-0 image-hover"
          alt="Crafted with Passion"
          src={passionImg}
        />
        <div className="absolute w-[520px] h-[368px] top-10 left-[600px]">
          <div className="mb-8">
            <h3 className="text-4xl font-medium text-black tracking-[2.52px] mb-4 text-hover">
              Crafted with passion
            </h3>
            <p className="text-sm text-black text-justify leading-[21px] mt-10">
              Every Candle Is Made In Our Cozy Studio Using Eco-friendly Wax,
              Lead-free Wicks, And High-quality Fragrances. We Take Pride In
              Small-batch Production, Ensuring Each Candle Gets The Attention It
              Deserves.
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-medium text-black tracking-[2.52px] mb-4 mt-10 text-hover">
              Our mission
            </h3>
            <p className="text-sm text-black text-justify leading-[21px] mt-10">
              We Believe In Mindful Living. Our Mission Is To Create Simple,
              Sustainable Candles That Spark Moments Of Peace And Beauty.
              Whether It's Self-care, Celebration, Or Reflection — Noorvah Is
              Here To Light The Way.
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Layout (<1200px) */}
      <div className="responsive-layout relative w-full max-w-[1000px] mx-auto px-4 mt-16 md:mt-24 mb-16 section-hover">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 order-2 lg:order-1">
            <img
              className="w-full h-64 md:h-80 object-cover rounded-lg image-hover"
              alt="Crafted with Passion"
              src={passionImg}
            />
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <div className="mb-8 md:mb-12">
              <h3 className="text-3xl md:text-4xl font-medium text-black tracking-[2.52px] mb-4 text-hover">
                Crafted with passion
              </h3>
              <p className="text-sm md:text-base text-black text-justify leading-[21px] md:leading-[24px] mt-6">
                Every Candle Is Made In Our Cozy Studio Using Eco-friendly Wax,
                Lead-free Wicks, And High-quality Fragrances. We Take Pride In
                Small-batch Production, Ensuring Each Candle Gets The Attention It
                Deserves.
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-medium text-black tracking-[2.52px] mb-4 text-hover">
                Our mission
              </h3>
              <p className="text-sm md:text-base text-black text-justify leading-[21px] md:leading-[24px] mt-6">
                We Believe In Mindful Living. Our Mission Is To Create Simple,
                Sustainable Candles That Spark Moments Of Peace And Beauty.
                Whether It's Self-care, Celebration, Or Reflection — Noorvah Is
                Here To Light The Way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}