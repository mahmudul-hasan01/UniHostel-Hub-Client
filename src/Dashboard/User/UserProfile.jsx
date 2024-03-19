import useAuth from "../../Hooks/useAuth";

const UserProfile = () => {

    const {user} = useAuth()

    return (
        <div className=" flex justify-center items-center">
        <div className="max-w-[300px] md:w-[350px] bg-white my-20 p-6 md:p-8 shadow-md rounded-2xl space-y-8">
            {/* profile image & bg  */}
            <div className="relative">
                <img className="w-full h-full rounded-2xl bg-gray-500" src="https://source.unsplash.com/350x150/?northern lights" alt="card navigate ui" />
                {/* <img className="w-[100px] h-[100px] absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-gray-400 border border-white" src="https://source.unsplash.com/100x100/?men" alt="card navigate ui" /> */}
                <img className="w-[100px] h-[100px] absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-gray-400 border border-white" src={user?.photoURL ? user?.photoURL : "https://source.unsplash.com/100x100/?men"} alt="card navigate ui" />
            </div>
            {/* profile name & role */}
            <div className="pt-8 text-center space-y-1">
                <h1 className="text-xl md:text-2xl">{user?.displayName}</h1>
                <p className="text-gray-400 text-sm">{user?.email}</p>
            </div>
            {/* post , followers following  */}
            <div className="flex flex-wrap px-4  md:px-8 justify-between items-center">
                <div className="text-center">
                    <h5 className="font-medium text-xl">17</h5>
                    <p className="text-sm  text-gray-400">Post</p>
                </div>
                <div className="text-center">
                    <h5 className="font-medium text-xl">9.7k</h5>
                    <p className="text-sm  text-gray-400">Followers</p>
                </div>
                <div className="text-center">
                    <h5 className="font-medium text-xl">217</h5>
                    <p className="text-sm  text-gray-400">Following</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default UserProfile;