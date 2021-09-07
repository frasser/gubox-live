import React from 'react'
import {MdSearch} from "react-icons/md";
import SearchModal from '../components/SearchModal'
import '../styles/components/SearchBar.css'

const SearchBar = (props) => {
    
    return (
        <>
            
            <button onClick={props.onOpenModal} type="button" className="  text-white      w-auto h-auto  shadow-lg focus:outline-none " >
                <MdSearch className="w-8 h-8 text-bold text-gray-400 p-0.5"/>
            </button>
            <SearchModal 
            isOpen={props.modalIsOpen}
            onClose={props.onClose}
        
            />
        </>
    )
}

export default SearchBar
