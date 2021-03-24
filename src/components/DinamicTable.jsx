import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {HiOutlinePencilAlt} from 'react-icons/hi'
import {IoMdTrash} from 'react-icons/io'
import{IoChevronBackOutline,IoChevronForwardOutline} from 'react-icons/io5'
import '../styles/components/TableDevices.css'
import TableHeaders  from '../components/TableHeaders'
import DeleteModal from '../components/DeleteModal'

const SIZE = "24px";
function DinamicTable(props) {
    /*console.log(props);*/
    const [headerMeta, setHeaderMeta] = useState(props);
    const belong = props.belongsTo;

    return (
        <>
        
                      <div className="MuiPaper-root  MuiCard-root w-full overflow-auto MuiPaper-elevation6  MuiPaper-rounded">
                <table className="MuiTable-root whitespace-pre min-w-750 jss12">
                    <thead className="MuiTableHead-root">
                        <tr className="MuiTableRow-root MuiTableRow-head">
                        
                            <TableHeaders meta={headerMeta}/>
                        </tr>
                    </thead>
                    <tbody className="MuiTableBody-root">
                        <tr className="MuiTableRow-root MuiTableRow-hover">
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">Montacarga</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">DO900YUI</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">XX</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">timestamp</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <small className="rounded g-light-gray elevation-z3 px-2 py-2px">inactive</small>
                            </td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 ">
                                <Link to={`/${belong}/edit`}>
                                    <button  className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                        <span className="MuiIconButton-label">
                                            <HiOutlinePencilAlt size={SIZE}/>     
                                        </span>
                                        <span className="MuiTouchRipple-root"></span>
                                    </button>
                                </Link>
                                
                                <button onClick={props.onOpenModal} className="MuiButtonBase-root MuiIconButton-root" tabIndex="0" type="button">
                                    <span className="MuiIconButton-label">
                                        <IoMdTrash size={SIZE}/>     
                                    </span>
                                    <span className="MuiTouchRipple-root"></span>    
                                </button>


                            </td>
                        </tr>
                        
                        <tr className="MuiTableRow-root MuiTableRow-hover">
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">VCY799</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">QOP08877</td>
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
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">Patineta</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">W100YUI</td>
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
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">RO900YUI</td>
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
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">RO900YUI</td>
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
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">RO900YUI</td>
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
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">RO900YUI</td>
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
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">RO900YUI</td>
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
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">RO900YUI</td>
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
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">RO900YUI</td>
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
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">Montacarga2</td>
                            <td className="MuiTableCell-root MuiTableCell-body px-0 MuiTableCell-alignCenter">RO900YUI</td>
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
                <div className="MuiTablePagination-root px-4">
                    <div className="MuiToolbar-root MuiToolbar-regular MuiTablePagination-toolbar MuiToolbar-gutters">
                        <div className="MuiTablePagination-spacer"></div>
                        <p className="MuiTypography-root MuiTablePagination-caption MuiTypography-body2 MuiTypography-colorInherit" id="mui-4173">Max rows per page: 10</p>
                        <div className="MuiInputBase-root MuiTablePagination-input MuiTablePagination-selectRoot">
                        </div>
                        <p className="MuiTypography-root MuiTablePagination-caption MuiTypography-body2 MuiTypography-colorInherit">1-10 of {'12'}</p>
                        <div className="MuiTablePagination-actions">
                            <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit Mui-disabled" tabIndex="-1" type="button" disabled title="Previous page" aria-label="Previous Page">
                                <span className="MuiIconButton-label">
                                    <IoChevronBackOutline size={SIZE}/>
                                </span>
                            </button>
                            <button className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit " tabIndex="0" type="button" disabled title="Next page" aria-label="Next Page">
                                <span className="MuiIconButton-label">
                                    <IoChevronForwardOutline size={SIZE}/>
                                </span>
                                <span className="MuiTouchRipple-root"></span>
                            </button>
                        </div>
                    </div>
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
