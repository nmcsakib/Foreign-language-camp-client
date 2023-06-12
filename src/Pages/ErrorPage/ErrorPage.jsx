import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>
            <Helmet>
                <title>Error | Foreign-language-camp</title>
            </Helmet>
            <div className="bgDark">
                <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                        <div className="border-t border-gray-200 text-center pt-8">
                            <h1 className="text-9xl font-bold bg-clip-text text-purple-600">{error?.status || '404'}</h1>
                            <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                            <p className="text-2xl pb-8 px-12 font-medium">{error?.data || error?.statusText}</p>
                            <Link to='/' className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
                                HOME
                            </Link>
                            <a href="mailto:bksumon51@gmail.com" target="_blank" rel="noreferrer" className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ErrorPage;