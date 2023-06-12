import DownloadApp from "./DownloadApp/DownloadApp";
import PopularClasses from "./PopularClasses/PopularClasses";
import Banner from "./Banner";
import PopularInstructors from "./PopularInstructors";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Foreign-language-camp</title>
            </Helmet>
            <Banner/>     
            <PopularInstructors/>  
            <PopularClasses/> 
            <DownloadApp/>
        </div>
    );
};

export default Home;