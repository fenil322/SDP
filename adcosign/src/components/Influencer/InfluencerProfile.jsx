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
import { NavLink, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import loader from "../../Images/loader.gif";

const InfluencerProfile = () => {
  const location = useLocation();
  const [userdata, setuserdata] = useState({});
  const [adrequired, setAdrequired] = useState(userdata.Adsrequired);
  const [brandData, setbrandData] = useState([]);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setuserdata(location.state)
  //   // console.log(userdata);
  // }, [])

  const getInfluencerData = async () => {

    const res = await axios.get("influencer/getInfluencer");
    const data = res.data;
    //   console.log("Logged in user is:- ");
    setuserdata(data.data)


    // console.log(data.data);
  }
  const getConnectedBrand = async () => {
    // console.log(userdata._id);
    try {
      setLoading(true)
      const res = await axios.post('brand/getconnectedbrand', { id: userdata._id });
      const data = res.data;
      console.log(data);
      setbrandData(data.data);
      setDate(data.date)
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getInfluencerData()

  }, [])
  useEffect(() => {
    getConnectedBrand()
  }, [userdata._id])
  return (
    <div className='flex h-[screen]'>
      <Navbar />
      <div className=' ml-14 w-screen'>
        <InfluencerHeader page="Profile" />
        <div class="h-full py-8 w-5/6 m-auto">
          <div class="bg-white w-5/6 m-auto rounded-lg border-2  shadow-xl pb-8">
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
              <img src={userdata.photo} class="w-full h-full rounded-tl-lg rounded-tr-lg" />
            </div>
            <div class="flex flex-col items-center -mt-20">
              <img
                // src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg" 
                src={userdata.profile}
                class="w-40 h-40 border-4 border-white bg-gray-50 rounded-full" />
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
                <NavLink to='/InfluencerProfileEdit' state={userdata}>

                  <button class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    <FaUserEdit size={17} />
                    <span>Edit Profile</span>
                  </button>
                </NavLink>
                {
                  adrequired == false ?
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
                          // setuserdata({ ...userdata, Adsrequired: false })
                          // location.reload();
                          setAdrequired(true)

                        } catch (err) {
                          console.log(err);
                        }
                      }}
                      class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">

                      <span>Request Ads</span>
                    </button> :
                    <button
                      onClick={async (e) => {
                        e.preventDefault();
                        console.log(adrequired);
                        try {
                          const res = await axios.put('influencer/adsrequiredremove', userdata.email)
                          console.log(res);
                          const data = res.data;
                          if (data.success === true) {
                            toast.success(data.message);
                          }
                          // setuserdata({ ...userdata, Adsrequired: true })
                          // location.reload();
                          setAdrequired(false)
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
              <div class="flex-1 bg-white border-2 rounded-lg shadow-xl p-8">
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
                    {/* <a href="#" title="LinkedIn">
                      <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z" fill="#0077b5"></path></svg>
                    </a> */}
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
              <div class="flex-1 bg-white border-2 rounded-lg shadow-xl mt-4 p-8">
                <h4 class="text-xl text-gray-900 font-bold">My Activity Logs</h4>
                <div class="relative px-4">
                  <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                  {/* <!-- start::Timeline item --> */}
                  {loading === true ?
                    <img src={loader} alt="laoding" className="h-52 mx-auto"
                    />
                    :
                    <div>

                      {brandData.length == 0 ? <div>No Brands connected</div> :
                        brandData?.map((data, index) => (
                          <div class="flex items-center w-full my-1 -ml-1.5">
                            <div class="w-1/12 z-10">
                              <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                            </div>
                            <img src={data.logo} className="w-8 h-8 rounded-full mx-5 " alt="profile" />
                            <div class="w-11/12">
                              <a href={data.instagramUrl} target="_blank" title="Instagram">
                                <div class="text-sm font-semibold cursor-pointer">{data.shopName}</div>
                              </a>
                              <p class="text-xs text-gray-500">{date[index]}</p>
                            </div>
                          </div>
                        ))}
                    </div>
                  }

                </div>

              </div>
            </div>
            {/*                 Avout                        */}
            <div class="flex flex-col w-full 2xl:w-2/3">
              <div class="flex-1 bg-white border-2 rounded-lg shadow-xl p-8">
                <h4 class="text-xl text-gray-900 font-bold">About</h4>
                <p class="mt-2 text-gray-700">{userdata.discription}</p>
              </div>
              {/*                 Social Information                     */}
              <div class="flex-1 bg-white border-2 rounded-lg shadow-xl mt-4 p-8">
                <h4 class="text-xl text-gray-900 font-bold">Social Media</h4>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4  ">
                  <div className="items-center mt-10 ">
                    <div
                      class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <div className=" flex justify-between items-center">
                        <RiFacebookBoxLine size={25} className="text-[#3b5998] " />
                        <a href={userdata.facebookURL}
                          target="_blank"
                          className="hover:text-blue-600" >Click here...</a>
                      </div>

                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                      <div className="flex justify-between font-bold">
                        {userdata?.facebookFollowers ?
                          <div className="justify-center align-middle text-center">{userdata.facebookFollowers}<div className="text-xs font-normal">Followers</div></div>
                          : ""}
                        {userdata?.facebookComments ?
                          <div className="justify-center align-middle text-center">{userdata.facebookComments}<div className="text-xs font-normal">Comments</div></div>
                          : ""}
                        {userdata?.facebookEngagementRate ?
                          <div className="justify-center align-middle text-center">{userdata.facebookEngagementRate}<div className="text-xs font-normal">EngagementRate</div></div>
                          : ""}
                      </div>
                    </div>
                  </div>
                  <div className="items-center mt-10">
                    <div
                      class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <div className="flex justify-between items-center">
                        <FaInstagram size={25} className="text-[#d62976] " />
                        <a href={userdata.instagramURL}
                          target="_blank"
                          className="hover:text-blue-600" >Click here...</a>
                      </div>

                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                      <div className="flex justify-between font-bold">
                        {userdata?.instagramFollowers ?
                          <div className="justify-center align-middle text-center">{userdata.instagramFollowers}<div className="text-xs font-normal">Followers</div></div>
                          : ""}
                        {userdata?.instagramComments ?
                          <div className="justify-center align-middle text-center">{userdata.instagramComments}<div className="text-xs font-normal">Comments</div></div>
                          : ""}
                        {userdata?.instagramEngagementRate ?
                          <div className="justify-center align-middle text-center">{userdata.instagramEngagementRate}<div className="text-xs font-normal">EngagementRate</div></div>
                          : ""} </div>
                    </div>
                  </div>
                  <div className="items-center mt-10">
                    <div
                      class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                      <div className="flex justify-between items-center">
                        <FiTwitter size={25} className="text-[#00acee] " />
                        <a href={userdata.twitterURL}
                          target="_blank"
                          className="hover:text-blue-600" >Click here...</a>
                      </div>

                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                      <div className="flex justify-between font-bold">
                        {userdata?.twitterFollowers ?
                          <div className="justify-center align-middle text-center">{userdata.twitterFollowers}<div className="text-xs font-normal">Followers</div></div>
                          : ""}
                        {userdata?.twitterComments ?
                          <div className="justify-center align-middle text-center">{userdata.twitterComments}<div className="text-xs font-normal">Comments</div></div>
                          : ""}
                        {userdata?.twitterEngagementRate ?
                          <div className="justify-center align-middle text-center">{userdata.twitterEngagementRate}<div className="text-xs font-normal">EngagementRate</div></div>
                          : ""} </div>
                    </div>
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
