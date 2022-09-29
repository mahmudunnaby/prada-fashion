import React from 'react';
import hero1 from '../../assets/13.jpg'
import hero2 from '../../assets/7.jpg'
import prada from '../../assets/prada.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Hero = () => {
    return (

        <div className=' w-full '>


            <Swiper
                // rewind={true}
                navigation={false}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={true}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper sm:w-[300] md:w-[768] lg:w-[1024]"
                breakpoints={{
                    300: {
                        slidesPerView: 1,

                    },
                    768: {
                        slidesPerView: 1,

                    },
                    1024: {
                        slidesPerView: 1,

                    }
                }}
            >

                <SwiperSlide>
                    <div className=' w-full  flex  '>

                        <img className=' w-3/5 h-96 lg:w-4/5 md:h-[500px]   lg:h-screen' src={hero1} alt="" />

                        <div className="flex justify-center items-center lg:w-4/6 w-4/6 bg-[url('/public/7.jpg')] bg-cover">
                            <div className='flex justify-center flex-col items-center'>
                                <img className='  lg:w-[533px] w-28  ' src={prada} alt="" />
                                <h1 className='lg:text-5xl lg:font-bold lg:mt-16 lg:mb-6 my-3 text-sm '>Big Fashion Festival</h1>
                                <h1 className=' lg:text-5xl lg:font-bold text-sm'>50% - 80% off</h1>
                                <button className="btn btn-outline mt-9">Explore</button>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' w-full  flex  '>

                        <img className=' w-3/5 h-96 lg:w-4/5 md:h-[500px]  lg:h-screen' src={hero1} alt="" />

                        <div className="flex justify-center items-center lg:w-4/6 w-4/6 bg-[url('/public/7.jpg')] bg-cover">
                            <div className='flex justify-center flex-col items-center'>
                                <img className='  lg:w-[533px] w-28 ' src={prada} alt="" />
                                <h1 className='lg:text-5xl lg:font-bold lg:mt-16 lg:mb-6 my-3 text-sm '>Big Fashion Festival</h1>
                                <h1 className=' lg:text-5xl lg:font-bold text-sm'>50% - 80% off</h1>
                                <button className="btn btn-outline mt-9">Explore</button>
                            </div>

                        </div>

                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className=' w-full  flex  '>

                        <img className=' w-3/5 h-96 lg:w-4/5 md:h-[500px]  lg:h-screen' src={hero1} alt="" />

                        <div className="flex justify-center items-center lg:w-4/6 w-4/6 bg-[url('/public/7.jpg')] bg-cover">
                            <div className='flex justify-center flex-col items-center'>
                                <img className='  lg:w-[533px] w-28 ' src={prada} alt="" />
                                <h1 className='lg:text-5xl lg:font-bold lg:mt-16 lg:mb-6 my-3 text-sm '>Big Fashion Festival</h1>
                                <h1 className=' lg:text-5xl lg:font-bold text-sm'>50% - 80% off</h1>
                                <button className="btn btn-outline mt-9">Explore</button>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' w-full  flex  '>

                        <img className=' w-3/5 h-96 lg:w-4/5 md:h-[500px]  lg:h-screen' src={hero1} alt="" />

                        <div className="flex justify-center items-center lg:w-4/6 w-4/6 bg-[url('/public/7.jpg')] bg-cover">
                            <div className='flex justify-center flex-col items-center'>
                                <img className='  lg:w-[533px] w-28 ' src={prada} alt="" />
                                <h1 className='lg:text-5xl lg:font-bold lg:mt-16 lg:mb-6 my-3 text-sm '>Big Fashion Festival</h1>
                                <h1 className=' lg:text-5xl lg:font-bold text-sm'>50% - 80% off</h1>
                                <button className="btn btn-outline mt-9">Explore</button>
                            </div>

                        </div>

                    </div>
                </SwiperSlide>



            </Swiper>





        </div>





    );
};

export default Hero;