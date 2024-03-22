import { NavLink, Outlet } from "react-router-dom";
import { FaBookBookmark, FaCartShopping, FaEnvelope, FaUsers, FaUtensils } from "react-icons/fa6";
import { FaAddressCard, FaCalendar, FaHome, FaList, FaSearch } from "react-icons/fa";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";

const Dashboard = () => {

    const axiosPublic = useAxiosPublic()
    const {user} = useAuth()

    const { data: userData = []} = useQuery({
        queryKey: ['userEmail'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user/${user?.email}`)
            return res
        }
    })
    
    return (
        <div className="flex">
        <div className="w-64 min-h-screen bg-sky-300">
            <ul className="menu space-y-5 mt-6">
                {
                    userData?.data?.role === 'admin' ?
                        <>
                            <li><NavLink to='/dashboard/AdminProfile'><FaHome /> Admin Profile</NavLink></li>
                            <li><NavLink to='/dashboard/ManageUsers'><FaUsers /> Manage Users</NavLink></li>
                            <li><NavLink to='/dashboard/Addmeal'><FaUtensils /> Add meal</NavLink></li>
                            <li><NavLink to='/dashboard/Allmeals'><FaList /> All meals</NavLink></li>
                            <li><NavLink to='/dashboard/Allreviews'><FaBookBookmark /> All reviews</NavLink></li>
                            <li><NavLink to='/dashboard/servemeals'><FaBookBookmark /> serve meals</NavLink></li>
                            <li><NavLink to='/dashboard/Upcomingmeals'><FaBookBookmark /> Upcoming meals</NavLink></li>
                           
                        </>
                        :
                        <>
                            <li><NavLink to='/dashboard/MyProfile'><FaHome /> My Profile</NavLink></li>
                            <li><NavLink to='/dashboard/RequestedMeals'><FaCartShopping />Requested Meals</NavLink></li>
                            <li><NavLink to='/dashboard/myReview'><FaAddressCard /> My Reviews</NavLink></li>  
                        </>
                }
                <div className="divider"></div>
                <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                <li><NavLink to='/meals'><FaSearch /> Meals</NavLink></li>
                {/* <li><NavLink to='/contact'><FaEnvelope /> Contact</NavLink></li> */}
            </ul>
        </div>
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;