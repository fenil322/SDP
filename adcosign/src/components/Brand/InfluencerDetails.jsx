import React, { useState } from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

import BrandHeader from "./BrandHeader";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { TiLocation } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { MdOutlineLocationCity } from "react-icons/md";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Navbar";
import loader from "../../Images/loader.gif";

import Rating from '@mui/material/Rating';
const InfluencerDetails = (props) => {
  const [persondata, setpersonData] = useState({});

  const location = useLocation();
  const [brandData, setbrandData] = useState([]);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const getConnectedBrand = async (id) => {
    // console.log(id);
    try {
      setLoading(true)
      const res = await axios.post('brand/getconnectedbrand', { id });
      const data = res.data;
      console.log(data);
      setbrandData(data.data);
      setDate(data.date)
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }
  const createConsignment = async (e) => {
    const influencerId = persondata._id;
    const email = persondata.email;

    console.log(influencerId);
    try {
      const res = await axios.post("consignment/sendrequest", { influencerId: persondata._id, email: email })
      const data = res.data;
      console.log(data);
      console.log(data.status);
      if (res.status == 200) {
        toast.success(data.message)
      }


    } catch (err) {
      // console.log(err.response)
      // console.log(err.data.error);
      if (err.response.status == 400) {
        console.log(err.response.data);

        console.log(err.response.data.error);
        toast.error(err.response.data.error)
      }

      // console.log(err.response);
    }
  }
  const consolelog = () => {
    setpersonData(location.state);
    getConnectedBrand(location.state._id)

  }
  useEffect(() => {
    consolelog();
  }, []);
  useEffect(() => {
    // console.log(persondata.feedbacks);
    setFeedback(persondata.feedbacks)
  }, [persondata.feedbacks])
  const rating = (id) => {
    const item = feedback.find((item) => item.brandId === id)
    // console.log(item.rating);
    return item ? item.rating : 0;
  }
  const review = (id) => {
    const item = feedback.find((item) => item.brandId === id)
    // console.log(item.rating);
    return item ? item.review : "";
  }
  return (
    <div className="flex flex-row h-screen">
      <Navbar />

      <div className=" ml-14 w-screen">
        <BrandHeader page={`Home > ${persondata.fname}`} />
        <div className="w-5/6  m-auto my-10 pb-10">
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
          />
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
          ></link>

          <div class="bg-white rounded-lg shadow-xl pb-8">
            <div
              x-data="{ openSettings: false }"
              class="absolute right-12 mt-4 rounded"
            ></div>
            <div class="w-full h-[250px]">
              <img
                src={persondata.photo}
                class="w-full h-full rounded-tl-lg rounded-tr-lg"
                alt="not available"
              />
            </div>
            <div className="flex justify-between align-middle mt-10">
              <div className="flex ml-20">
                <div class=" flex flex-col items-center -mt-24">
                  <img
                    src={persondata.profile}
                    //  src={persondata.photo}
                    class="border-4 h-40 w-40 border-white rounded-full bg-gray-200"
                    alt="pic"
                  />
                </div>

                <div className="name -mt-8 ml-8">
                  <div class=" flex items-center space-x-2 ">
                    <div className="flex-row">
                      <p class="text-2xl">
                        {persondata.fname + " " + persondata.lname}
                      </p>
                      <p class="text-sm text-gray-500">
                        {persondata.city + ", " + persondata.country}
                      </p>
                    </div>
                    <span
                      class="bg-blue-500 rounded-full p-1 -mt-4 "
                      title="Verified"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="text-gray-100 h-2.5 w-2.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="4"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div class=" flex  items-center lg:items-end -mt-10 -ml-40">
                <div class="flex items-center space-x-4 mt-2 justify-between">
                  <button
                    onClick={createConsignment}
                    class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                    </svg>
                    <span>Connect</span>
                  </button>
                  <button class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Message</span>
                  </button>
                </div>
              </div>
              {/* <div className="flex border-4 mr-10 justify-center" > */}
              <div class="align-center ">
                <button
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-semibold rounded-full text-sm px-2.5 py-1.5 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Share
                </button>
                <button
                  class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-twitter"></i>
                </button>
                <button
                  class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-facebook-square"></i>
                </button>
                <button
                  class=" shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i class="fab fa-linkedin"></i>
                </button>
              </div>
              {/* </div> */}
            </div>

            <div className="ml-20 mt-10 ">
              <div>
                <button
                  type="button"
                  class="py-1 px-2 mr-2 mb-2 text-sm font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Categories
                </button>
              </div>
              <div className="flex my-2">
                <div>
                  <button
                    type="button"
                    class="py-1 px-2 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    {persondata.cat1}
                  </button>
                </div>

                <div>
                  <button
                    type="button"
                    class="py-1 px-2 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    {persondata.cat2}
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="py-1 px-2 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    {persondata.cat3}
                  </button>
                </div>
              </div>
            </div>

            <div className="mx-20 border-y-2">
              <div className="  grid lg:grid-cols-3  grid-cols-2 sm:grid-cols-1  pb-10">
                <div className="items-center mt-10 ">
                  <div
                    class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <div className=" flex justify-between items-center">
                      <RiFacebookBoxLine size={25} className="text-[#3b5998] " />
                      <a href={persondata.facebookURL}
                        target="_blank"
                        className="hover:text-blue-600" >{persondata.facebook}</a>
                    </div>

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                    <div className="flex justify-between font-bold">
                      {persondata?.facebookFollowers ?
                        <div className="justify-center align-middle text-center">{persondata.facebookFollowers}<div className="text-xs font-normal">Followers</div></div>
                        : ""}
                      {persondata?.facebookComments ?
                        <div className="justify-center align-middle text-center">{persondata.facebookComments}<div className="text-xs font-normal">Comments</div></div>
                        : ""}
                      {persondata?.facebookEngagementRate ?
                        <div className="justify-center align-middle text-center">{persondata.facebookEngagementRate}<div className="text-xs font-normal">EngagementRate</div></div>
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
                      <a href={persondata.instagramURL}
                        target="_blank"
                        className="hover:text-blue-600" >{persondata.instagram}</a>
                    </div>

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                    <div className="flex justify-between font-bold">
                      {persondata?.instagramFollowers ?
                        <div className="justify-center align-middle text-center">{persondata.instagramFollowers}<div className="text-xs font-normal">Followers</div></div>
                        : ""}
                      {persondata?.instagramComments ?
                        <div className="justify-center align-middle text-center">{persondata.instagramComments}<div className="text-xs font-normal">Comments</div></div>
                        : ""}
                      {persondata?.instagramEngagementRate ?
                        <div className="justify-center align-middle text-center">{persondata.instagramEngagementRate}<div className="text-xs font-normal">EngagementRate</div></div>
                        : ""} </div>
                  </div>
                </div>
                <div className="items-center mt-10">
                  <div
                    class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <div className="flex justify-between items-center">
                      <FiTwitter size={25} className="text-[#00acee] " />
                      <a href={persondata.twitterURL}
                        target="_blank"
                        className="hover:text-blue-600" >{persondata.twitter}</a>
                    </div>

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                    <div className="flex justify-between font-bold">
                      {persondata?.twitterFollowers ?
                        <div className="justify-center align-middle text-center">{persondata.twitterFollowers}<div className="text-xs font-normal">Followers</div></div>
                        : ""}
                      {persondata?.twitterComments ?
                        <div className="justify-center align-middle text-center">{persondata.twitterComments}<div className="text-xs font-normal">Comments</div></div>
                        : ""}
                      {persondata?.twitterEngagementRate ?
                        <div className="justify-center align-middle text-center">{persondata.twitterEngagementRate}<div className="text-xs font-normal">EngagementRate</div></div>
                        : ""} </div>
                  </div>
                </div>
              </div>

            </div>

            {/* <div className="flex w-5/6  m-auto my-10 pb-10">
            <div className="mt-8">
              <div>
                <br></br>
                <div className="flex">
                  <br></br>
                  <FiPhoneCall size={20} />
                  <div> {persondata.phone} +91 243543656</div>
                </div>
                <br></br>
                <div className="flex">
                  <br></br>
                  <TiLocation size={20} />
                  <div>
                    {" "}
                    {persondata.city +
                      " , " +
                      persondata.state +
                      " , " +
                      persondata.country}
                  </div>
                  <br></br>
                </div>
                <div className="flex justify-between">
                  <br></br>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur
                </div>
              </div>
            </div>
          </div> */}
            <div className="flex justify-between border-b-2 m-auto my-10 pb-10 mx-20">
            {persondata.discription?
            
            <div>
                <h2 className="font-bold font-mono text-2xl">About Influencer</h2>
                <div className="w-1/2">
                  {persondata.discription}
                </div>
              </div>
              :""}
              <div className="w-80">
                <h2 className="font-bold font-mono text-2xl w-80">
                  Influencer Details
                </h2>
                <br></br>
                <div className="flex space-x-4">
                  <div>
                    <FiPhoneCall size={18} />
                  </div>
                  <div>{persondata.phone}</div>
                </div>

                <br></br>
                <hr></hr>
                <br></br>
                <div className="flex space-x-4">
                  <div>
                    <MdOutlineLocationCity size={20} />
                  </div>
                  <div className="">{persondata.city+", "+persondata.state+", "+persondata.country}</div>
                </div>
                <br></br>
                <hr></hr>
                <br></br>
                <div className="flex align-middle space-x-4">
                  <div>
                    <MdEmail size={20} />
                  </div>
                  <div>{persondata.email}</div>
                </div>

                <div></div>
              </div>
            </div>
            <div class="flex-1 mx-20 ">
              <h4 class="text-2xl text-gray-900 font-bold">Connected Brands</h4>
              <div class="relative mt-3 px-4">
                <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                {/* <!-- start::Timeline item --> */}
                {loading === true ?
                  <img src={loader} alt="laoding" className="h-52 mx-auto"
                  />
                  :
                  <div>

                    {brandData.length == 0 ? <div>No Brands connected</div> :
                      brandData?.map((data, index) => (

                        <div class="flex items-center w-1/2 my-1 -ml-1.5 space-y-1 max-h-16">
                          <div class="w-1/5 z-10">
                            <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                          </div>
                          <img src={data.logo} className="w-8 h-8 rounded-full mr-5 -ml-4" alt="profile" />
                          <div class="w-2/5">
                            <p class="text-sm font-semibold">{data.shopName}</p>
                            <p class="text-xs text-gray-500">{date[index]}</p>
                          </div>
                          <div className="w-2/5">
                            <Rating className="" name="read-only" value={rating(data._id)} precision={0.01} readOnly />
                            <div className="-mt-2"> {review(data._id)}</div>
                          </div>
                        </div>
                      ))}
                  </div>
                }

              </div>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={1500} />
      </div>
    </div>
  );
};

export default InfluencerDetails;
