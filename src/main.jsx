// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import './index.css'
// //?compoinents//
// import Home from './Components/Home'
// import Crew from './Components/Crew'
// import Technology from './Components/Technology'
// import Destination from './Components/Destination'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home/>,
//   },
//   {
//     path: '/Destination',
//     element: <Destination/>,
//   },
//   {
//     path: '/Crew',
//     element: <Crew/>,
//   },
//   {
//     path: '/Technology',
//     element: <Technology/>,
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>,
 
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Crew from './Components/Crew';
import Technology from './Components/Technology';
import Destination from './Components/Destination';

const router = createBrowserRouter([
 {
    path: '/',
    element: <Home/>,
 },
 {
    path: '/Destination',
    element: <Destination/>,
 },
 {
    path: '/Crew',
    element: <Crew/>,
 },
 {
    path: '/Technology',
    element: <Technology/>,
 }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router={router}>
      <Navbar /> {/* Include the Navbar here */}
      {/* Your router setup will be here */}
    </RouterProvider>
 </React.StrictMode>
);
