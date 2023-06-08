import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const navigate = useNavigate();
    const {googleSignIn} = useAuth()
    const handelGoogleSignIn = () => {
        
        console.log('success');
        googleSignIn().then((res) => {
            navigate('/')
            console.log(res.user);
        }).catch(err => console.log(err))
    }
    return (
      <>
      
      <button onClick={handelGoogleSignIn} className="relative group border-2 w-full gap-4 rounded-full p-2 flex items-center justify-center">
                          <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" className=" w-5" alt="google logo"/>
                          <span className="block w-max font-semibold tracking-wide text-white text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">Continue with Google</span>
                      </button>
  
      </>
    );
};

export default SocialLogin;