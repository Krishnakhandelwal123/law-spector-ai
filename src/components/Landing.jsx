import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
    const handleRippleEffect = (e) => {
        const ripple = document.createElement('span');
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen pt-1 bg-zinc-900'>
            <div className='flex items-center justify-between '>
                <div className="px-4 md:px-20 mt-52 textstructure">
                    {["AI-Powered Legal", "Assistance at Your", "Fingertips"].map((item, index) => (
                        <div key={index} className="mb-4 masker">
                            <div className="flex items-center w-fit">
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "8vw" }}
                                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                        className="bg-center mr-2 md:mr-5 w-[12vw] md:w-[8vw] mt-2 rounded-md h-[8vw] md:h-[5.7vw] bg-red-500"
                                        style={{ backgroundImage: "url('./src/assets/ani.jpg')" }}
                                    />
                                )}
                                <h1 className='text-[10vw] tracking-tight font-semibold md:text-[6vw] leading-[.75]'>
                                    {item}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mr-[-80px]'>
                    <a href="/bot">
                        <div
                            style={{ backgroundImage: "url('./src/assets/chatbot.png')" }}
                            className='cursor-pointer mt-[22vh] mr-[15vw] h-[50vh] w-60 bg-cover'
                        />
                        <h1 className='mt-4 ml-4 text-2xl'>Start Consulting</h1>
                    </a>
                </div>
            </div>
            <div className='flex flex-col items-center justify-between px-4 py-4 border-t-2 md:flex-row md:px-20 md:mt-32 border-zinc-700'>
                {["For Lawyers and Individuals", "Generate your Legal Document"].map((item, index) => (
                    <p key={index} className='font-light leading-none tracking-tight text-center text-md md:text-left'>
                        {item}
                    </p>
                ))}
                <motion.div
                    className="flex items-center gap-3 mt-4 cursor-pointer md:mt-0"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                    <motion.div
                        className='relative px-4 py-1 overflow-hidden font-light text-gray-300 transition duration-300 border-2 border-gray-300 rounded-full'
                        onClick={handleRippleEffect}
                    >
                        START CONSULTATION
                    </motion.div>
                    <motion.div
                        className="flex items-center justify-center text-gray-300 transition duration-300 border-2 border-gray-300 rounded-full h-9 w-9 hover:bg-gray-700"
                        whileHover={{ scale: 1.1 }}
                    >
                        <span className='rotate-[45deg]'>
                            <FaArrowUpLong />
                        </span>
                    </motion.div>
                </motion.div>
            </div>

           

            <style jsx>{`
                .ripple {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.6);
                    animation: ripple 0.6s linear;
                }

                @keyframes ripple {
                    0% {
                        transform: scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(4);
                        opacity: 0;
                    }
                }

                .animate-gif {
                    animation: float 5s ease-in-out infinite;
                }

                @keyframes float {
                    0% {
                        transform: translatey(0px);
                    }
                    50% {
                        transform: translatey(-10px);
                    }
                    100% {
                        transform: translatey(0px);
                    }
                }
            `}</style>
        </div>
    );
}

export default Landing;
