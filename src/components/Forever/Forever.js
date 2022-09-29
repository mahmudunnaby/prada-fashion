import React from 'react';
import foreverwhite from '../../assets/Vector (3).png'
const Forever = () => {
    return (
        <div className="w-full h-[500px] bg-cover bg-center lg:h-[892px] bg-[url('/public/4.jpg')] lg:bg-cover flex flex-col justify-center items-center  mt-20">

            <img className='w-[80%] lg:w-[27%] ' src={foreverwhite} alt="" />
            <h1 className=' lg:mt-24 mt-12 text-2xl lg:text-5xl font-bold text-white'>Big Fashion Festival</h1>
            <h1 className=' lg:mt-9 mt-3 text-2xl lg:text-5xl font-bold text-white'>70% - 80% off</h1>
            <button className="btn btn-outline btn-accent mt-9">Explore</button>


        </div>
    );
};

export default Forever;