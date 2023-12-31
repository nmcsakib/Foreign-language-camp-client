import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import mocupImg from '../../../assets/home/mockup.jpg'
import storesImg from '../../../assets/download.png'
import { useContext } from "react";
import { ThemeContext } from "../../../Layouts/Main/Main";
import { motion } from 'framer-motion'
const DownloadApp = () => {
    const isChecked = useContext(ThemeContext)
    return (
        <>
            <SectionTitle title="Download Our App" />
            <motion.div initial={{ opacity: 0 }} transition={{ delay: 1.5 }} whileInView={{ opacity: 1 }} className="flex h-[400px] my-20 justify-center items-center gap-3 rounded-lg bg-purple-300/20 backdrop-blur-lg px-10">
                <div className="w-1/4 hidden md:block p-5 ">
                    <motion.div drag dragConstraints="x" animate={{ scale: [0.9, 1, 1, 0.9] }} transition={{ ease: "linear", duration: 4, repeat: Infinity }} className="w-72 mockup-phone">
                        <div className="camera"></div>
                        <div className="display">
                            <div className="artboard artboard-demo phone-1">
                                <img className="w-full" src={mocupImg} alt="" />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className={`${isChecked ? 'text-white' : 'text-[#110f29]'} "w-full mx-auto md:w-2/4 md:ml-32 flex flex-col text-center md:text-right space-y-3`}>
                    <h2 className="text-5xl font-bold tracking-wide">Download <br />
                        <span className="text-3xl">Our New App</span>
                    </h2>
                    <h3 className="text-xl font-light tracking-wider">Learn Foreign Language At home</h3>
                    <p className="font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut atque exercitationem eveniet debitis optio nesciunt deleniti consequatur rem cupiditate?</p>
                    <img className=" w-3/4 mx-auto md:mx-0 md:ml-auto rounded-lg" src={storesImg} alt="" />
                </div>
            </motion.div>
        </>
    );
};

export default DownloadApp;