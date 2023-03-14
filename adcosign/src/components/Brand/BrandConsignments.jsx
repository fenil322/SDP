import React, { useEffect, useState } from "react";
import BrandHeader from "./BrandHeader";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import loader from "../../Images/loader.gif"
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail, MdFileDownloadDone } from "react-icons/md";

const BrandConsignments = () => {
  const navigate = useNavigate();
  
  const [loading, setloading] = useState(true);
  const [profilecard, setprofilecard] = useState([]);
  const handleendtime = (e) => {
    // setendtime((data)=>[...data,e.target.value])
  };

  const getbrandconsignments = async () => {
    try {
      setloading(true);
      const res = await axios.get("consignment/getbrandconsignments");
      const data = res.data;
      console.log(data);
      setprofilecard(data.data);
      setloading(false);
    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message);
        navigate("/BradConsignments");
      }
    }
  };
  useEffect(() => {
    getbrandconsignments();
  }, []);
  return (
    <div className="flex flex-row h-screen">
      <Navbar />

      <div className=" ml-14 w-screen">
        <BrandHeader page="Agreement" />
        {loading === true ?
          <img src={loader} alt="laoding" className="h-52 mx-auto"
          />
          : 
        <div className="mx-20 grid-cols-2mx-20 my-10 grid md:grid-cols-3 grid-cols-1">
          {profilecard.length == 0 ? (
            <h1 className="text-3xl font-bold text-center">
              No Consignments Found
            </h1>
          ) : (
            profilecard.map((item, index) => (
              <div className="mx-10    break-words bg-gray-100  shadow-lg rounded-xl my-10">
                {/* <Link to={{
          pathname: '/InfluencerDetails',
          state: { data:data}
        }} > */}

                <div className="flex ">
                  <div className="flex px-3 my-5">
                    <img
                      src={item.profile}
                      alt="myPic"
                      className="shadow-xl w-32 h-32 rounded-full"
                    />

                    <div className=" mt-2 ml-5">
                      <h3 className="text-2xl text-slate-700 font-bold  mb-1">
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
                <div className="border-t">
                  <div className="mt-3 ml-5">
                    <div className="flex space-x-2.5 items-center mt-3">
                      <FiPhoneCall size={20} />
                      <div>{item.phone}</div>
                    </div>
                    <div className="flex space-x-2.5 items-center mt-3">
                      <MdEmail size={20} />
                      <div>{item.email}</div>
                    </div>
                  </div>
                </div>

                <div className=" flex mt-3 items-center mx-10">
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
                        const res = await axios.put(
                          "consignment/consignmentwithoutpayment",
                          { id: item._id }
                        );
                        const resdata = res.data;
                        console.log(resdata);
                        if (resdata.success == true) {
                          window.location.reload();
                        }
                      } catch (err) {
                        console.log(err);
                      }
                    }}
                    className="flex m-1 mx-auto space-x-2  items-center px-3 py-2 bg-green-600 hover:bg-green-900 rounded-md drop-shadow-md"
                  >
                    <MdFileDownloadDone className="text-white" size={23} />
                    <span class="text-white">Done</span>
                  </button>
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
                            "consignment/deletetbrandpendingreq",
                            { data: { _id: item._id } }
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
                    class="flex space-x-2 m-1 mx-auto items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md"
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

                <div className="mt-6 py-5 border-t border-slate-200 ">
                  <div className="flex flex-wrap justify-center">
                    <div className="flex  items-center">
                      <AiOutlineFacebook
                        size={20}
                        className="text-[#3b5998] "
                      />
                      <div className="text-[#3b5998] mr-3 ml-1"> 4K</div>

                      <AiOutlineInstagram
                        size={20}
                        className="text-[#E4405F]"
                      />
                      <div className="text-[#E4405F] mr-3 ml-1"> 5.5M</div>

                      <CiTwitter size={20} className="text-[#1DA1F2]" />
                      <div className="text-[#1DA1F2] mr-3 ml-1"> 66K</div>
                    </div>
                  </div>
                </div>

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

export default BrandConsignments;
