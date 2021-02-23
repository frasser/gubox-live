import React from 'react'
import StateImg from '../assets/statics/movement.svg'
import Temperature from '../assets/statics/high-temperature.svg'
import Or from '../assets/statics/temperature_orange.svg'
import Re from '../assets/statics/temperature_red.svg'

import Speed1 from '../assets/statics/spe.svg'

import Speed3 from '../assets/statics/speed-meter.svg'
import Speed4 from '../assets/statics/speedo.svg'

import '../styles/components/Card.css'


const  Card = ({children}) => {
    return (
        <>
           
                <div className="card-container">
                    <div className="card-items">
                            <div className="card  widget-chart  text-left card-btm-border card-shadow-success border-success">
                                <div className="card-wraper">
                                    <div className="article-details">
                                    <h6 className="post-title fc-size">{'Moving'}<small className="opacity-5">{' '}</small></h6>
                                    <p className="card-subtexto">{'5'}{' '}{'minutes ago'}</p>
                                    </div>
                                    <div className="post-image ">
                                        <img src={StateImg} alt="stateImg" className="svg"/>
                                    </div>
                    
                                </div>
                            </div>
                    </div>
                    <div className="card-items">
                            <div className="card  widget-chart  text-left card-btm-border card-shadow-success border-success">
                                <div className="card-wraper">
                                    <div className="article-details">
                                    <h6 className="post-title fc-size">{'value'}<small className="opacity-5">{' '}{'km/h'}</small></h6>
                                    <p className="card-subtexto">{'5'}{' '}{'minutes ago'}</p>
                                    </div>
                                    <div className="post-image">
                                        <img src={Speed1} alt="speedImg" className="svg"/>
                                    </div>
                    
                                </div>
                            </div>
                    </div>
                    <div className="card-items">
                            <div className="card  widget-chart  text-left card-btm-border card-shadow-success border-success">
                                <div className="card-wraper">
                                    <div className="article-details">
                                    <h6 className="post-title fc-size">{'value'}<small className="opacity-5">{' '}{'°C'}</small></h6>
                                    <p className="card-subtexto">{'5'}{' '}{'minutes ago'}</p>
                                    </div>
                                    <div className="post-image">
                                        <img src={Temperature} alt="tempImg" className="svg"/>
                                    </div>
                    
                                </div>
                            </div>
                    </div>
                    <div className="card-items">
                            <div className="card  widget-chart  text-left card-btm-border card-shadow-success border-success">
                                <div className="card-wraper">
                                    <div className="article-details">
                                    <h6 className="post-title fc-size">{'value'}<small className="opacity-5">{' '}{'V'}</small></h6>
                                    <p className="card-subtexto">{'5'}{' '}{'minutes ago'}</p>
                                    </div>
                                    <div className="post-image">
                                        <div className="battery"></div>
                                    </div>
                    
                                </div>
                            </div>
                    </div>



                </div>
         
        </>
    )
}

export default Card
/*<a href="#">
                        {children}
                    </a>*/