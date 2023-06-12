import { useContext } from "react";
import { ThemeContext } from "../../Layouts/Main/Main";

const SectionTitle = ({title}) => {
    const isChecked = useContext(ThemeContext)
    
    return (
        <div className={`${isChecked ? 'text-white' : 'text-[#110f29]'}`}>
            
            <h2 className='text-4xl py-5 font-bold text-center tracking-wide'>{title}</h2>
            <hr className="w-3/4 mb-3 mx-auto" />
        </div>
    );
};

export default SectionTitle;