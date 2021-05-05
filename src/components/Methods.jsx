import React from 'react'
import {FaFacebook,FaTwitter} from 'react-icons/fa'
const Methods =() =>{
    return (
        <>
        <h1 className="font-bold text-2xl text-gray-900 ">How do you prefer init session?</h1>
        <div className="pt-2" >
            
            <button className="btn-faceboock w-full font-semibold">
                
                <FaFacebook className="inline w-4 mr-2 "/> 
                with my facebook account
            </button>
        
        </div>
        <div className="pb-0">
            
            <button className="btn-twitter w-full font-semibold ">
                <FaTwitter className="inline w-4 mr-2 -ml-4"/> 
                with my twitter account
            </button>
        </div>

        
        
    </>
    )
}

export default Methods
