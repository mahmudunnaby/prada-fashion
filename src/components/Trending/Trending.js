import React from 'react';
import img1 from '../../assets/15.jpg'
import img2 from '../../assets/6.png'
import img3 from '../../assets/11.png'
import img4 from '../../assets/14.jpg'
import { BsFillStarFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Trending = () => {
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

                        <div className=' w-11/12 mx-auto md:w-1/2 lg:mx-0  lg:w-[100%] h-[426px] mb-5 bg-[#FFFFFF] rounded-xl'>
                            <img className=' w-full  h-[301px] object-cover rounded-t-xl' src={img1} alt="" />
                            <div className=' py-3 px-5'>
                                <h3 className='text-[#272727] text-2xl font-bold'>Womens Denim Jacket</h3>
                                <div className=' flex justify-start items-center'>

                                    <p className=' text-lg font-normal text-[#272727]'>Brand Name</p>
                                    <div className='flex justify-center items-center ml-5'>
                                        <span className='p-1 text-lg text-[#848484] '>4.4</span>
                                        <BsFillStarFill className='text-[#848484] text-lg ml-1 cursor-pointer' />
                                    </div>
                                </div>
                                <div className=' flex justify-start items-center mb-3 '>
                                    <h3 className=' text-2xl font-bold'>Rs.700</h3>
                                    <h3 className='line-through mx-4 text-lg font-normal' >Rs.1000</h3>
                                    <h3 className='text-[#0A8200] text-lg font-bold'>(30% off)</h3>
                                </div>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=' w-full '>

                        <div className=' w-11/12 mx-auto md:w-1/2 lg:mx-0  lg:w-[100%] h-[426px] mb-5 bg-[#FFFFFF] rounded-xl'>
                            <img className=' w-full  h-[301px] object-cover rounded-t-xl' src={img2} alt="" />
                            <div className=' py-3 px-5'>
                                <h3 className='text-[#272727] text-2xl font-bold'>Womens Denim Jacket</h3>
                                <div className=' flex justify-start items-center'>

                                    <p className=' text-lg font-normal text-[#272727]'>Brand Name</p>
                                    <div className='flex justify-center items-center ml-5'>
                                        <span className='p-1 text-lg text-[#848484] '>4.4</span>
                                        <BsFillStarFill className='text-[#848484] text-lg ml-1 cursor-pointer' />
                                    </div>
                                </div>
                                <div className=' flex justify-start items-center mb-3 '>
                                    <h3 className=' text-2xl font-bold'>Rs.700</h3>
                                    <h3 className='line-through mx-4 text-lg font-normal' >Rs.1000</h3>
                                    <h3 className='text-[#0A8200] text-lg font-bold'>(30% off)</h3>
                                </div>

                            </div>

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className=' w-full  '>

                        <div className=' w-11/12 mx-auto md:w-1/2 lg:mx-0  lg:w-[100%] h-[426px] mb-5 bg-[#FFFFFF] rounded-xl'>
                            <img className=' w-full  h-[301px] object-cover rounded-t-xl' src={img3} alt="" />
                            <div className=' py-3 px-5'>
                                <h3 className='text-[#272727] text-2xl font-bold'>Womens Denim Jacket</h3>
                                <div className=' flex justify-start items-center'>

                                    <p className=' text-lg font-normal text-[#272727]'>Brand Name</p>
                                    <div className='flex justify-center items-center ml-5'>
                                        <span className='p-1 text-lg text-[#848484] '>4.4</span>
                                        <BsFillStarFill className='text-[#848484] text-lg ml-1 cursor-pointer' />
                                    </div>
                                </div>
                                <div className=' flex justify-start items-center mb-3 '>
                                    <h3 className=' text-2xl font-bold'>Rs.700</h3>
                                    <h3 className='line-through mx-4 text-lg font-normal' >Rs.1000</h3>
                                    <h3 className='text-[#0A8200] text-lg font-bold'>(30% off)</h3>
                                </div>

                            </div>

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className=' w-full  '>

                        <div className=' w-11/12 mx-auto md:w-1/2 lg:mx-0  lg:w-[100%] h-[426px] mb-5 bg-[#FFFFFF] rounded-xl'>
                            <img className=' w-full  h-[301px] object-cover rounded-t-xl' src={img4} alt="" />
                            <div className=' py-3 px-5'>
                                <h3 className='text-[#272727] text-2xl font-bold'>Womens Denim Jacket</h3>
                                <div className=' flex justify-start items-center'>

                                    <p className=' text-lg font-normal text-[#272727]'>Brand Name</p>
                                    <div className='flex justify-center items-center ml-5'>
                                        <span className='p-1 text-lg text-[#848484] '>4.4</span>
                                        <BsFillStarFill className='text-[#848484] text-lg ml-1 cursor-pointer' />
                                    </div>
                                </div>
                                <div className=' flex justify-start items-center mb-3 '>
                                    <h3 className=' text-2xl font-bold'>Rs.700</h3>
                                    <h3 className='line-through mx-4 text-lg font-normal' >Rs.1000</h3>
                                    <h3 className='text-[#0A8200] text-lg font-bold'>(30% off)</h3>
                                </div>

                            </div>

                        </div>
                    </div>

                </SwiperSlide>





            </Swiper>





        </div>






    );
};

export default Trending;