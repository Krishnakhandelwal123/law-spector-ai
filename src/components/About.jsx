import React from 'react'
import LocomotiveScroll from 'locomotive-scroll'
const About = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div data-scroll data-scroll-speed="-0.4" className='text-white  w-full py-20 px-16 bg-[#000814] rounded-3xl'>
      <h1 className='mb-10 font-bold text-8xl'>About</h1>
      <h1 className='text-[2vw] leading-[4vw] tracking-tight'>At Law Spector AI, we are committed to empowering legal professionals and businesses with cutting-edge AI technology that enhances efficiency, drives informed decisions, and automates critical legal workflows.</h1>
      <div className='w-full mt-20 border-t-2 border-zinc-700'></div>
      <div className='flex justify-between mt-10'>
        <h1 className='text-[17px] w-[20vw]'>What can you expect:</h1>
        <div className='w-[30vw] text-[17px] flex flex-col gap-10'>
          <p>We create tailored legal technology solutions to help law firms, businesses, and startups streamline their legal processes. Whether it’s document analysis, case management, or compliance checking, we deliver powerful AI-driven tools that scale with your needs.</p>
          <p>We believe the right combination of strategy, design, and technology (with a dash of innovation) is what makes your legal workflows efficient, insightful, and impactful.</p>
        </div>
        <div className='flex flex-col m-10 mr-20'>
          S:
          <a className='mt-8 underline' href="">Instagram</a>
          <a className='underline' href="">Behance</a>
          <a className='underline' href="">Facebook</a>
          <a className='underline' href="">Linkedin</a>
        </div>
      </div>
      <div className='mt-20 border-t-2 border-zinc-700'></div>

      <div className='flex mt-8'>
        <div className='w-[45%]'>
          <h1 className='text-[4vw] mb-6'>Key Features:</h1>
          <p className='text-[1.2vw] p-2'><span className='text-[2vw]'>•Legal Document Analysis:</span> Upload contracts, agreements, or legal notices for AI-powered insights, summaries, and quick reviews. The AI can highlight important clauses, identify risks, and ensure compliance.
          </p>
          <p className='text-[1.2vw] p-2'><span className='text-[2vw]'>• Case Law Research:</span>Search and retrieve relevant case laws, precedents, and legal statutes. The AI can help you find the most applicable case law for a particular case quickly.</p>
          <p className='text-[1.2vw] p-2'><span className='text-[2vw]'>• Automated Legal Drafting:</span> Generate legal documents like contracts, NDAs, wills, and more. The AI drafts legal documents by leveraging templates and user inputs to ensure accuracy.</p>
          <p className='text-[1.2vw] p-2'><span className='text-[2vw]'>• Legal Consultation Chatbot:</span> Offer a virtual assistant to answer common legal queries and provide preliminary legal advice. It helps individuals and businesses understand their legal rights and obligations.</p>
          <p className='text-[1.2vw] p-2'><span className='text-[2vw]'>• Court Case Predictions:</span> Use AI to analyze historical case data, predict potential case outcomes, and evaluate risks. It can also predict the likelihood of success based on previous judgments.</p>
        </div>
        <div
          style={{ backgroundImage: "url('https://t4.ftcdn.net/jpg/09/68/34/67/360_F_968346724_JFKl4LwZabs66FajbQI1LCjJ6VK3lH5l.jpg')" }}
          className='bg-cover h-[80vh] bg-center w-[50%] rounded-md ml-20 flex justify-center items-center mt-28'>
        </div>
      </div>




    </div>
  )
}

export default About;
