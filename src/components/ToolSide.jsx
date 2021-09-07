import React,{useState} from 'react'
import Timeline from '../components/Timeline'
import Messages from '../components/Messages'
import TypingBox from '../components/TypingBox';

function useBoxProgress() {
    const [currentStep, setCurrentStep] = useState(0);

    function timeLineRender() {
        setCurrentStep(0);
    }
    function messagesRender() {
        setCurrentStep(1)
    }

    return [currentStep, timeLineRender, messagesRender]
}

 const ToolSide = (props) => {

    //const [toggleDiv, setToggleDiv] = useState(true)
    const steps = [<Timeline />, <Messages />];
    let isFirst = currentStep === 0;
    const [currentStep, timeLineRender, messagesRender] = useBoxProgress();

    /*const handleToggle = () => {
        setToggleDiv(!toggleDiv)

    }*/

    return (
<>
<div className="flex flex-col  shadow-2xl  absolute  w-full overflow-y-hidden z-20 md:overflow-x-hidden  h-full">
                                <div className="relative h-1/6    w-full">
                                    <div className="absolute right-1 top-1 ">
                                        <button className="h-12 w-12 text-white bg-gray-600 rounded-full text-center focus:outline-none  transform motion-safe hover:scale-110 hover:text-purple-400 " onClick={props.handle} >x</button>
                                    </div>
                                </div>
                       
                            {/*<div className="h-2 mx-8 border-b-2 pt-1 border-purple-400  ">

    </div>*/}
                            <div className="flex flex-col  pt-1     justify-items-center items-center align-middle     h-5/6 ">
                                {/*<button type="button" onClick={handleToggle} className=" rounded-full transform motion-safe hover:scale-110 p-1 focus:outline-none">
                                    {
                                        toggleDiv
                                            ?
                                            <HiArrowCircleDown className="w-8 h-8  text-purple-400   transition-shadow duration-300 ease-in-out cursor-pointer  " />
                                            :
                                            <HiArrowCircleUp className="w-8 h-8  text-purple-400  transition-shadow duration-300 ease-in-out cursor-pointer  " />
                                    }

                                </button>*/}
                                <div className="flex flex-row w-full max-h-8">
                                    <div className="flex  w-1/2 self-center text-center center items-center justify-end mr-3">

                                        <button type="button" className={`text-xs  font-semibold w-auto px-2 py-1 rounded-md  hover:text-purple-400 hover:bg-gray-900 focus:outline-none active:bg-gray-900 active:text-purple-400 ${!currentStep > 0 ? 'bg-gray-900 text-purple-400' : 'bg-gray-800 text-gray-500'}`} onClick={() => timeLineRender()}>Timeline</button>
                                    </div>
                                    <div className="flex w-1/2">
                                        <button type="button" className={`text-xs text-gray-500 font-semibold w-auto px-2 py-1 rounded-md  bg-gray-800 hover:text-purple-400 hover:bg-gray-900 focus:outline-none  visited:text-purple-400 ${!currentStep > 0 ? 'bg-gray-800 text-gray-500' : 'bg-gray-900 text-purple-400'}`} onClick={() => messagesRender()}>Messages</button>
                                    </div>

                                </div>
                                <div className="flex flex-col  h-full w-full px-2 md:px-1  md:-mr-4  ">
                                    <div className={`mt-2 md:pr-0 w-full h-5/6  bg-gray-700 overflow-y-scroll rounded-lg `}>
                                        {steps[currentStep]}
                                        
                                    </div>
                                    {
                                        currentStep != 0 
                                        &&
                                        <TypingBox/>
                                        
                                    }
                                    
                                    

                                </div>

                            </div>

                       
    </div>
</>
    )
}
export default ToolSide;
