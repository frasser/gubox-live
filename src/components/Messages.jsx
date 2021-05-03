import React from 'react'
import { MdKeyboardArrowRight} from "react-icons/md";

const Messages =()=>{
    return (
        <>
             <div className="container">
          <div className="flex flex-col  mx-auto p-2 text-blue-50 ">
          
           
            {/* USER MESSAGE //RIGHT */}
            <div className="flex flex-col   items-end  ">


                <div className="bg-blue-500  p-2 rounded-t-2xl rounded-bl-2xl my-4  shadow-md w-2/3 md:w-3/4 ml-2 md:ml-0 md:mr-1   box-border flex-wrap h-auto ">            
                        
                        <p className="leading-tight text-center">
                       { 'Buen dia, tengo problemas con mi cuenta' }
                        </p>
                </div>
                <div className="flex flex-col   items-center pr-1 ">
                    <span className="text-xs text-gray-200 text-opacity-50">{'6 mar.2021 12:08:56'}</span>
                </div>

            </div>
            {/* SUPPORT MESSAGE //LEFT */}
            <div className="flex flex-col   items-start  ">


                <div className="bg-gray-500  p-2 rounded-t-2xl rounded-br-2xl my-4  shadow-md w-2/3 md:w-3/4 ml-2  md:ml-1 box-border flex-wrap h-auto ">            
                        
                        <p className="leading-tight text-center">
                    { 'Buen dia, cuentame como podria ayudarte? ' }
                        </p>
                </div>
                <div className="flex flex-col   items-center pr-1 ml-1 ">
                    <span className="text-xs text-gray-200 text-opacity-50">{'6 mar.2021 12:08:56'}</span>
                </div>

            </div>

                    {/* USER MESSAGE //RIGHT */}
            <div className="flex flex-col   items-end  ">


                <div className="bg-blue-500  p-2 rounded-t-2xl rounded-bl-2xl my-4  shadow-md w-2/3 md:w-3/4 ml-2  md:ml-0 md:mr-1  box-border flex-wrap h-auto ">            
                        
                        <p className="leading-tight text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo similique enim molestias corrupti ab, voluptates vel id magni temporibus ratione illum saepe modi sunt libero est amet, sit exercitationem eaque!
                        </p>
                </div>
                <div className="flex flex-col   items-center pr-1 ">
                    <span className="text-xs text-gray-200 text-opacity-50">{'6 mar.2021 12:08:56'}</span>
                </div>

            </div>




            


          </div>

            <div className="flex flex-row h-8 border-t md:border-t-2 pt-1 border-gray-800">
                <div className="flex-row w-4/5 px-1">
                    <input type="text" className=" rounded-3xl border-1 border-gray-800 bg-gray-800  text-white focus:outline-none  focus:border-purple-400 px-4"  placeholder="Write a message"/>
                </div>
                <div className="flex-row w-1/5  pl-2 ">

                    
                    <button type="button" className="w-8 rounded-full text-purple-400 text-xl font-extrabold hover:bg-gray-900 focus:outline-none pb-1">{'>'}</button>
                    
                </div>


            </div>

        </div>

        </>
    )

}
export default Messages