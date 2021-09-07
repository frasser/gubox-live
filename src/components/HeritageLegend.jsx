import React,{useEffect} from 'react'
import { useLeafletContext } from "@react-leaflet/core";
import PropTypes from 'prop-types'
import L from 'leaflet'
//import 'leaflet/dist/'


const legendHtmlFor = (title, description) =>
  [
    "<h1>Galician Unesco world heritage sites</h1>",
    title && `<h3>${title}</h3>`,
    description && `<p>${description}</p>`,
  ].join("\n");

const HeritageLegend = (/*{title, description}*/props) => {

  /*  const  map = useMap();

    useEffect(() => {
        const legend = L.Control({ position: "bottomleft" });
    
        legend.onAdd = () => {
          const div = L.DomUtil.create("div", "legend");
          div.innerHTML = legendHtmlFor(title, description);
          return div;
        };
    
        legend.addTo(map);
        return () => legend.remove();
    }, [map, title, description]);

    return null;*/
      const context = useLeafletContext()
        useEffect(() => {    
            const bounds = L.latLng(props.center).toBounds(props.size)   
             const square = new L.Rectangle(bounds)  ;
              const container = context.layerContainer || context.map   
            container.addLayer(square)
          return () => {      container.removeLayer(square)    }  })
        return null


}


export default HeritageLegend
