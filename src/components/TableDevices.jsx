import React from 'react'
import {HiOutlinePencilAlt} from 'react-icons/hi'
import {IoMdTrash} from 'react-icons/io'
import '../styles/components/TableDevices.css'

const SIZE = "24px";
const TableDevices =() => {
    return (
        <>
            <div className="MuiPaper-root  MuiCard-root w-full overflow-auto MuiPaper-elevation6  MuiPaper-rounded">
                <table className="MuiTable-root whitespace-pre min-w-750 jss12">
                    <thead className="MuiTableHead-root">
                        <tr className="MuiTableRow-root MuiTableRow-head">
                            <th className="MuiTaleCell-root MuiTableCell-head" scope="col">Name</th>
                            <th className="MuiTaleCell-root MuiTableCell-head" scope="col">Serial</th>
                            <th className="MuiTaleCell-root MuiTableCell-head" scope="col">Icon</th>
                            <th className="MuiTaleCell-root MuiTableCell-head" scope="col">Last See</th>
                            <th className="MuiTaleCell-root MuiTableCell-head" scope="col">Status</th>
                            <th className="MuiTaleCell-root MuiTableCell-head" scope="col">Action</th>
                            
                        </tr>
                    </thead>
                    <tbody className="MuiTableBody-root">
                        <tr className="MuiTableRow-root MuiTableRow-hover">
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">Montacarga</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">DO900YUI</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">XX</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">timestamp</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <small className="rounded g-light-gray elevation-z3 px-2 py-2px">inactive</small>
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <HiOutlinePencilAlt size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>    
                                </button>
                            </td>
                        </tr>
                        <tr className="MuiTableRow-root MuiTableRow-hover">
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">VCY799</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">QOP08877</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">XX</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">timestamp</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <small className="rounded bg-primary text-white elevation-z3 px-2 py-2px">inactive</small>
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <HiOutlinePencilAlt size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>    
                                </button>
                            </td>
                        </tr>
                        <tr className="MuiTableRow-root MuiTableRow-hover">
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">Patineta</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">W100YUI</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">XX</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">timestamp</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <small className="rounded g-light-gray elevation-z3 px-2 py-2px">inactive</small>
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <HiOutlinePencilAlt size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>    
                                </button>
                            </td>
                        </tr>
                        <tr className="MuiTableRow-root MuiTableRow-hover">
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">RO900YUI</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">XX</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">timestamp</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <small className="rounded bg-primary text-white elevation-z3   px-2 py-2px">active</small>
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <HiOutlinePencilAlt size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>    
                                </button>
                            </td>
                        </tr>


                        <tr className="MuiTableRow-root MuiTableRow-hover">
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">RO900YUI</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">XX</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">timestamp</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <small className="rounded bg-primary text-white elevation-z3   px-2 py-2px">active</small>
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <HiOutlinePencilAlt size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>    
                                </button>
                            </td>
                        </tr>


                        <tr className="MuiTableRow-root MuiTableRow-hover">
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">RO900YUI</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">XX</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">timestamp</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <small className="rounded bg-primary text-white elevation-z3   px-2 py-2px">active</small>
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <HiOutlinePencilAlt size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>    
                                </button>
                            </td>
                        </tr>

                        <tr className="MuiTableRow-root MuiTableRow-hover">
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">RO900YUI</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">XX</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">timestamp</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <small className="rounded bg-primary text-white elevation-z3   px-2 py-2px">active</small>
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <HiOutlinePencilAlt size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>    
                                </button>
                            </td>
                        </tr>

                        <tr className="MuiTableRow-root MuiTableRow-hover">
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">RO900YUI</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">XX</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">timestamp</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <small className="rounded bg-primary text-white elevation-z3   px-2 py-2px">active</small>
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <HiOutlinePencilAlt size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>    
                                </button>
                            </td>
                        </tr>

                        <tr className="MuiTableRow-root MuiTableRow-hover">
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">RO900YUI</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">XX</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">timestamp</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <small className="rounded bg-primary text-white elevation-z3   px-2 py-2px">active</small>
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <HiOutlinePencilAlt size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>    
                                </button>
                            </td>
                        </tr>
                        <tr className="MuiTableRow-root MuiTableRow-hover">
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">RO900YUI</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">XX</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">timestamp</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <small className="rounded bg-primary text-white elevation-z3   px-2 py-2px">active</small>
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <HiOutlinePencilAlt size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>    
                                </button>
                            </td>
                        </tr>
                        <tr className="MuiTableRow-root MuiTableRow-hover">
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignLeft">RO900YUI</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">XX</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">timestamp</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <small className="rounded bg-primary text-white elevation-z3   px-2 py-2px">active</small>
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <HiOutlinePencilAlt size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>
                                </button>
                                <button className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>    
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
            
        </>
    )
}

export default TableDevices
