import React, { useEffect, useState } from 'react';
 
const Eyes = () => {
    const [rotate, setRotate] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 }); // Pupil position
    const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 }); // Smooth animation position

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            // Calculate rotation angle
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);

            // Calculate target position for the black balls (pupils)
            const distance = 8; // Reduced distance for more subtle movement
            const rad = Math.atan2(deltaY, deltaX);
            const x = Math.cos(rad) * distance;
            const y = Math.sin(rad) * distance;

            setTargetPosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animatePosition = () => {
            // Smoothly interpolate between current position and target position
            setPosition((prevPosition) => ({
                x: prevPosition.x + (targetPosition.x - prevPosition.x) * 0.1, // Adjust smoothness factor (e.g. 0.1)
                y: prevPosition.y + (targetPosition.y - prevPosition.y) * 0.1,
            }));
            requestAnimationFrame(animatePosition); // Keep animation frame going
        };

        requestAnimationFrame(animatePosition); // Start the animation

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [targetPosition]);

    return (
        <div className='w-full h-screen overflow-hidden eyes'>
            <div data-scroll data-scroll-speed="-.5" className='relative w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center '>
                <div className='flex absolute gap-10 -translate-x-[50%] -translate-y-[50%] left-1/2 top-1/2'>
                    {/* First eye */}
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white'>
                        <div className='relative w-2/3 bg-black rounded-full h-2/3' style={{ transform: `translate(${position.x}px, ${position.y}px)`, transition: 'transform 0.1s ease' }}>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='absolute -translate-x-[50%] -translate-y-[50%] left-1/2 top-1/2 w-full h-6 line'>
                                <div className='w-6 h-6 bg-white rounded-full'></div>
                            </div>
                            {/* Text "Play" in the center */}
                            <div className="absolute inset-0 flex items-center justify-center text-[1.2rem] text-white">
                                PLAY
                            </div>
                        </div>
                    </div>
                    
                    {/* Second eye */}
                    <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white'>
                        <div className='relative w-2/3 bg-black rounded-full h-2/3' style={{ transform: `translate(${position.x}px, ${position.y}px)`, transition: 'transform 0.1s ease' }}>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='absolute -translate-x-[50%] -translate-y-[50%] left-1/2 top-1/2 w-full h-6 line'>
                                <div className='w-6 h-6 bg-white rounded-full'></div>
                            </div>
                            {/* Text "Play" in the center */}
                            <div className="absolute inset-0 flex items-center justify-center text-[1.2rem] text-white">
                                PLAY
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
