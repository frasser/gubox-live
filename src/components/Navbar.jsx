import React , { useContext,useState, useEffect} from 'react'
import {Link,useLocation} from 'react-router-dom'
import Menu from '../assets/statics/menu_white.svg'
import UserIcon from '../assets/statics/user-icon.png'
import LiveLogo from '../assets/statics/gubox-live.svg'

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
             
            {!isLogin ?
            
            (
                <>
                    <header className="navbar"> 
                        {" "}
                        
                        <img className="navbar_img" src={Menu} alt="gubox logo" onClick={handleDrawer}/>
                        {" "}
                        <div className="navbar_logo">
                        <img className="logo_img" src={LiveLogo} alt="live logo"/>{" "}
                        </div>
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


              :

        
              (
                <>
                  <header className="navbar"> 
                    
                   <h3> Guboxlive</h3>{" "}
                    
                   
                    </header>   
                </>
            )
        
        
        
        
        }
        

        

        
        


        </div>
    )



}

export default Navbar
