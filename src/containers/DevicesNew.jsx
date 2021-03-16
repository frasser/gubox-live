import React,{useContext} from 'react'
import AppContext from '../context/AppContext'
import CardDevice from '../components/CardDevice'
import DeviceForm from '../components/DeviceForm'

const DevicesNew = () => {
    const {state} = useContext(AppContext)
    const {side_state} = state
  
    let mainClass = [];
  
    if (side_state[1]) {
        mainClass.push("mainOpen");
    }else{
        mainClass.push("mainMin");
    }

    const stateCard = { 
        loading: false,
        error:null,
        form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
       },
    };
    return (
        <div className={mainClass.join(" ")}>
                           <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <CardDevice 
                            firstName={stateCard.form.firstName || 'DEVICE NAME '}
                            lastName={stateCard.form.lastName || 'LAST NAME'}
                            twitter={stateCard.form.twitter || 'SERIAL'}
                            jobTitle={stateCard.form.jobTitle || 'JOB TITLE'}
                            email={stateCard.form.email}
                            avatarUrl=""
                            />
                        </div>
                        <div className="col-6">
                            {<DeviceForm/>
                            /*<BadgeForm 
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit} 
                            formValues={this.state.form}
                            error={this.state.error}
                            />*/}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default DevicesNew
