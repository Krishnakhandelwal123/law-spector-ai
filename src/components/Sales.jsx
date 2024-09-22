import React from "react";
import Eyes from "./Eyes";
import Footer from "./Footer";

const Sales = () => {
  return (
    <div className="min-h-screen p-8 overflow-hidden text-white bg-gray-900">
      {/* Section 1: Sales Overview with animated header */}
      <section className="mb-16 animate-fadeIn">
        <h1 className="mb-6 text-5xl font-bold text-center">
          Sales Performance & Growth Insights
        </h1>
        <p className="text-xl text-center text-gray-400">
          Uncover insights and trends from part-year data to supercharge your business decisions.
        </p>
      </section>

      {/* Section 2: Animated Sales Graph */}
      <section className="mb-16">
        <div className="relative flex flex-col items-center justify-center">
          <div className="lg:w-2/3">
            <h2 className="mb-4 text-3xl font-semibold text-center animate-fadeInUp">
              2024 Part-Year Sales Trends
            </h2>
            <p className="text-gray-400 mb-6 text-center w-[50vw] lg:w-[35vw] mx-auto animate-fadeInUp">
              Our sales performance data reveals key trends, providing actionable insights to improve your strategy.
            </p>
          </div>
          <div className="relative w-full lg:w-[70vw] h-[400px] bg-transparent flex items-center justify-center overflow-hidden animate-slideInUp">
            <img
              src="https://st.depositphotos.com/1079068/3266/i/450/depositphotos_32662663-stock-photo-business-graph-up.jpg" 
              alt="Sales Data Graph"
              className="bg-center bg-cover rounded-lg shadow-lg hover:opacity-100"
            />
          </div>
        </div>
      </section>

      {/* Section 3: Insights and Growth with floating cards */}
      <section className="relative flex items-center justify-center mb-16 overflow-hidden">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:w-2/3 animate-fadeInUp">
          <div className="relative p-6 transition-transform duration-300 transform bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl animate-float">
            <h3 className="mb-4 text-2xl font-semibold">Q2 Sales Surge</h3>
            <p className="text-gray-400">
              Due to product launches and aggressive marketing, we saw a 35% surge in sales during Q2.
            </p>
          </div>
          <div className="relative p-6 transition-transform duration-300 transform bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl animate-float">
            <h3 className="mb-4 text-2xl font-semibold">Yearly Growth Rate</h3>
            <p className="text-gray-400">
              With consistent demand, the company has seen a 22% growth year-over-year in sales and customer base.
            </p>
          </div>
          <div className="relative p-6 transition-transform duration-300 transform bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl animate-float">
            <h3 className="mb-4 text-2xl font-semibold">AI Predictions</h3>
            <p className="text-gray-400">
              Leveraging AI insights, we predict a further 15% boost in sales for Q4, driven by high-demand trends.
            </p>
          </div>
          <div className="relative p-6 transition-transform duration-300 transform bg-gray-800 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl animate-float">
            <h3 className="mb-4 text-2xl font-semibold">Top-Selling Products</h3>
            <p className="text-gray-400">
              Product A and Product B continue to dominate sales, contributing over 45% to total revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action with hover effects */}
      <section className="mt-16 text-center animate-fadeInUp">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-center">
          Unlock Full Potential of Sales Insights
        </h2>
        <p className="mb-8 text-lg text-gray-400">
          Dive deeper into your sales data and let our AI tools guide your growth strategy.
        </p>
        <button className="px-8 py-3 mb-20 text-lg font-semibold tracking-wide text-white transition duration-300 transform rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-110 hover:bg-blue-500 hover:shadow-lg">
          Get Started Now
        </button>
      </section>
      <Eyes />
      <Footer />
    </div>
  );
};

export default Sales;
