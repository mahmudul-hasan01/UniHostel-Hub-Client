import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AllMealsItem = () => {

    const axiosPublic = useAxiosPublic()

    const { data: allMeals = [], } = useQuery({
        queryKey: ['AllMealItem'],
        queryFn: async () => {
            const res = await axiosPublic.get('/mealItem')
            return res.data
        }
    })
    console.log(allMeals);
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-10 my-10'>
                {
                    allMeals.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl text-start">
                    <figure><img className="h-[300px] w-96" src={item.image} alt="Shoes" /></figure>
                    <p className="border border-sky-300 bg-black/60 text-sky-400 absolute right-5 top-5 px-3 py-2 rounded-md">$ {item.price}</p>
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.recipe}</p>
                        {/* <div className="card-actions">
                            <Link to={`/mealsDetails/${_id}`}>
                                <button className="btn border-sky-300 text-sky-500">Meals Details</button>
                            </Link>
                        </div> */}
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default AllMealsItem;