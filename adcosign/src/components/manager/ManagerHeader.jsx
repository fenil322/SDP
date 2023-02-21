import axios from 'axios'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../logo192.png'
import { FiSettings } from "react-icons/fi";
  

const ManagerHeader = (props) => {
  const navigate = useNavigate();
  let menuitemCommoncss = "rounded-sm px-3 py-1 hover:bg-gray-100 hover:text-blue-500 cursor-pointer"

  const logout = async () => {
    try {

      const res = await axios.get('/logout')
      console.log(res.data);
      if (res.data.success == true) {
        navigate('/');
      }
    } catch (err) {
      console.log(err);

    }

  }
  return (
    <div className="h-20 flex items-center justify-between mx-20 w-[screen] border-b-2">
      <nav className="">
        <p className="font-bold">Manager  &gt; {props.page}</p>
      </nav>
      <div className="flex items-center">
        <div className="flex mx-5">
          <FiSettings />
        </div>
        <div class="flex items-center space-x-4">
          <div className="">

          <img class="w-10 h-10 rounded-full group" src={logo} alt="DP" />
          {/* <div className="absolute hidden group-hover:block">hello</div> */}
        </div>
          <div class="font-medium ">
            <div>Hi,Manager</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManagerHeader
      // <div>
      //   <div className=' h-20 justify-center flex font-black '>
      //     <div className='header-new w-5/6 bg-white-50 flex'>
      //       <div className='logo' >
      //         <NavLink to="/ManagerHome">
      //           <img src={logo} className='h-20 pr-10'></img>
      //         </NavLink>
  
      //       </div>
      //       <nav className='menubar my-auto '>
      //         <ul className='menu flex items-center text-lg '>
      //           <li className='menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300 ' >
  
      //             <NavLink to="/ManagerHome">Home</NavLink>
      //           </li>
  
      //           <li className='menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300' >
      //             <NavLink to="/AddNewBrand">New Brands</NavLink>
      //           </li>
      //           <li className='menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300' >
      //             <NavLink to="/AddNewInfluencer">New Influencers</NavLink>
      //           </li>
  
      //           <li className='menu-item py-3 px-4  ease-in duration-300' >
  
      //             {/* more items */}
      //             <div>
      //               <div className="group inline-block">
      //                 <button
      //                   className="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
      //                 >
      //                   <span className="pr-1 font-semibold flex-1 hover:text-blue-500 cursor-pointer">More</span>
      //                   <span>
      //                     <svg
      //                       className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
      //                       xmlns="http://www.w3.org/2000/svg"
      //                       viewBox="0 0 20 20"
      //                     >
      //                       <path
      //                         d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
      //                       />
      //                     </svg>
      //                   </span>
      //                 </button>
      //                 <ul
      //                   className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
      //                 >
      //                   <NavLink to='#'>
  
      //                     <li className={menuitemCommoncss}>Edit Profile</li>
      //                   </NavLink>
      //                   <NavLink to='#'>
  
      //                     <li className={menuitemCommoncss}>History</li>
      //                   </NavLink>
      //                   {/* <li className={menuitemCommoncss}>Add Images</li> */}
  
      //                   <li className={menuitemCommoncss} onClick={logout}>Logout</li>
  
      //                 </ul>
      //               </div>
      //             </div>
  
      //           </li>
      //         </ul>
      //       </nav>
      //     </div>
  
  
      //   </div></div>