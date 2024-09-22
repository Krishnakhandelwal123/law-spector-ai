import React from 'react';

const Project = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="" className='w-full flex flex-col justify-center items-center bg-[#CDEA68] min-h-screen'>
      <div className='text-black tracking-tighter text-[12rem] font-semibold leading-none'>READY</div>
      <div className='text-[12rem] tracking-tighter font-semibold text-black leading-none'>TO START</div>
      <div className='text-[12rem] tracking-tighter font-semibold text-black leading-none'>THE PROJECT ?</div>
      <div className='mt-20 mb-40 '>
        <button className='gap-2 px-8 py-2 text-2xl tracking-tight text-white bg-black rounded-full'>
          START THE PROJECT 
        </button>
      </div>
    </div>
  );
};

export default Project;
