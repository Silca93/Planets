import React from 'react'
import Navbar from './Navbar'

import { Link, useParams } from 'react-router-dom';

export default function Planets({data}) {

    const {id} = useParams();
    const planetId = data[id]
    

  return (
    <div className="destinationPage w-screen h-screen">
      <div className="navbar w-dvw h-[15%] text-white">
         <Navbar/>
      </div>
      <div className="main w-dvw h-[85%] flex">
        <div className="left w-1/2 h-full flex flex-col gap-5 justify-start items-start pl-[200px]">
            <h1 className="text-white text-[2rem]"> Pick Your Destination</h1>
            <img src={planetId.image} alt="" />

        </div>
        <div className="right w-1/2 h-full  flex flex-col justify-center items-center">
            <div className="flex gap-2 text-white">
                        {Object.keys(data.destinations).map((element)=>{
                    return (
                        <p className="text-white">{data.destinations[element].name}</p>
                    )
                       })}
                
            </div>
            <h1 className="text-white text-[3rem]">{planetId.name}</h1>
            {data.map(element, key => {
                return (
                    <Link key={key} to={`/Destination/Planet/${key}` }
                    >
                        {element.description}
                    </Link>
                )
            })}
            <p className="text-white" >3 years</p>
          
        </div>
      </div>
    </div>
  )
}
