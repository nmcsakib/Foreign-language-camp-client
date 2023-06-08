import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

const Main = () => {
    return (
        <div className="main-container min-h-screen relative">
            <Navbar/>
            <div className="max-w-7xl min-h-screen mx-auto">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;