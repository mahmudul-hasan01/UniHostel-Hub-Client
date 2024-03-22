import { useState } from "react";
import AllMealsCard from "./AllMealsCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllMeals = () => {

    const [search, setSearch] = useState('')
    const axiosSecure = useAxiosSecure()

    const handleSubmit =(e) => {
        e.preventDefault()
        const searchs = e.target.search.value
        setSearch(searchs);
    }

    const {data : allMeals = [], isLoading} = useQuery({
        queryKey: ['allMeals'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/mealsCategory?search=${search}`)
            return res.data
        }
       })

    return (
        <div>
            <form onSubmit={handleSubmit} className="grid grid-cols-4 max-w-xl mx-auto my-8">
                <label className="input col-span-3 border-2 rounded-r-none border-sky-400 h-[60px] input-bordered flex items-center gap-2 ">
                    <input type="text" name="search" className="grow " placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
                {/* button */}
                <button type="submit" className="group col-span-1 rounded-l-none relative flex w-36 items-center rounded-lg border-2 border-sky-400 p-4 text-sky-300"><span>Search</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                {/* button */}
            </form>

            <div className="grid grid-cols-3 gap-8">
                
                {
                   
                    allMeals.map(item => <AllMealsCard key={item._id} item={item}></AllMealsCard>)  
                }
              
            </div>
            {
                isLoading && 
                <div className='flex justify-center items-center'>
                     <div className="w-10 h-10 my-10  animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400"></div> 
                </div>
               
            }
        </div>
    );
};

export default AllMeals;