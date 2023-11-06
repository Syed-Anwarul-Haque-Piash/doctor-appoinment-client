

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Login from './../pages/Login';
import Signup from './../pages/Signup';
import Services from "../pages/Services"
import Contact from "../pages/Contact"


const router=createBrowserRouter([
    { path: '/',element: <Main></Main>,
    children:[
       {
        path:'/',
        element:<Home></Home>
       },
       {
        path:'/doctor',
        element:<Doctors></Doctors>
       },
       {
        path:'/doctor/:id',
        element:<DoctorDetails></DoctorDetails>
       },
       {
        path:"/login",
        element:<Login></Login>
       },
       {
        path:'/register',
        element: <Signup></Signup>
       },
       {
        path:'/contact',
        element: <Contact></Contact>
       },
       {
        path:'/services',
        element:<Services></Services>
       }
    ]
}
])
export default router;