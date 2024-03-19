import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UpcomingCard from "./UpcomingCard";

const UpcomingMeal = () => {

    const axiosPublic = useAxiosPublic()

    const { data: upcoming = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['upcoming'],
        queryFn: async () => {
            const res = await axiosPublic.get('/upcoming')
            return res.data
        }
    })


    return (
        <div>
            {
                upcoming.map(item => <UpcomingCard key={item._id} data={item}></UpcomingCard>)
            }
        </div>
    );
};

export default UpcomingMeal;