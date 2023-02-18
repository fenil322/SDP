import React, { useEffect, useState } from "react";
import InfluencerHeader from "./InfluencerHeader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";

import axios from "axios";
import { NavLink ,useLocation} from "react-router-dom";

const InfluencerProfile = () => {
const location = useLocation();

  const [userdata, setuserdata] = useState({ Adsrequired: "" });

  const getInfluencerData = async () => {
    const res = await axios.get("influencer/getInfluencer");
    const data = res.data;
    setuserdata(data.data)
    console.log("Logged in user is:- ");
    console.log(userdata);
  }
  useEffect(() => {
    getInfluencerData()
  }, [])

  return (
    <div className="">
      <div>
        <InfluencerHeader />





        <div class="h-full bg-gray-200 py-8 w-5/6 m-auto">
          <div class="bg-white w-5/6 m-auto rounded-lg shadow-xl pb-8">
            {/* <div x-data="{ openSettings: false }" class="absolute right-12 mt-4 rounded">
                  <button class="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20" title="Settings">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                    </svg>
                  </button>
                  <div x-show="openSettings" class="bg-white absolute right-0 w-40 py-2 mt-1 border border-gray-200 shadow-2xl" style="display: none;">
                    <div class="py-2 border-b">
                      <p class="text-gray-400 text-xs px-6 uppercase mb-1">Settings</p>
                      <button class="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                        </svg>
                        <span class="text-sm text-gray-700">Share Profile</span>
                      </button>
                      <button class="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                        </svg>
                        <span class="text-sm text-gray-700">Block User</span>
                      </button>
                      <button class="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-sm text-gray-700">More Info</span>
                      </button>
                    </div>
                    <div class="py-2">
                      <p class="text-gray-400 text-xs px-6 uppercase mb-1">Feedback</p>
                      <button class="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        <span class="text-sm text-gray-700">Report</span>
                      </button>
                    </div>
                  </div>
                </div> */}
            <div class="w-full h-[300px]">
              <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" class="w-full h-full rounded-tl-lg rounded-tr-lg" />
            </div>
            <div class="flex flex-col items-center -mt-20">
              <img
                // src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" 
                src={userdata.photo}
                class="w-40 border-4 border-white bg-gray-50 rounded-full" />
              <div class="flex items-center space-x-2 mt-2">
                <p class="text-2xl">{userdata.fname + " " + userdata.lname}</p>
                <span class="bg-blue-500 rounded-full p-1" title="Verified">
                  <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
              </div>
              <p class="text-gray-700">Influencer</p>
              <p class="text-sm text-gray-500">{userdata.city + ", " + userdata.country}</p>
            </div>
            <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
              <div class="flex items-center space-x-4 mt-2">
                <NavLink to='/InfluencerProfileEdit'>

                  <button class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    <FaUserEdit size={17} />
                    <span>Edit Profile</span>
                  </button>
                </NavLink>
                {
                  userdata.Adsrequired == false ?
                    <button
                      onClick={async (e) => {
                        e.preventDefault();
                        try {
                          const res = await axios.put('influencer/adsrequired', userdata.email)
                          console.log(res);
                          const data = res.data;
                          if (data.success === true) {
                            toast.success(data.message);
                          }
                          setuserdata({ ...userdata, Adsrequired: false })
                          // location.reload();

                        } catch (err) {
                          console.log(err);
                        }
                      }}
                      class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                      {/* <FaUserEdit size={17} /> */}
                      <span>Request Ads</span>
                    </button> :
                    <button
                      onClick={async (e) => {
                        e.preventDefault();
                        try {
                          const res = await axios.put('influencer/adsrequiredremove', userdata.email)
                          console.log(res);
                          const data = res.data;
                          if (data.success === true) {
                            toast.success(data.message);
                          }
                          setuserdata({ ...userdata, Adsrequired: true })
                          // location.reload();
                        } catch (err) {
                          console.log(err);
                        }
                      }}
                      class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                      <span>Remove Request</span>
                    </button>
                }

              </div>
            </div>
          </div>


          <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div class="w-full flex flex-col 2xl:w-1/3">
              {/*                 Personal Info                      */}
              <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 class="text-xl text-gray-900 font-bold">Personal Information</h4>
                <ul class="mt-2 text-gray-700">
                  <li class="flex border-y py-2">
                    <span class="font-bold w-24">Full name:</span>
                    <span class="text-gray-700">{userdata.fname + " " + userdata.lname}
                    </span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Age:</span>
                    <span class="text-gray-700">{userdata.age}</span>
                  </li>
                  {/* <li class="flex border-b py-2">
                    <span class="font-bold w-24">Joined:</span>
                    <span class="text-gray-700">10 Jan 2022 (25 days ago)</span>
                  </li> */}
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Mobile:</span>
                    <span class="text-gray-700">{userdata.phone}</span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Email:</span>
                    <span class="text-gray-700">{userdata.email}</span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Location:</span>
                    <span class="text-gray-700">{userdata.city + ", " + userdata.state + ", " + userdata.country}</span>
                  </li>
                  <li class="flex border-b py-2">
                    <span class="font-bold w-24">Languages:</span>
                    <span class="text-gray-700">English, Hindi</span>
                  </li>
                  <li class="flex items-center border-b py-2 space-x-2">
                    <span class="font-bold w-24">Elsewhere:</span>
                    <a
                      target="_blank"
                      href={userdata.facebookURL}
                      title="Facebook">
                      <BsFacebook size={20} color='#3b5998' />
                    </a>
                    <a target="_blank"
                      href={userdata.twitterURL}
                      title="Twitter">
                      <AiFillTwitterCircle size={24} color='#1da1f2' />

                    </a>
                    <a href="#" title="LinkedIn">
                      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z" fill="#0077b5"></path></svg>
                    </a>
                    <a
                      target="_blank"
                      href={userdata.instagramURL}
                      title="Instagram">
                      <BsInstagram size={20} color="#E1306C" />
                    </a>
                  </li>
                </ul>
              </div>
              {/*                 activity                      */}
              <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                <h4 class="text-xl text-gray-900 font-bold">My Logs</h4>
                <div class="relative px-4">
                  <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                  {/* <!-- start::Timeline item --> */}
                  <div class="flex items-center w-full my-6 -ml-1.5">
                    <div class="w-1/12 z-10">
                      <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <div class="w-11/12">
                      <p class="text-sm">Profile informations changed.</p>
                      <p class="text-xs text-gray-500">3 min ago</p>
                    </div>
                  </div>
                  {/* <!-- end::Timeline item --> */}

                  {/* <!-- start::Timeline item --> */}
                  <div class="flex items-center w-full my-6 -ml-1.5">
                    <div class="w-1/12 z-10">
                      <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <div class="w-11/12">
                      <p class="text-sm">
                        Connected with <a href="#" class="text-blue-600 font-bold">Colby Covington</a>.</p>
                      <p class="text-xs text-gray-500">15 min ago</p>
                    </div>
                  </div>
                  {/* <!-- end::Timeline item --> */}


                </div>

              </div>
            </div>
            {/*                 Avout                        */}
            <div class="flex flex-col w-full 2xl:w-2/3">
              <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
                <h4 class="text-xl text-gray-900 font-bold">About</h4>
                <p class="mt-2 text-gray-700">{userdata.discription}</p>
              </div>
              {/*                 Social Information                     */}
              <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                <h4 class="text-xl text-gray-900 font-bold">Social Media</h4>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4 flex ">
                  {/* <div class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                          <div class="flex items-center justify-between">
                            <span class="font-bold text-sm text-indigo-600">Total Revenue</span>
                            <span class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">7 days</span>
                          </div>
                          <div class="flex items-center justify-between mt-6">
                            <div>
                              <svg class="w-12 h-12 p-2.5 bg-indigo-400 bg-opacity-20 rounded-full text-indigo-600 border border-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div class="flex flex-col">
                              <div class="flex items-end">
                                <span class="text-2xl 2xl:text-3xl font-bold">$8,141</span>
                                <div class="flex items-center ml-2 mb-1">
                                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                  <span class="font-bold text-sm text-gray-500 ml-0.5">3%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                          <div class="flex items-center justify-between">
                            <span class="font-bold text-sm text-green-600">New Orders</span>
                            <span class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">7 days</span>
                          </div>
                          <div class="flex items-center justify-between mt-6">
                            <div>
                              <svg class="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                            </div>
                            <div class="flex flex-col">
                              <div class="flex items-end">
                                <span class="text-2xl 2xl:text-3xl font-bold">217</span>
                                <div class="flex items-center ml-2 mb-1">
                                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                  <span class="font-bold text-sm text-gray-500 ml-0.5">5%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                          <div class="flex items-center justify-between">
                            <span class="font-bold text-sm text-blue-600">New Connections</span>
                            <span class="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">7 days</span>
                          </div>
                          <div class="flex items-center justify-between mt-6">
                            <div>
                              <svg class="w-12 h-12 p-2.5 bg-blue-400 bg-opacity-20 rounded-full text-blue-600 border border-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </div>
                            <div class="flex flex-col">
                              <div class="flex items-end">
                                <span class="text-2xl 2xl:text-3xl font-bold">54</span>
                                <div class="flex items-center ml-2 mb-1">
                                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                  <span class="font-bold text-sm text-gray-500 ml-0.5">7%</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}


                  <div className="items-center">
                    <a
                      target="_blank"
                      href={userdata.facebookURL}
                      class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <div className="flex justify-between">
                        <RiFacebookBoxLine size={20} className="text-[#3b5998]" />
                        <div className="text-[#244489] font-bold">1K Views</div>
                      </div>

                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                      <div className="flex justify-between font-bold">
                        <div className="justify-center align-middle text-center">4.42M<div className="text-xs font-normal">Followers</div></div>
                        <div className="justify-center align-middle text-center">90<div className="text-xs font-normal">Reactions</div></div>
                        <div className="justify-center align-middle text-center">342<div className="text-xs font-normal">Comments</div></div>
                      </div>
                    </a>
                  </div>
                  <div className="items-center">
                    <a
                      target="_blank"
                      href={userdata.instagramURL}
                      class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <div className="flex justify-between">
                        <FaInstagram size={20} className="text-[#d62976]" />
                        <div className="text-[#d62976] font-bold">1.3K Views</div>
                      </div>

                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                      <div className="flex justify-between font-bold">
                        <div className="justify-center align-middle text-center">4.42M<div className="text-xs font-normal">Followers</div></div>
                        <div className="justify-center align-middle text-center">90<div className="text-xs font-normal">Reactions</div></div>
                        <div className="justify-center align-middle text-center">342<div className="text-xs font-normal">Comments</div></div>
                      </div>
                    </a>
                  </div>
                  <div className="items-center">
                    <a
                      target="_blank"
                      href={userdata.twitterURL}
                      class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <div className="flex justify-between">
                        <FiTwitter size={20} className="text-[#00acee]" />
                        <div className="text-[#00acee] font-bold">2K Views</div>
                      </div>

                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                      <div className="flex justify-between font-bold">
                        <div className="justify-center align-middle text-center">4.42M<div className="text-xs font-normal">Followers</div></div>
                        <div className="justify-center align-middle text-center">90<div className="text-xs font-normal">Reactions</div></div>
                        <div className="justify-center align-middle text-center">342<div className="text-xs font-normal">Comments</div></div>
                      </div>
                    </a>
                  </div>


                </div>

              </div>
            </div>
          </div>


        </div>
      </div>

      <ToastContainer autoClose={800} />

    </div>

  );
};

export default InfluencerProfile;
