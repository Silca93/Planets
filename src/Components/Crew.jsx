import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom';
import Navbar from './Navbar'


export default function Crew({crew, data}) {
    
const idCrew = useParams();
const crewMember = data[idCrew]
  
  return (
    

//       data.crew.map((element, key) => {
    
//       console.log(element);
//       return (
//         <Link 
//            key={key}
//            to={`/Crew/${key}`}
           
           
           
//            >


//         </Link>
//       )
  
// })

<div className="crewPage w-screen h-screen">
<div className="navbar w-dvw h-[15%] text-white">
    <Navbar/>
</div>
<div className="main w-dvw h-[85%] flex">
    <div className="left w-1/2 h-full flex flex-col gap-5 justify-center items-start pl-[200px]">
    <h1 className="text-white text-[2rem] ">MEET YOUR CREW</h1>
    <h1 className="text-white"> {Object.keys(data.crew).map((element)=>{
        return (
            <h1>{data.crew[element].name};</h1>
        )
    
  })}</h1>
 
    <p className="text-white text-[1rem]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ipsum.</p>

    </div>
    <div className="right w-1/2 h-full  flex justify-center items-center">
    <img src="" alt="" />
    </div>
</div>
</div>
            
  )
}

        