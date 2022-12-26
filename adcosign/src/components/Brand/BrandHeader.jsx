import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../logo192.png'

const BrandHeader = () => {
    let menuitemCommoncss = "rounded-sm px-3 py-1 hover:bg-gray-100 hover:text-blue-500 cursor-pointer"
   
  return (
    
    <div className=' h-20 justify-center flex font-black '>
    <div className='header-new w-5/6 bg-white-50 flex'>
        <div className='logo' >
            <NavLink to="/BrandHome">
                <img src={logo} className='h-20 pr-10'></img>
            </NavLink>

        </div>
        <nav className='menubar my-auto '>
            <ul className='menu flex items-center text-lg '>
                <li className='menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300 ' >

                    <NavLink to="/BrandHome">Home</NavLink>
                </li>
                <li className='menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300' >
                    <NavLink to="/BrandPendingRequest">Pending Requests</NavLink>
                </li>
                <li className='menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300' >
                    <NavLink to="/BrandConsignments">Consignments</NavLink>
                </li>
                <li className='menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300' >
                    <NavLink to="/BrandCurrentConsignment">Current Consignment</NavLink>
                </li>
                <li className='menu-item py-3 px-4  ease-in duration-300' >

                    {/* more items */}
                    <div>
                        <div className="group inline-block">
                            <button
                                className="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                            >
                                <span className="pr-1 font-semibold flex-1 hover:text-blue-500 cursor-pointer">More</span>
                                <span>
                                    <svg
                                        className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <ul
                                className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
                            >
                                <NavLink to='/BrandHistory'>

                                <li className={menuitemCommoncss}>History</li>
                                </NavLink>
                                {/* <li className={menuitemCommoncss}>Add Images</li> */}
                                <NavLink to="/">
                                <li className={menuitemCommoncss}>Logout</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>

                </li>
            </ul>
        </nav>
    </div>


</div>
  )
}

export default BrandHeader