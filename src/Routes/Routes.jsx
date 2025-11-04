import React from 'react';
import { createBrowserRouter } from 'react-router';
import Layout from '../Layout/Layout';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
        {
            
        }
    ]
  },
]);
