import React , { useContext} from 'react'
import Logo from '../assets/statics/twitter-icon.png'
import UserIcon from '../assets/statics/user-icon.png'
import { MdDashboard,MdAssessment,MdGroupWork,MdRoom,
    MdSettingsInputAntenna,MdSupervisorAccount,MdLocationOn,
    MdGesture,MdGpsFixed,MdMemory,MdFilterCenterFocus,
    MdTexture,MdPinDrop, MdNearMe, MdMap,MdMyLocation,
    MdGroup,MdPeopleOutline,MdLineWeight} from "react-icons/md";
import '../styles/components/Navbar.css'
import AppContext from '../context/AppContext'
//import {Nav} from "../styles/components/navbar"

const SIZE = "32px";
const Navbar =() =>{
    const {state, handleDrawer } = useContext(AppContext)

    const{side_state} = state
    console.log("navbar",side_state[1]);
   // const [state, setState] = useState({drawerPos: 1})

    /*const state = {
        drawerPos: 1
      };*/
   /*const handleDrawer = () => {

        if (state.drawerPos < 2) {
          setState((state) => ({
            drawerPos: state.drawerPos + 1
            
          }));
          console.log("navbar",state);
          changeSideState(state)
        } else {
          setState({
            drawerPos: 0
          });
          console.log("navbar",state);
          changeSideState(state)
        }
      };*/

      let drawerClass = [];
      //let mainClass = [];

      if (side_state[1]) {
        drawerClass.push("drawerOpen");
      }else{
        drawerClass.push("drawerMin");
      }
      /*
      if (state.drawerPos === 1) {
        drawerClass.push("drawerMin");
        //mainClass.push("mainMin");
      } else if (state.drawerPos === 2) {
        drawerClass.push("drawerOpen");
        //mainClass.push("mainOpen");
      } else {
        drawerClass = [];
        //mainClass = [];
      }*/


    return (
        <div>
            <header className="navbar"> 
                {" "}
                <img className="navbar_img" src={Logo} alt="gubox logo" onClick={handleDrawer}/>
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
                    <li>
                        <MdDashboard className="aside_img" size={SIZE}/>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <MdGroup className="aside_img" size={SIZE} />
                        <span>Users</span>
                    </li>
                    <li>
                        <MdMemory className="aside_img" size={SIZE}/>
                        <span>Devices</span>
                    </li>
                    <li>
                        <MdGesture className="aside_img" size={SIZE}>rutas</MdGesture>
                        <span>Rutas</span>
                    </li>
                </ul>
            </aside>
            
        </div>
    )
}

export default Navbar
