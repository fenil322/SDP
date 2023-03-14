import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../Images/brand1.jpg";

import { FiSettings } from "react-icons/fi";
import axios from "axios";
import { toast } from "react-toastify";

const BrandHeader = (props) => {
  const navigate = useNavigate();
  
  const [brandData, setbrandData] = useState([]);
  const getBrandData = async () => {
    try {

      const { data } = await axios.get("/brand/getBrandData");
      // const data = res.data;
      // console.log(data);
      setbrandData(data.data);
      // console.log("Logged in brand is:- ");
      // console.log(brandData);
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status == 422) {
        // navigate('/')
        toast.error("somthing went wronge..")
      }
    }
  };
  useEffect(() => {
    getBrandData();
  }, []);

  
  return (
    <div className="h-20 flex items-center border-b-2 justify-between mx-20 w-[screen]">
      <nav className="">
        <p className="font-bold">Brand  &gt; {props.page}</p>
      </nav>
      <div className="flex items-center">
        {/* <div className="flex mx-5">
          <FiSettings />
        </div> */}
        <div class="flex items-center space-x-4">
          <div className="">
          <img class="w-10 h-10 rounded-full group" src={brandData.logo} alt="" />
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
