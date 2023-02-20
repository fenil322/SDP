import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../Images/brand1.jpg";

import { FiSettings } from "react-icons/fi";
import axios from "axios";

const BrandHeader = (props) => {
  const navigate = useNavigate();
  
  const [brandData, setbrandData] = useState([]);
  const getBrandData = async () => {
    try {

      const { data } = await axios.get("/brand/getBrandData");
      // const data = res.data;
      // console.log(data);
      setbrandData(data.data);
      console.log("Logged in brand is:- ");
      console.log(brandData);
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status == 422) {
        navigate('/')
      }
    }
  };
  useEffect(() => {
    getBrandData();
  }, []);

  const logout = async () => {
    try {

      const res = await axios.get('/logout')
      console.log(res.data);
      if (res.data.success === true) {
        navigate('/');
      }
    } catch (err) {
      console.log(err);

    }

  }
  return (
    <div className="h-20 flex items-center justify-between mx-20 w-[screen]">
      <nav className="">
        <p className="font-bold">Brand  &gt; {props.page}</p>
      </nav>
      <div className="flex items-center">
        <div className="flex mx-5">
          <FiSettings />
        </div>
        <div class="flex items-center space-x-4">
          <div className="">

          <img class="w-10 h-10 rounded-full group" src={logo} alt="" />
          <div className="absolute hidden group-hover:block">hello</div>
        </div>
          <div class="font-medium ">
            <div>Hi,{brandData.uname}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandHeader;
{/* <nav className="menubar my-auto ">
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


              <li className="menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300"
                onClick={logout}
              >Logout</li>


            </li>
          </ul>
        </nav> */}