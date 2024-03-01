import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';
import Navbar from './Navbar'
import data from './../assets/data.json'

export default function Crew({crew, data}) {
    
  const {idCrew=0} = useParams();
  const crewId = data.crew[idCrew]
  const imagePath = new URL(`../assets/crew/${crewId.images.webp}`, import.meta.url).href

  
  return (


<div className="crewPage w-screen h-screen">
<div className="navbar w-dvw h-[15%] text-white">
    <Navbar/>
</div>
<div className="main w-dvw h-[85%] flex">
    <div className="left w-1/2 h-full flex flex-col gap-5 justify-center items-start pl-[200px]">
    <h1 className="text-white text-[2rem] ">0{idCrew} MEET YOUR CREW</h1><br></br><br></br><br></br>

    <p className="text-white text-[2rem]">{crewId.role}</p> 
    <h1 className="text-white text-[2rem]">{crewId.name.toUpperCase()}  </h1>
    <p className="text-white">{crewId.bio}</p>

    <div className="flex gap-5">

        <div className=" flex cursor-pointer gap-3">
        {Object.keys(data.crew).map((element, key) => {
          return (
                          <Link key={key} to={`/Crew/${key}` }>
                          <div className="text-white w-[1rem] h-[1rem] bg-white rounded-full"></div>
                          </Link>
                          )
                          })}
        </div >
       
    </div>

    </div>
    <div className="right w-1/2 h-[37rem]  flex justify-center items-center">
      <img src={imagePath} alt="" />
    </div>
    
</div>
</div>
            
  )
}

        