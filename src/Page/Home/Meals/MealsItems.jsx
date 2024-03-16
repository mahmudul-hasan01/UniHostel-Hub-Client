/* eslint-disable react/prop-types */
import MealsCard from "./MealsCard";

const MealsItems = ({items}) => {
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-10 my-10'>
                {
                    items.map(item => <MealsCard key={item._id} item={item}></MealsCard>)
                }
            </div>
        </div>
    );
};

export default MealsItems;