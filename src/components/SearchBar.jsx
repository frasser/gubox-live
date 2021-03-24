import React from 'react'
import SearchModal from '../components/SearchModal'
import '../styles/components/SearchBar.css'

const SearchBar = (props) => {
    
    return (
        <>
            <button onClick={props.onOpenModal} type="button" className="input isHome"/*{inputStyle}*/ placeholder="Buscar...">Pick a Device</button>
            <SearchModal 
            isOpen={props.modalIsOpen}
            onClose={props.onClose}
        
            />
        </>
    )
}

export default SearchBar
