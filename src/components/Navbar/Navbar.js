import React from 'react';
import profilepic from '../../assets/Ellipse 1.png'
import lovepic from '../../assets/Vector (2).png'
import logo from '../../assets/logo.png'
import search from '../../assets/search.png'

const items = {}
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-center">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li className=' text-lg'><a>Men</a></li>
                        <li className=' text-lg'><a>Women</a></li>
                        <li className=' text-lg'><a>Kids</a></li>
                        <li className=' text-lg'><a>Shop</a></li>
                        <li className=' text-lg'><a>Contact us</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case  "><img className='lg:w-14 lg:h-12 w-6 h-6' src={logo} alt="" /></a>
            </div>


            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className=' text-lg'><a>Men</a></li>
                    <li className=' text-lg'><a>Women</a></li>
                    <li className=' text-lg'><a>Kids</a></li>
                    <li className=' text-lg'><a>Shop</a></li>
                    <li className=' text-lg'><a>Contact us</a></li>
                </ul>
            </div>
            <div className="navbar-end">

                <div className="flex-none gap-2">
                    <div className="form-control hidden lg:block">
                        <div className=' relative'>
                            <input type="text" placeholder="Search here" className="input input-bordered px-20 " />
                            <img className='w-5 h-5 z-10 absolute right-0 top-3 mr-5' src={search} alt="" />
                        </div>
                    </div>
                    {/* ........................ */}

                    {/* <img className='w-5 h-5 z-10 absolute right-0 top-7 mr-3 lg:hidden' src={search} alt="" /> */}
                </div>
                <img className='lg:mx-2 lg:ml-14 hidden lg:block' src={lovepic} alt="" />
                {/* ...............
                       RIGHT SIDE
                ...................... */}

                <div className="flex-none">

                    <div className="dropdown dropdown-end ml-8">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end ml-8">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={profilepic} />
                            </div>
                        </label>

                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>

                    </div>
                </div>
                <p className=' text-lg font-normal px-2 hidden lg:block'>Anne Doe</p>

            </div>
            <div className="lg:hidden dropdown dropdown-end ml-8">
                <label tabIndex={0} className="btn btn-ghost btn-circle ">
                    <div className=" w-5 rounded-full">
                        <img className='w-5 h-5 z-10 absolute left-0 top-3 mr-3 lg:hidden' src={search} alt="" />
                    </div>
                </label>

                <ul tabIndex={0} className="menu menu-compact dropdown-content  mt-3  mr-40 shadow bg-base-100 rounded-box w-20">
                    <input type="text" placeholder="Search here" className="input input-bordered " />
                </ul>

            </div>
        </div>
    );
};

export default Navbar;