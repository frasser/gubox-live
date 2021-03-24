import React,{useRef} from 'react'
import {useHistory} from 'react-router-dom'

const UserForm=() => {

    const form = useRef(null)
    const history = useHistory()

    const handleSubmit = () =>{
        const formData = new FormData(form.current)
        const user = {
            'name': formData.get('name'),
            'user': formData.get('user'),
            'pswd': formData.get('pswd'),
            'status': 1,
            'last': '21-01-19 12:00:17',
        }
        console.log('new user:', user);

        history.push('/Users')
    }

    return (
        <div className="Information-content">
        <div className="Information-head">
            
        <div className="Information-header-section">
                {/*<h3 className="cb">{props.jobTitle}</h3>*/}
                
                <h2>NEW USER</h2>
            </div>
           
        </div>
        <div className="Information-form">
            <form /*action=""*/ ref={form}>
            <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Name" name="name"/>
                </div>
                <div className="form-group">
                    <label>User</label>
                    <input type="text" placeholder="User" name="user" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" placeholder="password" name="pswd" />
                </div>


            </form>
        </div>
        

            <div className="Information-next">
                <button type="button"  className="btn-primary" onClick={handleSubmit}>Save</button>
            </div>
        
    </div>
    )
}

export default UserForm
