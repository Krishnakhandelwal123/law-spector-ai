import React from 'react';

const Featured = () => {
    return (
        <div className='w-full py-10'>
            <div className='w-full px-10'>
                <h1 className='pb-12 mt-16 text-6xl tracking-tight border-b-2 border-zinc-500'>Featured Projects</h1>
                <div className="flex w-full gap-10 cards">

                    {/* Card 1 */}
                    <div className="relative w-1/2 card">
                        <h1 className='mt-16 text-2xl'>• Analyse Your Business</h1>
                        <div
                            className='h-[70vh] mt-10 rounded-lg cursor-pointer bg-cover bg-center relative transition-transform duration-500 ease-in-out transform hover:scale-95'
                            style={{ backgroundImage: 'url("https://c0.wallpaperflare.com/preview/506/1012/882/action-plan-agenda-analysis-analytics.jpg")' }}
                        >
                            {/* Additional heading that appears in the center on hover */}
                            <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out rounded-lg opacity-0 hover:opacity-100 bg-black/50'>
                                <h1 className='text-5xl text-white transition-transform duration-500 ease-in-out transform scale-75 hover:scale-100'>Analyse Your Business</h1>
                            </div>
                        </div>
                        <div className='flex gap-5 mt-10 mb-10 buttons'>
                            <div className='py-1 px-8 border-[1px] mt-3 border-white text-[18px] rounded-3xl'>Analysis</div>
                            <div className='py-1 px-8 border-[1px] mt-3 border-white text-[18px] rounded-3xl'>AI Featured</div>
                            <div className='py-1 px-8 border-[1px] mt-3 border-white text-[18px] rounded-3xl'>Past Datas</div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="relative w-1/2 card">
                        <h1 className='mt-16 text-2xl'>• Marketing</h1>
                        <div
                            className='bg-cover bg-center rounded-lg mt-10 cursor-pointer h-[70vh] relative transition-transform duration-500 ease-in-out transform hover:scale-95'
                            style={{ backgroundImage: 'url("https://as1.ftcdn.net/v2/jpg/02/09/58/18/1000_F_209581892_kep7lC1zhRiZwQ9PZJjbveIjgF2hs6US.jpg")' }}
                        >
                            {/* Additional heading that appears in the center on hover */}
                            <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out rounded-lg opacity-0 hover:opacity-100 bg-black/50'>
                                <h1 className='text-5xl text-white transition-transform duration-500 ease-in-out transform scale-75 hover:scale-100'>Marketing</h1>
                            </div>
                        </div>
                        <div className='flex gap-5 mt-10 mb-10 buttons'>
                            <div className='py-1 px-8 border-[1px] mt-3 border-white text-[18px] rounded-3xl'>Marketing</div>
                        </div>
                    </div>

                </div>

                <div className="flex w-full gap-10 cards">

                    {/* Card 3 */}
                    <div className="relative w-1/2 card">
                        <h1 className='mt-16 text-2xl'>• AI Customization</h1>
                        <div
                            className='bg-cover bg-center h-[70vh] mt-10 rounded-lg cursor-pointer relative transition-transform duration-500 ease-in-out transform hover:scale-95'
                            style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=")' }}
                        >
                            {/* Additional heading that appears in the center on hover */}
                            <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out rounded-lg opacity-0 hover:opacity-100 bg-black/50'>
                                <h1 className='text-5xl text-white transition-transform duration-500 ease-in-out transform scale-75 hover:scale-100'>AI Customization</h1>
                            </div>
                        </div>
                        <div className='flex gap-5 mt-10 mb-10 buttons'>
                            <div className='py-1 px-8 border-[1px] mt-3 border-white text-[18px] rounded-3xl'>Analysis</div>
                            <div className='py-1 px-8 border-[1px] mt-3 border-white text-[18px] rounded-3xl'>AI Featured</div>
                            <div className='py-1 px-8 border-[1px] mt-3 border-white text-[18px] rounded-3xl'>Past Datas</div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="relative w-1/2 card">
                        <h1 className='mt-16 text-2xl'>• Sales Management</h1>
                        <div
                            className='bg-cover bg-center rounded-lg mt-10 cursor-pointer h-[70vh] relative transition-transform duration-500 ease-in-out transform hover:scale-95'
                            style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1384277890/vector/financial-and-investment-data-concept-business-sales-data-progress-of-business-and-growth.jpg?s=612x612&w=0&k=20&c=96zjabSXRyTisoC281nw87jCdZt96ddFz91Pb8VQag4=")' }}
                        >
                            {/* Additional heading that appears in the center on hover */}
                            <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out rounded-lg opacity-0 hover:opacity-100 bg-black/50'>
                                <h1 className='text-5xl text-white transition-transform duration-500 ease-in-out transform scale-75 hover:scale-100'>Sales Management</h1>
                            </div>
                        </div>
                        <div className='flex gap-5 mt-10 mb-10 buttons'>
                            <div className='py-1 px-8 border-[1px] mt-3 border-white text-[18px] rounded-3xl'>Analysis</div>
                            <div className='py-1 px-8 border-[1px] mt-3 border-white text-[18px] rounded-3xl'>AI Featured</div>
                        </div>
                    </div>

                </div>
            </div> 
        </div>
    );
};

export default Featured;
