import React from 'react'
import DataRegister from '../components/DataRegister'
import MethodRegister from '../components/MethodRegister'
import {Link} from 'react-router-dom'
import BigLiveLogo from '../assets/statics/big-gubox-live.svg'
import GridImg from '../assets/statics/img_grid-top.svg'

function Register() {

    const backGrid = {
        backgroundImage: 'url(' + {GridImg} + ')',
    }

    return (
        <div>
            <div className="min-w-screen min-h-full bg-transparent bg-gray-50 flex items-center justify-center px-0 py-0">
                <div className="bg-white text-gray-500  shadow-xl w-full   overflow-hidden">
                    <div className="md:flex w-full h-full  ">
                        <div className="sm:w-full h-full  md:w-5/12 py-10 px-5 md:px-10 ">

                            <MethodRegister></MethodRegister>
                            <div className="flex items-center  justify-end ">
                                <button className="btn-next w-20 font-semibold ">next</button>
                            </div>
                        </div>
                        <div className="hidden md:block w-full py-10 px-10 bg-bannerscolor bg-no-repeat bg-local  bg-right z-10  bg-auto bg-opacity-90" style={{ backgroundImage: `url('${GridImg}')` }} >
                            <div className="flex -my-6 mx-12 z-20">
                                <img
                                src={BigLiveLogo}
                                alt="Gubox live Logo"                   
                                />
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
        </div>
    )
}

export default Register
