import React from 'react';
import img1 from '../../assets/15.jpg'
import levis from '../../assets/Levis.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Deals = () => {
    return (

        <div className=' w-full '>
            <h1 className=' mt-[80px] mb-[27px] ml-[50px] text-4xl font-bold'>Trending Now</h1>

            <Swiper
                rewind={true}
                navigation={false}
                slidesPerView={1}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                pagination={false}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper sm:w-[300] md:w-[768] lg:w-[1024]"
                breakpoints={{
                    300: {
                        slidesPerView: 1,

                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 5
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    }
                }}
            >

                <SwiperSlide>
                    <div className=' w-full  '>

                        <div className=' w-11/12 mx-auto md:w-1/2 lg:mx-0  lg:w-[100%] h-[569px] mb-5 bg-[#FFFFFF] rounded-xl'>
                            <img className=' w-full  h-[301px] object-cover rounded-t-xl' src={img1} alt="" />
                            <div className=' flex justify-center items-center flex-col mt-8'>
                                <img src={levis} alt="" />
                                <h1 className=' text-4xl font-bold text-[#272727] mt-11'>Best of Styles</h1>
                                <p className=' text-2xl font-bold mt-6'>Under Rs.799</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' w-full  '>

                        <div className=' w-11/12 mx-auto md:w-1/2 lg:mx-0  lg:w-[100%] h-[569px] mb-5 bg-[#FFFFFF] rounded-xl'>
                            <img className=' w-full  h-[301px] object-cover rounded-t-xl' src={img1} alt="" />
                            <div className=' flex justify-center items-center flex-col mt-8'>
                                <img src={levis} alt="" />
                                <h1 className=' text-4xl font-bold text-[#272727] mt-11'>Best of Styles</h1>
                                <p className=' text-2xl font-bold mt-6'>Under Rs.799</p>
                            </div>

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className=' w-full  '>

                        <div className=' w-11/12 mx-auto md:w-1/2 lg:mx-0  lg:w-[100%] h-[569px] mb-5 bg-[#FFFFFF] rounded-xl'>
                            <img className=' w-full  h-[301px] object-cover rounded-t-xl' src={img1} alt="" />
                            <div className=' flex justify-center items-center flex-col mt-8'>
                                <img src={levis} alt="" />
                                <h1 className=' text-4xl font-bold text-[#272727] mt-11'>Best of Styles</h1>
                                <p className=' text-2xl font-bold mt-6'>Under Rs.799</p>
                            </div>

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className=' w-full  '>

                        <div className=' w-11/12 mx-auto md:w-1/2 lg:mx-0  lg:w-[100%] h-[569px] mb-5 bg-[#FFFFFF] rounded-xl'>
                            <img className=' w-full  h-[301px] object-cover rounded-t-xl' src={img1} alt="" />
                            <div className=' flex justify-center items-center flex-col mt-8'>
                                <img src={levis} alt="" />
                                <h1 className=' text-4xl font-bold text-[#272727] mt-11'>Best of Styles</h1>
                                <p className=' text-2xl font-bold mt-6'>Under Rs.799</p>
                            </div>

                        </div>
                    </div>

                </SwiperSlide>





            </Swiper>





        </div>





    );
};

export default Deals;