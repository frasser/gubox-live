import React from 'react'

const TypingBox = () => {
    return (
        <div className="flex flex-row h-8 border-t md:border-t-2 pt-1 border-gray-800 ">
            <div className="flex-row w-4/5 px-1">
                <input type="text" className=" rounded-3xl border-1 border-gray-800 bg-gray-800  text-white focus:outline-none  focus:border-purple-400 px-4"  placeholder="Write a message"/>
            </div>
            <div className="flex-row w-1/5  pl-2 ">

                
                <button type="button" className="w-8 rounded-full text-purple-400 text-xl font-extrabold hover:bg-gray-900 focus:outline-none pb-1">{'>'}</button>
                
            </div>


        </div>
    )
}

export default TypingBox
