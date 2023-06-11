import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useScrollTop from "../../hooks/useScrollTop";


const Authentication = () => {
    const {pathname} = useLocation()
    useScrollTop(pathname)
    const { signIn, createUser, updateUserProfile } = useAuth()

    const [show, setShow] = useState(false)
    const [login, setLogin] = useState(true)
    const navigate = useNavigate()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onLoginSubmit = data => {
        const { email, password } = data;
        signIn(email, password)
            .then(res => {
                console.log(res.user);
                toast.success('login successful')
                reset()
                navigate("/")
            })
            .catch(err => {
                console.log(err);
                toast.error(err?.message || 'Login unsuccessful')
            })
    }
    const onSignUpSubmit = data => {


        if (data.SignUpPassword === data.confirmPass) {
            console.log(data);
            const { email, SignUpPassword, displayName, photoURL } = data;
            createUser(email, SignUpPassword)
                .then(res => {

                    console.log(res.user);
                    // toast('Register Successful')
                    updateUserProfile(displayName, photoURL).then((res) => {
                        const saveUser = { name: displayName, photoURL, email, role: "student" }
                        axios.post('http://localhost:5000/users', saveUser).then(res => {
                            toast.success('Sign Up successful')
                            console.log(res.data);
                        })
                        console.log(res)
                        navigate("/")
                    }).catch(err => {
                        toast.err(err?.message || 'Sign up unsuccessful')
                    })
                })
                .catch(err => toast(err?.message))
        } else {
           toast('SignUpPassword didn`t match')
        }
        reset()
    }

    const handelFormStructure = () => {
        setLogin(!login)
    }
    return (
        <section className="min-h-screen flex items-stretch text-white ">
            <div className="lg:flex w-1/2 hidden bg-no-repeat bg-cover relative items-center" >

                <div className="absolute bg-transparent inset-0 z-0"></div>
                <div className="w-full px-4 z-10">
                    {errors.SignUpPassword && <div className="w-5/6 my-5 bg-red-500/30 border rounded-md h-20"><p className="text-white text-center mt-5">Password must have one Uppercase one lower case and one special character.</p> </div>}
                    {errors.password && <div className="w-5/6 my-5 bg-red-500/30 border rounded-md h-20"><p className="text-white text-center mt-5">Please provide a valid password</p> </div>}
                    <h1 className="text-5xl xl:text-6xl font-bold text-left tracking-wide">Language <br /> Adventure Camp</h1>
                    <p className="text-3xl xl:text-4xl my-4">Discover the World through Language: Join our Language Camp!</p>
                </div>



            </div>
            <div className="lg:w-1/2 w-full backdrop-blur-lg flex items-center justify-center text-center md:px-16 px-0 z-0" >
                <div className="absolute lg:hidden z-10 inset-0 bg-transparend backdrop-blur-xl bg-no-repeat bg-cover items-center" >
                    <div className="absolute bg-white/10 text-white  border-white opacity-60 inset-0 z-0"></div>
                </div>
                {
                    login ?
                        <div className="w-full z-20">
                            <h1 className="mb-6">

                            </h1>
                            <div className="py-6">
                                <SocialLogin />
                            </div>
                            <p className="text-gray-100">
                                or use email your account
                            </p>
                            <form onSubmit={handleSubmit(onLoginSubmit)} className="sm:w-2/3 select-none  w-full px-4 lg:px-0 mx-auto">
                                <div className="pb-2 pt-4">
                                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="block w-full p-4  text-lg rounded-sm bg-white/10 text-white  border-white" />
                                </div>
                                <div className="relative pb-2 pt-4">
                                    <input {...register("password", { required: true })} className="block w-full p-4 text-lg rounded-sm bg-white/10 text-white  border-white" type={`${!show ? "password" : "text"}`} placeholder="Password" />
                                    {
                                        !show ?
                                            <span onClick={() => setShow(true)} className="absolute inset-0 my-auto w-5 h-5 ml-auto  flex items-center justify-end mr-4 text-xl"><FaEyeSlash /></span>
                                            :
                                            <span onClick={() => setShow(false)} className="absolute inset-0 my-auto w-5 h-5 ml-auto  flex items-center justify-end mr-4 text-xl"><FaEye /></span>
                                    }
                                </div>

                                <div className="py-2">
                                    <button type="submit" className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">sign in</button>
                                </div>
                                <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                                    <button onClick={handelFormStructure}>Don`t Have any Account?</button>
                                </div>

                            </form>
                        </div> :
                        <div className="w-full z-20">
                            <h1 className="mb-6">

                            </h1>
                            <div className="py-6">
                                <SocialLogin />
                            </div>
                            <p className="text-gray-100">
                                or use email your account
                            </p>
                            <form onSubmit={handleSubmit(onSignUpSubmit)} className="sm:w-2/3  w-full px-4 lg:px-0 mx-auto">
                                <div className="pb-2 pt-4">
                                    <input {...register("displayName", { required: true })} type="text" placeholder="Name" className="block w-full p-4 text-lg rounded-sm bg-white/10 text-white  border-white" />
                                </div>
                                <div className="pb-2 pt-4">
                                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-white/10 text-white  border-white" />
                                </div>
                                <div className="pb-2 pt-4">
                                    <input {...register("photoURL", { required: true })} type="url" placeholder="Photo URL" className="block w-full p-4 text-lg rounded-sm bg-white/10 text-white  border-white" />
                                </div>
                                <div className="relative pb-2 pt-4">
                                    <input {...register("SignUpPassword", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z])/

                                    })} className="block w-full p-4 text-lg rounded-sm bg-white/10 text-white  border-white" type={`${!show ? "password" : "text"}`} placeholder="Password" />
                                    {
                                        !show ?
                                            <span onClick={() => setShow(true)} className="top-8 right-5 absolute text-xl"><FaEyeSlash /></span>
                                            :
                                            <span onClick={() => setShow(false)} className="top-8 right-5 absolute text-xl"><FaEye /></span>
                                    }
                                </div>
                                <div className="pb-2 pt-4">
                                    <input {...register("confirmPass", { required: true })} type={`${!show ? "password" : "text"}`} placeholder="Confirm Password" className="block w-full p-4 text-lg rounded-sm bg-white/10 text-white  border-white" />
                                </div>

                                <div className="py-2">
                                    <input type="submit" className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none" value="sign Up" />
                                </div>
                                <div className="text-right  text-gray-400 hover:underline hover:text-gray-100 ">

                                    <button onClick={handelFormStructure}>Already have an account?</button>



                                </div>

                            </form>
                        </div>
                }
            </div>
        </section>
    );
};

export default Authentication;