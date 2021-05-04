import React from 'react'

const TableHeaders = (props) =>{
    const  headerElement = props.meta.HeadNames
    
    const renderHeader = () => {
       // let headerElement = props;/*['id', 'name', 'email', 'phone', 'operation']*/

        return headerElement.map((h) => {
            return <th key={h.key} className="p-3 text-left border-b-2" scope="col">{h.text}</th>
        })
        
    }
    return(
        renderHeader()
    )
    
    
    

    
}

export default TableHeaders
