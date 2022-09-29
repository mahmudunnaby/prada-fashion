import React from 'react';

const Catagories = () => {
    return (
        <div className=' m-12'>
            <h1 className=' mt-20 text-4xl font-bold mb-7'>Shop by Categories</h1>

            <div>
                <div className="grid grid-rows-3 grid-flow-col gap-4">
                    <div className="row-span-3 h-[686px] ">
                        <div className=" h-full bg-[url('/public/1.jpg')] lg:bg-cover p-7">
                            <h1 className=' text-white text-2xl font-bold'>Womens Pants</h1>
                            <h1 className=' text-white text-lg font-bold'>Explore</h1>
                        </div>
                    </div>
                    <div className="row-span-3  ">
                        <div className="col-span-2 ">
                            <div className="row-span-3 h-[330px]">
                                <div className=" h-full bg-[url('/public/17.jpg')] lg:bg-cover p-7">
                                    <h1 className=' text-white text-2xl font-bold'>Mens Jacket</h1>
                                    <h1 className=' text-white text-lg font-bold'>Explore</h1>
                                </div>
                            </div>

                        </div>
                        <div className="col-span-2  ">
                            <div className="row-span-3 h-[330px]">
                                <div className=" h-full bg-[url('/public/9.jpg')] lg:bg-cover bg-center p-7">
                                    <h1 className=' text-white text-2xl font-bold'>Mens Jacket</h1>
                                    <h1 className=' text-white text-lg font-bold'>Explore</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 ">
                        <div className="col-span-2  ">
                            <div className="row-span-3 h-[330px]">
                                <div className=" h-full bg-[url('/public/10.jpg')] lg:bg-cover bg-center p-7">
                                    <h1 className=' text-white text-2xl font-bold'>Mens Jacket</h1>
                                    <h1 className=' text-white text-lg font-bold'>Explore</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row-span-1 col-span-2 ">
                        <div className="grid grid-cols-2 gap-4">
                            <div> <div className="col-span-2  ">
                                <div className="row-span-3 h-[330px]">
                                    <div className=" h-full bg-[url('/public/3.jpg')] lg:bg-cover bg-center p-7">
                                        <h1 className=' text-white text-2xl font-bold'>Mens Jacket</h1>
                                        <h1 className=' text-white text-lg font-bold'>Explore</h1>
                                    </div>
                                </div>

                            </div></div>

                            <div> <div className="col-span-2 ">
                                <div className="row-span-3 h-[330px]">
                                    <div className=" h-full bg-[url('/public/15.jpg')] lg:bg-cover bg-center p-7">
                                        <h1 className=' text-white text-2xl font-bold'>Mens Jacket</h1>
                                        <h1 className=' text-white text-lg font-bold'>Explore</h1>
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