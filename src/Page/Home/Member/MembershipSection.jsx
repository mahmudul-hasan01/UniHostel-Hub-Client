import { useEffect, useState } from 'react';
import MemberCart from './MemberCart';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';


const MembershipSection = () => {

    const axiosPublic = useAxiosPublic()

    const { data: member = [], isLoading } = useQuery({
        queryKey: ['memberShip'],
        queryFn: async () => {
            const res = await axiosPublic.get('/memberShip')
            return res.data
        }
    })

    return (
        <div>
            {
                isLoading && 
                <div className='flex justify-center '>
                     <div className="w-10 h-10 my-10  animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400"></div> 
                </div>
               
            }
            <div className="grid grid-cols-3 justify-between">

                {
                    member.map(item => <MemberCart key={item._id} id={item._id} name={item.name} image={item.image} price={item.price}></MemberCart>)
                }
            </div>
        </div>
    );
};

export default MembershipSection;