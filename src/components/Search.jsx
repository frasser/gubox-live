import React,{useState} from 'react'

import DeviceIco from '../assets/statics/device.svg'
import SearchBar from './SearchBar'




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
 
            
                   
              <div className="flex flex-row md:flex-col border-2 md:border-0 px-2 mx-1 md:mx-0 rounded-lg   shadow-lg bg-white md:pt-4 md:pb-3">

                        <div className=" flex  ">
                            <SearchBar
                                                          onOpenModal={handleOpenModal} 
                                                          onClose={handleCloseModal}
                                                          modalIsOpen={containerState.modalIsOpen}
                            />
                        </div>
                        <div className="w-1/5 flex flex-row md:flex-col md:w-full  px-1 py-2 justify-center justify-self-center justify-items-center  md:items-center ">
                            <img src={DeviceIco} alt="DeviceIco" className="w11 h-11 opacity-75 md:w-16 md:h-12"/>
                        </div>
                        <div className="flex flex-row  md:flex-col w-4/5  md:w-full ">
                            
                            <div className="flex flex-col w-full  order-last  ">
                                <div className="flex flex-col">
                                <small className="text-gray-500 text-sm text-center text-opacity-50"> {' Device: '}</small>
                                </div>
                                <div className="flex flex-col">
                                <span className="text-center text-xl font-bold md:text-lg  text-gray-500">{'Maletin juan'}</span>
                                </div>
                            </div>
                            {/*
                            <div className="flex flex-col w-auto md:w-full  border-r-2 pr-1 md:border-r-0  ">
                                <div className="flex flex-col">
                                    <small className="text-gray-500 text-xs mt-2 md:mt-0 text-center text-opacity-50">Serial: </small>
                                </div>
                                <div className="flex flex-col">
                                    <small className="text-center text-xs mt-1 md:mt-0  font-medium text-gray-500 text-opacity-50 md:border-b  ">{'D9OIEJE99'}</small>
                                </div>
                            </div>
                            */
                            }

                        </div>


            
            
                </div>
 
       
    )
}

export default  Search

/*
                       <div className="switch">
                            <label  className="switch">    
                                <input type="checkbox" 
                                        defaultChecked={checked}
                                        onChange={handleStateCheck } />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="connect" >{checked ? 'Connected' : 'Disconnected'}</div>
                        */