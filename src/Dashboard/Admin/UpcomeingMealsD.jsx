import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import UpcomingCard from "../../Page/UpcomingMeals/UpcomingCard";

const UpcomeingMealsD = () => {

    const axiosPublic = useAxiosPublic()

    const { data: upcoming = [] } = useQuery({
        queryKey: ['upcoming'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/upcomings`)
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

export default UpcomeingMealsD;