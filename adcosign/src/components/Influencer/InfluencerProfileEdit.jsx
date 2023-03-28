import React from "react";
import InfluencerHeader from "./InfluencerHeader";
import { Navigate, NavLink, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { CgDetailsMore } from "react-icons/cg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";

const InfluencerProfileEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [dimage, setDImage] = useState("");
  const [durl, setDUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const Baseurl = "https://api.cloudinary.com/v1_1/djhql8xzq/image/upload/";
  const preset = "adcosign_img";

  const [userdata, setuserdata] = useState({});

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuserdata({ ...userdata, [name]: value });
  };

  const imageupload = async (e) => {

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", preset);
    data.append("cloud_name", "djhql8xzq");
    console.log(image)
    console.log(data);
    try {
      // setLoading(true);
      await axios.post(Baseurl, data).then((res) => {
        console.log(res.data.secure_url);
        setUrl(res.data.secure_url);
      });
    } catch (err) {
      toast.error("image not uploaded");
      console.error(err);
      return;
    }
  };
  const dimageupload = async (e) => {
    const data = new FormData();
    data.append("file", dimage);
    data.append("upload_preset", preset);
    data.append("cloud_name", "djhql8xzq");
    try {
      // setLoading(true);
      await axios.post(Baseurl, data).then((res) => {
        setDUrl(res.data.secure_url);
      });
    } catch (err) {
      toast.error("image not uploaded");
      console.error(err);
      return;
    }
    console.log(durl);
  };
  const imagestore = async () => {
    try {
      setuserdata({ ...userdata, profile: url });
      const res = await axios.put("/influencer/imageupload", {
        profile: url,
        type: 1,
      });
      console.log(res.data);
      const data = res.data;
      // console.log(data);
      if (data.success == true) {
        toast.success(data.message);
        await sleep(1500);
        setUrl("");
        // window.location.reload();
        // navigate("/InfluencerProfile")
      }
    } catch (err) {
      console.log(err);
    }
  };
  const dimagestore = async () => {
    try {
      setuserdata({ ...userdata, photo: durl });
      const res = await axios.put("/influencer/imageupload", {
        photo: durl,
        type: 2,
      });
      console.log(res.data);
      const data = res.data;
      // console.log(data);
      if (data.success == true) {
        toast.success(data.message);
        await sleep(1500);
        setDUrl("");
        // window.location.reload();
        // navigate("/InfluencerProfile")
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // e.preventDefault();

    if (url) {
      console.log(url);
      imagestore();
    }
    if (durl) {
      dimagestore();
    }
  }, [url || durl]);

  const updateProfile = async (e) => {
    e.preventDefault();

    console.log(url);

    try {
      const res = await axios.put("influencer/updateprofile", userdata);
      const data = res.data;
      // console.log(data);
      if (data.success == true) {
        toast.success(data.message);
        await sleep(1500)
        navigate("/InfluencerProfile")
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }

    // console.log(userdata);
  };

  useEffect(() => {
    setuserdata(location.state);
    // console.log(location.state);
  }, []);

  return (
    <div className="flex h-[screen]">
      <Navbar />
      <div className="max-sm:ml-0  ml-14 w-screen">
        <InfluencerHeader page="Edit Profile" />

        <div>
          <div className=" px-3  items-center">
            <div className="bg-white w-full max-w-4xl p-8 mx-auto lg:px-12 lg:w-3/5">
              <div>
                <div className="flex items-center justify-center">
                  <div className="bg-gray-200 max-sm:w-5/6 w-1/2 mt-10 rounded-lg">
                    <div className="flex items-center justify-center pt-10 flex-col">
                      <img
                        //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"
                        src={userdata.profile}
                        alt="No Profile"
                        className="rounded-full w-32"
                      ></img>

                      <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3">
                        {userdata.fname + " " + userdata.lname}
                      </h1>
                      <h3 className="text-gray-400 text-sm"> Influencer</h3>
                      <h3 className="text-gray-500 text-sm">
                        {userdata.city +
                          ", " +
                          userdata.state +
                          ", " +
                          userdata.country}
                      </h3>
                      <h3 className="text-gray-500 text-sm pb-10">
                        {userdata.email}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center mb-10">
                  <div className="bg-gray-200 w-1/2 mt-7 max-sm:w-5/6 ">
                    <div className="flex items-center justify-center pt-7 flex-col">
                      <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
                        Upload image
                      </h1>

                      <form className="flex items-center max-sm:flex-col space-x-6">
                        <div className="shrink-0">
                          <img
                            className="h-16 w-16 object-cover rounded-full"
                            src={userdata.profile}
                            alt="Current pictures"
                          />
                        </div>
                        <label className="block">
                          {/* <span className="sr-only">Choose profile photo</span> */}
                          <input
                            type="file"
                            enctype="multipart/form-data"
                            className="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:bg-violet-100
                                  "
                            name="profile"
                            onChange={(e) => {
                              // console.log(e.target.files[0]);
                              setImage(e.target.files[0]);
                              // console.log(image);
                            }}
                          />
                        </label>
                      </form>
                      <div className="flex-justify-between p-3 px-14">
                        <button
                          onClick={imageupload}
                          className="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-200 w-1/2 mt-7 max-sm:w-5/6 ">
                    <div className="flex items-center justify-center pt-7 flex-col">
                      <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
                        Upload display image
                      </h1>

                      <form className="flex  max-sm:flex-col items-center space-x-6">
                        <div className="shrink-0">
                          <img
                            className="h-16 w-16 object-cover rounded-full"
                            src={userdata.photo}
                            alt="Current pictures"
                          />
                        </div>
                        <label className="block">
                          {/* <span className="sr-only">Choose profile photo</span> */}
                          <input
                            type="file"
                            enctype="multipart/form-data"
                            className="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:bg-violet-100
                                  "
                            name="photo"
                            onChange={(e) => {
                              // console.log(e.target.files[0]);
                              setDImage(e.target.files[0]);
                              // console.log(image);
                            }}
                          />
                        </label>
                      </form>
                      <div className="flex-justify-between p-3 px-14">
                        <button
                          onClick={dimageupload}
                          className="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                        >
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
                    <h2 className="absolute text-lg font-semibold bg-white px-3">
                      User Details :
                    </h2>
                  </div>
                </div>
                <br></br>
                <br></br>
                <div>
                  <div className="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
                    <div className="col-span-6 relative ">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your FirstName
                      </span>

                      <input
                        type="text"
                        name="fname"
                        defaultValue={userdata.fname}
                        // value={userdata.fname}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative ">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your LastName
                      </span>

                      <input
                        type="text"
                        name="lname"
                        defaultValue={userdata.lname}
                        // value={userdata.lname}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>

                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your City
                      </span>
                      <input
                        type="text"
                        name="city"
                        defaultValue={userdata.city}
                        // value={userdata.city}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>

                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your State
                      </span>
                      <input
                        type="text"
                        name="state"
                        defaultValue={userdata.state}
                        // value={userdata.state}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>

                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Country
                      </span>
                      <input
                        type="text"
                        name="country"
                        defaultValue={userdata.country}
                        // value={userdata.country}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Age
                      </span>
                      <input
                        type="text"
                        name="age"
                        defaultValue={userdata.age}
                        // value={userdata.age}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                  </div>
                  <br></br>
                  <div className="justify-center item-center">
                    <button
                      onClick={updateProfile}
                      className="w-1/5 max-sm:w-1/2 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
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
                      <h2 className="absolute text-lg font-semibold bg-white px-3">
                        Social Details :
                      </h2>
                    </div>
                  </div>
                  <br></br>
                  <br></br>

                  <div className="md:grid grid-cols-12 flex flex-col md:items-center gap-4 p-4">
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Instagram Handle
                      </span>
                      <input
                        type="text"
                        name="instagram"
                        defaultValue={userdata.instagram}
                        // value={userdata.instagram}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Instagram Followers
                      </span>
                      <input
                        type="text"
                        name="instagramFollowers"
                        defaultValue={userdata.instagramFollowers}
                        // value={userdata.instagramURL}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Instagram URL
                      </span>
                      <input
                        type="text"
                        name="instagramURL"
                        defaultValue={userdata.instagramURL}
                        // value={userdata.instagramURL}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Instagram EngagementRate
                      </span>
                      <input
                        type="text"
                        name="instagramEngagementRate"
                        defaultValue={userdata.instagramEngagementRate}
                        // value={userdata.instagramURL}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Instagram Total Comments
                      </span>
                      <input
                        type="text"
                        name="instagramComments"
                        defaultValue={userdata.instagramComments}
                        // value={userdata.instagramURL}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div></div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Facebook Handle
                      </span>
                      <input
                        type="text"
                        name="facebook"
                        defaultValue={userdata.facebook}
                        // value={userdata.facebook}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Facebook Followers
                      </span>
                      <input
                        type="text"
                        name="facebookFollowers"
                        defaultValue={userdata.facebookFollowers}
                        // value={userdata.facebook}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Facebook URL
                      </span>
                      <input
                        type="text"
                        name="facebookURL"
                        defaultValue={userdata.facebookURL}
                        // value={userdata.facebookURL}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Facebook EngagementRate
                      </span>
                      <input
                        type="text"
                        name="facebookEngagementRate"
                        defaultValue={userdata.facebookEngagementRate}
                        // value={userdata.facebook}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                   
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Facebook Total Comments
                      </span>
                      <input
                        type="text"
                        name="facebookComments"
                        defaultValue={userdata.facebookComments}
                        // value={userdata.facebook}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                   <div></div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Twitter Handle
                      </span>
                      <input
                        type="text"
                        name="twitter"
                        defaultValue={userdata.twitter}
                        // value={userdata.twitter}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Twitter Followers
                      </span>
                      <input
                        type="text"
                        name="twitterFollowers"
                        defaultValue={userdata.twitterFollowers}
                        // value={userdata.twitterURL}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Twitter URL
                      </span>
                      <input
                        type="text"
                        name="twitterURL"
                        defaultValue={userdata.twitterURL}
                        // value={userdata.twitterURL}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Twitter twitterEngagementRate
                      </span>
                      <input
                        type="text"
                        name="twitterEngagementRate"
                        defaultValue={userdata.twitterEngagementRate}
                        // value={userdata.twitterURL}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Twitter Comments
                      </span>
                      <input
                        type="text"
                        name="twitterComments"
                        defaultValue={userdata.twitterComments}
                        // value={userdata.twitterURL}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div></div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Catogary 1
                      </span>
                      <input
                        type="text"
                        name="cat1"
                        defaultValue={userdata.cat1}
                        // value={userdata.cat1}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Catogary 2
                      </span>
                      <input
                        type="text"
                        name="cat2"
                        defaultValue={userdata.cat2}
                        // value={userdata.cat2}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                    <div className="col-span-6 relative">
                      <span className="absolute bg-white left-3 -top-[12px] px-2">
                        Your Catogary 3
                      </span>
                      <input
                        type="text"
                        name="cat3"
                        defaultValue={userdata.cat3}
                        // value={userdata.cat3}
                        onChange={handleInput}
                        className="text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                      />
                    </div>
                  </div>
                </div>
                <br></br>
                <br></br>
                <div className="flex-justify-between">
                  <button
                    onClick={updateProfile}
                    className="w-1/5 max-sm:w-1/2 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Update Details
                  </button>
                </div>
              </div>
              <br></br>
              <hr></hr>
              <br></br>
              <div className="px-2 flex">
                <div>
                  <h2 className="absolute text-lg font-semibold bg-white px-3">
                    User Description :
                  </h2>
                </div>
              </div>
              <div className="col-span-6 relative mt-16">
                <span className="absolute bg-white left-3 -top-[12px] px-2">
                  Description
                </span>

                <textarea
                  type="textbox"
                  name="discription"
                  defaultValue={userdata.discription}
                  // value={userdata.fname}
                  onChange={handleInput}
                  className="pt-3 text-[13px] h-12 text-gray-900 w-full border-2 px-2 rounded-sm"
                />
              </div>
              <br></br>
              <div className="flex-justify-between">
                <button
                  onClick={updateProfile}
                  className="w-1/5 max-sm:w-1/2 px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Update Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default InfluencerProfileEdit;
