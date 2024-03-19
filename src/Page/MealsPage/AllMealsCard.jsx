/* eslint-disable react/prop-types */

const AllMealsCard = ({item}) => {
    const { name, price, image, recipe,category, _id } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-start">
            <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
            <p className="border border-sky-300 bg-black/60 text-sky-400 absolute right-5 top-5 px-3 py-2 rounded-md">$ {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">{category}</h2>
                <p>{recipe}</p>
            </div>
        </div>
    );
};

export default AllMealsCard;