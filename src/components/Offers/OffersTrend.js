import React from 'react';
import levis from '../../assets/Levis.png'
import img1 from '../../assets/8.jpg'
import img2 from '../../assets/17.jpg'
import img3 from '../../assets/forever.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const OffersTrend = () => {
    return (
        <div className=' w-full '>
            <h1 className=' mt-[112px] mb-[27px] ml-[50px] text-4xl font-bold'>Trending Now</h1>

            <Swiper
                rewind={true}
                navigation={false}
                slidesPerView={1}
                autoplay={{
                    delay: 2700,
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
                        spaceBetween: 0
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    }
                }}
            >

                <SwiperSlide>
                    <div className=' w-[98%] lg:h-[587px] lg:w-full  mt-8  mr-14'>
                        <div className=' flex justify-center items-center'>
                            <div className='w-full flex flex-col justify-center items-center bg-[#FFFFFF] h-[587px] shadow'>
                                <img src={levis} alt="" />
                                <h3 className='  text-2xl lg:text-5xl font-bold mt-14'>Min 60% off</h3>
                                <button className="btn btn-outline mt-12">Explore</button>
                            </div>
                            <div className='h-[587px] w-full'>
                                <img className=' w-full h-[587px] object-cover' src={img1} alt="" />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' w-[98%] lg:h-[587px] lg:w-full  mt-8  mr-14'>
                        <div className=' flex justify-center items-center'>
                            <div className='w-full flex flex-col justify-center items-center bg-[#FFFFFF] h-[587px] shadow'>
                                <img className='w-[73%] lg:w-full' src={img3} alt="" />
                                <h3 className='text-2xl lg:text-5xl font-bold mt-14'>Min 50% off</h3>
                                <button className="btn btn-outline mt-12">Explore</button>
                            </div>
                            <div className='h-[587px] w-full'>
                                <img className=' w-full h-[587px] object-cover' src={img2} alt="" />
                            </div>

                        </div>
                    </div>
                </SwiperSlide>






            </Swiper>





        </div>


    );
};

export default OffersTrend;