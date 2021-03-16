import React,{useState,useEffect, useRef} from 'react'
import useEventListener from '../hooks/useEventListener'

import '../styles/components/Picker.css'

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
console.log(state);

console.log(props.onSelect);
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

    /*const Icon = ({namesrc}) => {
        return (
            <span
                className={`fa fa-${name.toLowerCase()} ${className ? className : ''}`}
                {...rest}
                aria-hidden="true"></span>
        );
    };*/

    /**
 * Hook that alerts clicks outside of the passed ref
 */

    /*

function useOutsideAlerter(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        /*function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                alert("You clicked outside of me!");
                console.log("You clicked outside of me!");
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            console.log("You clicked outside of me!");
        };
    }, [ref]);
}*/

  /*  useEffect(() =>{

        const {
            defaultIcon
        } = props;
    
        document.addEventListener('mousedown', handleClickOutside);
        if (defaultIcon) {
            setState(state =>({...state, selectedIcon: defaultIcon ? defaultIcon : defaultIcons[0]}));
        }

    },[]);*/
    



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
	}

    const storeIcon =() => {
		toggleDropdown();
		if (props.onSelect) {
			props.onSelect({icon: state.selectedIcon})
		}
	}

    

    

    const componentIcons =  defaultIcons;


    return (
        <div className={`dropdown icon-picker ${state.dropdownOpen ? 'open' : ''}`} ref={elementRef}>
        <button className={`${state.selectedIcon ? 'btn-con' : 'btn btn-default dropdown-toggle'}`} type="button" id="dropdownMenu1" onClick={() => toggleDropdown()}>
            {state.selectedIcon ?
                <span className="icon-dropdown-text">
                    
                    
                    <img className="Badge_pin" src={state.selectedIcon} 
                    alt="pin" 
                    />
                </span>
                :
                <span>Pick icon</span>
            }
            <span className="caret"></span>
        </button>
        {state.dropdownOpen ?
                
                <ul className="dropdown-menu" id="dropdownUL" aria-labelledby="dropdownMenu1" >

                
                <ul className="icons">
                    {componentIcons.map((icon, index) => {
                        return (
                            <li className="lili"  key={index} onClick={() => setSelectedIcon(icon)  }>
                                <span className={`icon-wrapper ${state.selectedIcon === icon ? 'selected' : ''}`}>
                                    <span className="icon">
                                    <img className="pin" src={icon} 
                                        alt="pin" 
                                    />
                                        
                                    </span>
                                </span>
                            </li>
                        );
                    })}
                </ul>
                <hr />
                <button type="button" className="btn-cancel" onClick={() => clearSelected()}>Cancel</button>
                <button type="button" className="btn-succes" onClick={() => storeIcon()}>Save</button>
            </ul>
            
            : ''
        }

    </div>
    )
}

export default Picker
