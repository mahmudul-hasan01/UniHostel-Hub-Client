import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import AllMealsItemCart from "./AllMealsItemCart";

const AllMealsItem = () => {

    const axiosPublic = useAxiosPublic()

    const { data: allMeals = [], refetch} = useQuery({
        queryKey: ['AllMealItem'],
        queryFn: async () => {
            const res = await axiosPublic.get('/mealItem')
            return res.data
        }
    })
    
    return (
        <div>
            <div className='grid md:grid-cols-1 gap-10 my-10'>
                {
                    allMeals.map(item => <AllMealsItemCart key={item._id} refetch={refetch} data={item}></AllMealsItemCart>)
                }
            </div>
        </div>
    );
};

export default AllMealsItem;