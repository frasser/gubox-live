import React,{useState} from 'react'
import Methods from '../components/Methods'
import PswRegister from '../components/PswRegister'

function useFormProgress2(){
    const [currentStep2,setCurrentStep2]=useState(0);

    function goFor(){
        setCurrentStep2(currentStep2 + 1);
    }
    function goBa(){
        setCurrentStep2(currentStep2 -1)
    }

    return [currentStep2,goFor,goBa]
}
const MethodRegister =() => {
    const steps2 = [<Methods/>,<PswRegister/>];
    const [currentStep2, goFor, goBa] = useFormProgress2();
    const isFirst2 = currentStep2 === 0;
    const isLast2 = currentStep2 === steps2.length - 1;
    return (
        <>
                            <div className="text-center mb-10"> 
                              
                                <p className="text-realgrey font-semibold">You are registering as:</p>
                            </div>
                            <div className="block">
                                <p className="text-realgrey font-semibold">pepo perez</p>
                                
                                <p className="text-realgrey font-semibold">correo@hotmail.com</p>
                                

                            </div>
                            <div className="block my-8  pb-4">
                            {steps2[currentStep2]}
                                <div className="border-t-2 py-2">
                                    {!isFirst2
                                    ?
                                    <button className="btn-next w-full" >Create Account</button>
                                    :
                                    <button className="btn-next w-full"  onClick={()=>goFor()}>with password</button>
                                    }
                                   
                                </div>
                            </div>
                            

            
        </>
    )
}

export default MethodRegister
