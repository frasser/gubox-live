import React , { useContext,useState, useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom'
import Menu from '../assets/statics/menu_black.svg'
import UserIcon from '../assets/statics/user-icon.png'
import LiveLogo from '../assets/statics/gubox-live.svg'


import { MdDashboard,MdShowChart,
    MdGesture,MdMemory,
    MdGroup,MdInfo} from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
    
import '../styles/components/Navbar.css'
import AppContext from '../context/AppContext'
//import {Nav} from "../styles/components/navbar"

const SIZE = "26px";
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

      /*if(!isLogin){
          component = (
            <>
                <header className="navbar"> 
                    {" "}
                    
                    <img className="navbar_img" src={Menu} alt="gubox logo" onClick={handleDrawer}/>
                    {" "}
                    <h3> Guboxlive</h3>{" "}
                        <div className="header__menu">
                            <div className="header__menu--profile">
                                <img src={UserIcon} alt="user icon"/>
                            </div>
                        </div>
                </header> 
                      <aside className={drawerClass.join(" ")}>
                            <ul>
                                <Link to="/" >
                                <li>
                                    <MdDashboard className="aside_img" size={SIZE}/>
                                    <span>Dashboard</span>                       
                                </li>
                                </Link>
                                <Link to="/Users">
                                <li>                    
                                    <MdGroup className="aside_img" size={SIZE} />
                                    <span>Users</span>                    
                                </li>
                                </Link>
                                <Link to="/Devices">
                                <li>
                                    <MdMemory className="aside_img" size={SIZE}/>
                                    <span>Devices</span>
                                </li>
                                </Link>
                                <Link to="/charts">
                                    <li>
                                        <MdShowChart className="aside_img" size={SIZE}>rutas</MdShowChart>
                                        <span>Charts</span>
                                    </li>
                                </Link>
                                <Link to="/routes">
                                    <li>
                                        <MdGesture className="aside_img" size={SIZE}>rutas</MdGesture>
                                        <span>Rutas</span>
                                    </li>
                                </Link>
                            </ul>
                        </aside>
        
              </>
          )
      }else{
          component = (
              <>
                <header className="navbar"> 
 
                 <h3> Guboxlive</h3>{" "}
                    <div className="header__menu">
                        <div className="header__menu--profile">
                            <img src={UserIcon} alt="user icon"/>
                        </div>
                    </div>
            </header>   
              </>
          )
      }*/
      
/*            {isLogin? 

            
            ''
            
            
            : console.log('negativo')}*/

    return (
        <div>

                

                          <aside className={drawerClass.join("")}>
                          <button className="hidden md:block md:fixed p-2 text-white bg-purple-400 rounded-lg top-5  left-3 w-11 h-8" onClick={handleDrawer}>
                            <img className="my-auto mr-0   transition-transform w-14 h-6 " src={Menu} alt="menu" />
                                <span className="sr-only">Open menu</span>
                            </button>
                            
                                <ul className="md:pt-2 md:mt-20 list-none p-0 no-underline  ">
                                    <Link to="/" >
                                    <li>
                                        <MdDashboard className="md:mr-4 " size={SIZE}/>
                                        <span>Dashboard</span>                       
                                    </li>
                                    </Link>
                                    <Link to="/Users">
                                    <li>                    
                                        <MdGroup className="md:mr-4" size={SIZE} />
                                        <span>Users</span>                    
                                    </li>
                                    </Link>
                                    <Link to="/Devices">
                                    <li>
                                        <MdMemory className="md:mr-4" size={SIZE}/>
                                        <span>Devices</span>
                                    </li>
                                    </Link>
                                    <Link to="/charts">
                                        <li>
                                            <MdShowChart className="md:mr-4" size={SIZE}>rutas</MdShowChart>
                                            <span>Charts</span>
                                        </li>
                                    </Link>
                                    <Link to="/routes">
                                        <li>
                                            <MdGesture className="md:mr-4" size={SIZE}>rutas</MdGesture>
                                            <span>Rutas</span>
                                        </li>
                                    </Link>
                                    <div className="mt-36">
                                    <Link to="/info">
                                        <li >
                                            <MdInfo className="md:mr-4" size={SIZE}>info</MdInfo>
                                            <span>Info</span>
                                        </li>
                                    </Link>
                                    <Link to="/login">
                                        <li>
                                            <BiLogOut className="md:mr-4" size={SIZE}>logout</BiLogOut>
                                            <span>Logout</span>
                                        </li>
                                    </Link>
                                    </div>
                                </ul>
                            </aside>
            
 
        </div>
    )



}

export default Navbar
