import React,{useContext, useState} from 'react'



import trackImg from '../assets/statics/NB-IoT-GIF.gif'
import GeofencingImg from '../assets/statics/geofencing.png'
import RouteImg from '../assets/statics/route_map.jpg'

import Card from '../components/Card'
import CardItem from'../components/CardItem'
import Timeline from '../components/Timeline'
import Map from '../components/Map'
import Search from '../components/Search'

import '../styles/components/Home.css'
import AppContext from '../context/AppContext'



const Home = () => {

    const {state} = useContext(AppContext)
    const {side_state} = state
  
    
    //const i =  Object.keys(side_state)[0]

   // const [state, setState] = useState({drawerPos: 1})

   /*const changeSideState = payload =>{
    setState({
        ...state,
        side_state:[...state.side_state, payload]
    });
}*/


    console.log("home",side_state[1]);

   // let drawerClass = [];
    let mainClass = [];
/*
    if (side_state === 1) {
     // drawerClass.push("drawerMin");
      mainClass.push("mainMin");
    } else if (side_state === 2) {
    //  drawerClass.push("drawerOpen");
      mainClass.push("mainOpen");
    } else {
      //drawerClass = [];
      mainClass = [];
    }*/
    if (side_state[1]) {
        mainClass.push("mainOpen");
    }else{
        mainClass.push("mainMin");
    }
    console.log(mainClass);

    return (
        
        
        <div className={mainClass.join(" ")}>


            <div className="main-container">
                <div className="main-items">
                    <Search/>
                </div>
                <div className="main-items">
                   <Map/>
                </div>
                <div className="main-items">
                    <Card/>
                </div>
                <div className="main-items">
                    <Timeline/>
                </div>


            </div>
        </div>
    )
}

export default Home