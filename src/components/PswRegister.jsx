import React from 'react'

const PswRegister =() =>{
    return (
        <>
                    
                <div className="pt-2" >
                
                <label htmlFor="" className="text-xs font-semibold px-1">Create your password</label>
                <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                        <input type="password" className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Minimum (8) characters"/>
                </div>
            
                </div>
            <div className="pb-2">
                
                <label htmlFor="" className="text-xs font-semibold px-1">Confirm your password</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                            <input type="password" className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
                    </div>
            </div>


            
        
        </>
    )
}

export default PswRegister
