"use client";

import React, { useState } from "react";
import TextType from "@/components/SplitText";
import RotatingText from "@/components/RotatingText";
import Footer from "./Footer";
import Header from "./HeaderMuali";
import { submitEnquiry } from "@/lib/submitEnquiry";

export default function MobileProjectLanding() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await submitEnquiry(formData);

      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        enquiryType: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src="/images/extras/ChatGPT Image Jan 17, 2026, 04_44_02 PM.png"
          alt="Nagpur Real Estate"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* CONTENT */}
        <div className="relative z-10 min-h-screen px-5 pt-20 pb-8 text-white flex flex-col mt-4">
          <p className="text-sm tracking-wide opacity-90">
            Nagpur Heights
          </p>

          {/* HERO TEXT */}
          <div className="h-[50px]">
            <p className="text-4xl font-extrabold h-[40px]">
              <TextType
                text="Your trusted real estate partner in Nagpur !"
                typingSpeed={60}
                delay={2000}
                cursor={false}
              />
            </p>

            <div className="inline-flex items-center gap-2 text-2xl font-bold whitespace-nowrap mt-12">
              <RotatingText
                texts={["PLOTS", "FLATS", "VILLAS", "COMMERCIALS"]}
                typingSpeed={60}
                deletingSpeed={40}
                pause={1500}
                loop
                className="text-white text-lg px-3 bg-blue-600 rounded-lg"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="mt-50 bg-white/10 backdrop-blur-sm p-5 rounded-xl">
            <h3 className="text-3xl font-bold text-center">
              Enquire Now
            </h3>

            <p className="text-sm mt-2 mb-4 text-center opacity-80">
              Speak with Nagpur Heights experts today.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-md"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-md"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-md"
              />

              <select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-md"
              >
                <option value="">What are you looking for?</option>
                <option value="Buy Property">Buy Property</option>
                <option value="Site Visit">Schedule a Site Visit</option>
                <option value="Sell / Rent">Sell or Rent Property</option>
                <option value="Investment">Investment Opportunity</option>
                <option value="General Enquiry">General Enquiry</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white py-4 rounded-xl font-semibold transition"
              >
                {loading ? "Submitting..." : "Contact Us"}
              </button>

              {success && (
                <p className="text-green-400 text-sm text-center">
                  Enquiry submitted successfully!
                </p>
              )}

              {error && (
                <p className="text-red-400 text-sm text-center">
                  {error}
                </p>
              )}

              <p className="text-xs text-center opacity-70">
                We respect your privacy. Your details are safe with us.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
