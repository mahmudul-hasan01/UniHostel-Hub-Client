import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const JoinUS = () => {

    const [register, setRegister] = useState(false);
    const { login, googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const hendleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        await login(email, password)
        navigate('/')
    }
    const hendleGoogleLogin = async () => {
        googleSignIn()
            .then((res) => {
                const userInfo = {
                    name: res?.user?.displayName,
                    email: res?.user?.email,
                    role: 'user',
                    status: 'Bronze Badge',
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            navigate('/')
                        }
                    })
            })
    }


    return (
        <div className="w-80 md:w-96 lg:w-[800px] mx-auto bg-white flex items-center relative overflow-hidden shadow-xl">
            {/* register form  */}
            <form className={`p-8 w-full ${register ? 'lg:translate-x-0' : 'lg:-translate-x-full hidden lg:block'} duration-500`}>
                <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Register</h1>
                <div className="space-y-5">
                    <label htmlFor="name" className="block">Name</label>
                    <input id="name" type="name" placeholder="John Doe" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    <label htmlFor="u_email" className="block">Email</label>
                    <input id="u_email" type="u_email" placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    <label htmlFor="u_password" className="block">Password</label>
                    <input id="u_password" type="u_password" placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                </div>
                {/* button type will be submit for handling form submission*/}
                <button type="button" className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block">Submit</button>
                <p className="mb-3 text-center">Already have an account?<Link onClick={() => { setRegister(!register); }} className="underline font-semibold">Login</Link></p>
                <hr />
                <button type="button" className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current inline-block mr-2"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>Continue with Google</button>
            </form>
            {/* img */}
            <div className={`hidden lg:block absolute w-1/2 h-full top-0 z-50 duration-500 overflow-hidden bg-black/20 ${register ? 'translate-x-full rounded-bl-full duration-500' : 'rounded-br-full'}`}>
                <img src="https://source.unsplash.com/random" className="object-cover h-full" alt="card navigate ui" />
            </div>
            {/* login form */}
            <div className={`p-8 w-full mr-0 ml-auto duration-500 ${register ? 'lg:translate-x-full hidden lg:block' : ''}`}>
                <h1 className="backdrop-blur-sm text-2xl lg:text-4xl pb-4">Login</h1>
                <form onSubmit={hendleSubmit}>
                    <div className="space-y-5">
                        <label htmlFor="_email" className="block">Email</label>
                        <input id="_email" type="email" name="email" placeholder="example@example.com" className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                        <label htmlFor="_password" className="block">Password</label>
                        <input id="_password" type="password" name="password" placeholder=".............." min={5} className="p-3 block w-full outline-none border rounded-md invalid:border-red-700 valid:border-black" />
                    </div>
                    {/* button type will be submit for handling form submission*/}
                    <button className="py-2 px-5 mb-4 mx-auto mt-8 shadow-lg border rounded-md border-black block">Join Us</button>
                </form>
                <p className="mb-3 text-center">Don&apos;t have an account?<Link to={'/register'} onClick={() => { setRegister(!register); }} className="underline font-semibold">Register</Link></p>
                <hr />
                <button onClick={hendleGoogleLogin} type="button" className="py-2 px-5 mb-4 mt-8 mx-auto block shadow-lg border rounded-md border-black">
                    <FcGoogle className="w-6 inline-block mr-3" />
                    Continue with Google</button>
            </div>
        </div>
    );
};

export default JoinUS;