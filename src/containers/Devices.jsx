import React,{useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../context/AppContext'
import '../styles/containers/Devices.css'
import DinamicTable from '../components/DinamicTable'




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
            <div className="m-sm-30">
            
            <div>
              <Link to='/newDevices'>
                <button className="MuiButtonBase-root MuiButton-root MuiButton-container mb-4 MuiButton-containedPrimary" tabIndex='0' type="button">
                    <span className="MuiButton-label">Add New Device</span>
                    <span className="MuiTouchRipple-root"></span>
                </button>
                </Link>
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
