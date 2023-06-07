import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar";

const Main = () => {
    return (
        <div className="main-container min-h-screen relative">
            <Navbar/>
            <div className="max-w-7xl mx-auto">
            <Outlet/>
            </div>
        </div>
    );
};

export default Main;