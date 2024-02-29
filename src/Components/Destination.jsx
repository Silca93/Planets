import React from 'react'
import Navbar from './Navbar'
import data from './../assets/data.json'
import moon from './../assets/destination/image-moon.png'

import { Link, useParams, Outlet } from 'react-router-dom';


export default function Destination() {
    
    const {id=0} = useParams();
    const planetId = data.destinations[id]
    
    // const imagePath = new URL(`../../assets/${details.images.png}`, import.meta.url).href;
    const imagePath = `./../assets/destination/${planetId.images.webp}`

    const link = new URL(`${planetId.images.png}`, import.meta.url).href
    console.log(link);
    console.log(planetId.images.png);

    
    // console.log(data.destinations[0].image);

  return (
    <div className="destinationPage w-screen h-screen">
      <div className="navbar w-dvw h-[15%] text-white">
         <Navbar/>
      </div>
      <div className="main w-dvw h-[85%] flex">
        <div className="left w-1/2 h-full flex flex-col gap-5 justify-start items-start pl-[200px]">
            <h1 className="text-white text-[2rem]">0{id} Pick Your Destination</h1>
            <img src={imagePath} alt="" width="300px" height="300px"/>

        </div>
        <div className="right w-1/2 h-full  flex flex-col justify-center items-center">
            <div className="flex gap-2 text-white">
                        {Object.keys(data.destinations).map((element, key) => {
                    return (
                        <Link key={key} to={`/Destination/${key}` }>
                        <p className="text-white">{data.destinations[element].name}</p>
                        
                        </Link>
                        
                            
                        )
                        })}
                        {/* <Outlet/> */}
                
            </div>
            <h1 className="text-white text-[3rem]">{planetId.name}</h1>
            <p className="text-white mb-8" >{planetId.description}</p>
            <div className="w-[25rem] h-[1px] bg-gray-300"></div>

            <div className="flex w-full justify-center items-center">
                <div className="lefty w-1/2 h-[10rem] bg-yellow-500 flex flex-col justify-center items-center">
                    <p>AVG. DISTANCE</p>
                    <p>Distance : {planetId.distance}</p>
                    <p>Travel time : {planetId.travel}</p>

                </div>
                <div className="righty w-1/2 h-[10rem] bg-red-500"></div>

            </div>
                     
        </div>
      </div>
    </div>
  )
}
