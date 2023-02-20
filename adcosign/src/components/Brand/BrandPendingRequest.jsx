import React, { useEffect, useState } from "react";
import BrandHeader from "./BrandHeader";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

const BrandPendingRequest = () => {
  const navigate = useNavigate();
  const [profilecard, setprofilecard] = useState([])
  const getBrandRequest = async () => {
    try {

      const res = await axios.get('consignment/getbrandpendingreq');
      const data = res.data;
      // console.log(data.data);
      setprofilecard(data.data)
      console.log(profilecard)
    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message)
        navigate('/InfluencerLogin')
      }
    }

  }
  useEffect(() => {

    getBrandRequest()
  }, [])
  return (
    <div className="flex flex-row h-[screen]">
      <Navbar />
    <div className="h-screen ml-14 w-screen">
      <BrandHeader page="BrandPendingRequest" />
      <div className="mx-20  my-10 grid grid-cols-2">
        {
          profilecard.length==0 ?<h1 className="text-center text-3xl text-bold">No Pending Request</h1>:
          profilecard.map((item, index) => (
            <div
            class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
          <img
            class="object-cover w-full rounded-full h-96 md:h-auto md:w-48 md:rounded-full md:rounded-full-lg m-2 p-2"
            src={item.photo}
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class=" text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.fname} {item.lname}
            
            </h5>
            <p class="mb-3 font-normal text-gray-800 dark:text-gray-400">
              {item.gender}
            </p>
            <p class="font-normal text-gray-800 dark:text-gray-400">
              {item.phone}
            </p>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">
              {item.email}
            </p>
            <div>
            <button
                  onClick={async (e) => {
                    e.preventDefault()
                    if (window.confirm("Are you sure you want to delete this consignment?")) {

                      try {

                        const res = await axios.delete("consignment/deletetbrandpendingreq", { data: { _id: item._id } });
                        const resdata = res.data;
                        console.log(resdata)
                        if (resdata.success == true) {
                          window.location.reload();
                        }
                      } catch (err) {
                        navigate("/BrandPendingRequest")
;
                        console.log(err);
                      }
                    } else {
                      navigate("/BrandPendingRequest")
;
                    }
                  }}
                  class="flex space-x-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md">
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
          ))
        }
        </div>
    </div>
    </div>
  );
};

export default BrandPendingRequest;
