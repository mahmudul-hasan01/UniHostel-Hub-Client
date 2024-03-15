// import { useEffect, useRef, useState } from 'react';
import { navLink } from './NavLink';
import img from '../../../public/img.jpg'
import { Link } from 'react-router-dom';

const Navbar = () => {



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-5">
                        {navLink}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-[100px] h-[100px]' src={img} alt="" />
                <Link to={'/'} className="text-xl font-bold">UniHostel Hub</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 items-center">
                    {navLink}
                    <button className="btn btn-outline">
                        <div className="badge badge-secondary"> +99</div>
                    </button>
                </ul>
            </div>
            <div className="navbar-end">

                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1">Click</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>User Name:</a></li>
                        <li><a>Dashboard</a></li>
                        <li><a>LogOut</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;