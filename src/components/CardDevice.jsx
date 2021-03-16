import React from 'react'
import DefaultPin from '../assets/statics/customHelmet2.png'
import '../styles/components/CardDevice.css'


function CardDevice(props) {
    return (
        <div className="Badge">
            <div className="Badge__header">
                {/*<img src={confLogo} 
                   alt="logo de la conferencia" 
    />*/}
            </div>
            <div className="Badge__section-name">
                <div>
                    <img className="Badge_pin" src={DefaultPin} 
                    alt="pin" 
                    />
                 </div>
                 <div className="Badge_name">
                    <h1>
                        {props.firstName} {/*<br/>{props.lastName}*/}
                    </h1>
                  </div>
                  
            </div>

            <div className="Badge__section-info">
                {/*<h3 className="cb">{props.jobTitle}</h3>*/}
                <div>{props.twitter}</div>
            </div>
            <div className="Badge__footer">
                
            </div>

        </div>
    )
}

export default CardDevice
