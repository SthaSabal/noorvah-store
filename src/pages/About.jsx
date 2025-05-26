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
        <h2 className="text-2xl sm:text-3xl font-medium mb-6">Our Story</h2>
        <p className="text-base leading-relaxed max-w-2xl mx-auto">
          Noorvah was born out of a love for calmness, simplicity, and warmth. Our hand-poured candles
          are made with care and intention — to bring comfort into your space. Every scent is
          designed to evoke emotion, memory, and serenity.
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
      </section>
      <Footer/>
    </div>
  );
}
