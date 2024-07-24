import React from 'react';
import logo from './../assets/shared/logo.svg'
import { Link } from 'react-router-dom';

const Navbar = (logo) => {
 return (
    <div className="w-[full] h-[7rem] flex">
        <div className="left w-[40%] h-[6rem] flex justify-center items-center pl-5">
            <div className="LOGO w-[5rem] h-[5rem] flex justify-center items-center"></div>   
            <div className="w-[40rem] h-[1px] bg-gray-300 opacity-65"></div>

        </div>
        <div className="Rightnav w-[60%] h-[6rem] bg-[rgba(98,98,98,0.5)] flex justify-start items-center opacity-90 backdrop-blur-[10rem] z-0">
            <nav className="">
                <ul className="flex gap-5 justify-center items-center pl-5">
                    <li className="text-[1.2rem] hover:underline hover:underline-offset-[1rem] hover:underline-white hover:underline-2" tabIndex="0">
                    <Link to="/Planets/">00 HOME</Link>
                    </li>

                    <li className="UNDERLINE2 text-[1.2rem] hover:underline hover:underline-offset-[1rem] hover:underline-white hover:underline-2" tabIndex="0">
                    <Link to="/Destination">01 DESTINATION</Link>
                    </li>
                    <li className="UNDERLINE3 text-[1.2rem] hover:underline hover:underline-offset-[1rem] hover:underline-white hover:underline-2" tabIndex="0">
                    <Link to="/Crew">02 CREW</Link>
                    </li>
                    <li className="UNDERLINE4 text-[1.2rem] hover:underline hover:underline-offset-[1rem] hover:underline-white hover:underline-2" tabIndex="0">
                    <Link to="/Technology">03 TECHNOLOGY</Link>
                    </li>
                </ul>
            </nav>

        </div>
        
        
    </div>
 );
};

export default Navbar;
