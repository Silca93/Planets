import React from 'react'
import Navbar from './Navbar'
import data from './../assets/data.json'


import { Link, useParams, Outlet } from 'react-router-dom';


export default function Destination() {
    
    const {id=0} = useParams();
    const planetId = data.destinations[id]
    const imagePath = new URL(`../assets/destination/${planetId.images.webp}`, import.meta.url).href

  return (
    <div className="destinationPage w-screen h-screen">
      <div className="navbar w-dvw h-[15%] text-white">
         <Navbar/>
      </div>
      <div className="main w-dvw h-[85%] flex">
        <div className="left w-1/2 h-full flex flex-col gap-5  justify-start items-center pt-[3rem] pl-[100px]">
            <h1 className="text-white text-[2rem]">0{id} Pick Your Destination</h1>
            <img id="ariel" className="PLANET" src={imagePath} alt="" width="400px" height="300px"/>

        </div>
        <div className="right w-1/2 h-full  flex flex-col justify-center items-start gap-3">
            <div className="flex gap-5 text-white text-xl">
                        {Object.keys(data.destinations).map((element, key) => {
                    return (
                        <Link key={key} to={`/Technology/${key}` }>
                        <p className="text-white">{data.destinations[element].name}</p>
                        
                        </Link>
                        
                            
                        )
                        })}
                        {/* <Outlet/> */}
                
            </div>
            <h1 className="text-white text-[5rem]">{planetId.name.toUpperCase()}</h1>
            <p className="text-white mb-8 text-[1.5rem]" >{planetId.description}</p>
            <div className="w-[50rem] h-[1px] bg-gray-300"></div>

            <div className="flex w-full justify-center items-center">
                <div className="lefty text-white w-1/2 h-[10rem]  flex flex-col justify-start items-start pt-5 pl-5">
                    <p className="text-[1.3rem]">AVG. DISTANCE</p>
                    <p className="text-[1.4rem]"> {planetId.distance}</p>
                    
                </div>
                <div className="righty text-white w-1/2 h-[10rem] flex flex-col justify-start items-start pt-5 pl-5">
                  <p className="text-[1.3rem]">EST.Trave Time</p>
                  <p className="text-[1.4rem]"> {planetId.travel}</p>

                </div>

            </div>
                     
        </div>
      </div>
    </div>
  )
}
