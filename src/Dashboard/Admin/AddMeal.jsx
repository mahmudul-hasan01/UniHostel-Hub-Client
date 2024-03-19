import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const AddMeal = () => {

    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }

        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        // console.log(imageFile);
        if(res.data.success){
            const mealsItem = {
                name: data?.name,
                distributorName : user.displayName ? user.displayName : 'Null',
                distributorEmail : user.email,
                category: data?.category,
                ingredients: data?.ingredients,
                rating: data?.rating,
                time: data?.time,
                like: data?.like,
                reviews: data?.reviews,
                price: parseFloat(data?.price),
                description: data?.description,
                image: res?.data?.data?.display_url
            }
            const meals = await axiosSecure.post('/mealItem', mealsItem)
            console.log(meals.data);
            if(meals.data.insertedId){
                reset()
                // toast.success(`${data.neme} add successfully`)
            }
        }
    }

    return (
        <div>
            {/* <SectionTitle subHeading={'What"s New'} heading={'Add an item'}></SectionTitle> */}
            <div>
                
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Meal title*</span>
                        </div>
                        <input {...register("name")} type="text" placeholder="Name" className="input input-bordered w-full " />

                    </label>

                    <div className="flex gap-5">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Ingredients*</span>
                            </div>
                            <input {...register("ingredients")} type="text" placeholder="Ingredients" className="input input-bordered w-full" />

                        </label>

                    </div>

                    <div className="flex gap-5">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Meal type/category*</span>
                            </div>
                            <select {...register("category")} defaultValue={'default'} className="select select-bordered w-full ">
                                <option disabled value={'default'}>Select a category</option>
                                <option value="breakfast">breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>

                            </select>

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input {...register("price")} type="number" placeholder="Price" className="input input-bordered w-full" />

                        </label>

                    </div>

                    <div className="flex gap-5">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Rating*</span>
                            </div>
                            <input {...register("rating")} type="text" placeholder="Rating" className="input input-bordered w-full" />

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Time/Date*</span>
                            </div>
                            <input {...register("time")} type="time" placeholder="Time" className="input input-bordered w-full" />

                        </label>

                    </div>

                    <div className="flex gap-5">

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Like*</span>
                            </div>
                            <input {...register("like")} defaultValue={0} type="text"  className="input input-bordered w-full" />

                        </label>

                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Reviews*</span>
                            </div>
                            <input {...register("reviews")} defaultValue={0} type="text"  className="input input-bordered w-full" />

                        </label>

                    </div>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Description*</span>
                        </div>
                        <textarea {...register("description")} className="textarea textarea-bordered w-full" placeholder="Description"></textarea>

                    </label>

                    <input {...register("image")} type="file" className="file-input bg-sky-400 block w-full max-w-xs" />

                    <button className="btn btn-outline border border-sky-400 bg-sky-400">
                        Add Item <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMeal;