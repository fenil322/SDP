import React, { useEffect, useState } from "react";
import InfluencerHeader from "./InfluencerHeader";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const InfluencerCurrentConsignments = () => {

  const navigate = useNavigate();
  const [amount, setamount] = useState(0);
  const [paymentstatus, setpaymentstatus] = useState(0);

  const [starttime, setstarttime] = useState(0);
  const [endtime, setendtime] = useState(0);

  const [profilecard, setprofilecard] = useState([{
    _id: "",
    uname: "", shopName: "", brandType: "", phone: "", email: "", city: "", state: "", country: "",
    address: "", location: "", photo1: ""
  }])
  const getcurrentconsignmets = async () => {
    try {
      const res = await axios.get('consignment/getinfluencercurrentconsignments');
      const data = res.data;
      console.log(data);
      setprofilecard(data.data)
      setamount(data.data1)
      setstarttime(data.data2)
      setendtime(data.data3)
      setpaymentstatus(data.data4)

    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message)
        navigate('/InfluencerLogin')
      }
    }
  }
  useEffect(() => {

    getcurrentconsignmets()
  }, [])
  return (
    <div className="h-screen">
      <InfluencerHeader />
      <div className="mx-20 my-10 grid grid-cols-2">
        {
          profilecard.length == 0 ? <h1 className="text-3xl font-bold text-center">No Consignments Found</h1> :
            profilecard.map((item, index) => (

              <a
                href="#"
                class="flex flex-col w-4/6 items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <img
                  class="object-cover w-full rounded-none h-96 md:h-auto md:w-48 md:rounded-none md:rounded-none-lg m-1 p-1"
                  src={item.photo1}
                  alt="Brand image"
                />
                <div class="flex flex-col   justify-between p-6 leading-normal">
                  <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                    Owner Name : {item.uname}
                  </p>
                  <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                    Address : {item.address}
                  </p>
                  <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                    Contact No. :{item.phone}
                  </p>
                  <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                    Amount : {amount[index]}
                  </p>
                  <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                    Start Date: {starttime[index]}
                  </p>
                  <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                    End Date:{endtime[index]}
                  </p>
                  <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                    Payment Status:{paymentstatus[index] == 1 ? <b>Done</b> : <b>Not Done</b>}
                  </p>
                </div>
              </a>
            ))
        }
      </div>
    </div>
  );
};

export default InfluencerCurrentConsignments;
