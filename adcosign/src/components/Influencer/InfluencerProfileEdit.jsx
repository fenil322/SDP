import React from "react";
import InfluencerHeader from "./InfluencerHeader";
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
const InfluencerProfileEdit = () => {
  const [userdata, setuserdata] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    country: "",
    age: "",
    instagram: "",
    instagramURL: "",
    instagramFollowers: "",
    instagramEngagementRate: "",
    facebook: "",
    facebookURL: "",
    facebookFollowers: "",
    facebookEngagementRate: "",
    twitter: "",
    twitterURL: "",
    twitterFollowers: "",
    twitterEngagementRate: "",
  });
  return (
    <div>
      <InfluencerHeader />
      <div>
        {/*<div className="">
          <section className=" dark:bg-gray-900">
            <div className="flex justify-center min-h-screen">
             <div className="hidden bg-cover lg:block lg:w-2/5" style="background-image: url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')">
            </div> 

              <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                <div className="w-full">
                  <h1 className="text-2xl text-center font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                    Edit Profile
                  </h1>
                  <form
                    method="POST"
                    className="bg-neutral-200 grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
                  >
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder={"First Name"}
                        name="fname"
                        value=""
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder={`Last name`}
                        name="lname"
                        value=""
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Contact Number
                      </label>
                      <div className="flext items-center">
                        <input
                          type="text"
                          placeholder="XXX-XX-XXXX-XXX"
                          name="phone"
                          value={userdata.phone}
                          onChange=""
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Email address
                      </label>
                      <input
                        type="email"
                        placeholder="johnsnow@example.com"
                        name="email"
                        value={userdata.email}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        City
                      </label>
                      <input
                        type="text"
                        placeholder="City"
                        name="city"
                        value={userdata.city}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        State
                      </label>
                      <input
                        type="text"
                        placeholder="State"
                        name="state"
                        value={userdata.state}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Country
                      </label>
                      <input
                        type="text"
                        placeholder="Country"
                        name="country"
                        value={userdata.country}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Age
                      </label>
                      <input
                        type="text"
                        placeholder="Age"
                        name="age"
                        value={userdata.age}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Instagram Handle
                      </label>
                      <input
                        type="text"
                        placeholder="Instagram Handle"
                        name="instagram"
                        value={userdata.instagram}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Instagram Follower
                      </label>
                      <input
                        type="text"
                        placeholder="Instagram Follower"
                        name="instagramFollowers"
                        value={userdata.instagramFollowers}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Instagram Engagement Rate
                      </label>
                      <input
                        type="text"
                        placeholder="Engagement Rate"
                        name="instagramEngagementRate"
                        value={userdata.instagramEngagementRate}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Url
                      </label>
                      <input
                        type="text"
                        placeholder="Instagram Url"
                        name="instagramURL"
                        value={userdata.instagramURL}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Facebook Handle
                      </label>
                      <input
                        type="text"
                        placeholder="Facebook Handle"
                        name="facebook"
                        value={userdata.facebook}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Facebook Follower
                      </label>
                      <input
                        type="text"
                        placeholder="Facebook Follower"
                        name="facebookFollowers"
                        value={userdata.facebookFollowers}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Facebook Engagement Rate
                      </label>
                      <input
                        type="text"
                        placeholder="Engagement Rate"
                        name="facebookEngagementRate"
                        value={userdata.facebookEngagementRate}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Url
                      </label>
                      <input
                        type="text"
                        placeholder="Facebook url"
                        name="facebookURL"
                        value={userdata.facebookURL}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Twitter Handle
                      </label>
                      <input
                        type="text"
                        placeholder="Twitter Handle"
                        name="twitter"
                        value={userdata.twitter}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Twitter Follower
                      </label>
                      <input
                        type="text"
                        placeholder="Twitter Follower"
                        name="twitterFollowers"
                        value={userdata.twitterFollowers}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Twitter Engagement Rate
                      </label>
                      <input
                        type="text"
                        placeholder="Engagement Rate"
                        name="twitterEngagementRate"
                        value={userdata.twitterEngagementRate}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Url
                      </label>
                      <input
                        type="text"
                        placeholder="Twitter Url"
                        name="twitterURL"
                        value={userdata.twitterURL}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={userdata.password}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Confirm password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        name="cpassword"
                        value={userdata.cpassword}
                        onChange=""
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <button
                      onClick=""
                      className="flex items-center justify-between w-1/2 px-14 py- text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      <span>Update Details</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 rtl:-scale-x-100"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <ToastContainer autoClose={1500} />   */}
      </div>

      <div>
        <div class="py-8 px-3  items-center">
          <div class="bg-white w-full max-w-4xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <h4 class="flex font-bold justify-center p-3 text-[26px]">
              Edit Profile
            </h4>
            <div>
              <hr></hr>
              <br></br>
              <div className="px-2 flex">
                <div>
                  <h2 class="absolute text-lg font-semibold bg-white px-3">
                    User Details :
                  </h2>
                </div>
              </div>
              <br></br>
              <br></br>
              <div>
                <div class="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
                  <div class="col-span-6 relative ">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your FirstName
                    </span>

                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative ">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your LastName
                    </span>

                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>

                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your City
                    </span>
                    <input
                      type="text"
                      placeholder="city"
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>

                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your State
                    </span>
                    <input
                      type="text"
                      placeholder="state"
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>

                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Country
                    </span>
                    <input
                      type="text"
                      placeholder="country"
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Age
                    </span>
                    <input
                      type="text"
                      placeholder="age"
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                </div>
                <br></br>
                <div class="justify-center item-center">
                  <button class="w-1/5 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Update Details
                  </button>
                </div>
              </div>
              <br></br>
              <hr></hr>
              <br></br>
              <div>
                <div className="px-2 flex">
                  <div>
                    <h2 class="absolute text-lg font-semibold bg-white px-3">
                      Social Details :
                    </h2>
                  </div>
                </div>
                <br></br>
                <br></br>

                <div class="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Instagram Handle
                    </span>
                    <input
                      type="text"
                      placeholder="shwetangi_satasiya1610"
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Instagram URL
                    </span>
                    <input
                      type="text"
                      placeholder=""
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Facebook Handle
                    </span>
                    <input
                      type="text"
                      placeholder="shwetangi satasiya"
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Facebook URL
                    </span>
                    <input
                      type="text"
                      placeholder=""
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Twitter Handle
                    </span>
                    <input
                      type="text"
                      placeholder="shwet_satasiya_137"
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Twitter URL
                    </span>
                    <input
                      type="text"
                      placeholder=""
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Catogary 1
                    </span>
                    <input
                      type="text"
                      placeholder=""
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Catogary 2
                    </span>
                    <input
                      type="text"
                      placeholder=""
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Catogary 3
                    </span>
                    <input
                      type="text"
                      placeholder=""
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <hr></hr>
              <br></br>
              <div class="flex-justify-between">
                <button class="w-1/5 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Update Details
                </button>
              </div>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div>
              <div className="flex items-center justify-center">
                <div className="bg-gray-200  w-1/2 mt-10 rounded-lg">
                  <div className="flex items-center justify-center pt-10 flex-col">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"
                      alt="No available"
                      className="rounded-full w-32"
                    ></img>

                    <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3">
                      Shwetangi Satasiya{" "}
                    </h1>
                    <h3 className="text-gray-400 text-sm"> Influencer</h3>
                    <h3 className="text-gray-500 text-sm">
                      Surat,Gujarat,India
                    </h3>

                    <div className="flex-justify-between p-4">
                      <button class="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-gray-200 w-1/2 mt-7 ">
                  <div className="flex items-center justify-center pt-7 flex-col">
                    <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
                      Upload image
                    </h1>

                    <form class="flex items-center space-x-6">
                      <div class="shrink-0">
                        <img
                          class="h-16 w-16 object-cover rounded-full"
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"
                          alt="Current pictures"
                        />
                      </div>
                      <label class="block">
                        <span class="sr-only">Choose profile photo</span>
                        <input
                          type="file"
                          class="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:bg-violet-100
                                  "
                        />
                      </label>
                    </form>
                    <div className="flex-justify-between p-3 px-14">
                      <button class="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Uploading...
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerProfileEdit;
