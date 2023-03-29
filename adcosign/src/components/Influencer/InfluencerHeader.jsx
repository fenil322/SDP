import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

const InfluencerHeader = (props) => {
  const navigate = useNavigate();
  const [userdata, setuserdata] = useState([]);

  const getInfluencerData = async () => {
    const res = await axios.get("influencer/getInfluencer");
    const data = res.data;
    setuserdata(data.data)
    // console.log(userdata);
  }
  useEffect(() => {
    getInfluencerData()
  }, [])



  return (
    <div className="h-20 flex items-center justify-between mx-20 max-sm:mx-2 w-[screen] border-b-2 ">
      <nav className="">
        <p className="font-bold">Influencer  &gt; {props.page}</p>
      </nav>
      <div className="flex items-center">
        {/* <div className="flex mx-5">
          <FiSettings />
        </div> */}
        <NavLink to='/InfluencerProfile'>
          <div class="flex items-center space-x-4">
            <div className="">

              <img class="w-10 h-10 rounded-full group" src={userdata.profile} alt="" />
            </div>
            <div className="font-medium hover:text-blue-700 cursor-pointer ">
              <div>Hi,{userdata.fname}</div>
            </div>
          </div>
        </NavLink>
      </div>
    </div >
  );
};

export default InfluencerHeader;
