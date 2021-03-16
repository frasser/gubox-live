import React , { useContext} from 'react'
import {Link} from 'react-router-dom'
import Menu from '../assets/statics/menu_white.svg'
import UserIcon from '../assets/statics/user-icon.png'

import { MdDashboard,MdShowChart,
    MdGesture,MdMemory,
    MdGroup} from "react-icons/md";
import '../styles/components/Navbar.css'
import AppContext from '../context/AppContext'
//import {Nav} from "../styles/components/navbar"

const SIZE = "32px";
const Navbar =() =>{
    const {state, handleDrawer } = useContext(AppContext)

    const{side_state} = state
    /*console.log("navbar",side_state[1]);*/


      let drawerClass = [];
     

      if (side_state[1]) {
        drawerClass.push("drawerOpen");
      }else{
        drawerClass.push("drawerMin");
      }


    return (
        <div>
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
            
        </div>
    )
}

export default Navbar
