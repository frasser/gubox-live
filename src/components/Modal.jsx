import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/components/Modal.css'

const Modal =(props) =>{
    if(!props.isOpen){
        return null;
    }
    return ReactDOM.createPortal(
    <div className="fixed z-30 top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 flex flex-col items-center">
        <div className="relative rounded-lg top-40 bg-white p-4 w-4/5 md:w-96">
            <button onClick={props.onClose} className="absolute top-0 right-0 border-0 mt-1 mr-1 py-2 px-4 text-white font-bold bg-gray-500 hover:bg-gray-700  rounded-full ">
             X
            </button>

            {props.children}

        </div>

    </div>,
    document.getElementById('app')
    )
}

export default Modal
