import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/HomePage/Home";

export const router = createBrowserRouter([
   {
    path: '/',
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <Home/>
        }
    ]
   }

])