import {useState} from 'react'
import initialState from '../initialState'

const useInitialState = () =>{
    const [state, setState] = useState(initialState)
    const [toggle, setToggle] = useState(true)

    console.log("initial state",toggle);
    /*const changeSideState = payload =>{
        setState({
            ...state,
            side_state:[...state.side_state, payload]
        });
    }*/
    const handleDrawer = () => {
      setToggle(!toggle)

      setState({
        state,
        side_state:[state.side_state, toggle]
    });
      
/*
        if (state.drawerPos < 2 ) {
          setState((state) => ({
            side_state: state.drawerPos + 1
            
          }));
          console.log("navbar",state);
          //changeSideState(state)
        } else {
          setState({
            side_state: 0
          });
          console.log("navbar",state);
          //changeSideState(state)
        }*/
      }

    return{
        handleDrawer,
        state,
    }

}

export default useInitialState;