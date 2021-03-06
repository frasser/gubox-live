import React, {useState,useContext}from 'react'
import DataRegister from '../components/DataRegister'
import MethodRegister from '../components/MethodRegister'
import MultiSteps from '../components/MultiSteps'
import {Link} from 'react-router-dom'
import BigLiveLogo from '../assets/statics/big-gubox-live.svg'
import GridImg from '../assets/statics/img_grid-top.svg'
import PageLoading from '../components/PageLoading'
import AppContext from '../context/AppContext' 

function useFormProgress(){
    const [currentStep,setCurrentStep]=useState(0);

    function goForward(){
        setCurrentStep(currentStep + 1);
    }
    function goBack(){
        setCurrentStep(currentStep -1)
    }

    return [currentStep,goForward,goBack]
}
function Register() {

    
    const {state,submitRegister,submitRegisterReceived} = useContext(AppContext)
    const steps =[<DataRegister/>,<MethodRegister/>];

    const [currentStep, goForward, goBack] = useFormProgress();
    const isFirst = currentStep === 0;
    const isLast = currentStep === steps.length - 1;


    function handleSubmit() {
        submitRegister()
    
        // Simulated network request :)
        setTimeout(() => {
            submitRegisterReceived()
        }, 1500);
      }

      if (state.isSubmitLoading) {
        return (
          <div className="App">
            <PageLoading/>
          </div>
        );
      }
      if (state.isSubmissionReceived) {
        return (
          <div className="App">
            <h1>Thanks for your submission!</h1>
            <pre style={{ textAlign: "left" }}>
              {JSON.stringify(state, null, 2)}
            </pre>
          </div>
        );
      }

    return (
        <>
            
            <div className="min-w-screen h-full bg-transparent bg-gray-50 flex items-center justify-center px-0 py-0">
                <div className="bg-white text-gray-500   w-full   overflow-hidden">
                    <div className="md:flex w-full h-full  ">
                      <div className="md:block md:w-5/12 md:pt-12 ">
                        <div className=' md:w-full '>
                        
                          <MultiSteps 
                          step={isFirst}
                          />
                        </div>

                          <div className="w-full      py-1 px-10 ">
                              {steps[currentStep]}
                          </div>
                              <div className="flex   w-full  justify-end  pr-10 ">
                              
                              
                              {!isFirst 
                              ?
                              <button className="font-bold text-center no-underline bg-white outline-none cursor-pointer rounded-lg border border-solid border-blue-500 text-blue-500 text-base py-2.5 px-3 block  " onClick={()=>goBack()}>Back</button> 
                              :
                              <button className="btn-next " onClick={()=>goForward()}>Next</button>
                              }
                                  
                              </div>
                              <div className=" flex  text-center w-full h-full justify-center bg-gray-100">
                                <Link to="/login">
                                  <span className="text-base text-blue-400 no-underline hover:text-blue-500" >
                                    Ya tengo una cuenta
                                  </span>
                                </Link>
                              </div>
                              
                          
                        </div>
                        <div className="hidden md:block w-full py-16 px-10 bg-bannerscolor  bg-opacity-90" /*style={{ backgroundImage: `url('${GridImg}')` }}*/ >
                            <div className="flex -my-6 mx-12 z-20 ">
                                <div className="inline-flex">
                                <img
                                
                                src={BigLiveLogo}
                                alt="Gubox live Logo"                   
                                />
                                </div>
                                <div className="opacity-30  inline-flex pl-32 ">
                                <img 
                                
                                src={GridImg}
                                alt="Gubox live Logo"                   
                                 />
                            </div>
                            </div>

                            <div className="inline-grid max-w-xl mt-12 mr-0 mb-auto ml-20 z-20 relative">
                                <p className="font-medium text-2xl">Gubox live is the platform built for enchance user experiences using the devices offering by gubox.<br/></p>

                                <p className="font-medium mt-3 text-2xl">This app offers deep immersion in the management and visualization of the data, events, and explorations of your tracking devices.</p>
                            </div>
                            <div className="flex opacity-50">
                                <img 
                                src={GridImg}
                                alt="Gubox live Logo"                   
                                 />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
      </>
    )
}

export default Register
