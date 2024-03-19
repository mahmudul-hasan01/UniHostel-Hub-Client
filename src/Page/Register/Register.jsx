import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form"
import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import { useState } from "react";

// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`

const Register = () => {

    const { signUp, googleSignIn, updateUserProfile } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    // const [showName, setShowName] = useState({})

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = async (data) => {


        signUp(data?.email, data?.password)
            .then(() => {
                const userInfo = {
                    name: data?.name,
                    email: data?.email,
                    role: 'user',
                    status: 'Bronze Badge',
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            // toast.success('SignUp Successfully')
                           
                        }
                    })
            })

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })

        // console.log(data?.name, res?.data?.data?.display_url, 'asjdfasf');
        if (res.data.success) {
          await updateUserProfile(data?.name, res.data.data.display_url)
               navigate('/')     
        }

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
                            // toast.success('SignUp Successfully')
                            reset()
                            navigate('/')
                        }
                    })
            })
    }

    return (
        <div className="flex h-screen items-center justify-center bg-[#8EA7E9]/20 p-6 md:p-0">
            <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[90%]">
                {/* register design side  */}
                <div className="relative hidden h-full items-center justify-center bg-[#8EA7E9] md:flex md:w-[60%] lg:w-[40%]">
                    <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
                    <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
                    <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] transition-all"></div>
                    <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd]"></div>
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-medium text-white/80 ">Welcome</h2>
                        <p className="animate-pulse text-sm text-white/60">Please Enter You Information</p>
                    </div>
                </div>
                {/* input side  */}
                <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
                    <h2 className="pb-8 text-center text-3xl font-bold text-[#8EA7E9]">Register Here</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex  w-full flex-col items-center justify-center gap-4">
                        <input className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="text" placeholder="Name" {...register("name", { required: true })} />
                        <input className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="email" placeholder="Email" {...register("email", { required: true })} />
                        <input className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]" type="password" placeholder="Password" {...register("password", { required: true })} />
                        {/* file */}
                        {/* <div className=" flex justify-center">
                            <label className="flex h-full w-max items-end gap-4 rounded-md bg-[#8EA7E9] px-6 py-4 text-white active:ring-4 active:ring-cyan-200" htmlFor="file">
                                <svg width={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Complete"><g id="upload"><g><path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><g><polyline data-name="Right" fill="none" id="Right-2" points="7.9 6.7 12 2.7 16.1 6.7" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline><line fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="16.3" y2="4.8"></line></g></g></g></g></g>
                                </svg>
                                <p className="text-lg font-medium"> {showName.name ? showName.name : 'Upload'}</p>
                            </label>
                            <input {...register("image", { required: true })} onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    const imageFile = e.target.files[0];
                                    setShowName(imageFile)
                                }
                            }} className="hidden" id="file" type="file" />
                        </div> */}
                        <input {...register("image")} type="file" className="file-input bg-[#8EA7E9] block w-full max-w-xs" />
                        {/* file */}
                        <p className="text-[14px] text-gray-400">Do not have an account ? <Link to={'/Join-US'}>
                            <a className="text-[#8EA7E9] ">Create one</a>
                        </Link></p>
                        <input className="w-[80%] rounded-lg bg-[#8EA7E9] px-6 py-2 font-medium text-white md:w-[60%]" type="submit" />
                    </form>
                    {/* divider  */}
                    <div className="my-4 flex items-center px-8">
                        <hr className="flex-1" />
                        <div className="mx-4 text-gray-400">OR</div>
                        <hr className="flex-1" />
                    </div>
                    {/* sign with google */}
                    <div onClick={hendleGoogleLogin} className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
                        <div className="flex h-full w-[50%] items-center bg-[#8EA7E9] pl-4 text-sm text-white">Sign With</div>
                        <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#8EA7E9] group-hover:hidden"></span>
                        <span className="pr-4 text-4xl font-bold text-[#8EA7E9]">G+</span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;