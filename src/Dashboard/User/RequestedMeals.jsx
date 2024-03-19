import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const RequestedMeals = () => {

    const axiosPublic = useAxiosPublic()

    const { data: requestedMeals = [], refetch} = useQuery({
        queryKey: ['RequestedMeals'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/mealRequest`)
            return res.data
        }
    })
    
    const handleDelete = (id) => {
        axiosPublic.delete(`/mealRequest/${id}`)
            .then( () => {
                refetch()
            })
    }

    return (
        <div className="grid grid-cols-2 gap-7" >
            {
                requestedMeals.map(item => <div key={item._id} >
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="w-full h-[250px]" src={item?.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {item?.name}</h2>
                        <div className="flex justify-between items-center">
                        <div className="space-y-1">
                            <p className="text-gray-500 text-sm font-sans">Status</p>
                            <p className="text-3xl tracking-wider text-gray-700">{item?.status}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-gray-500 text-sm font-sans">Like</p>
                            <p className="text-3xl tracking-wider text-gray-700">{item?.like}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-gray-500 text-sm font-sans">Reviews</p>
                            <p className="text-3xl tracking-wider text-gray-700"> {item?.reviews}</p>
                        </div>
                    </div>
                        <div onClick={() => handleDelete(item?._id)} className="card-actions justify-center mt-4">
                            <button className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-white py-3 px-6 rounded-full">Delete</button>
                        </div>
                    </div>
                </div>
            </div>)
            }
        </div>
    );
};

export default RequestedMeals;