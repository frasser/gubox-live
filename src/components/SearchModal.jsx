import React from 'react'
import Modal from './Modal'




const SearchModal =(props) => {
    const devices= [
        {
            'name':'moto mensajero',
            'serial':'DOYYOO99',
            'icon':'data:image/jpeg;base64,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',
            'last': '21-01-19 12:00:17',
            'status': 1,

        },
        {
            'name':'morral',
            'serial':'POCPPP88',
            'icon':'https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.wanderfinder.com%2Fwp-content%2Fuploads%2Fleaflet-maps-marker-icons%2FMapMarker_Bubble_Green.png&imgrefurl=http%3A%2F%2Fwww.wanderfinder.com%2Fwp-content%2Fuploads%2Fleaflet-maps-marker-icons%2F&tbnid=FGLg6SzrU4eK5M&vet=12ahUKEwikgZygvJrvAhWF2VkKHdRJBtMQMygZegUIARDRAQ..i&docid=NWAOSg0FIN8X8M&w=256&h=256&q=marker%20icon%20leaflet&ved=2ahUKEwikgZygvJrvAhWF2VkKHdRJBtMQMygZegUIARDRAQ',
            'last': '21-01-19 12:00:17',
            'status': 1,
        },
        {
            'name':'duster ZXY999',
            'serial':'TOOR9111',
            'icon':'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcontraentrega.com%2Fmodern-admin%2Fapp-assets%2Fimages%2Fmap%2Fleaflet%2FcustomIcons%2Fmap-marker-pink.png&imgrefurl=https%3A%2F%2Fcontraentrega.com%2Fmodern-admin%2Fhtml%2Frtl%2Fhorizontal-menu-template%2Fmaps-leaflet.html&tbnid=oCYg6EBMkpVTFM&vet=12ahUKEwikgZygvJrvAhWF2VkKHdRJBtMQMygtegUIARD-AQ..i&docid=TrnS65pvJGcjWM&w=256&h=256&q=marker%20icon%20leaflet&ved=2ahUKEwikgZygvJrvAhWF2VkKHdRJBtMQMygtegUIARD-AQ',
            'last': '21-01-20 12:00:17',
            'status': 2,
        },
    ]
    


    const listItems = devices.map((device) =>
  <li>{device}</li>
 
);
console.log(listItems.length);
console.log(listItems);

    return (
        
            
        
        <Modal 
            isOpen={props.isOpen}
            onClose={props.onClose}>
                <div className="DeleteModal ">
                    
                    <h1 className="text-lg text-center font-extrabold text-gray-500 ">MY DEVICES</h1>
                    
                    {devices.map(device =>(
                        <li key={device.serial} className="list-none items-center content-center mt-1 mx-5 border-t-2 text-gray-500 font-medium border-solid border-gray-300 p-3 text-center justify-center   hover:text-white hover:bg-purple-400 cursor-pointer">{device.name}</li>
                        
                    ))

                    }
                    
                    <div className=" ">
                        
                        <button onClick={props.onClose} className="btn-cancel bg-gray-500  font-semibold text-white hover:bg-gray-700 ">Cancel</button>
                    </div>

                </div>



        </Modal>
    )
}

export default SearchModal
