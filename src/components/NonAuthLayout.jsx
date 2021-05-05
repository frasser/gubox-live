import React from 'react'

const NonAuthLayout=({children})=> {
    return (
        <>
        <header className="md:hidden md:w-full  bg-gradient-to-b from-gray-900 to-bannerscolor px-4 py-4 text-white items-center relative justify-between "> 
        <div className="flex text-xl font-bold tracking-wider space-x-2 items-center justify-center mx-auto">
         <span> Guboxlive</span>{" "}
        </div>
         
        </header>   
        {children}
      </>
    )
}

export default NonAuthLayout
