import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
       
          <footer className="footer h-96 -mt-20 z-10 footer-center text-primary-content relative">
  
  <div>
  <h2 className="text-4xl font-bold text-white tracking-wider">FLC</h2>
    <p className="font-bold">
     Foreign Language Camp ! <br/>Providing reliable tech since 1992
    </p> 
    <p>Copyright © 2023 - All right reserved</p>

   <div className="flex text-white text-3xl  gap-x-4">
      <a><FaFacebook/></a> 
      <a><FaInstagram/></a> 
      <a><FaTwitter/></a>
    </div>
  </div>
   
  
</footer>  
    );
};

export default Footer;