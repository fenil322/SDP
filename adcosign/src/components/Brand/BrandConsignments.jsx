import React, { useEffect, useState } from "react";
import BrandHeader from "./BrandHeader";

import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

const BrandConsignments = () => {
  const navigate = useNavigate();
  const [profilecard, setprofilecard] = useState([])
  const [amount, setamount] = useState(0);
  const handleendtime = (e) => {
    // setendtime((data)=>[...data,e.target.value])
  }

  const getbrandconsignments = async () => {
    try {
      const res = await axios.get('consignment/getbrandconsignments');
      const data = res.data;
      console.log(data);
      setprofilecard(data.data)
      setamount(data.data1)
      // console.log(profilecard)
      // console.log(amount);
    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message)
        navigate('/BradConsignments')

      }
    }

  }
  useEffect(() => {
    getbrandconsignments()
  }, [])
  return (
    <div className="flex flex-row h-screen">
  <Navbar  />

      <div className=" ml-14 w-screen">
        <BrandHeader page="Agreement" />

        <div className="mx-20 my-10 grid grid-cols-2">
          {
            profilecard.length == 0 ? <h1 className="text-3xl font-bold text-center">No Consignments Found</h1> :
              profilecard.map((item, index) => (
                <div
                  class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    class="object-cover w-full rounded-full h-96 md:h-auto md:w-48 md:rounded-full md:rounded-full-lg m-2 p-2"
                    src={item.photo}

                    alt=""
                  />
                  <div class="flex flex-col justify-between p-4 leading-normal ">
                    <h5 class="mb-2 flex  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.fname} {item.lname}
                      <button className="flex ml-3 my-auto space-x-2 items-center px-3 py-2 bg-sky-500 hover:bg-sky-800 rounded-md drop-shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5   fill-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        {/* <span class="text-white">Message</span> */}
                      </button>
                    </h5>
                    <p class="mb-2 font-normal text-gray-800 dark:text-gray-400">
                      {item.email}
                    </p>
                    <p class="mb-2 font-normal text-gray-800 dark:text-gray-400">
                      {item.phone}

                    </p>
                    <p class="mb-2 font-normal text-gray-800 dark:text-gray-400">
                      {item.city}, {item.state}, {item.country}


                    </p>
                    <p class="mb-2 font-normal text-gray-800 dark:text-gray-400">
                      {/* {amount[index]}              */}
                    </p>

                    <div>
                      <div className=" grid grid-cols-2">


                        {/* <button
                        onClick={async (e) => {
                          e.preventDefault();
                          try {
                            const res = await axios.put('consignment/payment',  { id: item._id  })
                            const resdata = res.data;
                            console.log(resdata)
                            if (resdata.success == true) {
                              window.location.reload();
                            }
                          } catch (err) {
                          }
                        }}
                        className="flex m-1 space-x-2 items-center px-3 py-2 bg-green-600 hover:bg-green-900 rounded-md drop-shadow-md">


                        <span class="text-white">Make Payment</span>
                      </button> */}
                        <button
                          onClick={async (e) => {
                            e.preventDefault();
                            try {
                              const res = await axios.put('consignment/consignmentwithoutpayment', { id: item._id })
                              const resdata = res.data;
                              console.log(resdata)
                              if (resdata.success == true) {
                                window.location.reload();
                              }
                            } catch (err) {
                              console.log(err);
                            }
                          }}
                          className="flex m-1 space-x-2 items-center px-3 py-2 bg-green-600 hover:bg-green-900 rounded-md drop-shadow-md">


                          <span class="text-white">Done</span>
                        </button>
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
                                navigate("/InfluencerConsignments");
                                console.log(err);
                              }
                            } else {
                              navigate("/InfluencerConsignments");
                            }
                          }}
                          class="flex space-x-2 m-1 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md">
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
          }
        </div>
      </div>
    </div>
  );
};

export default BrandConsignments;
