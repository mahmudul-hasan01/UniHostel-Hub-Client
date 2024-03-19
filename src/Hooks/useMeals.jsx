// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMeals = () => {
    const axiosPublic = useAxiosPublic()
    const { data: mealsData = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const res = await axiosPublic.get('/mealItem')
            return res.data
        }
    })
    return {mealsData, loading, refetch}
};

export default useMeals;