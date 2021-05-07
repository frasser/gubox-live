import React , { useContext,useState, useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom'

import UserIcon from '../assets/statics/user-icon.png'
import LiveLogo from '../assets/statics/gubox-live.svg'
import "../styles/components/Navbar.css"

import { MdDashboard,MdShowChart,
    MdGesture,MdMemory,
    MdGroup,MdInfo} from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import {RiMenuLine,RiMenuFoldFill,RiMenuUnfoldFill} from 'react-icons/ri'
    

import AppContext from '../context/AppContext'
//import {Nav} from "../styles/components/navbar"

const SIZE = "32px";
const Navbar =() =>{
    const {state, handleDrawer } = useContext(AppContext)

    const{side_state} = state

    

    const [isLogin, setIsLogin] = useState(false)

    //let component = null

    let location = useLocation();
    useEffect(() => {
        //setChecked(!checked)
       
        if(location.pathname =='/login'){
           
        setIsLogin(true)
        console.log('esta en el /login',isLogin);
        }else{
            setIsLogin(false) 
        }

     /* ga.send(["pageview", location.pathname]);*/
    
    }, [location]);
    /*console.log("navbar",side_state[1]);*/


      let drawerClass = [];
     

      if (side_state[1]) {
        drawerClass.push("drawerOpen");
      }else{
        drawerClass.push("drawerMin");
      }

 

    return (
        <div className="flex  absolute">

                
                    
                    <aside className={`overflow-x-hidden fixed top-0 left-0 bottom-0 z-30 bg-bannerscolor rounded-tr-3xl rounded-br-3xl   ${!side_state[1]? 'md:w-16 w-0' : 'w-44'}  `}>
                       
                            <div className={` flex flex-col  focus:outline-none relative w-full  ${!side_state[1]? '': '' }`}>
                                                <button className={`transform motion-safe hover:scale-125 hidden md:block md:fixed text-center items-center  focus:outline-none  rounded-r-full top-5   bg-gray-600 hover:bg-gray-700 w-10 h-10 `} onClick={handleDrawer}>
                                                {!side_state[1]? 
                                                <RiMenuUnfoldFill className="py-0.5  w-10 h-6  text-purple-400 " />
                                                : 
                                                <RiMenuFoldFill className="py-0.5  w-10 h-6  text-purple-400 "/>
                                                } 
                                                </button>
                                            
                                                
                            </div> 
                                






                            
                                    <ul className="md:pt-2 md:mt-20 list-none border-t border-gray-800 py-10 md:py-0 no-underline    ">
                                        <Link to="/" >
                                        <li className="inline-flex items-center py-3 pr-0 pl-4 rounded-r-full border-l-4 border-bannerscolor  hover:bg-gray-800 hover:border-purple-400">
                                            <MdDashboard className="md:mr-4  text-gray-100 " size={SIZE}/>
                                            <span className="font-semibold mx-2 text-gray-100">Dashboard</span>                       
                                        </li>
                                        </Link>
                                        <Link to="/Users">
                                        <li className="inline-flex items-center py-3 pr-0 pl-4 rounded-r-full border-l-4 border-bannerscolor  hover:bg-gray-800 hover:border-purple-400">                    
                                            <MdGroup className="md:mr-4 text-gray-100" size={SIZE} />
                                            <span className="font-semibold mx-2 text-gray-100">Users</span>                    
                                        </li>
                                        </Link>
                                        <Link to="/Devices">
                                        <li className="inline-flex items-center py-3 pr-0 pl-4 rounded-r-full border-l-4 border-bannerscolor  hover:bg-gray-800 hover:border-purple-400">
                                            <MdMemory className="md:mr-4 text-gray-100" size={SIZE}/>
                                            <span className="font-semibold mx-2 text-gray-100">Devices</span>
                                        </li>
                                        </Link>
                                        <Link to="/charts">
                                            <li className="inline-flex items-center py-3 pr-0 pl-4 rounded-r-full border-l-4 border-bannerscolor  hover:bg-gray-800 hover:border-purple-400">
                                                <MdShowChart className="md:mr-4 text-gray-100" size={SIZE}>rutas</MdShowChart>
                                                <span className="font-semibold mx-2 text-gray-100">Charts</span>
                                            </li>
                                        </Link>
                                        <Link to="/routes">
                                            <li className="inline-flex items-center py-3 pr-0 pl-4 rounded-r-full border-l-4 border-bannerscolor  hover:bg-gray-800 hover:border-purple-400">
                                                <MdGesture className="md:mr-4 text-gray-100" size={SIZE}>rutas</MdGesture>
                                                <span className="font-semibold mx-2 text-gray-100">Rutas</span>
                                            </li>
                                        </Link>
                                        <div className="mt-36">
                                        <Link to="/info">
                                            <li className="inline-flex items-center py-3 pr-0 pl-4 rounded-r-full border-l-4 border-bannerscolor  hover:bg-gray-800 hover:border-purple-400">
                                                <MdInfo className="md:mr-4 text-gray-100" size={SIZE}>info</MdInfo>
                                                <span className="font-semibold mx-2 text-gray-100">Info</span>
                                            </li>
                                        </Link>
                                        <Link to="/login">
                                            <li className="inline-flex items-center py-3 pr-0 pl-4 rounded-r-full border-l-4 border-bannerscolor  hover:bg-gray-800 hover:border-red-700 ">
                                                <BiLogOut className="md:mr-4 text-gray-100 " size={SIZE}>logout</BiLogOut>
                                                <span className="font-semibold mx-2 text-gray-100">Logout</span>
                                            </li>
                                        </Link>
                                        </div>
                                    </ul>
                                
                                    

                                    
                        
            
                    </aside>

 
        </div>
    )



}

export default Navbar
