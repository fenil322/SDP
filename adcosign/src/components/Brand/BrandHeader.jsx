import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import logo from "../../logo192.png";
import image from "../../Images/demo.JPG";
import { FiSettings } from "react-icons/fi";
import axios from "axios";

const BrandHeader = () => {
const navigate = useNavigate();

  const logout = async() => {
    try{

      const res = await axios.get('/logout')
      console.log(res.data);
      if(res.data.success == true){
        navigate('/');
      }
    }catch(err){
      console.log(err);
      
    }

  }
  return (
    <div className=" h-20 justify-center flex font-black ">
      <div className="header-new w-full bg-white-50 flex">
        <div className="logo">
          <NavLink to="/BrandHome">
            <img src={logo} alt="no img" className="h-20 pr-10"></img>
          </NavLink>
        </div>
        <nav className="menubar my-auto ">
          <ul className="menu flex items-center text-lg ">
            <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300 ">
              <NavLink to="/BrandHome">Home</NavLink>
            </li>
            <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300">
              <NavLink to="/BrandPendingRequest">Pending Requests</NavLink>
            </li>
            <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300">
              <NavLink to="/BrandArrivalRequest">Arrival Requests</NavLink>
            </li>
            <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300">
              <NavLink to="/BrandConsignments">Agreements</NavLink>
            </li>
            <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300">
              <NavLink to="/BrandHistory">
                History
              </NavLink>
            </li>
            <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300">
              <NavLink to="/BrandProfile">Profile</NavLink>
            </li>
            <li className="menu-item py-3 px-4  ease-in duration-300">
              {/* more items */}


              <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300"
                onClick={logout}
              >Logout</li>


            </li>
          </ul>
        </nav>
      </div>
      <div className="flex">
        <div className="flex items-center mr-6">
          <FiSettings />
        </div>
        <div className="mr-20 justify-center header-new flex">
          <div class="flex items-center space-x-4">
            <img class="w-10 h-10 rounded-full" src={image} alt="" />
            <div class="font-medium ">
              <div>Hi,Shwetangi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;
