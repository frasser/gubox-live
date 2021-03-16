import React,{useRef} from 'react'
import {Link,useHistory} from 'react-router-dom'
import '../styles/components/DeviceForm.css'

import Picker from '../components/Picker'

const DeviceForm = () => {
    const form = useRef(null)
    const history = useHistory()

    const handleSubmit = () =>{
        const formData = new FormData(form.current)
        const device = {
            'name': formData.get('name'),
            'pin': formData.get('pin'),
            'serial': formData.get('serial'),
            'status': 1,
            'last': '21-01-19 12:00:17',
        }
        console.log('new device:', device);
        history.push('/Devices')
    }

    return (
        <div className="Information-content">
        <div className="Information-head">
            
        <div className="Information-header-section">
                {/*<h3 className="cb">{props.jobTitle}</h3>*/}
                
                <h2>NEW DEVICE</h2>
            </div>
           
        </div>
        <div className="Information-form">
            <form /*action=""*/ ref={form}>
            <div className="form-group">
                    <label>Serial</label>
                    <input type="text" placeholder="Serial Device (example: SPR88090)" name="serial"/>
                </div>
                <div className="form-group">
                    <label>Device Name</label>
                    <input type="text" placeholder="Device Name" name="name" />
                </div>
                <div className="form-group">
                    <label>Device Icon</label>
                    <Picker/>
                    

                </div>


            </form>
        </div>
        

            <div className="Information-next">
                <button type="button" onClick={handleSubmit} className="btn-primary">Save</button>
            </div>
        
    </div>
    )
}

export default DeviceForm
