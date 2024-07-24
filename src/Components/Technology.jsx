import React from 'react'
import Navbar from './Navbar'
import data from './../assets/data.json'

import { Link, useParams, Outlet } from 'react-router-dom';


export default function Technology({data}) {

                            
const {idTech=0} = useParams();
const techId = data.technology[idTech]
const imagePath = new URL(`../assets/technology/${techId.images.portrait}`, import.meta.url).href
  return (
    <div className="techPage w-screen h-screen">
      <div className="navbar w-dvw h-[15%] text-white">
         <Navbar/>
      </div>
      <div className="main w-dvw h-[85%] flex">
        <p className="text-white text-[2rem] absolute left-[17rem]">SPACE LAUNCH 101 </p>
        <div className="left w-[60%] h-full flex gap-5 justify-center items-center pl-[200px]">
           <div className="flex flex-col gap-5">
             {Object.keys(data.technology).map((element, key) => {
                    return (
                      <Link key={key} to={`/Technology/${key}` }>
                          <div className="h-[5rem] w-[5rem] rounded-full text-[2rem] text-white focus:bg-white focus:text-black border-2 border-white flex justify-center items-center" tabIndex="0">
                          {data.technology[element].key}
                          
                          {key + 1}
                            
                          </div>
                        </Link>
                            
                        )
                        })}
           </div>  

          <div className="flex flex-col gap-5">
            <p className="text-white">The Terminology</p>
            <h1 className="text-white text-[4rem] ">{techId.name.toUpperCase()}</h1>
            
            <p className="text-white text-[1rem] text-justify  pr-[7rem]">{techId.description}</p>
          </div> 

        </div>
           
        <div className="right w-[40%] h-full flex justify-end items-end">
          <div className="container h-[35rem] w-[30rem]  flex justify-center items-center">
            <img src={imagePath} alt="" height="100%" />
            
          </div>
        </div>
      </div>
    </div>
  )
}
