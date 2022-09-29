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
        <div className='p-10 h-[588px] mt-[100px] bg-[#00071B]'>
            <div>
                <div className='flex justify-start items-center mb-20'>

                    <div><img src={logo} alt="" /></div>
                    <h1 className=' text-white font-bold text-6xl ml-10'>Globex</h1>
                </div>
                <div className=' flex justify-center items-center'>
                    <div className=" flex justify-center items-center flex-col ml-[179px] mr-[119px]">
                        <h1 className=' text-2xl font-bold text-white'>Womem</h1>
                        <h1 className=' text-lg  font-normal text-white'>All Women</h1>
                        <h1 className=' text-lg  font-normal text-white'>Skirts</h1>
                        <h1 className=' text-lg  font-normal text-white'>T- Shirts</h1>
                        <h1 className=' text-lg  font-normal text-white'>Tops</h1>
                        <h1 className=' text-lg  font-normal text-white'>Jackets</h1>

                    </div>
                    <div className=" flex justify-center items-center flex-col mr-[119px]">
                        <h1 className=' text-2xl font-bold text-white'>Womem</h1>
                        <h1 className=' text-lg  font-normal text-white'>All Women</h1>
                        <h1 className=' text-lg  font-normal text-white'>Skirts</h1>
                        <h1 className=' text-lg  font-normal text-white'>T- Shirts</h1>
                        <h1 className=' text-lg  font-normal text-white'>Tops</h1>
                        <h1 className=' text-lg  font-normal text-white'>Jackets</h1>
                    </div>
                    <div className=" flex justify-center items-center flex-col mr-[119px]"><h1></h1>
                        <h1 className=' text-2xl font-bold text-white'>Womem</h1>
                        <h1 className=' text-lg  font-normal text-white'>All Women</h1>
                        <h1 className=' text-lg  font-normal text-white'>Skirts</h1>
                        <h1 className=' text-lg  font-normal text-white'>T- Shirts</h1>
                        <h1 className=' text-lg  font-normal text-white'>Tops</h1>
                        <h1 className=' text-lg  font-normal text-white'>Jackets</h1>
                    </div>
                    <div className=" flex justify-center items-center flex-col mr-[119px]"><h1></h1>
                        <h1 className=' text-2xl font-bold text-white'>Womem</h1>
                        <h1 className=' text-lg  font-normal text-white'>All Women</h1>
                        <h1 className=' text-lg  font-normal text-white'>Skirts</h1>
                        <h1 className=' text-lg  font-normal text-white'>T- Shirts</h1>
                        <h1 className=' text-lg  font-normal text-white'>Tops</h1>
                        <h1 className=' text-lg  font-normal text-white'>Jackets</h1>
                    </div>
                    <div className=" flex justify-center items-center flex-col mr-[119px]"><h1></h1>
                        <h1 className=' text-2xl font-bold text-white'>Womem</h1>
                        <h1 className=' text-lg  font-normal text-white'>All Women</h1>
                        <h1 className=' text-lg  font-normal text-white'>Skirts</h1>
                        <h1 className=' text-lg  font-normal text-white'>T- Shirts</h1>
                        <h1 className=' text-lg  font-normal text-white'>Tops</h1>
                        <h1 className=' text-lg  font-normal text-white'>Jackets</h1>
                    </div>
                    <div className=" flex justify-center items-start flex-col mr-[119px] ">

                        <h1 className=' text-2xl font-bold text-white'>Stay In Touch</h1>
                        <p className=' text-lg mt-4 font-normal text-white w-[90%]'>Stay in touch to get special offers, free giveaways
                            and once in a lifetime deals</p>

                        <div className='relative w-[90%]'>

                            <input placeholder='Enter Your Email' className=' p-2 pl-10 bg-transparent  border-2 border-white w-[300px] mt-4' type="text" />
                            <AiOutlineMail className='text-white  text-lg absolute top-7 left-4' />
                        </div>
                    </div>
                </div>
            </div>

            <div className=' flex justify-evenly items-center p-[39px] border-t-2 border-white mt-[79px]'>
                <h1 className=' text-lg text-white '>Terms & Conditions</h1>
                <h1 className=' text-lg text-white '> Privacy Policy</h1>
                <div className=' flex justify-center items-center'>

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