import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
    const { signIn, createUser, updateUserProfile } = useAuth()
    const [show, setShow] = useState(false)
    const [login, setLogin] = useState(true)
    const navigate = useNavigate()
    const { register, handleSubmit, reset } = useForm();
    const onLoginSubmit = data => {
        const { email, password } = data;
        signIn(email, password)
            .then(res => {
                console.log(res.user);
                // toast('login successful')
                navigate("/")
            })
            .catch(err => {
                console.log(err);
                // toast(err.message)
            })
        reset()
    }
    const onSignUpSubmit = data => {


        if (data.password === data.confirmPass) {
            console.log(data);
            const { email, password, displayName, photoURL } = data;
            createUser(email, password)
                .then(res => {

                    console.log(res.user);
                    // toast('Register Successful')
                    updateUserProfile(displayName, photoURL).then((res) => {
                        const saveUser = {name: displayName, email, role: "student"} 
                        axios.post('http://localhost:5000/users', saveUser).then(res => {
                            console.log(res.data);
                        })
                        console.log(res)
                        navigate("/")
                    }).catch(err => console.log(err))
                })
                .catch(err => console.log(err?.message))
        } else {
            alert('password didn`t match')
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
                    <h1 className="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                    <p className="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
                </div>

            </div>
            <div className="lg:w-1/2 w-full backdrop-blur-lg flex items-center justify-center text-center md:px-16 px-0 z-0" >
                <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" >
                    <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
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
                            <form onSubmit={handleSubmit(onLoginSubmit)} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                                <div className="pb-2 pt-4">
                                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-black" />
                                </div>
                                <div className="relative pb-2 pt-4">
                                    <input {...register("password", { required: true })} className="block w-full p-4 text-lg rounded-sm bg-black" type={`${!show ? "password" : "text"}`} placeholder="Password" />
                                    {
                                        !show ?
                                            <span onClick={() => setShow(true)} className="top-8 right-5 absolute text-xl"><FaEyeSlash /></span>
                                            :
                                            <span onClick={() => setShow(false)} className="top-8 right-5 absolute text-xl"><FaEye /></span>
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
                            <form onSubmit={handleSubmit(onSignUpSubmit)} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                                <div className="pb-2 pt-4">
                                    <input {...register("displayName", { required: true })} type="text" placeholder="Name" className="block w-full p-4 text-lg rounded-sm bg-black" />
                                </div>
                                <div className="pb-2 pt-4">
                                    <input {...register("email", { required: true })} type="email" placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-black" />
                                </div>
                                <div className="pb-2 pt-4">
                                    <input {...register("photoURL", { required: true })} type="url" placeholder="Photo URL" className="block w-full p-4 text-lg rounded-sm bg-black" />
                                </div>
                                <div className="relative pb-2 pt-4">
                                    <input {...register("password", { required: true })} className="block w-full p-4 text-lg rounded-sm bg-black" type={`${!show ? "password" : "text"}`} placeholder="Password" />
                                    {
                                        !show ?
                                            <span onClick={() => setShow(true)} className="top-8 right-5 absolute text-xl"><FaEyeSlash /></span>
                                            :
                                            <span onClick={() => setShow(false)} className="top-8 right-5 absolute text-xl"><FaEye /></span>
                                    }
                                </div>
                                <div className="pb-2 pt-4">
                                    <input {...register("confirmPass", { required: true })} type="password" placeholder="Confirm Password" className="block w-full p-4 text-lg rounded-sm bg-black" />
                                </div>

                                <div className="py-2">
                                    <button type="submit" className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">sign Up</button>
                                </div>
                                <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
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