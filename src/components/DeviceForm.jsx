import React,{useRef} from 'react'
import {useHistory} from 'react-router-dom'


import Picker from '../components/Picker'


const DeviceForm = () => {
    
    const form = useRef(null)
    const history = useHistory()

    const handleSubmit = () =>{
        const formData = new FormData(form.current)
        const device = {
            'name': formData.get('name'),
            'iconUrl': formData.get('pin'),
            'serial': formData.get('serial'),
            'status': 1,
            'last': '21-01-19 12:00:17',
        }
        console.log('new device:', device);

        history.push('/Devices')
    }

    return (
        <div className=" flex flex-col  border rounded-xl shadow-xl bg-white mt-20 md:mt-24 mx-2 md:w-2/5">
        <div className="py-2 px-0 h-14 flex place-content-center rounded-t-xl bg-purple-400 ">
            
        <div className="flex flex-col justify-center items-center pt-2 text-gray-600 w-full font-bold ">
                {/*<h3 className="cb">{props.jobTitle}</h3>*/}
                
                <h2>NEW DEVICE</h2>
            </div>
           
        </div>
        <div className="flex flex-col justify-center items-center py-4 px-6 text-gray-400 box-border mx-2 h-64 ">
            <form /*action=""*/ ref={form}>
            <div className="mb-2 flex flex-col">
                    <label className="font-semibold">Serial</label>
                    <input type="text" placeholder="Serial Device (example: SPR88090)" name="serial" className="border-2 border-gray-400 bg-gray-100 rounded-lg text-gray-600 focus:outline-none  focus:border-purple-400 px-4"/>
                </div>
                <div className="mb-2 flex flex-col">
                    <label className="font-semibold">Device Name</label>
                    <input type="text" placeholder="Device Name" name="name" className="border-2 border-gray-400 bg-gray-100 rounded-lg text-gray-600 focus:outline-none  focus:border-purple-400 px-4" />
                </div>
                <div className="mb-2 flex flex-col">
                    <label className="font-semibold">Icon</label>
                   <Picker/>
                </div>


            </form>
        </div>
        

            <div className=" flex px-6 w-full  pb-1  items-center  justify-center rounded-b-xl">
                <button type="button"  className="btn-next w-3/4 md:w-3/5 font-bold bg-gray-200 text-purple-400 shadow-md hover:bg-gray-500 hover:shadow-lg " onClick={handleSubmit}>Save</button>
            </div>
        
    </div>

    )
}

export default DeviceForm

/*
        <div className="Information-content">
        <div className="Information-head">
            
        <div className="Information-header-section">
                {/*<h3 className="cb">{props.jobTitle}</h3>*//*}
             /*   
                <h2>NEW DEVICE</h2>
            </div>
           
        </div>
        <div className="Information-form">
            <form /*action=""*/ /*ref={form}>
           /* <div className="form-group">
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

*/