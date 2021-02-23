import React from 'react'
import {MapContainer, TileLayer, Marker as LeafletMarker, Popup} from 'react-leaflet'
import L from 'leaflet'

import 'leaflet/dist/leaflet.css'

import Pin from '../assets/statics/pin.png'
const Map = () => {

    const ICON = L.icon({
        iconUrl: Pin,
        iconSize: [64,64],
        iconAnchor: [36,64]
    })

    return (
        <MapContainer
            center={[3.46887609, -76.4830996]}
            zoom={13}
            style={{width: '100%', height: '100%'}}
            scrollWheelZoom={false}
        >
            <TileLayer
                attriution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LeafletMarker
                position={[3.46887609,-76.4830996]}
                icon={ICON}

                onMouseOver={(e)=>{
                    e.target.openPopup()
                }}
                onMouseOut={(e)=>{
                    e.target.closePopup()
                }}
            >
                <Popup>
                    {'name'} <br/>{'device #'}
                </Popup>

            </LeafletMarker>


        </MapContainer>
    )
}

export default Map
