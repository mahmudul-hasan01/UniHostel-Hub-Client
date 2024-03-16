import { useContext } from "react";
import { AuthContext } from "../components/Firebase/AuthProvider";

const useAuth = () => {
    const context = useContext(AuthContext)
    return context
};

export default useAuth;