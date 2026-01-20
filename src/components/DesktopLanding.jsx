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
      setFormData({
        name: "",
        phone: "",
        email: "",
        enquiryType: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen bg-cover bg-top"
        style={{
          backgroundImage:
            "url('/images/extras/ChatGPT Image Jan 17, 2026, 04_44_02 PM.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* MAIN CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 min-h-screen flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-center">

            {/* LEFT CONTENT */}
            <div className="text-white space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
                Trusted real estate guidance for buyers, sellers, and investors in Nagpur.
              </h3>

              <p className="text-gray-200 max-w-xl text-sm sm:text-base">
                Share your requirements and our experts will help you find the
                perfect property with complete transparency and guidance.
              </p>
            </div>

            {/* RIGHT FORM */}
            <div className="flex justify-center md:justify-end">
              <div
  className="
    w-full
    max-w-sm
    md:w-[450px]
    lg:w-[430px]
    lg:ml-20
    xl:max-w-xl
    bg-white/20
    backdrop-blur-md
    rounded-2xl
    shadow-2xl
    p-6
    md:p-6
    lg:p-8
  "
>


                <h3 className="text-3xl sm:text-4xl font-bold text-white text-center">
                  Enquire Now
                </h3>

                <p className="text-sm text-white text-center mt-2">
                  Speak with Nagpur Heights experts today.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-4"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-white bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-white bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 text-white bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-60 text-white py-3 rounded-xl font-semibold transition"
                  >
                    {loading ? "Submitting..." : "Get Expert Assistance"}
                  </button>

                  {success && (
                    <p className="text-green-300 text-sm text-center">
                      Enquiry submitted successfully!
                    </p>
                  )}

                  {error && (
                    <p className="text-red-300 text-sm text-center">
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
        </div>
      </section>

      <Footer />
    </>
  );
}
