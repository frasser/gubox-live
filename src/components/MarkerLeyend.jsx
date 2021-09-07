import React from 'react'

import { GiBattery75 } from 'react-icons/gi'
import { RiDragMoveLine } from 'react-icons/ri'
import { IoMdSpeedometer } from 'react-icons/io'
import { FaTemperatureHigh } from 'react-icons/fa'

import Card from './Card'
const MarkerLeyend = (val,tim) => {
    return (
        <div className={`flex  overflow-x-scroll  md:hide-scroll-bar md:overflow-x-hidden   p-4 mx-1    md:mx-0     ring-bannerscolor shadow-xl rounded-md `} >
                      


                    
                        <Card
                            value={'Moving'}
                            unity={''}
                            time={'5'}
                            icon={<RiDragMoveLine className="w-8 h-6  md:w-10 md:h-8 text-purple-400" />}
                        />


                        <Card
                            value={'30'}
                            unity={'K/H'}
                            time={'3'}
                            icon={<IoMdSpeedometer className="w-8 h-6  md:w-10 md:h-8 text-purple-400" />}
                        />


                        <Card
                            value={'18'}
                            unity={'°C'}
                            time={'5'}
                            icon={<FaTemperatureHigh className="w-8 h-6 md:w-10 md:h-8 text-purple-400" />}
                        />


                        <Card
                            value={'3.2'}
                            unity={'V'}
                            time={'5'}
                            icon={<GiBattery75 className="w-8 h-6  md:w-10 md:h-8 text-purple-400" />}
                        />

                      



                        </div>
    )
}

export default MarkerLeyend
