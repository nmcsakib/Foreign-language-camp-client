import DownloadApp from "../DownloadApp/DownloadApp";
import PopularClasses from "../PopularClasses/PopularClasses";
import Banner from "./Banner";
import PopularInstructors from "./PopularInstructors";

const Home = () => {
    return (
        <div>
            <Banner/>     
            <PopularInstructors/>  
            <PopularClasses/> 
            <DownloadApp/>
        </div>
    );
};

export default Home;