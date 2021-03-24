import React from 'react'
import Modal from './Modal'


const DeleteModal=(props)=> {
    
    return (
        <Modal 
            isOpen={props.isOpen}
            onClose={props.onClose}>
                <div className="DeleteModal">
                    <h1>Are you sure?</h1>
                    <p className="p-modal">You are about to delete this {`${props.belongsTo}`}.</p>

                    <div>
                        <button onClick={props.onDelete} className="btn-danger">Delete</button>
                        <button onClick={props.onClose} className="btn-cancel">Cancel</button>
                    </div>

                </div>



        </Modal>
        
    )
}

export default DeleteModal
