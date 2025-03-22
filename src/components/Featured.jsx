import React from 'react';

const Featured = () => {
    return (
        <div className='w-full py-10'>
            <div className='w-full px-10'>
                <h1 className='pb-12 mt-16 text-6xl tracking-tight border-b-2 border-zinc-500'>Featured Projects</h1>
                <div className="flex w-full gap-10 cards">

                    {/* Card 1 */}
                    <div className="relative w-1/2 card">
                        <h1 className='mt-16 text-2xl'>• Legal Document Creator</h1>
                        <div
                            className='h-[50vh] mt-10 rounded-lg cursor-pointer bg-cover bg-center relative transition-transform duration-500 ease-in-out transform hover:scale-95'
                            style={{ backgroundImage: 'url("https://thumbs.dreamstime.com/b/artificial-intelligence-document-analysis-image-portraying-339895773.jpg")' }}
                        >
                            {/* Additional heading that appears in the center on hover */}
                            <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out rounded-lg opacity-0 hover:opacity-100 bg-black/50'>
                                <h1 className='text-5xl text-white transition-transform duration-500 ease-in-out transform scale-75 hover:scale-100'>Analyse Your Document</h1>
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
                        <h1 className='mt-16 text-2xl'>• Judgment Prediction</h1>
                        <div
                            className='bg-cover bg-center rounded-lg mt-10 cursor-pointer h-[50vh] relative transition-transform duration-500 ease-in-out transform hover:scale-95'
                            style={{ backgroundImage: 'url("https://media.istockphoto.com/id/518280464/vector/vector-vintage-scales-of-justice-icon.jpg?s=612x612&w=0&k=20&c=8K1xg88-x_OlhdttaxIipxkXojuQePJ9W4VaVeiG-pg=")' }}
                        >
                            {/* Additional heading that appears in the center on hover */}
                            <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out rounded-lg opacity-0 hover:opacity-100 bg-black/50'>
                                <h1 className='text-5xl text-white transition-transform duration-500 ease-in-out transform scale-75 hover:scale-100'>Judgment Prediction</h1>
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
                        <h1 className='mt-16 text-2xl'>• Consult a Lawyer</h1>
                        <div
                            className='bg-cover bg-center h-[50vh] mt-10 rounded-lg cursor-pointer relative transition-transform duration-500 ease-in-out transform hover:scale-95'
                            style={{ backgroundImage: 'url("https://www.liveabout.com/thmb/uYp-sTXqKwAnvpVPIWE6kNeag9E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Legalassistants-5bdfac424cedfd002672eb9e.jpg")' }}
                        >
                            {/* Additional heading that appears in the center on hover */}
                            <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out rounded-lg opacity-0 hover:opacity-100 bg-black/50'>
                                <h1 className='text-5xl text-white transition-transform duration-500 ease-in-out transform scale-75 hover:scale-100'>Legal Assistant</h1>
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
                        <h1 className='mt-16 text-2xl'>• Legal Document Finder</h1>
                        <div
                            className='bg-cover  rounded-lg mt-10 cursor-pointer h-[50vh] relative transition-transform duration-500 ease-in-out transform hover:scale-95'
                            style={{ backgroundImage: 'url("./src/assets/predict.jpg")' }}
                        >
                            {/* Additional heading that appears in the center on hover */}
                            <div className='absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out rounded-lg opacity-0 hover:opacity-100 bg-black/50'>
                                <h1 className='text-5xl text-white transition-transform duration-500 ease-in-out transform scale-75 hover:scale-100'>Find Legal Document</h1>
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
