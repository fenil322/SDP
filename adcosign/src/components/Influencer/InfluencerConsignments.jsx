import React, { useState, useEffect } from "react";
import InfluencerHeader from "./InfluencerHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import { BiCurrentLocation } from "react-icons/bi";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";

import loader from "../../Images/loader.gif"
const InfluencerConsignments = () => {
  const navigate = useNavigate();
 
  const [loading, setloading] = useState(true);
  const [profilecard, setprofilecard] = useState([]);
  const getconsignmets = async () => {
    try {
      setloading(true)
      const res = await axios.get("consignment/getinfluencerconsignments");
      const data = res.data;
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
    getconsignmets();
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        <InfluencerHeader page="Agreements" />
        {loading === true ?
          <img src={loader} alt="laoding" className="h-52 mx-auto"
          />
          : 
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-20 max-sm:px-5  max-md:px-10">
          {profilecard.length == 0 ? (
            <h1 className="text-3xl font-bold ml-40">No Any Agreements</h1>
          ) : (
            profilecard.map((data, index) => (
              <div className="mt-10 items-center justify-center  ">
                <div class="mx-auto max-w-md overflow-hidden shadow-2xl bg-gray-100  rounded-2xl">
                  <img
                    //src={photo}
                    src={data.logo}
                    class="h-1/2 w-1/2 m-auto mt-5  "
                    alt="image"
                  />

                  <div class="p-4 ">
                    <div className="text-center">
                      <h3 class="text-3xl font-bold font-dmserif text-neutral-700">
                        {data.shopName}
                      </h3>

                      <p class=" text-xl text-gray-700 font-dmserif">
                        {data.brandType}
                      </p>
                    </div>

                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div className="flex space-x-2.5 items-center">
                      <div>
                        <RiContactsFill size={20} />
                      </div>
                      <div>
                        <p class="mb-1 text-lg ">{data.phone}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2.5 items-center">
                      <div>
                        <MdMarkEmailUnread size={20} />
                      </div>
                      <div>
                        <p class="mb-1 text-lg">{data.email}</p>
                      </div>
                    </div>

                    <div className="flex space-x-2.5 items-center">
                      <div>
                        <BiCurrentLocation size={20} />
                      </div>
                      <div>
                        <p class="mb-1 text-lg hover:text-blue-500 ">
                          {data.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center space-x-6 mb-5">

                    <button
                      onClick={async (e) => {
                        e.preventDefault();
                        if (
                          window.confirm(
                            "Are you sure you want to delete this consignment?"
                          )
                        ) {
                          try {
                            const res = await axios.delete(
                              "consignment/deletetbrandreq",
                              { data: { _id: data._id } }
                            );
                            const resdata = res.data;
                            console.log(resdata);
                            if (resdata.success == true) {
                              window.location.reload();
                            }
                          } catch (err) {
                            navigate("/InfluencerConsignments");
                            console.log(err);
                          }
                        } else {
                          navigate("/InfluencerConsignments");
                        }
                      }}
                      class="flex space-x-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md"
                    >
                      <svg
                        class="fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                      </svg>
                      <span class="text-white">Remove</span>
                    </button>
                    </div>
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

export default InfluencerConsignments;
