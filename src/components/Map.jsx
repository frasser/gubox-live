import React,{useEffect,useMemo,useState} from 'react'
import {MapContainer, TileLayer, Marker as LeafletMarker, Popup, useMap} from 'react-leaflet'
import { useLeafletContext } from '@react-leaflet/core'
import L from 'leaflet'

import 'leaflet/dist/leaflet.css'

import MarkerLeyend from './MarkerLeyend'
import SearchBar from './SearchBar'
import Pin from '../assets/statics/pin.png'
import imgControl from '../assets/statics/customPrint.png'
import HeritageLegend from './HeritageLegend'

import CustomButton from './CustomButton'

// Classes used by Leaflet to position controls
const POSITION_CLASSES = {
    bottomleft: 'leaflet-bottom leaflet-left',
    bottomright: 'leaflet-bottom leaflet-right',
    topleft: 'leaflet-top leaflet-left',
    topright: 'leaflet-top leaflet-right',
    
  }



  function SearchControl({ position}) {

    const [containerState, setContainerState] = useState({    loading:true,
        error:null,
        data: undefined,
        modalIsOpen:false})

        const handleOpenModal = e =>{
            setContainerState({modalIsOpen: true});
          };
          
          const handleCloseModal = e =>{
            setContainerState({modalIsOpen: false});
          };

    

    const parentMap = useMap()
    
  
    // Memoize the minimap so it's not affected by position changes
    const search = useMemo(
      () => (
          <>
               <SearchBar
                 onOpenModal={handleOpenModal} 
                 onClose={handleCloseModal}
                 modalIsOpen={containerState.modalIsOpen}
               />  
           </> 
           
      ),
      [],
    )
  
    const positionClass =
      (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright
    return (
      <div className={positionClass}>
        <div className="leaflet-control leaflet-bar bg-white w-8 h-8 ">{search}</div>
      </div>
    )
  }

function MinimapControl({ position, zoom }) {
    const parentMap = useMap()
    const mapZoom = zoom || 0
  
    // Memoize the minimap so it's not affected by position changes
    const minimap = useMemo(
      () => (
          <>
                    <div className="flex">
                        <div className="flex flex-col bg-white text-base  ring-bannerscolor shadow-xl rounded-md opacity-80  w-auto text-gray-600 p-2">
                            <h1>{'MALETIN ANGEL'}</h1>
                            <p className="text-xs md:text-sm text-gray-500 opacity-50">Device:{'DEV339'}</p>
                        </div>
                    </div>
           <MarkerLeyend
                val={'50'}
                tim={'4 min'}/>
           </> 
           
      ),
      [],
    )
  
    const positionClass =
      (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright
    return (
      <div className={positionClass}>
        <div className="relative z-50 pointer-events-auto float-left clear-both ml-0.5 mb-0.5 md:mb-2 md:ml-2 lg:ml-3 cursor-auto     ">{minimap}</div>
      </div>
    )
  }

const Map = () => {
const center = [3.46887609, -76.4830996]
    const ICON = L.icon({
        iconUrl: Pin,
        iconSize: [64,64],
        iconAnchor: [36,64]
    })

    
  /*const innerHandlers = useMemo(
    () => ({
      click() {
        setBounds(innerBounds)
        map.fitBounds(innerBounds)
      },
    }),
    [map],
  )*/

    function CustomControl(props) {
        const context = useLeafletContext()
    
        L.Control.Watermark = L.Control.extend({
            onAdd: function (map) {
                /*var img = L.DomUtil.create('img');
    
                img.src = imgControl;
                img.style.width = '36px';
                img.style.cursor = 'pointer';*/



                var containers = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
                
                containers.style.backgroundColor = 'white';
                containers.style.backgroundSize = '30px 30px';
                containers.style.width = '30px';
                containers.style.height = '30px';
                
                
                

                containers.addEventListener('click', function(e) {
                    //const watermarkButton = document.querySelector('.watermark-button');
                    //let target = e.target;
                    //watermarkButton.innerText = 'show';
                    //target.classList.add('watermark-hidden');
                    console.log('waterMark clicked');
                  });
    
                return containers;
                
            },
    
            onRemove: function (map) {
                // Nothing to do here
            }
        })


        
        /*let CustomControl2 = L.Control.extend({
            options: { 
              position: 'topleft'
            },
            onAdd: function (map) {
              var containers = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
          
              containers.style.backgroundColor = 'white';
              containers.style.backgroundSize = '30px 30px';
              containers.style.width = '30px';
              containers.style.height = '30px';
              containers.style.cursor = 'pointer';
             // container.classList.add('watermark-button');
             
          
          
              containers.onclick = function() {
    
                //const watermarkCheck = document.querySelector('.watermark-hidden');
                //const watermark = document.querySelector('.watermark');
                //if (watermarkCheck) {
                  containers.innerText = 'hide';
                  console.log('cambio');
                  //watermark.classList.remove('watermark-hidden');
                //} else {
                  //container.innerText = 'show';
                  //watermark.classList.add('watermark-hidden');
                }
             // };
          
              return containers;
            },
                
            onRemove: function (map) {
                // Nothing to do here
            }
          });*/
        
        
        



    
        L.control.watermark = function (opts) {
            return new L.Control.Watermark(opts);
        }
    
        useEffect(() => {
            const container = context.layerContainer || context.map
    
            const control = L.control.watermark({ position: props.position })
            container.addControl(control)
    
            return () => {
                container.removeControl(control)
            }
        })
    
        return null
    }



    //const control = L.control.Extend({
        //...options    
      //});

    return (
        <MapContainer
            center={[3.46887609, -76.4830996]}
            zoom={13}
            style={{width: '100%', height: '100%'}}
            scrollWheelZoom={true}
            zoomControl={true}
        >
            <TileLayer
                attriution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LeafletMarker
                position={[3.46887609,-76.4830996]}
                icon={ICON}
                //eventHandlers={innerHandlers}

                onMouseOver={(e)=>{
                    e.target.openPopup()
                    console.log('se abre');
                }}
                onMouseOut={(e)=>{
                    e.target.closePopup()
                    console.log('se cierra');
                }}
                
            >
                <Popup  className="w-64 h-10" offset>
                    {'name'} <br/>{'device #'}
                </Popup>

            </LeafletMarker>
                        {/* the custom control */}
                        {/*<CustomControl position="topright"  ></CustomControl>*/}
                        <SearchControl
                            position='topright'
                        />
     
                        <HeritageLegend
                        center={center} 
                        size={1000}
     />  
     {/*<CustomButton
        title={'INFO'}
        description={'DISPOS HOME RUTE WAY WALKING ON A MOOON'}
        position="bottomleft"  
     /> */}
     <MinimapControl  position="bottomleft"/>
                    


        </MapContainer>
    )
}

export default Map
