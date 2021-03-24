import React,{useContext, useState} from 'react'
import AppContext from '../context/AppContext'
import CardDevice from '../components/CardDevice'
import DeviceForm from '../components/DeviceForm'
import PageLoading from '../components/PageLoading'

const DevicesNew = () => {
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

/*
  const  handleChange = e =>{
        setStateCard({
            ...stateCard.form,
            [e.target.name]: e.target.value
        })
    }


   const  handleSubmit = async e =>{
        e.preventDefault();
        setStateCard({
            loading:true,
            error: null
        })
        console.log(stateCard);
    }*/
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
                                <DeviceForm
                                
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

export default DevicesNew
