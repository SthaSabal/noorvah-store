import React from "react";
import heroImage from "../assets/about-hero.jpg";
import studioImage from "../assets/studio.jpg";
import missionImage from "../assets/mission.jpeg";
import signature from "../assets/signature.jpeg";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function AboutUs() {
  return (
    
    <div className="w-full bg-[#f1f0ec] text-black">
      <Header/>
      {/* Hero Section */}
      <section className="w-full relative">
        <img
          src={heroImage}
          alt="Candle Hero"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide">
            About Noorvah
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-medium mb-6">Our New Story</h2>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          As our name suggests, NOORVAH (derived from ‘Noor,’ meaning light) represents the soul of light itself. We believe that light is more than just illumination—it's an experience, a mood, and a way of life. With every candle we craft, we capture the essence of luxury, elegance, and serenity. Our scented soy candles are more than just products; they are a journey into a world of refined scents and glowing ambiance, designed to elevate your space and enrich your moments.
        </p>
      </section>

      {/* Studio Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={studioImage}
          alt="Studio"
          className="w-full h-80 object-cover rounded-xl shadow"
        />
        <div>
          <h3 className="text-xl font-semibold mb-4">Crafted with Passion</h3>
          <p className="text-base leading-relaxed">
            Every candle is made in our cozy studio using eco-friendly wax, lead-free wicks, and
            high-quality fragrances. We take pride in small-batch production, ensuring each candle
            gets the attention it deserves.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p className="text-base leading-relaxed">
            We believe in mindful living. Our mission is to create simple, sustainable candles that
            spark moments of peace and beauty. Whether it’s self-care, celebration, or reflection —
            Noorvah is here to light the way.
          </p>
        </div>
        <img
          src={missionImage}
          alt="Mission"
          className="w-full h-80 object-cover rounded-xl shadow"
        />
      </section>

      {/* Closing Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h3 className="text-xl font-semibold mb-4">Thank You for Supporting Us</h3>
        <p className="text-base max-w-2xl mx-auto">
          We’re so grateful to share our passion with you. Every Noorvah candle is a small part of our
          heart, made for your home.
        </p>
        <div className="mt-6">
          <img src={signature} alt="Signature" className="h-16 mx-auto" />
        </div>
                <div className="flex flex-col items-center px-4">
            <h1 className="text-[30pt] font-bold mb-4">*NOORVAH - The Essence of Light*</h1>
            <p className="text-lg text-center max-w-2xl">As our name suggests, NOORVAH (derived from "Noor", meaning light) represents the soul of light itself. We believe that light is more than just illumination—it&apos;s an experience, a mood, and a way of life. With every candle we craft, we capture the essence of luxury, elegance, and serenity. Our scented soy candles are more than just products; they are a journey into a world of refined scents and glowing ambiance, designed to elevate your space and enrich your moments.</p>
            
            <h1 className="text-[30pt] font-bold mb-4">*A Blend of Luxury & Lifestyle*</h1>
            <p className="text-lg text-center max-w-2xl">NOORVAH is for those who appreciate the finer things in life. Our candles are made from the finest soy wax, infused with carefully curated fragrances that transport you into a world of calm, inspiration, and pure luxury. Each scent is an embodiment of the essence that defines NOORVAH—an aromatic lifestyle, aesthetic, and the perfect balance of style and indulgence.</p>

            
            <p className="text-lg text-center max-w-2xl">Welcome to NOORVAH, where every light is a luxury, and every scent tells a story.</p>
            
            <h1 className="text-[30pt] font-bold mb-4">*Introducing Our New Luxury Candle Collection*</h1>
            <p className="text-lg text-center max-w-2xl">This spring and summer, NOORVAH is proud to unveil two exclusive candle flavors that perfectly capture the essence of the season. Designed with luxurious gel wax, our candles offer a visually stunning, sensory-rich experience.</p>
            <p className="text-lg text-center max-w-2xl">
                <span className="font-bold">*Mixed Fruit*</span>: A vibrant, refreshing blend of citrus and tropical fruits that awakens your senses and fills your space with a lively, joyful ambiance. It\'s the essence of summer, bottled into a candle.
                <span className="font-bold">*Coffee with Ice*</span>: Imagine the crisp, refreshing taste of iced coffee on a hot day. This fragrance combines the rich, bold aroma of freshly brewed coffee with a cool, iced twist—creating a sensory delight that\'s both invigorating and relaxing.
            </p>
       </div>
      </section>
      <Footer/> 
    </div>
  );
}

