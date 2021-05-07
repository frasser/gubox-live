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
 
            
                   
              <div className="flex flex-row md:flex-col border-2 md:border-0 px-2 mx-1 md:mx-0 rounded-3xl bg-white  shadow-md md:mt-0.5  md:py-1 ">

                        <div className=" flex  ">
                            <SearchBar
                                                          onOpenModal={handleOpenModal} 
                                                          onClose={handleCloseModal}
                                                          modalIsOpen={containerState.modalIsOpen}
                            />
                        </div>
                        <div className="w-1/5 flex flex-row  md:w-full  px-1  justify-center justify-self-center justify-items-center text-center  md:items-center pt-5  ">
                            <p className="text-2xl font-semibold text-blue-400 bg-blue-50 p-2 rounded-xl">Asset Information</p>
                            
                        </div>
                        <div className="flex flex-row  md:flex-col w-4/5  md:w-full ">
                            
                            <div className="flex flex-col w-full  order-last  ">
                                <div className="flex flex-col">
                                <small className="text-gray-500 text-sm text-center text-opacity-50 "> {' Name: '}</small>     
                                <span className="text-center text-xl font-bold md:text-lg  text-gray-400  p-1 mx-4 rounded-xl ">{'Maletin juan'}</span>
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