import React from 'react'
import StateImg from '../assets/statics/movement.svg'




const  Card = (props) => {
    return (
        <>
           
                
                    
           <div className="flex flex-none h-32 bg-white border rounded-lg shadow-lg p-4 justify-center items-center mx-1 md:mx-0  hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                <div className="flex flex-row ">
                                    <div className="p-2">
                                    <h6 className="text-2xl text-gray-500">{props.value}<small className="text-xs opacity-50">{' '}{props.unity}</small></h6>
                                    <p className="text-sm text-gray-500 opacity-50">{props.time}{' '}{'minutes ago'}</p>
                                    </div>
                                    <div className=" items-center pt-3 ">
                                        <img src={props.icon} alt="stateImg" className=" w-10 h-10"/>
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