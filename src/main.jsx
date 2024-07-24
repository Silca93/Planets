import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Crew from './Components/Crew';
import Planets from './Components/Planets';
import Technology from './Components/Technology';
import Destination from './Components/Destination';

//? images//
import crew from './assets/crew/image-douglas-hurley.png'

//json//
import data from './assets/data.json'

const router = createBrowserRouter([
 {
    path: '/Planets/',
    element: <Home data={data}/>,
 },
 {
    path: '/Destination/',
    element: <Destination data={data} />,
    children: [
      {
        path: '/Destination/:id',
        element: <Destination data={data}/>
      }     
    ]
 },
 {
    path: '/Crew',
    element: <Crew data={data} crew={crew}/>,
    children : [
      {
        path: '/Crew/:idCrew',
        element: <Crew/>
      }
    ]
 },
 {
    path: '/Technology',
    element: <Technology data={data}/>,
    children: [
      {
         path: '/Technology/:idTech',
         element: <Technology />
      }
    ]
 }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router={router}>
       
    </RouterProvider>
 </React.StrictMode>
);
