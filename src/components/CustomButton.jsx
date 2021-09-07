import React,{useEffect} from 'react'
import { useLeafletContext } from '@react-leaflet/core'
import L from 'leaflet'

const legendHtmlFor = (title, description) =>
  [
    `<h1>Galician Unesco world heritage sites</h1>`,
    title && `<h3>${title}</h3>`,
    description && `<p>${description}</p>`,
  ].join("\n");

const CustomButton = (props) => {
    const context = useLeafletContext()

    L.Control.Watermark = L.Control.extend({
        onAdd: function (map) {
            /*var img = L.DomUtil.create('img');

            img.src = imgControl;
            img.style.width = '36px';
            img.style.cursor = 'pointer';*/



            
            
            const div = L.DomUtil.create("div", "bg-white text-base  ring-bannerscolor shadow-xl rounded-md opacity-70  w-auto text-gray-600");
            div.innerHTML = legendHtmlFor(props.title, props.description);
            return div;
            
            
            

           // containers.addEventListener('click', function(e) {
                //const watermarkButton = document.querySelector('.watermark-button');
                //let target = e.target;
                //watermarkButton.innerText = 'show';
                //target.classList.add('watermark-hidden');
               // console.log('waterMark clicked');
              //});

           
            
        },

        onRemove: function (map) {
            // Nothing to do here
        }
    })

    L.control.watermark = function (opts){
        return new L.Control.Watermark(opts)
    }

    useEffect(() => {    
        //const bounds = L.latLng(props.center).toBounds(props.size)   
         const control2 = new L.control.watermark({position: props.position})  
        const container = context.layerContainer || context.map   
        container.addControl(control2)
      return () => {     
           container.removeControl(control2)    
        } 
     })

    return null
    
}

export default CustomButton
