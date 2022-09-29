import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { BsFillStarFill } from 'react-icons/bs';
import pic from '../../assets/12.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Feedback = () => {
    return (
        <div className=' w-full '>
            <h1 className=' mt-[81px] mb-[27px] ml-[50px] text-4xl font-bold'>What Our Customer Says</h1>

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
                        slidesPerView: 1,
                        spaceBetween: 40
                    }
                }}
            >

                <SwiperSlide>
                    <div className=' lg:w-[70%] w-[90%] mx-auto  '>

                        <div className='flex justify-center items-center flex-col w-full mx-auto md:w-1/2 lg:mx-0  lg:w-[100%] lg:h-[569px] h-[700px] mb-5 bg-[#FFFFFF] rounded-xl p-10'>
                            <img className=' w-[150px]  h-[150px] object-cover rounded-full mb-5' src={pic} alt="" />
                            <div className='flex justify-center items-center ml-5 '>
                                <BsFillStarFill className='text-[#848484] text-lg ml-1 cursor-pointer' />
                                <BsFillStarFill className='text-[#848484] text-lg ml-1 cursor-pointer' />
                                <BsFillStarFill className='text-[#848484] text-lg ml-1 cursor-pointer' />
                                <BsFillStarFill className='text-[#848484] text-lg ml-1 cursor-pointer' />
                                <span className='p-1 text-lg text-[#848484] ml-2'>4.4</span>

                            </div>
                            <p className=' lg:text-2xl text-lg '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper </p>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' lg:w-[70%] w-[90%] mx-auto  '>

                        <div className='flex justify-center items-center flex-col w-full mx-auto md:w-1/2 lg:mx-0  lg:w-[100%] lg:h-[569px] h-[700px] mb-5 bg-[#FFFFFF] rounded-xl p-10'>
                            <img className=' w-[150px]  h-[150px] object-cover rounded-full mb-5' src={pic} alt="" />
                            <div className='flex justify-center items-center ml-5 '>
                                <BsFillStarFill className='text-[#848484] text-lg ml-1 cursor-pointer' />
                                <BsFillStarFill className='text-[#848484] text-lg ml-1 cursor-pointer' />
                                <BsFillStarFill className='text-[#848484] text-lg ml-1 cursor-pointer' />
                                <BsFillStarFill className='text-[#848484] text-lg ml-1 cursor-pointer' />
                                <span className='p-1 text-lg text-[#848484] ml-2'>4.4</span>

                            </div>
                            <p className=' lg:text-2xl text-lg '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui vel morbi cursus sed sodales molestie proin dictum gravida. Porttitor maecenas tincidunt ipsum semper malesuada. In sapien feugiat laoreet convallis eu sed. Sapien et montes, duis tempor euismod augue cras eu eget. Risus suspendisse mauris ullamcorper </p>

                        </div>
                    </div>

                </SwiperSlide>






            </Swiper>





        </div>
    );
};

export default Feedback;