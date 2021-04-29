import React,{useContext, useState} from 'react'
import { MdMemory,MdKeyboardArrowRight} from "react-icons/md";
import { RiSignalTowerFill} from "react-icons/ri";
import { AiOutlineAlert } from "react-icons/Ai";
import Menu from '../assets/statics/menu_black.svg'




import Card from '../components/Card'

import Timeline from '../components/Timeline'
import Map from '../components/Map'
import Search from '../components/Search'

import '../styles/components/Home.css'
import AppContext from '../context/AppContext'

import Hero from '../components/Hero'

const SIZE = "32px";
const Home = () => {

    const {state,handleDrawer} = useContext(AppContext)
    const {side_state} = state

    
    
    //const i =  Object.keys(side_state)[0]

   // const [state, setState] = useState({drawerPos: 1})

   /*const changeSideState = payload =>{
    setState({
        ...state,
        side_state:[...state.side_state, payload]
    });
}*/


    

   // let drawerclassNameName = [];
    let className = [];
    let drawerClass = [];
/*
    if (side_state === 1) {
     // drawerclassNameName.push("drawerMin");
      className.push("mainMin");
    } else if (side_state === 2) {
    //  drawerclassNameName.push("drawerOpen");
      className.push("mainOpen");
    } else {
      //drawerclassNameName = [];
      className = [];
    }*/
    if (side_state[1]) {
        className.push("mainOpen");
        drawerClass.push("drawerOpen");
    }else{
        className.push("mainMin");
        drawerClass.push("drawerMin");
    }
  
    

    return (    
    <div className={className.join(" ")}>
    <div className="bg-blue-400 md:h-screen flex flex-col md:flex-row flex-auto ">
        <div className="flex  md:flex-col relative  w-full bg-red-400 shadow-xl  overflow-hidden">
                <div className=" flex flex-col h-36   absolute w-full  z-0 bg-bannerscolor  "></div>
                    <div className="flex flex-col overflow-y-auto h-full px-3 pb-2  md:pb-2 space-y-4">
                        <div className="flex flex-col z-10 pt-4 text-white bg-bannerscolor">


                            <button className="fixed p-2 text-white bg-white rounded-lg top-5 right-5 md:hidden w-11 h-8" onClick={handleDrawer}>
                            <img className="my-auto mr-0   transition-transform w-14 h-6 " src={Menu} alt="menu" />
                                <span className="sr-only">Open menu</span>
                            </button>
                            
                           
                            <div className="text-3xl mb-2 ml-4">Hi, {'user'} 👋</div>
                            <div className="md:w-3/6 text-gray-200 text-base mb-1">Welcome to your devices management</div>
                        </div>
                        <div className="border-0   z-10 shadow-md md:shadow-none text-sm ">

                            <Hero/>
                        </div>

                        <div className="border-0   h-screen w-full  md:w-full  shadow-md justify-center items-center">
                                   <Map/>
                        </div>


                </div>
            
        </div>
        
 



            <div className="w-full  md:w-3/12 bg-gray-200  text-secondary overflow-y-auto flex flex-col">
                <div className="h-28 md:h-64 flex-none border-b border-gray-400  flex flex-col">
                    <Search/>
                </div>

                <div className="flex  flex-row md:flex-col space-y-4 p-4">
                    <div className="flex flex-none h-64 bg-white border rounded p-4 justify-center items-center">
                    <Card/>
                    </div>

                </div>
                <div className="bg-blue-600 rounded-full w-16 h-16 m-4 flex items-center justify-center cursor-pointer shadow-xl">
                {'svg'}
            </div>
            </div>







        
</div>


</div>


    
    
    
    



    )
}

export default Home
/*
        <div classNameNameName={className.join(" ")}>


<Hero></Hero>
            <div classNameNameName="main-container">
                <div classNameNameName="main-items">
                    <Search

                    />
                </div>
                <div classNameNameName="main-items">
                   <Map/>
                </div>
                <div classNameNameName="main-items">
                    <Card/>
                </div>
                <div classNameNameName="main-items">
                    <Timeline/>
                </div>


            </div>

        </div>
        */

        /*    
        
        <div className="w-1/5 bg-gray-200 overflow-y-auto flex flex-col">
      <div className="h-64 flex-none border-b border-gray-400 flex flex-col">
        hi
      </div>

      <div className="flex flex-col space-y-4 p-4">
        <div className="flex flex-none h-64 bg-white border rounded p-4 justify-center items-center">
          card content
        </div>
        <div className="flex flex-none h-64 bg-white border rounded p-4 justify-center items-center">
          card content
        </div>
        <div className="flex flex-none h-64 bg-white border rounded p-4 justify-center items-center">
          card content
        </div>
      </div>
    </div>*/