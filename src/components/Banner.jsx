import React,{useContext} from 'react'
import AppContext from '../context/AppContext'

import {RiMenuLine,RiCloseFill} from 'react-icons/ri'
const Banner=()=> {
    const {state,handleDrawer} = useContext(AppContext)
    const {side_state} = state
    return (
        <>
        <div className="flex flex-col h-36   md:mx-0.5 md:mt-0.5 absolute w-full rounded-3xl    z-0 bg-gradient-to-b from-gray-900 to-bannerscolor"></div>
             <div className="flex flex-col overflow-y-auto h-full px-3 pb-2   md:pb-2 space-y-4">
                <div className="flex flex-col z-20 pt-4 text-white    ">

                        
                <button className=" fixed  text-white bg-purple-400 rounded-full top-5 right-5 md:hidden w-10 h-10" onClick={handleDrawer}>
                                    {!side_state[1]?  
                                    <RiMenuLine className="    transition-transform  w-10 h-6 text-white focus:outline-none" />
                                    : 
                                    <RiCloseFill className="   transition-transform w-10 h-6 text-white focus:outline-none"/>
                                    } 
                            </button>





                    <div className="text-3xl mb-2 ml-4">Hi, {'user'} 👋</div>
                    <div className="md:w-3/6 text-gray-200 text-base mb-1">Welcome to your devices management</div>
                </div>
                
        </div>
        </>
    )
}

export default Banner
