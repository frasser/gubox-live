
import React ,{useContext}from 'react'
import { MdMemory} from "react-icons/md";
import { RiSignalTowerFill} from "react-icons/ri";
import { AiOutlineAlert } from "react-icons/Ai";
import '../styles/components/Hero.css'


import AppContext from '../context/AppContext'


const SIZE = "32px";
const Hero =() => {

    const {state} = useContext(AppContext)
    const {side_state} = state

   

    
     let mainClass = [];

    if (side_state[1]) {
        mainClass.push("mainOpen");
    }else{
        mainClass.push("mainMin");
    }
    
    return (
        <>
                                    <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                                <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 " >
                                <div className="inline-block px-3">
                                    <div className="w-20 h-16 md:w-32 md:h-20 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                        <div className="flex items-center"  aria-hidden="true">
                                            
                                            <MdMemory size={SIZE} className=" mt-2"/>
                                        
                                            <div className="">
                                                <small className="text-sm  md:text-base font-semibold text-gray-800 opacity-50 pr-1 md:pr-0 md:pl-3">Devices</small>
                                                <h6 className="mt-1 ml-2 font-medium text-bold  text-gray-800 opacity-50 pl-7">2</h6>
                                            </div>

        
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-block px-3">
                                    <div className="w-20 h-16 md:w-32  md:h-20 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                        <div className="flex items-center"  aria-hidden="true">
                                                
                                                <RiSignalTowerFill size={SIZE} className=" mt-2"/>
                                            
                                                <div className="">
                                                    <small className="text-sm  md:text-base font-semibold text-gray-800 opacity-50 pr-1 md:pr-0 md:pl-3">Coverage</small>
                                                    <h6 className="mt-1 ml-2 font-medium text-bold  text-gray-800 opacity-50 pl-7"></h6>
                                                </div>

            
                                            </div>
                                    </div>
                                </div>
                                <div className="inline-block px-3">
                                    <div className="w-20 h-16 md:w-32  md:h-20 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                        <div className="flex items-center"  aria-hidden="true">
                                                    
                                                    <AiOutlineAlert size={SIZE} className=" mt-2"/>
                                                
                                                    <div className="">
                                                        <small className="text-sm  md:text-base font-semibold text-gray-800 opacity-50 pr-1 md:pr-0 md:pl-3">Alerts</small>
                                                        <h6 className="mt-1 ml-2 font-medium text-bold  text-gray-800 opacity-50 pl-7">5</h6>
                                                    </div>

                
                                        </div>
                                    </div>
                                </div>
                                <div className="inline-block px-3">
                                    <div className="w-20 h-16 md:w-32  md:h-20 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                        <div className="flex items-center"  aria-hidden="true">
                                                        
                                                        <MdMemory size={SIZE} className=" mt-2"/>
                                                    
                                                        <div className="">
                                                            <small className="text-sm  md:text-base font-semibold text-gray-800 opacity-50 pr-1 md:pr-0 md:pl-3">Messages</small>
                                                            <h6 className="mt-1 ml-2 font-medium text-bold  text-gray-800 opacity-50 pl-7">2</h6>
                                                        </div>

                    
                                        </div>
                                    </div>
                                </div>

                                </div>
                        </div>

            
            </>
    )
}

export default Hero
