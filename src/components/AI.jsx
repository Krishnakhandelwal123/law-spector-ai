import React from 'react';
import Eyes from './Eyes';
import Footer from './Footer';
import LocomotiveScroll from 'locomotive-scroll' 
const AI = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="px-6 py-12 bg-gray-50 md:px-12">
      <div className="max-w-screen-xl mx-auto text-center">
        <h1 className="mb-8 text-4xl font-semibold text-gray-800">
          Key Features of Law Spector AI
        </h1>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Left Section: Features */}
          <div className="space-y-8 text-lg text-gray-700">
            <div className="feature-item">
              <h2 className="text-2xl font-semibold text-green-600">
                Legal Document Analysis
              </h2>
              <p className="mt-2">
                Upload contracts, agreements, or legal notices, and let Law Spector AI provide AI-powered insights, summaries, and quick reviews. The AI can highlight crucial clauses, identify risks, and ensure compliance with relevant regulations.
              </p>
            </div>

            <div className="feature-item">
              <h2 className="text-2xl font-semibold text-green-600">
                Case Law Research
              </h2>
              <p className="mt-2">
                Find relevant case laws, precedents, and statutes quickly. Law Spector AI streamlines your research process, helping you access the most applicable legal references with ease.
              </p>
            </div>

            <div className="feature-item">
              <h2 className="text-2xl font-semibold text-green-600">
                Automated Legal Drafting
              </h2>
              <p className="mt-2">
                Generate legal documents like contracts, NDAs, wills, and more. Law Spector AI drafts accurate documents by leveraging templates and user inputs to ensure precision and minimize errors.
              </p>
            </div>

            <div className="feature-item">
              <h2 className="text-2xl font-semibold text-green-600">
                Legal Consultation Chatbot
              </h2>
              <p className="mt-2">
                Offer a virtual assistant that provides immediate answers to legal queries. Law Spector AI helps individuals and businesses understand their legal rights and obligations through conversational AI.
              </p>
            </div>

            <div className="feature-item">
              <h2 className="text-2xl font-semibold text-green-600">
                Court Case Predictions
              </h2>
              <p className="mt-2">
                Use AI to analyze historical case data, predict potential case outcomes, and evaluate risks. Our AI helps you assess the likelihood of success based on previous judgments.
              </p>
            </div>
          </div>

          {/* Right Section: Image */}
          <div
            className="relative mt-24 overflow-hidden rounded-md shadow-lg"
            style={{
              backgroundImage:
                "url('https://t4.ftcdn.net/jpg/09/68/34/67/360_F_968346724_JFKl4LwZabs66FajbQI1LCjJ6VK3lH5l.jpg')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: '80vh',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <h2 className="text-3xl font-bold">Revolutionizing Legal Workflows</h2>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Why Choose Law Spector AI?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Leverage cutting-edge AI technology to streamline your legal processes, automate tedious tasks, and enhance decision-making. With Law Spector AI, you gain more time for strategic and impactful work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AI;
