import React from 'react';
import logo from '../../assets/logo.png'
import { FaTelegramPlane } from 'react-icons/fa';
import { BsFacebook, BsFillTelephoneFill } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { MdLocationPin } from 'react-icons/md';
import { RiMessage3Fill } from 'react-icons/ri';
import { AiFillTwitterCircle, AiFillYoutube, AiFillInstagram, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='p-10 lg:h-[598px] h-[1300px] mt-[100px] bg-[#00071B]'>
            <div>
                <div className='flex justify-start items-center mb-20'>

                    <div><img src={logo} alt="" /></div>
                    <h1 className=' text-white font-bold lg:text-6xl text-4xl ml-10'>Globex</h1>
                </div>
                <div className=' flex justify-center items-center lg:flex-row flex-col  lg:ml-[179px] lg:mr-[119px]'>
                    <div className='flex justify-between w-full items-center '>
                        <div className=" flex justify-center items-start flex-col ">
                            <h1 className=' text-2xl  font-bold text-white'>Womem</h1>
                            <h1 className=' text-lg  font-normal text-white'>All Women</h1>
                            <h1 className=' text-lg  font-normal text-white'>Skirts</h1>
                            <h1 className=' text-lg  font-normal text-white'>T- Shirts</h1>
                            <h1 className=' text-lg  font-normal text-white'>Tops</h1>
                            <h1 className=' text-lg  font-normal text-white'>Jackets</h1>

                        </div>
                        <div className=" flex justify-center items-start flex-col lg:ml-[119px]">
                            <h1 className=' text-2xl font-bold text-white'>Womem</h1>
                            <h1 className=' text-lg  font-normal text-white'>All Women</h1>
                            <h1 className=' text-lg  font-normal text-white'>Skirts</h1>
                            <h1 className=' text-lg  font-normal text-white'>T- Shirts</h1>
                            <h1 className=' text-lg  font-normal text-white'>Tops</h1>
                            <h1 className=' text-lg  font-normal text-white'>Jackets</h1>
                        </div>
                    </div>
                    <div className='flex justify-between w-full items-center mt-10  lg:mt-0 lg:ml-[119px] lg:mr-[119px]'>
                        <div className=" flex justify-center items-start flex-col ">
                            <h1 className=' text-2xl font-bold text-white'>Womem</h1>
                            <h1 className=' text-lg  font-normal text-white'>All Women</h1>
                            <h1 className=' text-lg  font-normal text-white'>Skirts</h1>
                            <h1 className=' text-lg  font-normal text-white'>T- Shirts</h1>
                            <h1 className=' text-lg  font-normal text-white'>Tops</h1>
                            <h1 className=' text-lg  font-normal text-white'>Jackets</h1>

                        </div>
                        <div className=" flex justify-center items-start flex-col lg:ml-[119px]">
                            <h1 className=' text-2xl font-bold text-white'>Womem</h1>
                            <h1 className=' text-lg  font-normal text-white'>All Women</h1>
                            <h1 className=' text-lg  font-normal text-white'>Skirts</h1>
                            <h1 className=' text-lg  font-normal text-white'>T- Shirts</h1>
                            <h1 className=' text-lg  font-normal text-white'>Tops</h1>
                            <h1 className=' text-lg  font-normal text-white'>Jackets</h1>
                        </div>
                    </div>

                    <div className=' flex justify-center w-full items-center lg:flex-row flex-col mt-10 lg:mt-0 lg:mr-[90px] '>
                        <div className=" flex justify-center items-start flex-col "><h1></h1>
                            <h1 className=' text-2xl font-bold text-white'>Womem</h1>
                            <h1 className=' text-lg  font-normal text-white'>All Women</h1>
                            <h1 className=' text-lg  font-normal text-white'>Skirts</h1>
                            <h1 className=' text-lg  font-normal text-white'>T- Shirts</h1>
                            <h1 className=' text-lg  font-normal text-white'>Tops</h1>
                            <h1 className=' text-lg  font-normal text-white'>Jackets</h1>
                        </div>
                        <div className=" flex justify-center lg:items-start items-center flex-col lg:ml-[90px] mt-10 lg:mt-5 ">

                            <h1 className=' text-2xl font-bold text-white'>Stay In Touch</h1>
                            <p className=' text-lg mt-4 font-normal text-white lg:w-[90%] w-full text-center lg:text-left'>Stay in touch to get special offers, free giveaways and once in a lifetime deals
                            </p>

                            <div className='relative w-[90%] flex flex-col items-center lg:flex-none lg:ml-2'>

                                <input placeholder='Enter Your Email'
                                    className=' p-2 pl-12 bg-transparent  border-2 border-white lg:w-[300px] w-[200px]  mt-4' type="text" />
                                <AiOutlineMail className='text-white  text-lg absolute top-7 lg:left-3 left-10' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className=' flex justify-evenly  items-center lg:flex-row flex-col p-[39px] border-t-2 border-white mt-[79px]'>
                <h1 className=' text-lg text-white '>Terms & Conditions</h1>
                <h1 className=' text-lg text-white '> Privacy Policy</h1>
                <div className=' flex justify-center items-center mt-6 lg:mt-0'>

                    <BsFacebook className=' rounded-full text-white text-2xl mr-9' />


                    <AiFillTwitterCircle className='text-white rounded-full text-2xl mr-9' />



                    <AiFillYoutube className='text-white rounded-full text-2xl mr-9' />


                    <AiFillInstagram className='text-white rounded-full text-2xl mr-9' />
                </div>
            </div>





        </div >
    );
};

export default Footer;