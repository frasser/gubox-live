import React,{useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../context/AppContext'

import DinamicTable from '../components/DinamicTable'
import Banner from '../components/Banner'




const metaH =[

    {
      key:'name',
      text:'Name',
      sort:true,
    
    },
    {
      key:'serial',
      text:'Serial',
      sort:true,
    },
    {
      key:'icon',
      text:'Icon',
      sort:true,
    },
    {
      key:'last',
      text:'Last Seen',
      sort:true,
    },
    {
        key:'status',
        text:'Status',
        sort:true,
      },
      {
        key:'action',
        text:'Actions',
        sort:true,
      }
    ]

   
const Devices = () => {
    const {state} = useContext(AppContext)
    const {side_state} = state

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

    let mainClass = [];

    if (side_state[1]) {
        mainClass.push("mainOpen");
    }else{
        mainClass.push("mainMin");
    }
    return (
        <div className={mainClass.join(" ")}>
           <Banner/>
           <div className="flex flex-col  w-full h-screen  bg-gray-100">
          <div className=" flex flex-col w-full border-0   z-0  mt-1  items-end p-4 md:mt-0 md:pr-20 ">
              <div className="flex  flex-col rounded-lg bg-gray-100 text-gray-600  w-32 ">
                  <Link to='/newDevices'>
                      <button className="hover:border-transparent hover:shadow-xl hover:bg-white w-full flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 text-sm md:text-base md:p-3 font-semibold py-4 focus:outline-none" tabIndex='0' type="button">
                        Add New Device
                          
                      </button>
                      </Link>
              </div> 
          </div>

                    
                    <DinamicTable 
                    HeadNames={metaH}
                    onOpenModal={handleOpenModal} 
                    onClose={handleCloseModal}
          
                    modalIsOpen={containerState.modalIsOpen}
                    belongsTo='device' 
                    />
            </div>
        </div>
    )
}

export default Devices
