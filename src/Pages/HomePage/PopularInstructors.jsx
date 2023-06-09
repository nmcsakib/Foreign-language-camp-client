import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import AllInstructors from "../AllInstructors/AllInstructors";

const PopularInstructors = () => {
    return (
      //TODO: make it popular
     <>
     <SectionTitle title="Our Popular Instructors"/>
      <AllInstructors limit="six"/>
     </>
    )
};

export default PopularInstructors;