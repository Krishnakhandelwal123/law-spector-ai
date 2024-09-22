import React from 'react';
import Eyes from './Eyes';
import Footer from './Footer';

const AI = () => {
  return (
    <div className="min-h-screen p-10 text-white bg-gray-900 animate-fadeIn">
      {/* Section 1: AI Customization Heading */}
      <section className="mb-12">
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-500 ">
          AI-Powered Customization for Your Business
        </h1>
        <p className="text-lg text-center text-gray-400">
          Our platform allows you to customize AI-driven processes with real-time previews and adjust settings
          for optimal results.
        </p>
      </section>

      {/* Section 2: AI Customization Feature */}
      <section className="mb-12">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-8 lg:w-1/2 animate-slideInLeft">
            <h2 className="mb-4 text-3xl font-semibold text-pink-500">AI Customization Features</h2>
            <p className="mb-4 text-gray-400 w-[40vw]">
              Fine-tune AI to match your business needs. You can control thresholds, preferences, and the types
              of models used to process data, ensuring precise AI behavior for specific workflows.
            </p>
            <ul className="pl-5 text-gray-400 list-disc">
              <li>Model customization and preview</li>
              <li>Real-time impact visualization</li>
              <li>Seamless integration with your operations</li>
            </ul>
          </div>
          <img
            src="https://infusedinnovations.com/hs-fs/hubfs/AI-Generated%20Media/Images/create%20a%20dark%20theme%20image%20with%20blue%20undertones%20that%20shows%20a%20person%20at%20a%20computer%20and%20a%20reference%20to%20an%20innovation%20strategy%20roadmap.jpeg?width=1024&height=1024&name=create%20a%20dark%20theme%20image%20with%20blue%20undertones%20that%20shows%20a%20person%20at%20a%20computer%20and%20a%20reference%20to%20an%20innovation%20strategy%20roadmap.jpeg"
            alt="AI Customization"
            className="transition-transform duration-500 transform bg-center bg-cover rounded-lg shadow-lg h-[80vh] w-[45vw] lg:w-1/2 hover:scale-105"
          />
        </div>
      </section>

      {/* Section 3: Chatbot Integration */}
      <section className="mb-12">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <img
            src="https://img.freepik.com/premium-vector/abstract-chatbot-ai-artificial-intelligence-chatbot-ai-is-software-application_36402-1499.jpg"
            alt="AI Chatbot"
            className="mb-8 transition-transform duration-500 transform bg-center bg-cover rounded-lg shadow-lg lg:w-1/2 lg:mb-0 hover:scale-105 animate-slideInLeft"
          />
          <div className="ml-10 lg:w-1/2 animate-slideInRight">
            <h2 className="mb-4 text-3xl font-semibold text-green-500">Intelligent AI Chatbot</h2>
            <p className="mb-4 text-gray-400 w-[40vw]">
              Enhance customer support with our AI-powered chatbot that learns from user interactions and improves over time. Personalize the chatbot’s responses, track conversation analytics, and provide seamless customer service.
            </p>
            <ul className="pl-5 text-gray-400 list-disc">
              <li>Natural language understanding</li>
              <li>24/7 customer interaction and support</li>
              <li>Customizable chatbot behavior and tone</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: AI Analytics and Insights */}
      <section className="mb-12">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-8 lg:w-1/2 animate-slideInLeft">
            <h2 className="mb-4 text-3xl font-semibold text-purple-500">AI Analytics & Insights</h2>
            <p className="mb-4 text-gray-400 w-[40vw]">
              Track your AI model’s performance with our analytics tools. Receive insights and recommendations
              powered by machine learning to optimize your workflow and maximize efficiency.
            </p>
            <ul className="pl-5 text-gray-400 list-disc">
              <li>Real-time analytics for AI processes</li>
              <li>AI-powered recommendations for process optimization</li>
              <li>Customizable reports and metrics</li>
            </ul>
          </div>
          <img
            src="https://miro.medium.com/v2/resize:fit:917/1*EUYe3F3_wktWCw9fsOfylA.png"
            alt="AI Analytics"
            className="transition-transform duration-500 transform rounded-lg shadow-lg lg:w-1/2 hover:scale-105 animate-slideInRight"
          />
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="mt-16 text-center animate-fadeIn">
        <h2 className="mb-4 text-3xl font-semibold text-yellow-500">
          Discover the Power of AI Customization Today
        </h2>
        <p className="mb-8 text-gray-400">
          Start using our AI-powered tools to transform your business operations and boost efficiency.
        </p>
        <button className="px-6 py-3 mb-20 text-white transition duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 hover:shadow-lg hover:-translate-y-1">
          Start Free Trial
        </button>
      </section>
      <Eyes />
      <Footer />
    </div>
  );
};

export default AI;
