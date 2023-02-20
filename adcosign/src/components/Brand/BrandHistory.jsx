import React, { useEffect, useState } from "react";
import BrandHeader from "./BrandHeader";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

const BrandHistory = () => {
  const navigate = useNavigate();
  const [profilecard, setprofilecard] = useState([])
  const [amount, setamount] = useState(0);
  const [paymentstatus, setpaymentstatus] = useState(0);

  const [starttime, setstarttime] = useState(0);
  const [endtime, setendtime] = useState(0);

  const getbrandcurrentconsignments = async () => {
    try {
      const res = await axios.get('consignment/getbrandcurrentconsignments');
      const data = res.data;
      console.log(data);
      setprofilecard(data.data)
      setamount(data.data1)
      setstarttime(data.data2)
      setendtime(data.data3)
      setpaymentstatus(data.data4)

      // console.log(profilecard)
      console.log(amount);
    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message)
        navigate('/BradConsignments')
      }
    }
  }
  useEffect(() => {
    getbrandcurrentconsignments()
  }, [])
  return (
    <div className="flex flex-row h-screen">
    <Navbar  />
  
        <div className=" ml-14 w-screen">
      <BrandHeader page="History"/>
      <div className="my-10 mx-10  grid grid-cols-2">
        {
        profilecard.length == 0 ? <h1 className="text-3xl font-bold text-center">No Consignments Found</h1> :
          profilecard.map((item, index) => (
            <a
              href="#"
              class="flex flex-col  w-5/6 items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                class="object-cover w-full rounded-full h-96 md:h-auto md:w-48 md:rounded-full md:rounded-full-lg m-2 p-2"
                src={item.photo}
                alt=""
              />
              <div class="flex flex-col   justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.fname} {item.lname}
                </h5>
                <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                  {item.email}
                </p>
                <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                  {item.phone}
                </p>
                <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                  Amount:{amount[index]}
                </p>
                <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                  Start Date : {starttime[index]}
                </p>
                <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                  End Date : {endtime[index]}
                </p>
                <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                  Payment Status:{paymentstatus[index] == 1 ? <b>Done</b> : <b>Not Done</b>}
                </p>
                <div>
                  <button
                    onClick={async (e) => {
                      e.preventDefault();
                      try {
                        const res = await axios.put('consignment/payment', { id: item._id })
                        const resdata = res.data;
                        console.log(resdata)
                        if (resdata.success == true) {
                          window.location.reload();
                        }
                      } catch (err) {
                        console.log(err);
                      }
                    }}
                    className="flex m-1 space-x-2 items-center px-3 py-2 bg-green-600 hover:bg-green-800 rounded-md drop-shadow-md">
                    <span class="text-white">Make Payment</span>
                  </button>
                  <button
                    type="button"
                    class="flex m-1 space-x-2 items-center px-3 py-2 bg-green-600 hover:bg-green-800 rounded-md drop-shadow-md"
                  >
                    <span className="text-white">Give a Feedback</span>
                  </button>

                </div>
              </div>
            </a>
          ))}
      </div>
      </div>
    </div>
  );
};

export default BrandHistory;
