/* eslint-disable react/no-unescaped-entities */
import image from '../../assets/1000_F_414613065_OvDiTjOuhzTYSykDLySvjtISzkkHrfh5.jpg'
import { FaSearch } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-xl">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to Our Hostel</h1>
                    <p className="mb-5">Welcome to our University Hostel – your vibrant hub for student life! Dive into a community where comfort meets camaraderie. Enjoy seamless room allocations, delicious meal plans, and responsive maintenance services. With engaging events and modern facilities, we're dedicated to making your stay unforgettable. Welcome to your home away from home!</p>
                    <div className='grid grid-cols-4'>
                        <label className="input col-span-3 h-14 rounded-r-none input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <FaSearch className="w-4 h-4 opacity-70" />
                        </label>
                        <button className="text-xl w-32 h-14 rounded-r-lg bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-sky-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;