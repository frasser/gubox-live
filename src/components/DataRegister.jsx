import React from 'react'

const DataRegister =() => {
    return (
        <div className="pb-2 md:pb-0 ">
                            <div className="text-center mb-2 md:mb-10 ">
                                <h1 className="font-bold text-3xl text-gray-600">REGISTER</h1>
                                <p className="text-realgrey">Enter your information to register</p>
                            </div>
                                        <form>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-3 md:mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">First Name</label>
                                    <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input type="text" className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Name(s)"/>
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-3 md:mb-5">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
                                    <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input type="text" className="w-full -ml-10 pl-4 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Last Name(s)" />
                                    </div>
                                </div>
                                
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5 ">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                                    <p className="text-realgrey">We will send you a confirmation email to activate your account if you have not done so before</p>
                                    <div className="flex mt-4 ">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="yourName@example.com"/>
                                        
                                    </div>
                                </div>
                            </div>
                            </form>
            
        </div>
    )
}

export default DataRegister
