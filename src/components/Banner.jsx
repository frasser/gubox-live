import React,{useContext} from 'react'
import AppContext from '../context/AppContext'
import Menu from '../assets/statics/menu_black.svg'
const Banner=()=> {
    const {state,handleDrawer} = useContext(AppContext)
    return (
        <>
        <div className="flex flex-col h-36   absolute w-full  z-0 bg-gradient-to-b from-gray-900 to-bannerscolor"></div>
             <div className="flex flex-col overflow-y-auto h-full px-3 pb-2  md:pb-2 space-y-4">
                <div className="flex flex-col z-20 pt-4 text-white   ">

                        
                    <button className=" fixed p-2 text-white bg-purple-400 rounded-lg top-5 right-5 md:hidden w-11 h-8" onClick={handleDrawer}>
                    <img className="my-auto mr-0   transition-transform w-14 h-6 " src={Menu} alt="menu" />
                        <span className="sr-only">Open menu</span>
                    </button>





                    <div className="text-3xl mb-2 ml-4">Hi, {'user'} 👋</div>
                    <div className="md:w-3/6 text-gray-200 text-base mb-1">Welcome to your devices management</div>
                </div>
            
        </div>
        </>
    )
}

export default Banner
