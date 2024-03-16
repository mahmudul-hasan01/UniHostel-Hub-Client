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
                        <label className="input col-span-3 h-14 input-bordered flex items-center gap-2">
                            <input type="text" className="grow border-r-0" placeholder="Search" />
                            <FaSearch className="w-4 h-4 opacity-70" />
                        </label>
                        <button type="button" className="relative col-span-1 inline-block h-14 w-40 overflow-hidden border-sky-500 px-5 py-2 text-sky-500 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-sky-600 before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-sky-600 after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;