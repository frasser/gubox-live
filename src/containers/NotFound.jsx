import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import NotFoundImage from '../assets/statics/notFound.jpg'
import AppContext from '../context/AppContext'

import '../styles/containers/NotFound.css'

function NotFound() {
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
            <div className="Found">
                <div className="Found__col">

                    <Link  to="/">
                        <button className="btn-return" type="button">
                        Return 
                        </button>
                    
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default NotFound
