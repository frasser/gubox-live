import React from 'react'
import {FaFacebook,FaTwitter} from 'react-icons/fa'

const SIZE = "16px";
const MethodRegister =() => {
    return (
        <>
                            <div className="text-center mb-10"> 
                              
                                <p className="text-realgrey font-semibold">You are registering as:</p>
                            </div>
                            <div className="block">
                                <p className="text-realgrey font-semibold">pepo perez</p>
                                
                                <p className="text-realgrey font-semibold">correo@hotmail.com</p>
                                

                            </div>
                            <div className="block my-8  pb-4">
                                <h1 className="font-bold text-2xl text-gray-900">How do you prefer init session?</h1>
                                <div className="pt-2" >
                                    
                                    <button className="bg-blue-800 w-full font-semibold text-white text-base rounded-md my-1.5 mx-0 border-none px-3.5 py-2.5">
                                        
                                        <FaFacebook className="inline w-4 mr-2"/> 
                                        with my facebook account
                                    </button>
                                
                                </div>
                                <div className="pb-2">
                                    
                                    <button className="bg-blue-400 w-full font-semibold text-white text-base rounded-md my-1.5 mx-0 border-none px-3.5 py-2.5">
                                        <FaTwitter className="inline w-4 mr-2 -ml-4"/> 
                                        with my twitter account
                                    </button>
                                </div>
                                <div className="border-t-2 py-2">
                                <button className="btn-next w-full">with password</button>
                                </div>
                                
                                
                            </div>
            
        </>
    )
}

export default MethodRegister
