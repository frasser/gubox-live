import React, { useContext, useRef, useEffect, useState } from 'react'
import { MdMemory, MdKeyboardArrowRight, MdSearch } from "react-icons/md";
import { RiSignalTowerFill } from "react-icons/ri";
import { AiOutlineAlert } from "react-icons/Ai";
import { HiArrowCircleUp, HiArrowCircleDown } from "react-icons/hi"

import { RiMenuLine, RiCloseFill } from 'react-icons/ri'
import StateImg from '../assets/statics/movement.svg'
import Temperature from '../assets/statics/high-temperature.svg'


import Speed3 from '../assets/statics/speed-meter.svg'
import Battery from '../assets/statics/battery-status.svg'



import { GiBattery75 } from 'react-icons/gi'
import { RiDragMoveLine } from 'react-icons/ri'
import { IoMdSpeedometer } from 'react-icons/io'
import { FaTemperatureHigh } from 'react-icons/fa'






import Card from '../components/Card'


import Map from '../components/Map'
import Search from '../components/Search'

import '../styles/components/Home.css'
import AppContext from '../context/AppContext'

import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import ToolSide from '../components/ToolSide'



const SIZE = "32px";
const Home = () => {

    const { state, handleDrawer } = useContext(AppContext)
    const { side_state } = state





    const [containerState, setContainerState] = useState({
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    })



    const [toggleDiv, setToggleDiv] = useState(false)
    const cardsRef = useRef()

    //useEffect(() => {

    //cardsRef.current.scrollIntoView({block: 'center', behavior: 'smooth' }) ,

    //  cardsRef.current.scrollTo(screen.width / 2, 0);

    //}, []);


    const handleToggle = () => {
        setToggleDiv(!toggleDiv)

    }

    const handleOpenModal = e => {
        setContainerState({ modalIsOpen: true });
    };

    const handleCloseModal = e => {
        setContainerState({ modalIsOpen: false });
    };





    let className = [];
    let drawerClass = [];


    if (side_state[1]) {
        className.push("mainOpen");
        drawerClass.push("drawerOpen");
    } else {
        className.push("mainMin");
        drawerClass.push("drawerMin");
    }

     if(toggleDiv){
        className.push("md:mr-80");
    }else{
        className.push("mr-0");
    }




    //const titleElement = document.getElementById('cards')
    //titleElement.scrollIntoView({ behavior: 'smooth' })




    return (
        <div className={className.join(" ")}>
            <div className=" md:h-screen flex flex-col md:flex-row flex-auto bg-gray-100  ">
                <div className="flex flex-col md:flex-col relative  w-full  shadow-xl  overflow-hidden ">
                    <div className=" h-36   absolute w-full   md:ml-1   z-0 bg-gradient-to-b from-gray-900 to-bannerscolor md:rounded-l-3xl "></div>
                    <div className="flex flex-col overflow-y-auto h-full px-3 pb-2   md:pb-2 space-y-4 ">
                        <div className="flex flex-col z-20 pt-4 text-white ">


                            <button className=" fixed  text-white bg-purple-400 rounded-full top-5 right-5 md:hidden w-10 h-10 focus:outline-none" onClick={handleDrawer}>
                                {!side_state[1] ?
                                    <RiMenuLine className="  w-10 h-6 text-white " />
                                    :
                                    <RiCloseFill className="   w-10 h-6 text-white " />
                                }
                            </button>

                            <div>
                                {/*<SearchBar
                                    onOpenModal={handleOpenModal}
                                    onClose={handleCloseModal}
                                    modalIsOpen={containerState.modalIsOpen}
                                />*/}
                            </div>



                            <div className="text-3xl mb-2 ml-4">Hi, {'user'} 👋</div>
                            <div className="md:w-3/6 text-gray-200 text-base mb-1">Welcome to your devices management</div>
                        </div>
                        <div className="border-0   z-0 shadow-md md:shadow-none text-sm ">

                            <Hero />

                        </div>

                        <div className="border-0  h-96 md:h-screen w-full  rounded-xl bg-white   shadow-md justify-center items-center">
                            <Map />
                        </div>


                    </div>

                </div>





                {//<div className="w-full  md:w-2/6 bg-text-gray-500 bg-yellow-500 relative overflow-y-auto flex flex-col">
 } {/*<div className="h-16 md:h-36 flex-none md:mb-2 bg-red-300  p-1 md:pt-0.5  flex flex-col  ">

                        <Search />

                            </div>*/}

                    {/*<div className={`flex    sm:hide-scroll-bar md:overflow-x-hidden md:flex-col md:space-y-4 p-4 mx-1 mt-0 mb-12 md:mb-0  md:mx-0 md:pb-14 ${toggleDiv ? 'overflow-x-hidden' : ' overflow-x-scroll '}`} ref={cardsRef}>

                        <Card
                            value={'Moving'}
                            unity={''}
                            time={'5'}
                            icon={<RiDragMoveLine className="w-8 h-6  md:w-10 md:h-8 text-purple-400" />}
                        />


                        <Card
                            value={'30'}
                            unity={'K/H'}
                            time={'3'}
                            icon={<IoMdSpeedometer className="w-8 h-6  md:w-10 md:h-8 text-purple-400" />}
                        />


                        <Card
                            value={'18'}
                            unity={'°C'}
                            time={'5'}
                            icon={<FaTemperatureHigh className="w-8 h-6 md:w-10 md:h-8 text-purple-400" />}
                        />


                        <Card
                            value={'3.2'}
                            unity={'V'}
                            time={'5'}
                            icon={<GiBattery75 className="w-8 h-6  md:w-10 md:h-8 text-purple-400" />}
                        />


                        </div>*/}
                            <button className="fixed text-white bg-purple-400   bottom-10 right-0  md:top-1/4 rounded-l-full rounded-t-full w-10 h-10  md:w-12 md:h-12 focus:outline-none  transform motion-safe hover:scale-110" onClick={handleToggle}>
                                {
                                    !toggleDiv 
                                    ?
                                    <HiArrowCircleUp className="w-10 h-6  md:w-12 md:h-8 text-white" />
                                    :
                                    <HiArrowCircleDown  className="w-10 h-6   md:w-12 md:h-8 text-white " />
                                }
                            </button>
                        
                           
                        <div className="flex  absolute">
                            <aside className={`overflow-x-hidden fixed top-0 right-0 bottom-0 z-30 bg-bannerscolor rounded-tl-3xl md:rounded-tl-none rounded-bl-3xl   ${!toggleDiv? 'w-0' : 'w-72 md:w-80'}  `}>

                                <ToolSide 
                                    handle={handleToggle}
                                    toggle={toggleDiv
                                }/>
            
                            </aside>
                        </div>

               {// </div>
}








            </div>


        </div>









    )
}

export default Home
