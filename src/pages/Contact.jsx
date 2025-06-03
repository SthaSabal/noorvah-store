
import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import CandleBackground from "../assets/CandleBackground.jpg";


// Mock icons - using Lucide React icons as placeholders
import { Phone, MessageCircle, Mail, Instagram } from "lucide-react";

const contactItems = [
    {
        title: "Phone",
        value: "9869029770",
        icon: Phone,
    },
    {
        title: "WhatsApp",
        value: "9869029770",
        icon: MessageCircle,
    },
    {
        title: "Email",
        value: "noorvah@gmail.com",
        icon: Mail,
    },
    {
        title: "Instagram",
        value: "@noorvahnepal",
        icon: Instagram,
    },
];

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="w-full text-black mt-24 animate-fadeIn">
            <Header />

            {/* Hero Section */}
            <section
                className="w-full h-[338px] bg-cover bg-center relative"
                style={{ backgroundImage: `url(${CandleBackground})` }}
            >
                {/* Animated background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-orange-300/20 rounded-full animate-float"></div>
                    <div className="absolute top-32 right-20 w-16 h-16 bg-orange-400/20 rounded-full animate-float-delayed"></div>
                    <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-orange-500/20 rounded-full animate-float"></div>
                </div>

                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center max-w-2xl mx-auto">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-[2.52px] text-white font-[Montserrat] animate-slideDown">
                        Contact Us
                    </h1>
                    <p className="mt-4 text-sm md:text-base text-white leading-[21px] font-[Montserrat] animate-slideUp opacity-0 animation-delay-300">
                        If you have a question or concern?
                        Send us an email at noorvahnepal@gmail.com or fill out the contact form below.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="w-full py-12 px-4 bg-white flex justify-center mt-12 md:mt-24">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-[140px] w-full max-w-7xl">

                    {/* Contact Info Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-[490px] order-2 lg:order-1">
                        {contactItems.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-[#f1f0ec] flex flex-col items-center justify-center p-6 rounded-lg text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slideUp opacity-0 group cursor-pointer"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:bg-orange-50 transition-colors duration-300">
                                        <IconComponent className="w-8 h-8 text-orange-500 group-hover:text-orange-600 transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-black font-[Montserrat] mb-1 group-hover:text-orange-600 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 font-[Montserrat] group-hover:text-gray-800 transition-colors duration-300">
                                        {item.value}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Form Section */}
                    <div className="flex flex-col w-full lg:w-[490px] gap-6 order-1 lg:order-2 animate-slideLeft opacity-0 animation-delay-600">
                        <div className="space-y-6">
                            {/* Name Field */}
                            <div className="form-group">
                                <label className="block text-gray-700 text-sm font-medium font-[Montserrat] mb-2">
                                    Name
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name..."
                                        className="w-full h-14 border-2 border-gray-200 rounded-md px-4 outline-none text-sm text-black placeholder-gray-400 font-[Montserrat] transition-all duration-300 focus:border-orange-400 focus:shadow-lg focus:scale-[1.02] hover:border-gray-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="form-group">
                                <label className="block text-gray-700 text-sm font-medium font-[Montserrat] mb-2">
                                    Email
                                </label>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="example@gmail.com"
                                        className="w-full h-14 border-2 border-gray-200 rounded-md px-4 outline-none text-sm text-black placeholder-gray-400 font-[Montserrat] transition-all duration-300 focus:border-orange-400 focus:shadow-lg focus:scale-[1.02] hover:border-gray-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Subject Field */}
                            <div className="form-group">
                                <label className="block text-gray-700 text-sm font-medium font-[Montserrat] mb-2">
                                    Subject
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Title..."
                                        className="w-full h-14 border-2 border-gray-200 rounded-md px-4 outline-none text-sm text-black placeholder-gray-400 font-[Montserrat] transition-all duration-300 focus:border-orange-400 focus:shadow-lg focus:scale-[1.02] hover:border-gray-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="form-group">
                                <label className="block text-gray-700 text-sm font-medium font-[Montserrat] mb-2">
                                    Message
                                </label>
                                <div className="relative">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Text Here..."
                                        rows="4"
                                        className="w-full border-2 border-gray-200 rounded-md px-4 py-3 resize-none outline-none text-sm text-black placeholder-gray-400 font-[Montserrat] transition-all duration-300 focus:border-orange-400 focus:shadow-lg focus:scale-[1.02] hover:border-gray-300"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="relative w-full h-12 rounded-md bg-gradient-to-r from-[#f26521] to-[#f78f1d] text-white text-sm font-medium tracking-[0.98px] font-[Montserrat] overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {/* Button ripple effect */}
                                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

                                {/* Loading spinner */}
                                {isSubmitting && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    </div>
                                )}

                                <span className={`relative z-10 transition-opacity duration-300 ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                                    Send Now
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideDown {
                    from { 
                        opacity: 0; 
                        transform: translateY(-30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }

                @keyframes slideUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }

                @keyframes slideLeft {
                    from { 
                        opacity: 0; 
                        transform: translateX(30px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateX(0); 
                    }
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out;
                }

                .animate-slideDown {
                    animation: slideDown 0.8s ease-out;
                }

                .animate-slideUp {
                    animation: slideUp 0.8s ease-out forwards;
                }

                .animate-slideLeft {
                    animation: slideLeft 0.8s ease-out forwards;
                }

                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }

                .animate-float-delayed {
                    animation: float-delayed 4s ease-in-out infinite 2s;
                }

                .animation-delay-300 {
                    animation-delay: 300ms;
                }

                .animation-delay-600 {
                    animation-delay: 600ms;
                }

                .form-group {
                    position: relative;
                }

                .form-group input:focus + .floating-label,
                .form-group input:not(:placeholder-shown) + .floating-label,
                .form-group textarea:focus + .floating-label,
                .form-group textarea:not(:placeholder-shown) + .floating-label {
                    transform: translateY(-28px) scale(0.9);
                    color: #f26521;
                }
            `}</style>
        </div>
    );
}
