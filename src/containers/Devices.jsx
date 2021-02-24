import React,{useContext} from 'react'
import TableDevices from '../components/TableDevices'
import AppContext from '../context/AppContext'

const Devices = () => {
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
           <h1>Devices</h1> 
            <TableDevices/>
        </div>
    )
}

export default Devices
