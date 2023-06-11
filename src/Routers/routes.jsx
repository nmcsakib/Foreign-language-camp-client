import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/HomePage/Home";
import AddClass from "../Pages/AddClass/AddClass";
import Authentication from "../Pages/Authentication/Authentication";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AllUsers from "../Pages/AllUsers/AllUsers";
import AllClasses from "../Pages/AllClasses/AllClasses";
import InstructorsClasses from "../Pages/InstructorsClasses/InstructorsClasses";
import AllInstructors from "../Pages/AllInstructors/AllInstructors";
import ActiveClasses from "../Pages/ActiveClasses/ActiveClasses";
import SelectedClasses from "../Pages/SelectedClasses/SelectedClasses";
import Payment from "../Pages/Payment/Payment";
import EnrolledClasses from "../Pages/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../Pages/Payment/PaymentHistory/PaymentHistory";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
            path: '/all-instructors',
            element: <AllInstructors/>
        },
        {
            path: '/active-classes',
            element: <ActiveClasses/>
        },
        
        {
            path: '/authentication',
            element: <Authentication/>
        },
    ],
    errorElement: <ErrorPage/>
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
        {
            path: '/dashboard/selected-classes',
            element: <SelectedClasses/>
        },
        {
            path: '/dashboard/enrolled-classes',
            element: <EnrolledClasses/>
        },
        {
            path: '/dashboard/payment',
            element: <Payment/>
        },
        {
            path: '/dashboard/my-payments',
            element: <PaymentHistory/>
        },
    ]
   },
   

])