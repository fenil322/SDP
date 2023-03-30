import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TiPlus } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const InfCard = ({ item,onData }) => {
    const navigate = useNavigate();
    return (
        <div className=" max-sm:mx-5 px-5 border-gray-300 border-2   break-words bg-gray-100  shadow-2xl border-2 rounded-2xl my-10">

                  <div className="flex ">
                    <div className="flex px-3 my-5  " >

                      <img
                        src={item.photo}
                        alt="myPic"
                        className="shadow-xl w-32 h-32 rounded-full  "
                      />

                      <div className=" mt-2 ml-5">
                        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                          {item.fname + " " + item.lname}
                        </h3>

                        <div className="text-xs mb-1  text-slate-400 font-bold uppercase">
                          <i className="fas fa-map-marker-alt text-slate-400 opacity-75"></i>
                          {item.gender} ({item.age})
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

                    <div className="mt-4 py-2  border-y-2">

                      <div className="flex mx-20 justify-between">
                        <a href={item.instagramUrl} target="_blank"className="flex">
                          <AiOutlineFacebook
                            size={30}
                            className="text-[#3b5998] "
                          />
                          </a>
                        <a href={item.facebookUrl} target="_blank" className="flex">
                          <AiOutlineInstagram
                            size={30}
                            className="text-[#E4405F]"
                          />
                         </a>
                        
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="flex justify-center space-x-6 my-5">
                        <div>
                            <button

                                onClick={async (e) => {
                                    e.preventDefault()
                                    try {
                                        const res = await axios.put("manager/validateinfluencer", { email: item.email })
                                        const data = res.data;
                                        console.log(data)
                                        if (data.success == true) {
                                            onData(item._id)
                                            // window.location.reload();
                                            toast.success("Influencer Validation Success")
                                        }
                                    } catch (err) {
                                        navigate("/AddNewInfluencer");
                                        console.log(err)
                                    }
                                }}

                                class="flex space-x-2 items-center px-3 py-2 bg-green-700 hover:bg-green-800 rounded-md drop-shadow-md">
                                <TiPlus size={24} className="fill-white" />
                                <span class="text-white">Add</span>
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={async (e) => {
                                    e.preventDefault()
                                    try {

                                        const res = await axios.delete("manager/deleteinfluencer", { data: { email: item.email } })

                                        // { data:{email:email}});
                                        const data = res.data;
                                        console.log(data)
                                        if (data.success == true) {
                                            onData(item._id)
                                            // window.location.reload();
                                            toast.success("Influencer Removed Successfully")
                                        }
                                    } catch (err) {
                                        navigate("/AddNewInfluencer");
                                        console.log(err);
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
                                <span class="text-white">Delete</span>
                            </button>
                        </div>
                    </div>
                </div> 
                  {/* </Link > */}
                  <ToastContainer autoClose={1000}/>
                </div>
    )
}

export default InfCard

