import { Outlet } from "react-router-dom";
import Footer from "./Page/Home/Footer";
import NavBar from "./Page/Home/Navbar";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;