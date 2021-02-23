
import React ,{useContext}from 'react'
import { MdMemory,MdKeyboardArrowRight} from "react-icons/md";
import { RiSignalTowerFill} from "react-icons/ri";
import { AiOutlineAlert } from "react-icons/Ai";
import '../styles/components/Hero.css'


import AppContext from '../context/AppContext'


const SIZE = "32px";
const Hero =() => {

    const {state} = useContext(AppContext)
    const {side_state} = state

    console.log("heroooo",side_state[1]);

    
     let mainClass = [];

    if (side_state[1]) {
        mainClass.push("mainOpen");
    }else{
        mainClass.push("mainMin");
    }
    console.log('Herooo',mainClass);
    return (
        <div className={mainClass.join(" ")}>
            
                <div className="hero-container">
                    <div className="item">
                        <p className="hero-welcome">
                            
                            Bienvenido, {"juan pablo"}
                        </p>
                    </div>

                
                    <div className="item">
                        <div className="targetsGrid-container mb-3 targetsGrid-spacing-xs-3">
                            <div className="targetsGrid-item targetsGrid-xs-12">
                                <div className="targetsPaper-root targetsGrid-card bg-paper items-center justify-between flex-wrap flex targetsGrid-elevation6">
                                    <div className="flex items-center"  aria-hidden="true">
                                        
                                            <MdMemory className="jss3214" size={SIZE}/>
                                        
                                            <div className="ml-3">
                                                <small className="text-muted">Devices</small>
                                                <h6 className="m-0 mt-1 font-medium text-primary">2</h6>
                                            </div>
        
                                    </div>
                                    <button className="targetsButtonBase-root targetsIconButton-root " tabIndex="0" type="button" title="view details">
                                        <span className="targetsIconButton-label">
                                            <MdKeyboardArrowRight  className="targetsIcon-root material-icons" aria-hidden="true"/>
                                        </span>
                                        <span className="tarTouchRipple-root"></span>
                                    </button>
                                </div>
                            </div>

                            <div className="targetsGrid-item targetsGrid-xs-12">
                                <div className="targetsPaper-root targetsGrid-card bg-paper items-center justify-between flex-wrap flex targetsGrid-elevation6">
                                    <div className="flex items-center"  aria-hidden="true">
                                        
                                            <RiSignalTowerFill className="jss3214" size={SIZE}/>
                                        
                                            <div className="ml-3">
                                                <small className="text-muted">Cobertura</small>
                                                <h6 className="m-0 mt-1 font-medium text-primary">2</h6>
                                            </div>
        
                                    </div>
                                    <button className="targetsButtonBase-root targetsIconButton-root " tabIndex="0" type="button" title="view details">
                                        <span className="targetsIconButton-label">
                                            <MdKeyboardArrowRight  className="targetsIcon-root material-icons" aria-hidden="true"/>
                                        </span>
                                        <span className="tarTouchRipple-root"></span>
                                    </button>
                                </div>
                            </div>

                            <div className="targetsGrid-item targetsGrid-xs-12">
                                <div className="targetsPaper-root targetsGrid-card bg-paper items-center justify-between flex-wrap flex targetsGrid-elevation6">
                                    <div className="flex items-center"  aria-hidden="true">
                                        
                                            <AiOutlineAlert className="jss3214" size={SIZE}/>
                                        
                                            <div className="ml-3">
                                                <small className="text-muted">Alertas</small>
                                                <h6 className="m-0 mt-1 font-medium text-primary">2</h6>
                                            </div>
        
                                    </div>
                                    <button className="targetsButtonBase-root targetsIconButton-root " tabIndex="0" type="button" title="view details">
                                        <span className="targetsIconButton-label">
                                            <MdKeyboardArrowRight  className="targetsIcon-root material-icons" aria-hidden="true"/>
                                        </span>
                                        <span className="tarTouchRipple-root"></span>
                                    </button>
                                </div>
                            </div>
                            <div className="targetsGrid-item targetsGrid-xs-12">
                                <div className="targetsPaper-root targetsGrid-card bg-paper items-center justify-between flex-wrap flex targetsGrid-elevation6">
                                    <div className="flex items-center"  aria-hidden="true">
                                        
                                            <MdMemory className="jss3214" size={SIZE}/>
                                        
                                            <div className="ml-3">
                                                <small className="text-muted">Messages</small>
                                                <h6 className="m-0 mt-1 font-medium text-primary">2</h6>
                                            </div>
        
                                    </div>
                                    <button className="targetsButtonBase-root targetsIconButton-root " tabIndex="0" type="button" title="view details">
                                        <span className="targetsIconButton-label">
                                            <MdKeyboardArrowRight  className="targetsIcon-root material-icons" aria-hidden="true"/>
                                        </span>
                                        <span className="tarTouchRipple-root"></span>
                                    </button>
                                </div>
                            </div>


                        </div>

                        
                    </div>
                    

            </div>
            
            </div>
    )
}

export default Hero
