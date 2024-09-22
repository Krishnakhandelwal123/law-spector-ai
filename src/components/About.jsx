import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-0.2" className='text-black w-full py-20 px-16 bg-[#CDEA68] rounded-3xl'>
      <h1 className='text-[3vw] leading-[4vw] tracking-tight'>At StoreCraft, we are committed to empowering businesses with cutting-edge technology that enhances efficiency, drives informed decisions, and automates critical workflows.</h1>
      <div className='w-full mt-20 border-t-2 border-zinc-700'></div>
      <div className='flex justify-between mt-10'>
        <h1 className='text-[17px] w-[20vw]'>What can you expect:</h1>
         <div className='w-[30vw] text-[17px] flex flex-col gap-10'>
          <p>We create tailored Websites to help you to grow your businesses or startups. Whether it’s live or digital, delivered for one or a hundred people.</p>
          <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
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
          <p className='text-[1.2vw] p-2'><span className='text-[2vw]'>• AI Integration:</span> Leverage machine learning algorithms to automate processes and deliver actionable insights that drive growth.
          </p>
          <p className='text-[1.2vw] p-2'><span className='text-[2vw]'>• Customization:</span>Tailor workflows, settings, and features to match the specific needs of your business.</p>
          <p className='text-[1.2vw] p-2'><span className='text-[2vw]'>• Inventory Management:</span> Monitor stock levels with AI-driven forecasting to ensure optimal inventory performance.</p>
          <p className='text-[1.2vw] p-2'><span className='text-[2vw]'>• Analytics & Insights:</span> Access real-time data visualization, custom reports, and predictive analysis to stay ahead of trends.</p>
          <p className='text-[1.2vw] p-2'><span className='text-[2vw]'>• User Experience:</span> A user-friendly interface designed with modern aesthetics, featuring seamless navigation, minimalistic design, and powerful functionality.</p>
        </div>
        <div  style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/028/245/452/large_2x/artificial-intelligence-scattering-head-profile-of-a-chrome-plated-robot-black-background-ai-generated-photo.jpeg')" }} className='bg-cover h-[80vh] bg-center w-[50%] rounded-md ml-20 bg-green-500'>
              
        </div>

      </div>



    </div>
  )
}

export default About;
