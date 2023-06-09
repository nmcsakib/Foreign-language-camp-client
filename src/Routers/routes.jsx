import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/HomePage/Home";
import AddClass from "../Pages/AddClass/AddClass";
import Authentication from "../Pages/Authentication/Authentication";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AllClasses from "../Pages/AllClasses/AllClasses";
import InstructorsClasses from "../Pages/InstructorsClasses/InstructorsClasses";

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
            path: '/authentication',
            element: <Authentication/>
        },
    ]
   },
   {
    path: '/dashboard',
    element: <Dashboard/>,
    children: [
        {
            path: '/dashboard/all-users',
            element: <AllUsers/>
        },
        {
            path: '/dashboard/my-classes',
            element: <InstructorsClasses/>
        },
        {
            path: '/dashboard/add-class',
            element: <AddClass/>
        },
        {
            path: '/dashboard/all-classes',
            element: <AllClasses/>
        },
    ]
   }

])