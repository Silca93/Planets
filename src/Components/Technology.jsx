import React from 'react'
import Navbar from './Navbar'

export default function Technology({data}) {
  return (
    <div className="techPage w-screen h-screen">
      <div className="navbar w-dvw h-[15%] text-white">
         <Navbar/>
      </div>
      <div className="main w-dvw h-[85%] flex">
        <div className="left w-1/2 h-full flex flex-col gap-5 justify-center items-start pl-[200px]">
          <h1 className="text-white text-[2rem] ">SO YOU WANNA TRAVEL TO</h1>
          <h1 className="text-white text-[4rem] ">SPACE</h1>
          <p className="text-white text-[1rem]">Let's face it; if you want to go to space, you might as well<br></br> genuinely go to outer space and not hover kind of on the<br></br> edge of it. Well sit back, and relax because we'll give you a<br></br>truly out of this world experience!</p>

        </div>
        <div className="right w-1/2 h-full  flex justify-center items-center">
          <div className="container h-[15rem] w-[15rem] bg-white rounded-full flex justify-center items-center">
            <h1 className="text-[1.5rem]">EXPLORE</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
