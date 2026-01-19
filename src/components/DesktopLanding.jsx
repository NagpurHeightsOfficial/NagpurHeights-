"use client";

import React, { useState } from "react";
import Header from "@/components/HeaderMuali";
import Footer from "@/components/Footer";
import TextType from "@/components/SplitText";
import { submitEnquiry } from "@/lib/submitEnquiry";

export default function LeadCapturePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    enquiryType: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await submitEnquiry(formData);
      setSuccess(true);
      setFormData({ name: "", phone: "", email: "", enquiryType: "" });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <section
        className="relative min-h-screen bg-cover bg-top overflow-hidden"
        style={{
          backgroundImage:
            "url('/images/extras/ChatGPT Image Jan 17, 2026, 04_44_02 PM.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 w-full">

            {/* LEFT CONTENT */}
            <div className="text-white space-y-6 md:space-y-5 md:ml-4 md-text-[300px]">
              <p className="text-lg md:text-3xl lg:text-7xl font-semibold">
                <TextType
                  text="Trusted real estate guidance for buyers, sellers, and investors in Nagpur."
                  typingSpeed={100}
                  delay={1000}
                  cursor={false}
                />
              </p>

              <p className="text-gray-200 max-w-xl md:max-w-md">
                Share your requirements and our experts will help you find the
                perfect property with complete transparency and guidance.
              </p>
            </div>

            <div className="hidden lg:block md:block" />
          </div>
        </div>

        {/* RIGHT FIXED FORM PANEL */}
        <div
          className="
            absolute
            top-0
            right-[-200px]
            md:right-[-120px]
            h-screen
            w-full
            max-w-xl
            bg-black/10
            z-20
            hidden
            md:flex
            lg:flex
            items-center
          "
        >
          <div className="relative w-[500px] md:w-[420px] -translate-x-1/2 md:right-[-150px] lg:right-30 lg:mt-10 md:mb-5">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl shadow-2xl p-10 md:p-10 text-center">

              <h3 className="text-5xl md:text-4xl font-bold text-white">
                Enquire Now
              </h3>

              <p className="text-base md:text-sm text-white mt-2">
                Speak with Nagpur Heights experts today.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 md:mt-4 space-y-5 md:space-y-3">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-5 py-4 md:py-3 border border-gray-300 text-white bg-transparent rounded-md"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full px-5 py-4 md:py-3 border border-gray-300 text-white bg-transparent rounded-md"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-5 py-4 md:py-3 border border-gray-300 text-white bg-transparent rounded-md"
                />

                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 md:py-3 border border-gray-300 bg-white text-gray-900 rounded-md"
                >
                  <option value="">What</option>
                  <option value="Buy Property">Buy Property</option>
                  <option value="Site Visit">Schedule a Site Visit</option>
                  <option value="Sell / Rent">Sell or Rent Property</option>
                  <option value="Investment">Investment Opportunity</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white py-4 md:py-3 rounded-xl font-semibold text-lg md:text-base transition"
                >
                  {loading ? "Submitting..." : "Get Expert Assistance"}
                </button>

                {success && (
                  <p className="text-green-300 text-sm pt-2">
                    Enquiry submitted successfully!
                  </p>
                )}

                {error && (
                  <p className="text-red-300 text-sm pt-2">
                    {error}
                  </p>
                )}

                <p className="text-xs text-gray-200 text-center pt-2">
                  We respect your privacy. Your details are safe with us.
                </p>

              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
