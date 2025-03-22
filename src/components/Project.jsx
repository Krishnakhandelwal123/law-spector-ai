import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
function Project() {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (event) => {
            let PositionX = event.clientX;
            let PositionY = event.clientY;
            let DeltaPositionX = PositionX - window.innerWidth / 2;
            let DeltaPositionY = PositionY - window.innerHeight / 2;
            let angle =
                Math.atan2(DeltaPositionY, DeltaPositionX) * (180 / Math.PI) - 180;
            setRotate(angle);
        });
    }, [rotate]);
    return (
        <div data-scroll data-scroll-section data-scroll-speed=".2"  className='relative w-full h-[150vh] cursor-pointer bg-[#001D3D]'>
            <div className='pt-20 text-white'>
                {
                    ['Ready', 'to revolutionize', 'your legal processes?'].map((item, idx) => (
                        <h1 className='text-[22vh] font-bold uppercase text-center tracking-tighter leading-none'>{item}</h1>
                    ))
                }
            </div>
            
            <div className="flex items-center justify-center w-full mt-12 ">
                <a href="https://github.com/Krishnakhandelwal123" target="_blank" className='flex items-center justify-between gap-8 px-6 py-4 text-black uppercase bg-white rounded-full text-md'>START THE PROJECT
                    
                </a>
            </div>
        </div>
    )
}
export default Project;