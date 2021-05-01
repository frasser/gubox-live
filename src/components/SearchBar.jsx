import React from 'react'
import {MdSearch} from "react-icons/md";
import SearchModal from '../components/SearchModal'
import '../styles/components/SearchBar.css'

const SearchBar = (props) => {
    
    return (
        <>
            
            <button onClick={props.onOpenModal} type="button" className=" fixed   text-white  bg-green-400 md:bg-purple-400 hover:shadow-sm hover:bg-purple-500 rounded-full top-5 right-20 md:right-2 md:top-5 w-9 h-9 md:w-12 md:h-12 shadow-lg" >
                <MdSearch className="my-auto  transition-transform w-12 h-6"/>
            </button>
            <SearchModal 
            isOpen={props.modalIsOpen}
            onClose={props.onClose}
        
            />
        </>
    )
}

export default SearchBar
