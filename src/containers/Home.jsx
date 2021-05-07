import React,{useContext,useRef, useEffect, useState} from 'react'
import { MdMemory,MdKeyboardArrowRight,MdSearch} from "react-icons/md";
import { RiSignalTowerFill} from "react-icons/ri";
import { AiOutlineAlert } from "react-icons/Ai";
import {HiArrowCircleUp,HiArrowCircleDown} from "react-icons/hi"

import {RiMenuLine,RiCloseFill} from 'react-icons/ri'
import StateImg from '../assets/statics/movement.svg'
import Temperature from '../assets/statics/high-temperature.svg'


import Speed3 from '../assets/statics/speed-meter.svg'
import Battery from '../assets/statics/battery-status.svg'



import {GiBattery75} from 'react-icons/gi'
import {RiDragMoveLine} from 'react-icons/ri'
import {IoMdSpeedometer} from 'react-icons/io'
import {FaTemperatureHigh} from 'react-icons/fa'






import Card from '../components/Card'

import Timeline from '../components/Timeline'
import Messages from '../components/Messages'
import Map from '../components/Map'
import Search from '../components/Search'

import '../styles/components/Home.css'
import AppContext from '../context/AppContext'

import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'

function useBoxProgress(){
    const [currentStep,setCurrentStep]=useState(0);

    function timeLineRender(){
        setCurrentStep(0);
    }
    function messagesRender(){
        setCurrentStep(1)
    }

    return [currentStep,timeLineRender,messagesRender]
}

const SIZE = "32px";
const Home = () => {

    const {state,handleDrawer} = useContext(AppContext)
    const {side_state} = state
    const steps =[<Timeline/>,<Messages/>];
    let isFirst = currentStep === 0;
    const [currentStep, timeLineRender, messagesRender] = useBoxProgress();
    



    const [containerState, setContainerState] = useState({    loading:true,
        error:null,
        data: undefined,
        modalIsOpen:false})
    
 

    const [toggleDiv,setToggleDiv] = useState(false)
    const cardsRef = useRef()

    useEffect(() => {    
           
            //cardsRef.current.scrollIntoView({block: 'center', behavior: 'smooth' }) ,
            
            cardsRef.current.scrollTo( screen.width/2,0);

            }, []);

    
    const handleToggle =() =>{
        setToggleDiv(!toggleDiv)
      
    }

    const handleOpenModal = e =>{
        setContainerState({modalIsOpen: true});
      };
      
      const handleCloseModal = e =>{
        setContainerState({modalIsOpen: false});
      };

 

    

    let className = [];
    let drawerClass = [];
    

    if (side_state[1]) {
        className.push("mainOpen");
        drawerClass.push("drawerOpen");
    }else{
        className.push("mainMin");
        drawerClass.push("drawerMin");
    }




    //const titleElement = document.getElementById('cards')
    //titleElement.scrollIntoView({ behavior: 'smooth' })

  
    

    return (    
    <div className={className.join(" ")}>
    <div className=" md:h-screen flex flex-col md:flex-row flex-auto ">
        <div className="flex  md:flex-col relative  w-full bg-gray-100 shadow-xl  overflow-hidden">
                <div className=" flex flex-col h-36   absolute w-full mt-0.5 md:mx-0.5 rounded-3xl z-0 bg-gradient-to-b from-gray-900 to-bannerscolor  "></div>
                    <div className="flex flex-col overflow-y-auto h-full px-3 pb-2  md:pb-2 space-y-4">
                        <div className="flex flex-col z-20 pt-4 text-white ">

                        
                            <button className=" fixed  text-white bg-purple-400 rounded-full top-5 right-5 md:hidden w-10 h-10 focus:outline-none" onClick={handleDrawer}>
                                    {!side_state[1]? 
                                    <RiMenuLine className="  w-10 h-6 text-white " />
                                    : 
                                    <RiCloseFill className="   w-10 h-6 text-white "/>
                                    } 
                            </button>
                           
                            <div>
                            <SearchBar
                                                          onOpenModal={handleOpenModal} 
                                                          onClose={handleCloseModal}
                                                          modalIsOpen={containerState.modalIsOpen}
                            />
                            </div>
                           
                         
                           
                            <div className="text-3xl mb-2 ml-4">Hi, {'user'} 👋</div>
                            <div className="md:w-3/6 text-gray-200 text-base mb-1">Welcome to your devices management</div>
                        </div>
                        <div className="border-0   z-0 shadow-md md:shadow-none text-sm ">

                            <Hero/>

                        </div>

                        <div className="border-0  h-96 md:h-screen w-full p-1 rounded-xl bg-white  md:w-full  shadow-md justify-center items-center">
                                   <Map/>
                        </div>


                    </div>
            
        </div>
        
 



            <div className="w-full  md:w-2/6 bg-gray-100  text-gray-500 relative overflow-y-auto flex flex-col">
                <div className="h-16 md:h-36 flex-none md:mb-2  p-1 md:pt-0.5  flex flex-col  ">
                
                <Search/>

                </div>

                <div className={`flex    sm:hide-scroll-bar md:overflow-x-hidden md:flex-col md:space-y-4 p-4 mx-1 mt-0 mb-12 md:mb-0  md:mx-0 md:pb-14 ${toggleDiv ? 'overflow-x-hidden' : ' overflow-x-scroll '}`} ref={cardsRef}>
                   
                    <Card
                        value={'Moving'}
                        unity={''}
                        time={'5'}
                        icon= {<RiDragMoveLine className="w-8 h-6  md:w-10 md:h-8 text-purple-400"/>}
                    />
                    
                    
                    <Card
                                            value={'30'}
                                            unity={'K/H'}
                                            time={'3'}
                                            icon={<IoMdSpeedometer className="w-8 h-6  md:w-10 md:h-8 text-purple-400"/>}
                    />
                    
                    
                    <Card
                                            value={'18'}
                                            unity={'°C'}
                                            time={'5'}
                                            icon={<FaTemperatureHigh className="w-8 h-6 md:w-10 md:h-8 text-purple-400"/>}
                    />
                    
                    
                    <Card
                                            value={'3.2'}
                                            unity={'V'}
                                            time={'5'}
                                            icon={<GiBattery75 className="w-8 h-6  md:w-10 md:h-8 text-purple-400"/>}
                    />
                    

                </div>
                <div className="flex   shadow-2xl  absolute  w-full bottom-0 overflow-y-hidden z-20 md:overflow-x-hidden">
                    <div className={`flex flex-col w-screen   rounded-t-xl border-l-2   mx-2 md:ml-2 md:mr-4 focus:shadow-outline bg-gradient-to-b from-gray-900 to-bannerscolor shadow-2xl ${toggleDiv ? 'boxOpen' : 'boxMin'}`}>
                        <div className="h-2 mx-8 border-b-2 pt-1 border-purple-400  ">
                            
                        </div>
                        <div className="flex flex-col  pt-1  justify-center center align-middle justify-items-center items-center  ">
                            <button type="button" onClick={handleToggle} className=" rounded-full transform motion-safe hover:scale-110 p-1 focus:outline-none">
                                {
                                    toggleDiv 
                                    ?
                                    <HiArrowCircleDown className="w-8 h-8  text-purple-400   transition-shadow duration-300 ease-in-out cursor-pointer  " />
                                    :
                                    <HiArrowCircleUp className="w-8 h-8  text-purple-400  transition-shadow duration-300 ease-in-out cursor-pointer  " />
                                }
                                
                            </button>
                            <div className="flex flex-row w-full">
                                <div className="flex  w-1/2 self-center text-center center items-center justify-end mr-3">
                            
                                    <button type="button" className={`text-xs  font-semibold w-auto px-2 py-1 rounded-md  hover:text-purple-400 hover:bg-gray-900 focus:outline-none active:bg-gray-900 active:text-purple-400 ${!currentStep > 0 ? 'bg-gray-900 text-purple-400' : 'bg-gray-800 text-gray-500'}`} onClick={()=>timeLineRender()}>Timeline</button>
                                </div>
                                <div className="flex w-1/2">
                                    <button type="button" className={`text-xs text-gray-500 font-semibold w-auto px-2 py-1 rounded-md  bg-gray-800 hover:text-purple-400 hover:bg-gray-900 focus:outline-none  visited:text-purple-400 ${!currentStep > 0 ? 'bg-gray-800 text-gray-500' : 'bg-gray-900 text-purple-400'}`} onClick={()=>messagesRender()}>Messages</button>
                                </div>

                            </div>
                            <div className="flex flex-col  h-60 md:h-72 w-full px-2 md:px-1  md:-mr-4  ">
                                <div className="mt-2 md:pr-0 w-full h-full bg-gray-700 overflow-y-scroll rounded-lg">
                                    {steps[currentStep]}
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>







        
</div>


</div>


    
    
    
    



    )
}

export default Home
