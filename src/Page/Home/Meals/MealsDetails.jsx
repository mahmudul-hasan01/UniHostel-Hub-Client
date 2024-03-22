import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { AiFillLike } from "react-icons/ai";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useMeals from "../../../Hooks/useMeals";
// import { MdReviews } from "react-icons/md";

const MealsDetails = () => {

    const data = useLoaderData()
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { refetch } = useMeals()

    const { image, name, distributorName, ingredients, time, reviews, like, rating, description, _id } = data

    const handleClick = async () => {
        const mealsInfo = {
            name: name,
            like: like,
            reviews: reviews,
            image: image,
            status: 'pending',
        }
        await axiosPublic.post('/mealRequest', mealsInfo)
    }

    const [likes, setLikes] = useState(parseFloat(like))
    const [isLike, setIsLike] = useState(false)

    const handleLike = async () => {

        setLikes(likes + (isLike ? -1 : 1))
        setIsLike(like < 0 ? false : !isLike )

        await axiosPublic.patch(`/likeUpdate/${_id}`, { like: likes + 1 })
        refetch()
    }



    return (
        <div>
            <p>{like}</p>
            <div className=" flex justify-center  flex-col md:flex-row my-20">
                <div className="relative max-w-[350px] group">
                    <img className="rounded-lg h-[300px] transform scale-105" src={image} alt="card navigate ui" />
                    {
                        user?.email ?
                            <span onClick={handleLike} className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]">
                                <AiFillLike className="text-white text-lg"></AiFillLike>
                            </span>
                            :
                            <div className="">
                                <span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-[#0d87f8]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]">
                                    <AiFillLike className="text-white text-lg"></AiFillLike>

                                </span>
                                <div className="absolute left-[100px] -bottom-20 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-bottom-20 group-hover:opacity-100  ">
                                    <p className="rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]"> Please Login First</p>
                                    <span className="absolute -top-2 left-[50%] h-0 w-0 -translate-x-1/2 -rotate-[45deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
                                </div>
                            </div>
                    }
                    <span className="bg-gradient-to-tr from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300  absolute -bottom-6 left-1/2 transform -translate-x-1/2 rounded-full  z-20 w-0 h-0  group-hover:w-[50px] group-hover:h-[50px]"></span>
                    <span className="bg-gradient-to-tr from-[#0d87f8]/50 to-[#70c4ff]/50 duration-500  absolute -bottom-6 left-1/2 transform -translate-x-1/2 rounded-full  z-20 w-0 h-0  group-hover:w-[60px] group-hover:h-[60px] hover:duration-300 "></span>
                </div>
                <div className="bg-white space-y-12 relative max-w-[350px] rounded-tr-lg rounded-br-lg md:w-[350px] text-center p-10 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]">
                    <div className="space-y-1">
                        <h2 className="text-3xl underline font-medium text-gray-700 text-center font-sans">
                            Name: {distributorName}
                        </h2>
                        <div className="text-start pt-2">
                            <p className=" ">Ingredients: <span className="">{ingredients}</span></p>
                        </div>
                        <p className="border bg-sky-400 w-10 absolute top-3 right-3 py-2 px-4 rounded-lg text-white">{rating}*</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="space-y-1">
                            <p className="text-gray-500 text-sm font-sans">Time</p>
                            <p className="text-3xl tracking-wider text-gray-700">{time}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-gray-500 text-sm font-sans">Like</p>
                            <p className="text-3xl tracking-wider text-gray-700">{likes}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-gray-500 text-sm font-sans">Reviews</p>
                            <p className="text-3xl tracking-wider text-gray-700"> {reviews}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-evenly">
                            <button onClick={handleClick} className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-white py-3 px-6 rounded-full">
                                Meal request
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center my-6 font-bold underline">Description</p>
            <p className="max-w-xl mx-auto mb-5">{description}</p>
        </div>
    );
};

export default MealsDetails;