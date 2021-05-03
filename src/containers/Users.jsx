import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../context/AppContext'
import Banner from '../components/Banner'

import DinamicTable from '../components/DinamicTable'

const metaH =[
{
  key:'id',
  text:'ID',
  sort:true,
},
{
  key:'name',
  text:'Name',
  sort:true,

},
{
  key:'user',
  text:'User',
  sort:true,
},
{
  key:'password',
  text:'Password',
  sort:true,
},
{
  key:'state',
  text:'State',
  sort:true,
},
{
  key:'action',
  text:'Action',
  sort:true,
}
]
const Users = () => {
  
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
        <div className="m-sm-30">
          <div>
              <Link to='/newUsers'>
                  <button className="MuiButtonBase-root MuiButton-root MuiButton-container mb-4 MuiButton-containedPrimary" tabIndex='0' type="button">
                      <span className="MuiButton-label">Add New User</span>
                      <span className="MuiTouchRipple-root"></span>
                  </button>
                  </Link>
          </div> 
        
          <DinamicTable 
          HeadNames={metaH}
          onOpenModal={handleOpenModal} 
          onClose={handleCloseModal}

          modalIsOpen={containerState.modalIsOpen}
          belongsTo='user'
           />
          </div>

      </div>
    )
}

export default Users
