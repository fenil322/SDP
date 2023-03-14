import React, { useEffect, useState } from "react";
import InfluencerHeader from "./InfluencerHeader";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "./Navbar";
import { BiCurrentLocation } from "react-icons/bi";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

const InfluencerHistory = () => {
  const navigate = useNavigate();

  const [profilecard, setprofilecard] = useState([]);
  const getcurrentconsignmets = async () => {
    try {
      const res = await axios.get(
        "consignment/getinfluencercurrentconsignments"
      );
      const data = res.data;
      console.log(data);
      setprofilecard(data.data);
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
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        <InfluencerHeader page="History" />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-20 max-sm:px-5  max-md:px-10">
          {profilecard.length == 0 ? (
            <h1 className="text-3xl font-bold ">No Agreements Found</h1>
          ) : (
            profilecard.map((data, index) => (
              <div className="mt-20 items-center justify-center mx-10 shadow-2xl bg-gray-100  rounded-lg ">
                <div class="mx-auto max-w-md overflow-hidden">
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
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default InfluencerHistory;
