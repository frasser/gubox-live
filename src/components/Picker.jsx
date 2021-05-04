import React,{useState,useEffect, useRef} from 'react'
import useEventListener from '../hooks/useEventListener'



import Motorciclist from '../assets/statics/customMotorciclist.png'
import Moto from '../assets/statics/customMoto.png'
import Helmet from '../assets/statics/customHelmet2.png'
import Dog from '../assets/statics/customDog.png'
import Bike from '../assets/statics/customCiclaPista.png'
import Biker from '../assets/statics/customCicla.png'
import Car from '../assets/statics/customCar3.png'
import Print from '../assets/statics/customPrint.png'
const Picker = (props) => {
   // const wrapperRef = useRef(null);
   // useOutsideAlerter(wrapperRef);
    const [state, setState] = useState({dropdownOpen:false,selectedIcon:''})
    const defaultState = ({dropdownOpen:false,selectedIcon:''});
    

// You can also pass refs
const elementRef = useRef(null);
useEventListener(elementRef, 'mousedown', handleElementClick);
/*console.log(state);*/

/*console.log(props.onSelect);*/
const handleElementClick =  ()=>{
    console.log('clickkk');
    setState({dropdownOpen: !state.dropdownOpen});

    

    
}

    /*const handleStateCheck = () =>{
        setChecked(!checked)
    }*/

    const defaultIcons = [
        Motorciclist,
        Moto,
        Helmet,
        Dog,
        Bike,
        Biker,
        Car,
        Print
    ];





    const clearSelected = ()=>{
		setState(defaultState);
		/*if (props.onSelect) {
			props.onSelect({});
            
		}*/
	}

    const 	toggleDropdown = () =>{
		setState(state =>({...state, dropdownOpen: state.dropdownOpen ? false : true }));
	}

	const setSelectedIcon =(icon)  =>{
		setState(state=>({...state, selectedIcon: icon}));
        storeIcon()
	}

    const storeIcon =() => {
		toggleDropdown();
		if (props.onSelect) {
			props.onSelect({icon: state.selectedIcon})
		}
	}

    

    

    const componentIcons =  defaultIcons;


    return (
        <div className={`relative hover:block my-1 ${state.dropdownOpen ? 'open' : ''}`} ref={elementRef}>
        <button className={`focus:outline-none ${state.selectedIcon ? 'contents' : 'btn bg-white border-2 border-solid hover:border-purple-400 hover:text-purple-400 dropdown-toggle'}`} type="button" id="dropdownMenu1" onClick={() => toggleDropdown()}>
            {state.selectedIcon ?
                <span className="w-auto h-auto inline-block">
                    
                    
                    <img className="Badge_pin" src={state.selectedIcon} 
                    alt="pin" 
                    />
                </span>
                :
                <span>Pick icon</span>
            }
            <span className="ml-3"></span>
        </button>
        {state.dropdownOpen ?
                
                <ul className="w-72 h-80 px-2 mt-10 shadow-xl rounded-xl border-r border-l overflow-hidden bg-gray-50 absolute z-10 bottom-11 " id="dropdownUL" aria-labelledby="dropdownMenu1" >

                
                <ul className="list-none p-1 mt-0  h-5/6 border-t-2 border-purple-400  ">
                    {componentIcons.map((icon, index) => {
                        return (
                            <li className="float-left text-center p-5 relative w-10 m-4 "  key={index} onClick={() => setSelectedIcon(icon)  }>
                                <span className={`absolute top-0 left-0 bottom-0 right-0 mt-0   ${state.selectedIcon === icon ? 'selected' : ''}`}>
                                    <span className="absolute rounded-full bg-gray-100 w-14 h-14 hover:bg-gray-300 ">
                                    <img className="m-auto" src={icon} 
                                        alt="pin" 
                                    />
                                        
                                    </span>
                                </span>
                            </li>
                        );
                    })}
                </ul>
                
                <div className="flex flex-col w-full  justify-items-center items-center mb-4 border-t ">
                <button type="button" className="btn-next w-5/12 py-2 bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 hover:shadow-md focus:outline-none" onClick={() => clearSelected()}>Cancel</button>
                </div>
                
            </ul>
            
            : ''
        }

    </div>
    )
}

export default Picker
