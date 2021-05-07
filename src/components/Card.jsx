import React from 'react'
import StateImg from '../assets/statics/movement.svg'







const  Card = (props) => {
    return (
        <>
           
                
                    
           <div className="flex flex-none h-24 md:h-32 bg-white border   rounded-lg shadow-lg p-0 mx-1  md:mx-0  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <div className="w-full h-full border-b-2 border-purple-400  rounded-lg  px-0.5  md:px-2 py-5  md:py-4">
                                    <div className="flex flex-row    md:p-2">
                                        <div className=" flex flex-row flex-wrap w-9/12 md:w-3/5 h-14 md:h-20  ">
                                            <div className="flex flex-col w-full">
                                            <h5 className="text-xl md:text-2xl text-gray-500 whitespace-pre-wrap">{props.value}<small className="text-xs opacity-50">{props.unity}</small></h5>
                                            <p className="flex flex-col text-xs md:text-sm text-gray-500 opacity-50">{props.time}{' '}{'minutes ago'}</p>
                                            </div>
                                        </div>
                                        
                                        <div className=" flex flex-row w-3/12 md:w-2/5 items-center   md:px-8  bg-blue-50 rounded-xl ">
                                           
                                            {props.icon}
                                            
                                        </div>
                                        
                        
                                    </div>
                                </div>
            </div>              
                    

        </>
    )
}

export default Card
/*<a href="#">
                        {children}
                    </a>*/