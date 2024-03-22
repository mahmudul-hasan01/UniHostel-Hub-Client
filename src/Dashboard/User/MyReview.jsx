import { useState } from "react";
import { AiFillLike } from "react-icons/ai";

const MyReview = () => {

    const [count, setCount] = useState(0);

    const handleLike = () => {
        setCount(count + 1);
    };

    const [like, setLike] = useState(0)
    const [isLike, setIsLike] = useState(false)

    const handleClick = () => {
        setLike(like + (isLike ? -1 : 1))
        setIsLike(!isLike)
    }

    return (
        <div>


            <div>
                <button onClick={handleLike}>Like</button>
                <p>{count} {count === 1 ? 'like' : 'likes'}</p>
            </div>

            <p className="text-center text-5xl">Like: {like}</p>
            <div className="flex justify-center text-4xl mt-10">
                <AiFillLike onClick={handleClick}></AiFillLike>
            </div>
        </div>
    );
};

export default MyReview;