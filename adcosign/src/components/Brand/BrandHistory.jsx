import React, { useEffect, useState } from "react";
import BrandHeader from "./BrandHeader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

import loader from "../../Images/loader.gif"
// import {Rating} from "@mui/lab"
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/StarIcon';
// import Rating from "@mui/material/Rating";
const BrandHistory = () => {
  const navigate = useNavigate();
  const [profilecard, setprofilecard] = useState([]);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const [loading, setloading] = useState(true);
  const getbrandcurrentconsignments = async () => {
    try {
      setloading(true);
      const res = await axios.get("consignment/getbrandcurrentconsignments");
      const data = res.data;
      console.log(data);
      setprofilecard(data.data);
      setloading(false);
      // console.log(profilecard)
    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message);
        navigate("/BradConsignments");
      }
    }
  };
  useEffect(() => {
    getbrandcurrentconsignments();
  }, []);

  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  return (
    <div className="flex flex-row h-screen">
      <Navbar />

      <div className=" ml-14 w-screen max-sm:ml-0">
        <BrandHeader page="History" />
        {loading === true ?
          <img src={loader} alt="laoding" className="h-52 mx-auto"
          />
          :
          <div className="mx-20 my-10  max-sm:mx-0 grid md:grid-cols-3 grid-cols-1 ">
            {profilecard.length == 0 ? (
              <h1 className="text-3xl font-bold text-center">
                No Consignments Found
              </h1>
            ) : (
              profilecard.map((item, index) => (
                <div className="mx-10    break-words bg-gray-100  shadow-lg rounded-2xl my-10">
                  {/* <Link to={{
          pathname: '/InfluencerDetails',
          state: { data:data}
        }} > */}

                  <div className="flex ">
                    <div className="flex px-3 my-5">
                      <img
                        src={item.profile}
                        alt="myPic"
                        className="shadow-xl w-32 h-32 rounded-full  "
                      />

                      <div className=" mt-2 ml-5">
                        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                          {item.fname + " " + item.lname}
                        </h3>

                        <div className="text-xs mb-1  text-slate-400 font-bold uppercase">
                          <i className="fas fa-map-marker-alt text-slate-400 opacity-75"></i>
                          {item.gender}
                        </div>
                        <div className="text-xs  mb-2 text-slate-400 font-bold uppercase">
                          <i className="fas fa-map-marker-alt text-slate-400 opacity-75"></i>
                          {item.city + ", " + item.country}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-y">
                    <div className="mt-3 ml-5">
                      <div className="flex space-x-2.5 items-center mt-3">
                        <FiPhoneCall size={20} />
                        <div>{item.phone}</div>
                      </div>
                      <div className="flex space-x-2.5 items-center my-3">
                        <MdEmail size={20} />
                        <div>{item.email}</div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="flex m-1  mx-auto my-4 space-x-2 items-center px-3 py-2 bg-green-600 hover:bg-green-800 rounded-md drop-shadow-md"
                  >
                    <span className="text-white">Give a Feedback</span>
                  </button>



                  {/* </Link > */}
                </div>
              ))
            )}
          </div>
        }
      </div>
    </div>
  );
};

export default BrandHistory;
