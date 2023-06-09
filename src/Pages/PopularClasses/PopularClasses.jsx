import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import ActiveClasses from "../ActiveClasses/ActiveClasses";

const PopularClasses = () => {
    return (
        <div>
            <SectionTitle title="Our Popular Classes"/>
            <ActiveClasses limit="six"/>
        </div>
    );
};

export default PopularClasses;