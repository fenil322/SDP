import React, { useState, useEffect } from "react";
import InfluencerHeader from "./InfluencerHeader";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InfluencerConsignments = () => {

  const navigate = useNavigate();
  const [amount, setAmount] = useState([]);

  const [profilecard, setprofilecard] = useState([])
  const getconsignmets = async () => {
    try {

      const res = await axios.get('consignment/getinfluencerconsignments');
      const data = res.data;
      // console.log(data.data);
      setAmount(data.data1);
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

    getconsignmets()
  }, [])

  return (
    <div className="h-screen">
      <InfluencerHeader />
      {profilecard.length == 0 ? 
      <h1 className="text-3xl font-bold ml-40">No Any Agreements</h1> :

        profilecard.map((data, index) => (
          <div className="ml-60 mt-10 ">

            <div class="flex flex-col w-4/6 items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >


              <img
                class="object-cover w-full rounded-none h-96 md:h-auto md:w-48 md:rounded-none md:rounded-none-lg m-1 p-1"
                src={data.photo1}
                alt=""
              />
              <div class="flex flex-col   justify-between p-6 leading-normal">
                <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                  Brand Name : {data.shopName}

                </p>
                <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                  Address : {data.address}

                </p>
                <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                  Email : {data.email}

                </p>
                <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                  Contact No. : {data.phone}

                </p>
                <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                  Amount : {amount[index]}
                </p>
              </div>
              <div className=" flex space-x-4">

              <button className="flex space-x-2 items-center px-3 py-2 bg-sky-500 hover:bg-sky-800 rounded-md drop-shadow-md">
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
                  <span class="text-white">Message</span>
                </button>
                <button
                  onClick={async (e) => {
                    e.preventDefault()
                    if (window.confirm("Are you sure you want to delete this consignment?")) {

                      try {

                        const res = await axios.delete("consignment/deletetbrandreq", { data: { _id: data._id } });
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
  );
};

export default InfluencerConsignments;
