/* eslint-disable react/prop-types */

const MealsCard = ({item}) => {
    const { name, price, image, recipe } = item
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-start">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="text-white bg-black absolute right-5 top-5 px-3 py-2 rounded-md">$ {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn bg-black text-white">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default MealsCard;