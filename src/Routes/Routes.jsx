import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import SkillDetails from '../pages/skillDetails/skillDetails';
import PrivateRoutes from './PrivateRoutes';
import MyProfile from '../pages/MyProfile/MyProfile';
import UpdateProfile from '../pages/UpdateProfile/UpdateProfile';
import ForgetPassword from '../pages/ForgetPassword/ForgetPassword';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
        {
            path:'/',
            Component:Home,
            loader:()=>fetch('/skillsData.json'),
            hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>
        },
        {
            path:'/login',
            Component:Login,
        },
        {
            path:'/signUp',
            Component:SignUp,
        },
        {
          path:'/skillDetails/:id',
          element:<PrivateRoutes>
          <SkillDetails></SkillDetails>
          </PrivateRoutes>,
          loader:()=>fetch('/skillsData.json'),
          
          hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>
        },
        {
          path:'/myProfile',
           element:<PrivateRoutes>
         <MyProfile></MyProfile>
          </PrivateRoutes>,
        },
        {
          path:'/updateProgile',
          element:<PrivateRoutes>
          <UpdateProfile></UpdateProfile>
          </PrivateRoutes>,
        },
        {
          path:'/forgetPassword',
          Component: ForgetPassword
        }
    ]
  }
  
]);
