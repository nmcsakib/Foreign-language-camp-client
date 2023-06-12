import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";
import { Toaster } from "react-hot-toast";
import useScrollTop from "../../hooks/useScrollTop";
import { createContext, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import { FaMoon, FaSun } from "react-icons/fa";

export const ThemeContext = createContext()
const Main = () => {
    const [isChecked, setIsChecked] = useState(true);

    const { pathname } = useLocation()
    useScrollTop(pathname)
    const { scrollYProgress } = useScroll();
    return (
        <div className={`${isChecked ? 'bgDark' : 'bgLight'}  max-w-7xl min-h-screen relative`}>
            <HelmetProvider>


                <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}></motion.div>
                <div className="fixed w-20 rounded-full top-5 right-2 z-50">


                    {/* this hidden checkbox controls the state */}

                    <div className="text-3xl cursor-pointer"> <label htmlFor="swap">{isChecked ? <FaSun /> : <FaMoon />}</label></div>

                    <input className="hidden" type="checkbox" id="swap" checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)} />



                </div>
                <ThemeContext.Provider value={isChecked}>
                    <Navbar />
                    <div className="min-h-screen mx-auto">
                        <Outlet />
                    </div>
                    <Toaster />
                    <Footer />

                </ThemeContext.Provider>

            </HelmetProvider>
        </div>
    );
};

export default Main;