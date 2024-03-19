import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'
import useAuth from './useAuth'

const useRole =async () => {

    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth()


    // const getRole = async email => {
    //     const { data } = await axiosSecure(`/user/${email}`)
    //     return data.role
    // }

    const { data: role, isLoading } = useQuery({
        enabled: !loading && !!user?.email,
        queryFn: async () => await axiosSecure.get(`/user/${user?.email}`),
        queryKey: ['role'],
    })


    return [role, isLoading]
}

export default useRole
