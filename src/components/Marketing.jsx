import React from "react";
import Eyes from "./Eyes";

const Marketing = () => {
  return (
    <div className="min-h-screen p-8 text-white bg-gray-900">
      {/* Section 1: Overview Heading */}
      <section className="mb-12 animate-fadeIn">
        <h1 className="mb-4 text-4xl font-bold text-center">
          Elevate Your Business with Our AI-Powered SaaS Platform
        </h1>
        <p className="text-lg text-center text-gray-400">
          Customize, analyze, and optimize your operations with powerful AI-driven tools and data insights.
        </p>
      </section>

      {/* Section 2: AI Customization Feature */}
      <section className="mb-12">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-8 lg:w-1/2 lg:mb-0 animate-slideInLeft">
            <h2 className="mb-4 text-3xl font-semibold">AI Customization</h2>
            <p className="mb-4 text-gray-400 w-[40vw]">
              Tailor AI-driven processes to suit your business needs. Adjust AI settings and see real-time previews
              of the impact on recommendations and workflow automation.
            </p>
            <ul className="pl-5 text-gray-400 list-disc">
              <li>Adjust thresholds, preferences, and model types</li>
              <li>Preview and apply changes in real-time</li>
              <li>Guided tutorial for new users</li>
            </ul>
          </div>
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/623c6f010ae95f107980e813/Artificial-intelligence-robot/960x0.jpg?height=497&width=711&fit=bounds"
            alt="AI Customization Diagram"
            className="transition-transform duration-300 transform rounded-lg shadow-lg lg:w-1/2 hover:scale-105 animate-slideInRight"
          />
        </div>
      </section>

      {/* Section 3: Analytics and Insights Feature */}
      <section className="mb-12">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <img
            src="https://media.istockphoto.com/id/1425235289/photo/data-analyst-working-on-business-analytics-dashboard-with-charts-metrics-and-kpi-to-analyze.jpg?s=612x612&w=0&k=20&c=fKMxXdm1SrZE9unWyLWUPPzK6RTy8OsBBaKWcpH0O4s="
            alt="Analytics and Insights Diagram"
            className="mb-8 transition-transform duration-300 transform rounded-lg shadow-lg lg:w-1/2 lg:mb-0 hover:scale-105 animate-slideInLeft"
          />
          <div className="ml-10 lg:w-1/2 animate-slideInRight">
            <h2 className="mb-4 text-3xl font-semibold ">Analytics & Insights</h2>
            <p className="mb-4 text-gray-400 w-[40vw]">
              Leverage powerful data visualization tools to track performance and gain actionable insights. Customize
              reports and uncover trends to make informed decisions.
            </p>
            <ul className="pl-5 text-gray-400 list-disc">
              <li>Visualize key metrics with graphs, charts, and heat maps</li>
              <li>Generate custom reports with selected metrics</li>
              <li>Receive AI-powered insights and recommendations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Inventory Management Feature */}
      <section className="mb-12">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-8 lg:w-1/2 lg:mb-0 animate-slideInLeft w-[40vw]">
            <h2 className="mb-4 text-3xl font-semibold">Inventory Management</h2>
            <p className="mb-4 text-gray-400 ">
              Stay ahead of demand with real-time inventory tracking and AI-driven forecasting. Get stock level
              alerts and manage your product inventory efficiently.
            </p>
            <ul className="pl-5 text-gray-400 list-disc">
              <li>Monitor stock levels in real-time</li>
              <li>AI-driven demand forecasting for smart stock management</li>
              <li>Bulk actions for quick product updates</li>
            </ul>
          </div>
          <img
            src="https://st2.depositphotos.com/7865540/10804/i/450/depositphotos_108049258-stock-photo-futuristic-concept-with-signs-and.jpg"
            alt="Inventory Management Diagram"
            className="transition-transform duration-300 transform rounded-lg shadow-lg lg:w-1/2 hover:scale-105 animate-slideInRight"
          />
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="mt-16 text-center animate-fadeIn">
        <h2 className="mb-4 text-3xl font-semibold">
          Get Started Today with Our AI-Powered SaaS Platform
        </h2>
        <p className="mb-8 text-gray-400">
          Empower your business with real-time insights, smart AI customization, and efficient inventory management.
        </p>
        <button className="px-6 py-3 text-white transition duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1">
          Start Your Free Trial
        </button>
      </section>
    </div>
  );
};

export default Marketing;
