import React from 'react';

const Catagories = () => {
    return (
        <div className=' m-12'>
            <h1 className=' mt-20 text-4xl font-bold mb-7'>Shop by Categories</h1>

            <div>
                <div className="grid lg:grid-rows-2 grid-rows-3 grid-flow-col gap-4 ">
                    {/* A ROW */}
                    <div className="row-span-3 lg:h-[686px] h-[300px] ">
                        <div className=" h-full bg-[url('/public/1.jpg')] lg:bg-cover bg-contain p-7">
                            <h1 className=' text-white text-2xl font-bold'>Womens Pants</h1>
                            <h1 className=' text-white text-lg font-bold'>Explore</h1>
                        </div>
                    </div>
                    {/* A ROW */}
                    <div className="lg:row-span-3  col-span-2">
                        <div className="col-span-2 ">
                            <div className="row-span-3 lg:h-[330px] h-[150px]">
                                <div className=" h-full bg-[url('/public/17.jpg')] md:bg-cover bg-contain  p-7">
                                    <h1 className=' text-white text-2xl font-bold'>Mens Jacket</h1>
                                    <h1 className=' text-white text-lg font-bold'>Explore</h1>
                                </div>
                            </div>

                        </div>
                        <div className="lg:col-span-2  ">
                            <div className="row-span-3 lg:h-[330px] h-[150px]">
                                <div className=" h-full bg-[url('/public/9.jpg')] md:bg-cover bg-contain md:bg-center p-7">
                                    <h1 className=' text-white text-2xl font-bold'>Mens Jacket</h1>
                                    <h1 className=' text-white text-lg font-bold'>Explore</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 ">
                        <div className="col-span-2  ">
                            <div className="row-span-3 lg:h-[330px] h-[300px]">
                                <div className=" h-full bg-[url('/public/10.jpg')] lg:bg-cover bg-center p-7">
                                    <h1 className=' text-white text-2xl font-bold'>Mens Jacket</h1>
                                    <h1 className=' text-white text-lg font-bold'>Explore</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* A ROW
                     */}
                    <div className="row-span-1 col-span-2 ">
                        <div className="grid lg:grid-cols-2 grid-cols-1  gap-4">
                            <div> <div className="col-span-2  ">
                                <div className="row-span-3 lg:h-[330px] h-[150px]">
                                    <div className=" h-full bg-[url('/public/3.jpg')] lg:bg-cover bg-center  p-7">
                                        <h1 className=' text-white lg:text-2xl text-sm font-bold'>Mens Jacket</h1>
                                        <h1 className=' text-white lg:text-lg text-xs font-bold'>Explore</h1>
                                    </div>
                                </div>

                            </div></div>

                            <div> <div className="col-span-2 ">
                                <div className="row-span-3 lg:h-[330px] h-[150px]">
                                    <div className=" h-full bg-[url('/public/15.jpg')] lg:bg-cover bg-center  p-7">
                                        <h1 className=' text-white lg:text-2xl text-sm font-bold'>Mens Jacket</h1>
                                        <h1 className=' text-white lg:text-lg text-xs font-bold'>Explore</h1>
                                    </div>
                                </div>

                            </div></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Catagories;