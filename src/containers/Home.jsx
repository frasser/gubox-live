import React,{useContext, useState} from 'react'





import Card from '../components/Card'

import Timeline from '../components/Timeline'
import Map from '../components/Map'
import Search from '../components/Search'

import '../styles/components/Home.css'
import AppContext from '../context/AppContext'

import Hero from '../components/Hero'

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
    

    return (
        
        
        <div className={mainClass.join(" ")}>


<Hero></Hero>
            <div className="main-container">
                <div className="main-items">
                    <Search

                    />
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
