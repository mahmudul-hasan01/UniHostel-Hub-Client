/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const MealsCard = ({ item }) => {
    const { name, price, image, recipe, _id } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-start">
            <figure><img className="h-[300px] w-96" src={image} alt="Shoes" /></figure>
            <p className="border border-sky-300 bg-black/60 text-sky-400 absolute right-5 top-5 px-3 py-2 rounded-md">$ {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <Link to={`/mealsDetails/${_id}`}>
                        <button className="btn border-sky-300 text-sky-500">Meals Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MealsCard;