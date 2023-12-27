import { Outlet } from "react-router-dom";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";

const Layout = () => {
    return (
        <div className="font-baseFont text-primaryColor bg-bodyColor">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;