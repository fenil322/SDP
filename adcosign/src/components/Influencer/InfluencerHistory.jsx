import React, { useEffect, useState } from "react";
import InfluencerHeader from "./InfluencerHeader";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "./Navbar";
import { TiLocation } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import loader from "../../Images/loader.gif"

import Rating from '@mui/material/Rating';


const InfluencerHistory = () => {
  const navigate = useNavigate();

  const [profilecard, setprofilecard] = useState([]);
  const [cons, setCons] = useState([])
  const [loading, setLoading] = useState(true);
  const getcurrentconsignmets = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "consignment/getinfluencercurrentconsignments"
      );
      const data = res.data;
      console.log(data);
      setprofilecard(data.data);
      setCons(data.cons)
      setLoading(false)
    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message);
        navigate("/InfluencerLogin");
      }
    }
  };
  useEffect(() => {
    getcurrentconsignmets();
  }, []);

  const rating = (index) => {
    const item = cons[index]
    return item ? item.rating : 0;
  }
  const review = (index) => {
    const item = cons[index]
    // console.log(item.rating);
    return item ? item.review : "no review";
  }
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        <InfluencerHeader page="History" />
        {loading === true ?
          <img src={loader} alt="laoding" className="h-52 mx-auto"
          />
          :
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-10 gap-y-10 max-sm:px-5  max-md:px-10">
            {profilecard.length == 0 ? (
              <h1 className="text-3xl font-bold ">No History Found</h1>
            ) : (
              profilecard.map((data, index) => (

                <div class="mt-10 h-full items-center mx-10 justify-center border-2 border-gray-300 shadow-2xl bg-gray-100  rounded-2xl">
                  <img
                    //src={photo}
                    src={data.logo}
                    class="h-1/3 w-1/3 m-auto mt-5  "
                    alt="image"
                  />

                  <div class="px-5 ">
                    <div className="text-center">
                      <h3 class="text-3xl font-bold font-dmserif text-neutral-700">
                        {data.shopName}
                      </h3>

                      <p class=" text-xl text-gray-700 font-dmserif">
                        {data.brandType}
                      </p>
                    </div>

                    <div className="border-y-2 py-3">

                      <div className="flex space-x-2.5 items-center">
                        <FiPhoneCall size={20} />
                        <p class="mb-1 text-lg ">{data.phone}</p>
                      </div>

                      <div className="flex space-x-2.5 items-center">
                        <MdEmail size={20} />
                        <p class="mb-1 text-lg">{data.email}</p>
                      </div>

                      <div className="flex space-x-2.5 items-center">
                        <TiLocation size={20} />
                        <p class="mb-1 text-lg hover:text-blue-500 ">
                          {data.city+", "+data.country}
                        </p>
                      </div>
                    </div>  
                    <div className="mt-3 text-center">
                      <Rating className="" name="read-only" value={rating(index)} precision={0.01} readOnly />
                      <div className="text-lg"> {review(index)}</div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default InfluencerHistory;
