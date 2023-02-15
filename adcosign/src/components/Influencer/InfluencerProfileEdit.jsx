import React from "react";
import InfluencerHeader from "./InfluencerHeader";
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const InfluencerProfileEdit = () => {
  const navigate = useNavigate();
  const sleep = ms => new Promise(r => setTimeout(r, ms));


  const [userdata, setuserdata] = useState({
    fname: "", lname: "", phone: "", email: "", city: "", state: "", country: "",
    age: "", instagram: "", instagramURL: "", instagramFollowers: "", instagramEngagementRate: "",
    facebook: "", facebookURL: "", facebookFollowers: "", facebookEngagementRate: "",
    twitter: "", twitterURL: "", twitterFollowers: "", twitterEngagementRate: "",
    photo: "", cat1: "", cat2: "", cat3: "", discription: "", profile: ""
  });


  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    // console.log(name)
    // console.log(value)
    setuserdata({ ...userdata, [name]: value });
  }

  const imageupload = (e) => {
    console.log("image is");
    console.log(e.target.files[0]);
    setuserdata({ ...userdata, profile: e.target.files[0] });
  }

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("influencer/updateprofile", userdata);
      const data = res.data;
      // console.log(data);
      if (data.success == true) {
        toast.success(data.message);
        await sleep(1500)
        navigate("/InfluencerProfile")
        //window.location.reload();


      }

    } catch (error) {
    }

    console.log(userdata);
  }

  const getInfluencerData = async () => {
    const res = await axios.get("influencer/getInfluencer");
    const data = res.data;
    setuserdata(data.data)
    // console.log("Logged in user is:- ");
    // console.log(userdata);
  }
  useEffect(() => {
    getInfluencerData()
  }, [])

  return (
    <div>
      <InfluencerHeader />

      <div>
        <div class="py-8 px-3  items-center">
          <div class="bg-white w-full max-w-4xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <h4 class="flex font-bold justify-center p-3 text-[26px]">
              Edit Profile
            </h4>
            <div>
              <div className="flex items-center justify-center">
                <div className="bg-gray-200  w-1/2 mt-10 rounded-lg">
                  <div className="flex items-center justify-center pt-10 flex-col">
                    <img
                      //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"
                      src={userdata.photo}
                      alt="No available"
                      className="rounded-full w-32"
                    ></img>

                    <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3">
                      {userdata.fname + " " + userdata.lname}

                    </h1>
                    <h3 className="text-gray-400 text-sm"> Influencer</h3>
                    <h3 className="text-gray-500 text-sm">
                      {userdata.city + ", " + userdata.state + ", " + userdata.country}

                    </h3>
                    <h3 className="text-gray-500 text-sm pb-10">
                      {userdata.email}

                    </h3>


                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mb-10">
                <div className="bg-gray-200 w-1/2 mt-7 ">
                  <div className="flex items-center justify-center pt-7 flex-col">
                    <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
                      Upload image
                    </h1>

                    <form class="flex items-center space-x-6" encType="multipart/form-data">
                      <div class="shrink-0">
                        <img
                          class="h-16 w-16 object-cover rounded-full"

                          //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"
                          src={userdata.photo}
                          alt="Current pictures"
                        />
                      </div>
                      <label class="block">
                        {/* <span class="sr-only">Choose profile photo</span> */}
                        <input
                          type="file"
                          enctype="multipart/form-data"
                          class="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:bg-violet-100
                                  "
                          name="profile"
                          onChange={imageupload}

                        />
                      </label>
                    </form>
                    <div className="flex-justify-between p-3 px-14">
                      <button
                        onClick={updateProfile}
                        class="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                      name="fname"
                      defaultValue={userdata.fname}
                      // value={userdata.fname}
                      onChange={handleInput}
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative ">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your LastName
                    </span>

                    <input
                      type="text"
                      name="lname"
                      defaultValue={userdata.lname}
                      // value={userdata.lname}
                      onChange={handleInput}
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>

                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your City
                    </span>
                    <input
                      type="text"
                      name="city"
                      defaultValue={userdata.city}
                      // value={userdata.city}
                      onChange={handleInput}
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>

                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your State
                    </span>
                    <input
                      type="text"
                      name="state"

                      defaultValue={userdata.state}
                      // value={userdata.state}
                      onChange={handleInput}
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>

                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Country
                    </span>
                    <input
                      type="text"
                      name="country"

                      defaultValue={userdata.country}
                      // value={userdata.country}
                      onChange={handleInput}

                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Age
                    </span>
                    <input
                      type="text"
                      name="age"
                      defaultValue={userdata.age}
                      // value={userdata.age}
                      onChange={handleInput}

                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                </div>
                <br></br>
                <div class="justify-center item-center">
                  <button
                    onClick={updateProfile}
                    class="w-1/5 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
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
                      name="instagram"

                      defaultValue={userdata.instagram}
                      // value={userdata.instagram}
                      onChange={handleInput}
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Instagram URL
                    </span>
                    <input
                      type="text"
                      name="instagramURL"

                      defaultValue={userdata.instagramURL}
                      // value={userdata.instagramURL}
                      onChange={handleInput}

                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Facebook Handle
                    </span>
                    <input
                      type="text"
                      name="facebook"
                      defaultValue={userdata.facebook}
                      // value={userdata.facebook}
                      onChange={handleInput}

                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Facebook URL
                    </span>
                    <input
                      type="text"
                      name="facebookURL"

                      defaultValue={userdata.facebookURL}
                      // value={userdata.facebookURL}
                      onChange={handleInput}

                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Twitter Handle
                    </span>
                    <input
                      type="text"
                      name="twitter"

                      defaultValue={userdata.twitter}
                      // value={userdata.twitter}
                      onChange={handleInput}

                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Twitter URL
                    </span>
                    <input
                      type="text"
                      name="twitterURL"

                      defaultValue={userdata.twitterURL}
                      // value={userdata.twitterURL}
                      onChange={handleInput}

                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Catogary 1
                    </span>
                    <input
                      type="text"
                      name="cat1"
                      defaultValue={userdata.cat1}
                      // value={userdata.cat1}
                      onChange={handleInput}
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Catogary 2
                    </span>
                    <input
                      type="text"
                      name="cat2"
                      defaultValue={userdata.cat2}
                      // value={userdata.cat2}
                      onChange={handleInput}
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                  <div class="col-span-6 relative">
                    <span class="absolute bg-white left-3 -top-[12px] px-2">
                      Your Catogary 3
                    </span>
                    <input
                      type="text"
                      name="cat3"
                      defaultValue={userdata.cat3}
                      // value={userdata.cat3}  
                      onChange={handleInput}
                      class="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
                    />
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div class="flex-justify-between">
                <button
                  onClick={updateProfile}
                  class="w-1/5 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Update Details
                </button>
              </div>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div className="px-2 flex">
              <div>
                <h2 class="absolute text-lg font-semibold bg-white px-3">
                  User Description :
                </h2>
              </div>
            </div>
            <div class="col-span-6 relative mt-16">
              <span class="absolute bg-white left-3 -top-[12px] px-2">
                Description
              </span>

              <textarea
                type="textbox"
                name="discription"
                defaultValue={userdata.discription}
                // value={userdata.fname}
                onChange={handleInput}
                class="pt-3 text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
              />
            </div>
            <br></br>
            <div class="flex-justify-between">
              <button
                onClick={updateProfile}
                class="w-1/5 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Update Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default InfluencerProfileEdit;
