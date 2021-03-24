import React,{useContext, useState} from 'react'
import AppContext from '../context/AppContext'

import UserForm from '../components/UserForm'
import PageLoading from '../components/PageLoading'


const UsersNew =() => {
    const {state} = useContext(AppContext)
    const {side_state} = state

    const [stateCard, setStateCard] = useState({
        loading: false,
        error:null,
        form: {
        firstName: '',       
        serial: '',
        iconUrl: '',
        }
    })

    let mainClass = [];
  
    if (side_state[1]) {
        mainClass.push("mainOpen");
    }else{
        mainClass.push("mainMin");
    }
    
    return (
        <div className={mainClass.join(" ")}>
            
        {stateCard.loading?
        <PageLoading/>
        :   
        <div className="container">
            <div className="row">
                {/*<div className="col-6">
                    <CardDevice 
                    firstName={stateCard.form.firstName || 'DEVICE NAME '}
                    
                    serial={stateCard.form.serial || 'SERIAL'}
                                        
                    iconUrl=""
                    />
        </div>*/}
                <div className="col-6">
                    <UserForm
                    
                    /*onChange={handleChange}
                    onSubmit={handleSubmit} 
                    formValues={stateCard.form}
                    error={stateCard.error}*/
                    />
                </div>
            </div>
        </div> 
    }
    
    

</div>
    )
}

export default UsersNew
