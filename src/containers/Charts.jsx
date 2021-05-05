import React,{useState,useContext} from 'react'
import AppContext from '../context/AppContext'

import Banner from '../components/Banner'

const Charts = () => {

    const {state} = useContext(AppContext)
    const {side_state} = state
  
    let mainClass = [];
  
    if (side_state[1]) {
        mainClass.push("mainOpen");
    }else{
        mainClass.push("mainMin");
    }

    return (
        <div className={mainClass.join(" ")}>
        <Banner/>
            
        </div>
    )
}

export default Charts
