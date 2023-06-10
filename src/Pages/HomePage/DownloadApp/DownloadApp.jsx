import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import mocupImg from '../../../assets/home/mockup.jpg'
const DownloadApp = () => {
    return (
        <>
        <SectionTitle title="Download Our App"/>
        <div className="flex justify-center items-center gap-3 rounded-lg bg-purple-300/20 backdrop-blur-lg px-10">
            <div className="w-1/4 p-5 ">
            <div className="w-72 mockup-phone">
  <div className="camera"></div> 
  <div className="display">
    <div className="artboard artboard-demo phone-1">
<img className="w-full" src={mocupImg} alt="" />
    </div>
  </div>
</div>
            </div>
<div className="w-3/4 mr-20 text-slate-200 text-center space-y-3">
    <h2 className="text-5xl font-bold tracking-wide">Download <br />
    <span className="text-3xl">Our New App</span>
    </h2>
    <h3 className="text-xxl font-light tracking-wider">Learn Foreign Language At home</h3>
    <p className="font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut atque exercitationem eveniet debitis optio nesciunt deleniti consequatur rem cupiditate?</p>
</div>
        </div>
        </>
    );
};

export default DownloadApp;