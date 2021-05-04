import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {HiOutlinePencilAlt} from 'react-icons/hi'
import {IoMdTrash} from 'react-icons/io'
import{IoChevronBackOutline,IoChevronForwardOutline} from 'react-icons/io5'

import TableHeaders  from '../components/TableHeaders'
import DeleteModal from '../components/DeleteModal'

const SIZE = "24px";
function DinamicTable(props) {
    /*console.log(props);*/
    const [headerMeta, setHeaderMeta] = useState(props);
    const belong = props.belongsTo;

    return (
        <>
    <div className="flex   w-full h-screen  justify-center ">
            <div className="container  px-4">
                <table className=" w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-4 md:inline-table">
                    <thead className="text-gray-600 ">
                        <tr className="bg-purple-400 flex flex-col flex-nowrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                            
                            <TableHeaders meta={headerMeta}/>
                        </tr>


                    </thead>
                    <tbody className="flex-1 sm:flex-none text-gray-600">
                        <tr className="flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0 ">
                            <td className="border-grey-light border hover:bg-gray-100 p-3">0123</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">John Covv</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">contato@johncovv.com</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">yuyu</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 ">
                                <span className="text-green-800 bg-green-200 font-semibold px-2 rounded-full shadow-inner">
                                    Active
                                </span>
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                            <Link to={`/${belong}/edit`}>
                                    <button  className="focus:outline-none" tabIndex="0" type="button">
                                        <span className="">
                                            <HiOutlinePencilAlt size={SIZE}/>     
                                        </span>
                                       
                                    </button>
                                </Link>
                                
                                <button onClick={props.onOpenModal} className="focus:outline-none" tabIndex="0" type="button">
                                    <span className="">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                      
                                </button>
                            </td>
                        </tr>
                        <tr className="flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0 ">
                            <td className="border-grey-light border hover:bg-gray-100 p-3">0123</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">John Covv</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">contato@johncovv.com</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">yuyu</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 ">
                                <span className="text-green-800 bg-green-200 font-semibold px-2 rounded-full ">
                                    Active
                                </span>
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                            <Link to={`/${belong}/edit`}>
                                    <button  className="focus:outline-none" tabIndex="0" type="button">
                                        <span className="">
                                            <HiOutlinePencilAlt size={SIZE}/>     
                                        </span>
                                       
                                    </button>
                                </Link>
                                
                                <button onClick={props.onOpenModal} className="focus:outline-none" tabIndex="0" type="button">
                                    <span className="">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                      
                                </button>
                            </td>
                        </tr>
                        <tr className="flex flex-col flex-nowrap sm:table-row mb-2 sm:mb-0 ">
                            <td className="border-grey-light border hover:bg-gray-100 p-3">0123</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">John Covv</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">contato@johncovv.com</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">yuyu</td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 ">
                                <span className="text-gray-800 bg-gray-300 font-semibold px-2 rounded-full ">
                                    Inactive
                                </span>
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                            <Link to={`/${belong}/edit`}>
                                    <button  className="focus:outline-none" tabIndex="0" type="button">
                                        <span className="">
                                            <HiOutlinePencilAlt size={SIZE}/>     
                                        </span>
                                       
                                    </button>
                                </Link>
                                
                                <button onClick={props.onOpenModal} className="focus:outline-none" tabIndex="0" type="button">
                                    <span className="">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                      
                                </button>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
</div>
        

            <DeleteModal
                                    isOpen={props.modalIsOpen}
                                    onClose={props.onClose}
                                    onDelete={props.onDelete}
                                    belongsTo={belong}
                                />
        </>
    )
}

export default DinamicTable
