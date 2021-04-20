import React,{useState,useEffect} from 'react'

function MultiSteps (props) {
    const colorActive ={
        default :{ backgroundColor: "#34d399"},
        lineDefault: {backgroundColor: "#34d399"},
    }
    const colorDefault ={
        default :{ backgroundColor: "#ffffff"},
        lineDefault: {backgroundColor: "#d1fae5"},
    }
    const [color, setColor] = useState(colorDefault)  
    
    
    
    useEffect(() => {
        !props.step ?
            setColor({
                ...color,
                default: { backgroundColor: "#34d399"},
                lineDefault: {backgroundColor: "#34d399"}
              })
              :
              setColor({
                ...color,
                default: { backgroundColor: "#ffffff"},
                lineDefault: {backgroundColor: "#d1fae5"}
              })
        
      }, [props.step]);
       

     
     
    return (
        <div className="max-w-xl mx-auto my-2 border-b-2 pb-4">	
	        <div className="flex pb-3">
                <div className="flex-1 ">
                </div>
               

                <div className="flex-1">

            
                <div className="w-10 h-10 border-2 border-green-400 mx-auto rounded-full text-lg text-white flex items-center "  style={color.default}>
                        <span className="text-white text-center w-full "><i className="fa fa-check w-full fill-current white">1</i></span>
                    </div>
                </div>


                <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div className="w-full  rounded items-center align-middle align-center flex-1" style={color.lineDefault}>
                        <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded " ></div>
                    </div>
                </div>
            
                
                <div className="flex-1">
                    <div className="w-10 h-10  border-2 border-green-400 bg-white mx-auto rounded-full text-lg text-white flex items-center" >
                        <span className="text-white text-center w-full "><i className="fa fa-check w-full fill-current white">2</i></span>
                    </div>
                </div>
            {/*
                <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
                        <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{dot2}}></div>
                    </div>
                </div>
            
                <div className="flex-1">
                    <div className="w-10 h-10 bg-white border-2 border-green-500 mx-auto rounded-full text-lg text-white flex items-center">
                        <span className="text-grey-darker text-center w-full">3</span>
                    </div>
                </div>
            
            
                <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div className="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
                        <div className="bg-green-light text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{dot1}}></div>
                    </div>
                </div>


                <div className="flex-1">
                    <div className="w-10 h-10 bg-white border-2 border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
                        <span className="text-grey-darker text-center w-full">4</span>
                    </div>
                </div>
            */}
            
                <div className="flex-1">
                </div>		
	</div>
	
	<div className="flex text-xs  pl-2">
		<div className="w-1/2 text-center pl-8">
            Information
		</div>
		
		<div className="w-1/2 pl-4">
            Application Details
		</div>
		
		{/*<div className="w-1/4">
		Application details
		</div>
		
		<div className="w-1/4">
			Confirmation
		</div>*/}			
	</div>
</div>
    )
}

export default MultiSteps
