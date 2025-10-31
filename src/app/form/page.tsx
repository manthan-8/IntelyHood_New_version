"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    email: "",
    country: "",
    budget: "",
    help: [] as string[],
    details: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        help: checked
          ? [...prev.help, value]
          : prev.help.filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    // TODO: connect to email or Excel sheet backend here
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center pt-24">
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-16 flex flex-col lg:flex-row gap-10 justify-center">
      {/* Left Form Section */}
      <div className="bg-[#121212] border border-gray-800 rounded-2xl p-8 w-full lg:w-1/2 space-y-6">
        <h2 className="text-2xl font-semibold">Let’s Together</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Join leading AI teams accelerating their ML development. Book a 1:1
          demo with us to get started.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              required
              onChange={handleChange}
              className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name*"
              required
              onChange={handleChange}
              className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
            />
          </div>

          <input
            type="text"
            name="company"
            placeholder="Company name*"
            required
            onChange={handleChange}
            className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
          />

          <input
            type="text"
            name="jobTitle"
            placeholder="Job title*"
            required
            onChange={handleChange}
            className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Work email*"
            required
            onChange={handleChange}
            className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
          />

          <input
            type="text"
            name="country"
            placeholder="Country*"
            required
            onChange={handleChange}
            className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
          />

          {/* Budget */}
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Project Budget:*
            </label>
            <div className="space-y-2">
              {["<$50K", "$50–250K", "$250K–1M", "$1M+"].map((b) => (
                <label key={b} className="flex items-center gap-2 text-sm text-gray-300">
                  <input
                    type="radio"
                    name="budget"
                    value={b}
                    onChange={handleChange}
                    required
                    className="accent-cyan-500"
                  />
                  {b}
                </label>
              ))}
            </div>
          </div>

          {/* Checkboxes */}
          <div>
            <label className="block text-sm mb-2 text-gray-400">
              What can we help with?*
            </label>
            <div className="space-y-2">
              {[
                "Data Annotation and Curation for Autonomy",
                "Data Generation and RLHF for LLMs",
                "GenAI Solutions and Platforms",
                "Model Test and Evaluation",
                "Robotics and Data Collection",
                "Public Sector, Government, and Non-Profits",
                "Other",
              ].map((h) => (
                <label key={h} className="flex items-center gap-2 text-sm text-gray-300">
                  <input
                    type="checkbox"
                    value={h}
                    onChange={handleChange}
                    className="accent-cyan-500"
                  />
                  {h}
                </label>
              ))}
            </div>
          </div>

          {/* Textarea */}
          <textarea
            name="details"
            placeholder="Please describe your project in detail..."
            onChange={handleChange}
            className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-sm w-full focus:outline-none focus:border-gray-400"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="bg-white text-black text-sm px-6 py-3 rounded-lg hover:bg-gray-200 transition-all"
          >
            Submit →
          </button>
        </form>
      </div>

      {/* Right Side */}
      <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-8 w-full lg:w-1/2 flex flex-col justify-between">
        <div>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            We’re going to need a lot more investment in high-quality evals and
            benchmarks to help us understand the actual comparative utility of
            models. Scale’s private evals and leaderboards are great to see.
          </p>
          <p className="text-gray-400 text-sm">
            <span className="font-semibold">Nat Friedman</span> — Entrepreneur
            and Investor
          </p>
        </div>

        <div className="mt-12">
          <p className="text-gray-500 text-xs uppercase mb-4">
            Trusted by the world's most ambitious AI teams
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 opacity-80">
            {["meta", "cohere", "adept", "gm", "brex", "cisco", "time", "character"].map(
              (brand) => (
                <img
                  key={brand}
                  src={`/brands/${brand}.svg`}
                  alt={brand}
                  className="h-6 object-contain mx-auto"
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
