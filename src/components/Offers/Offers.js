import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import levis from '../../assets/Levis.png'
import img1 from '../../assets/8.jpg'
import img2 from '../../assets/17.jpg'
import img3 from '../../assets/forever.png'

const Offers = () => {
    var settings = {
        dots: false,
        className: "center  ",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: "200px",
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div className=' w-[98%]'>

            <Slider {...settings}>



                <div className='h-[587px]  mt-8  mr-14'>
                    <div className=' flex justify-center items-center'>
                        <div className='w-1/3 flex flex-col justify-center items-center bg-[#FFFFFF] h-[587px] shadow'>
                            <img src={levis} alt="" />
                            <h3 className=' text-5xl font-bold mt-14'>Min 60% off</h3>
                            <button className="btn btn-outline mt-12">Explore</button>
                        </div>
                        <div className='h-[587px]'>
                            <img className=' w-3/4  object-cover' src={img1} alt="" />
                        </div>

                    </div>

                </div>
                <div className='h-[587px]  mt-8 shadow mr-14'>
                    <div className=' flex justify-center items-center'>
                        <div className=' w-1/3 flex flex-col justify-center items-center bg-[#FFFFFF] h-[587px] shadow'>

                            <img src={img3} alt="" />
                            <h3 className=' text-5xl font-bold mt-14'>Min 50% off</h3>
                            <button className="btn btn-outline mt-12">Explore</button>
                        </div>
                        <div className='h-[587px]'>
                            <img className=' w-3/4  object-cover' src={img2} alt="" />
                        </div>
                    </div>

                </div>


            </Slider>
        </div>


    );
};

export default Offers;