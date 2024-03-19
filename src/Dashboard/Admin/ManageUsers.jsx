import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const ManageUsers = () => {

    const axiosPublic = useAxiosPublic()

    const { data: user = [], refetch, isLoading: loading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users')
            return res.data
        }
    })
    
    const handleMakeAdmin = (id) => {
        const role = 'admin'
        const data = { role }
        axiosPublic.patch(`/users/${id}`, data)
            .then(data => console.log(data?.data))
        refetch()
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-[#0095FF] text-white">
                            <th className="py-4 px-6 text-lg text-left border-b">Name</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Email</th>
                            <th className="py-4 px-6 text-lg border-b">Status</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(item => <tr key={item._id} className="hover:bg-gray-50 border-b transition duration-300">
                            <td className="py-4 px-4 flex justify-start">
                                {item?.name}
                            </td>
                            <td className="py-4 px-6 border-b text-xl font-medium">{item?.email}</td>
                            <td className="py-4 px-6 border-b text-lg font-medium">{item?.status}</td>
                            <td className="py-4 px-6 border-b text-end">
                                {
                                    item?.role == 'admin'? <p className="text-lg font-medium">{item?.role}</p>
                                    :
                                <button onClick={() => handleMakeAdmin(item?._id)} className="bg-blue-500 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">{'Make Admin'}</button>
                                }
                            </td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ManageUsers;