import React from 'react'

const Cards = () => {
    return (
        <div className='flex w-full h-screen gap-5 p-10 mt-10 bg-zinc-900'>
            <div className='card mt-10 w-1/2 h-[50vh]'>
                <div className='relative w-full h-full bg-[#004D43] rounded-lg flex justify-center items-center  text-6xl text-[#fdff32] '>
                    StoreCraft
                    <button className='absolute px-6 py-2 border-2 text-[15px] rounded-3xl border-[#fdff32] left-10 bottom-10 '>
                    ©2019-2022
                    </button> 
                </div>
            </div>
            <div className='card mt-10 w-1/2 flex gap-5 h-[50vh]'>
                <div className='relative flex flex-col items-center justify-center w-1/2 h-full rounded-lg bg-zinc-700'>
                <div className='text-6xl font-semibold tracking-tight'>CLUTCH</div>
                <div>⭐⭐⭐⭐⭐</div>
                <button className='absolute px-6 py-2 border-2 text-[15px] rounded-3xl tracking-tight left-10 bottom-10 '>
                RATING 5.0 ON CLUTCH
                </button>
                </div>
                 <div className='relative flex flex-col items-center justify-center w-1/2 h-full rounded-lg bg-zinc-700'>
                 <img className='h-[100px] w-[100px]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-6 py-2 border-2 text-[15px] rounded-3xl tracking-tight left-10 bottom-10 '>
                BUISNESS BOOTCAMP ALUMINI
                </button>
                </div>
            </div>
        </div>
    )
}

export default Cards;
