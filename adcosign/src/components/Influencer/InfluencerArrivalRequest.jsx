import React, { useEffect, useState } from "react";
import InfluencerHeader from "./InfluencerHeader";
import axios from "axios";
import ReqArrivalCard from "./ReqArrivalCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar"

import loader from "../../Images/loader.gif";

const InfluencerArrivalRequest = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [loading, setloading] = useState(true);
  const [profilecard, setprofilecard] = useState([]);
  const getBrandRequest = async () => {
    try {
      setloading(true)
      const res = await axios.get("consignment/getbrandreq");
      const data = res.data;
      console.log(data.data);
      setprofilecard(data.data);
      console.log(profilecard);
      setloading(false)
    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message);
        navigate("/InfluencerLogin");
      }
    }
  };
  useEffect(() => {
    getBrandRequest();
    // console.log(location);
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        <InfluencerHeader page="Arrival Requests" />
        {loading === true ?
          <img src={loader} alt="laoding" className="h-52 mx-auto"
          />
          : 
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-20 max-sm:px-5  max-md:px-10">
          {profilecard.length == 0 ? (
            <h1 className="text-3xl font-bold text-center">No Request Found</h1>
          ) : (
            profilecard.map((item) => <ReqArrivalCard item={item} />)
          )}
        </div>
          }
          <ToastContainer autoClose={500} />
      </div>
    </div>
  );
};

export default InfluencerArrivalRequest;
