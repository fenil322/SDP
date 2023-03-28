import React, { useEffect, useState } from "react";
import BrandHeader from "./BrandHeader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import Navbar from "./Navbar";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

import loader from "../../Images/loader.gif"
const BrandArrivalRequest = () => {
  const navigate = useNavigate();
  const [profilecard, setprofilecard] = useState([]);

  const [loading, setloading] = useState(true);
  const getBrandRequest = async () => {
    try {
      setloading(true);
      const res = await axios.get("consignment/getinfluencerreq");
      const data = res.data;
      console.log(data.data);
      setprofilecard(data.data);
      console.log(profilecard);
      setloading(false);
    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message);
        navigate("/BrandLogin");
      }
    }
  };
  useEffect(() => {
    getBrandRequest();
  }, []);

  
  const influencerdetailpage = (item) => {
    navigate("/InfluencerDetails", { state: item })
  }
  return (
    <div className="flex flex-row h-[screen]">
      <Navbar />
      <div className="h-screen ml-14 w-screen max-sm:ml-0">
        <BrandHeader page="Arrival Request" />
        {loading === true ?
          <img src={loader} alt="laoding" className="h-52 mx-auto"
          />
          :
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-10 px-10 grid-cols-1 ">
            {profilecard.length == 0 ? (
              <h1 className="text-3xl font-bold text-center">
                No Arrival Request
              </h1>
            ) : (
              profilecard.map((item, index) => (
                <div className="mx-10    break-words bg-gray-100  shadow-2xl border-2 rounded-2xl my-10">

                  <div className="flex ">
                    <div className="flex px-3 my-5 cursor-pointer " onClick={()=>influencerdetailpage(item)}>

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
                  <div className="border-b">
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

                    <div className="mt-6 py-5 border-t border-slate-200 ">

                      <div className="flex mx-20 justify-between">
                        <div className="flex">
                          <AiOutlineFacebook
                            size={20}
                            className="text-[#3b5998] "
                          />
                          <div className="text-[#3b5998] mr-3 ml-1">{item.facebookFollowers}</div>
                        </div>
                        <div className="flex">
                          <AiOutlineInstagram
                            size={20}
                            className="text-[#E4405F]"
                          />
                          <div className="text-[#E4405F] mr-3 ml-1">  {item.instagramFollowers}</div>
                        </div>
                        <div className="flex">
                          <CiTwitter size={20} className="text-[#1DA1F2]" />
                          <div className="text-[#1DA1F2] mr-3 ml-1"> {item.twitterFollowers}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex my-5 items-center mx-10">
                    <button
                      onClick={async (e) => {
                        e.preventDefault();
                        console.log("hello");
                        try {
                          const res = await axios.put(
                            "consignment/acceptinfluencerreq",
                            { _id: item._id }
                          );
                          const data = res.data;
                          console.log(data);
                          if (data.success == true) {
                            const updatedItems = [...profilecard];
                            updatedItems.splice(index, 1);
                            setprofilecard(updatedItems)
                            toast.success(data.message)
                          }
                        } catch (err) {
                          console.log(err);
                          navigate("/BrandArrivalRequest");
                        }
                      }}
                      class="flex mx-auto space-x-2 items-center px-3 py-2 bg-green-700 hover:bg-green-800 rounded-md drop-shadow-md"
                    >
                      <TiPlus size={24} className="fill-white" />
                      <span class="text-white">Accept</span>
                    </button>

                    <button
                      onClick={async (e) => {
                        e.preventDefault();
                        console.log("hello2");
                        if (
                          window.confirm(
                            "Are you sure you want to reject this request?"
                          )
                        ) {
                          try {
                            const res = await axios.delete(
                              "consignment/deletetinfluencerreq",
                              { data: { _id: item._id } }
                            );
                            const data = res.data;
                            console.log(data);
                            if (data.success == true) {
                              const updatedItems = [...profilecard];
                              updatedItems.splice(index, 1);
                              setprofilecard(updatedItems)
                              toast.success(data.message)
                            }
                          } catch (err) {
                            navigate("/BrandArrivalRequest");
                            console.log(err);
                          }
                        } else {
                          navigate("/InfluencerArrivalRequest");
                        }
                      }}
                      class="flex space-x-2 mx-auto items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md"
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
                      <span class="text-white">Reject</span>
                    </button>
                  </div>


                  {/* </Link > */}
                </div>
              ))
            )}
          </div>
        }
      </div>  <ToastContainer autoClose={1000} />
    </div>
  );
};

export default BrandArrivalRequest;
