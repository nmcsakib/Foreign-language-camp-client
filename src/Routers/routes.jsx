import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/HomePage/Home";
import AddClass from "../Pages/AddClass/AddClass";
import Authentication from "../Pages/Authentication/Authentication";

export const router = createBrowserRouter([
   {
    path: '/',
    element: <Main/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/add-class',
            element: <AddClass/>
        },
        {
            path: '/authentication',
            element: <Authentication/>
        },
    ]
   }

])