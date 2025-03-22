import React from 'react';

const Review = () => {
    return (
        <div className='p-10'>
            <h1 className='mt-10 text-5xl'>
                Client's Reviews
            </h1>
            <div className='w-full mt-20 border-t-2 border-zinc-500'></div>
            <div className="flex justify-between mt-10 review">
                <div className='w-[50vw] text-[20px] underline cursor-pointer'>Karman Ventures</div>
                <div className='w-[60vw] text-[20px]'>
                    Services:
                    <div className='mt-16'>
                        <span className='cursor-pointer rounded-2xl  border-[1px] p-1 px-3 font-light'>Investor Deck</span>
                    </div>
                    <div className='mt-4'>
                        <span className='cursor-pointer rounded-2xl  border-[1px] p-1 px-3 font-light'>Sales Deck</span>
                     </div>
                </div>
                <div className='w-[40vw]'>
                    <div className='text-[20px]'>William Barnes</div>
                    <div  style={{ backgroundImage: "url('https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726790400&semt=ais_hybrid')" }} className='bg-cover bg-center w-[100px] mt-10 mb-5 h-[100px] bg-green-500 rounded-lg'></div>
                    <p className='mt-2'>
                        They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
                    </p>
                </div>
                <div className='ml-10 text-[20px] cursor-pointer'>READ</div>
            </div>
                   
        </div>
    );
}

export default Review;
