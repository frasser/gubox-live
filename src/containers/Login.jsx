import React from 'react'
import {Link} from 'react-router-dom'


import BigLiveLogo from '../assets/statics/big-gubox-live.svg'
import GridImg from '../assets/statics/img_grid-top.svg'


const Login =() =>{
    return (
        
            
        <div className="min-w-screen h-screen bg-transparent bg-gray-50 flex items-center justify-center px-0 py-0">
        <div className="bg-white text-gray-500   w-full   overflow-hidden">
            <div className="md:flex w-full h-full  ">
              <div className="md:block md:w-5/12 md:pt-12 ">
                <div className=' md:w-full '>


                <div className="pt-4 ">
                        <div className="pt-2 pb-0 px-3" >
                            <button className="btn-faceboock w-full font-semibold">
                        
                            
                            Iniciar sesión con facebook 
                            </button>
                
                        </div>
                        <div className="pt-2 px-3 pb-2">
                
                            <button className="btn-twitter w-full font-semibold ">
                                
                            Iniciar sesión con twitter 
                            </button>
                        </div>
                </div>
                    <div className=" flex flex-row text-center overflow-hidden my-4 mx-auto w-11/12  ">
                        <div className="flex flex-row  w-1/2 border-t border-solid border-gray-300 mt-3 ">

                        </div>
                        <span className=" flex flex-row     px-2 ">
                            
                            <span>o</span>
                            
                        </span>
                        <div className="flex flex-row  w-1/2 border-t border-solid border-gray-300 mt-3 ">

                        </div>
                    </div>
                    <div className="pt-0 px-3 pb-6">
                        <form method="post">
                            <div className="relative flex flex-col mb-0">
                                <input type="email" name="email" required="" autoComplete="off" placeholder="Tu email" className="border border-gray-300  h-12 rounded-lg text-gray-60 focus:outline-none focus:ring focus:border-blue-300 px-4"/>
                                
                                <p className="FormInput-error"> </p>
                            </div>
                            <div className="relative flex flex-col mb-0 mt-2">
                                <input type="password" name="password" required="" autoComplete="off" placeholder="Tu contraseña" className="border border-gray-300  h-12 rounded-lg text-gray-600  focus:outline-none focus:ring focus:border-blue-300 px-4"/>
                           
                                <p className="FormInput-error"> </p>
                            </div>
                            <button className="btn-next w-full mt-3"><span>Inicia sesión</span></button>
                            <div className="mt-4 text-center"><Link to="/password/reset/"><span className="text-base text-blue-400 no-underline" >¿Olvidaste tu contraseña?</span></Link></div>
                        </form>
                    </div>
                    <div className="pt-4 px-3 pb-1 bg-gray-100">
                        <div className="mb-4 text-center text-base font-semibold"><span>¿Aún no tienes cuenta en Gubox Live?</span></div>
                        <Link to="/register"><div className="AccountFooter-link">
                            <span className="font-bold text-center no-underline bg-white outline-none cursor-pointer rounded-lg border border-solid border-blue-500 text-blue-500 text-base py-3 px-3 block">Regístrate</span></div></Link>
                    </div>
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
            
            
        
    )
}

export default Login
