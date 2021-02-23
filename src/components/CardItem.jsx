import React from 'react'

const CardItem = (props) => {
    return (
        <div className="property-image" style={{backgroundImage: `url(${props.img})`}}>
            <div className="property-image-title">
                {props.title}
            </div>
        </div>
    )
}

export default CardItem
