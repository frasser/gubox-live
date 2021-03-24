import React,{useState} from 'react'

import DeviceIco from '../assets/statics/device.svg'
import SearchBar from './SearchBar'


import '../styles/components/Search.css'

const Search = () => {
    const [checked, setChecked] = useState(true)

    const [containerState, setContainerState] = useState({    loading:true,
        error:null,
        data: undefined,
        modalIsOpen:false})
    
        const handleOpenModal = e =>{
            setContainerState({modalIsOpen: true});
          };
          
          const handleCloseModal = e =>{
            setContainerState({modalIsOpen: false});
          };

    const handleStateCheck = () =>{
        setChecked(!checked)
    }
 
    return (
 
            <div className="card  widget-chart  text-left card-btm-border card-shadow-success border-success">
                   
            <section className="search-container">

                        <div className="search isHome">
                            <SearchBar
                                                          onOpenModal={handleOpenModal} 
                                                          onClose={handleCloseModal}
                                                          modalIsOpen={containerState.modalIsOpen}
                            />
                        </div>
                        <div className="icon-device">
                            <img src={DeviceIco} alt="DeviceIco" className="svg"/>
                        </div>
                        <div className="name">
                            <div>
                            <small> {' Device: '}</small>
                            <span>{'  '}{'Maletin'}</span>
                            </div>

                            <div className="subText">
                                <small>Serial: </small>
                                <small>{'D9OIEJE99'}</small>
                            </div>

                        </div>
                        <div className="switch">
                            <label  className="switch">    
                                <input type="checkbox" 
                                        defaultChecked={checked}
                                        onChange={handleStateCheck } />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="connect" >{checked ? 'Connected' : 'Disconnected'}</div>

            </section>
            
                </div>
 
       
    )
}

export default  Search