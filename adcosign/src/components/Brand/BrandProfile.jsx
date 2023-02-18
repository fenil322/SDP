import React from "react";
import { useEffect, useState } from "react";
import BrandHeader from "./BrandHeader";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
const BrandProfile = () => {
  const navigate = useNavigate();

  const [brandData, setbrandData] = useState([]);
  const getBrandData = async () => {
    try {

      const { data } = await axios.get("/brand/getBrandData");
      // const data = res.data;
      // console.log(data);
      setbrandData(data.data);
      console.log("Logged in brand is:- ");
      console.log(brandData);
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status == 422) {
        navigate('/')
      }
    }
  };
  useEffect(() => {
    getBrandData();
  }, []);

  return (
    <div>
      <BrandHeader />
      <div class="h-full bg-gray-200 py-8 w-5/6 m-auto">
        <div class="bg-white w-5/6 m-auto rounded-lg shadow-xl pb-8">
          <div class="w-full h-[300px]">
            <img
              src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg"
              class="w-full h-full rounded-tl-lg rounded-tr-lg"
            />
          </div>
          <div class="flex flex-col items-center -mt-20">
            <img
              //src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
              src={brandData.photo2}
              class="w-40 border-4 border-white bg-gray-50 rounded-none "
            />
            <div class="flex items-center space-x-2 mt-2">
              <p class="text-2xl">{brandData.uname}</p>
              <span class="bg-blue-500 rounded-full p-1" title="Verified">
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
            <p class="text-gray-700">Brand</p>
            <p class="text-sm text-gray-500">
              {brandData.city + " , " + brandData.country}
            </p>
          </div>
        </div>

        <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
          <div class="w-full flex flex-col 2xl:w-1/3">
            {/*                 Personal Info                      */}
            <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 class="text-xl text-gray-900 font-bold">Brand Information</h4>
              <ul class="mt-2 text-gray-700">
                <li class="flex border-y py-2">
                  <span class="font-bold w-54">Brand name:</span>
                  <span class="text-gray-700">{brandData.shopName}</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Brand Type:</span>
                  <span class="text-gray-700">{brandData.brandType}</span>
                </li>
                {/* <li class="flex border-b py-2">
                    <span class="font-bold w-24">Joined:</span>
                    <span class="text-gray-700">10 Jan 2022 (25 days ago)</span>
                  </li> */}
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Mobile:</span>
                  <span class="text-gray-700">{brandData.phone}</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Email:</span>
                  <span class="text-gray-700">{brandData.email}</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Location:</span>
                  <span class="text-gray-700">{brandData.location}</span>
                </li>
                <li class="flex border-b py-2">
                  <span class="font-bold w-24">Languages:</span>
                  <span class="text-gray-700">English, Hindi</span>
                </li>
                <li class="flex items-center border-b py-2 space-x-2">
                  <span class="font-bold w-24">Elsewhere:</span>
                  <a
                    target="_blank"
                    href={brandData.facebookURL}
                    title="Facebook"
                  >
                    <BsFacebook size={20} color="#3b5998" />
                  </a>
                  <a
                    target="_blank"
                    href={brandData.twitterURL}
                    title="Twitter"
                  >
                    <AiFillTwitterCircle size={24} color="#1da1f2" />
                  </a>
                  <a href="#" title="LinkedIn">
                    <svg
                      class="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 333333 333333"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z"
                        fill="#0077b5"
                      ></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href={brandData.instagramURL}
                    title="Instagram"
                  >
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

                <div class="flex items-center w-full my-6 -ml-1.5">
                  <div class="w-1/12 z-10">
                    <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                  </div>
                  <div class="w-11/12">
                    <p class="text-sm">
                      Connected with{" "}
                      <a href="#" class="text-blue-600 font-bold">
                        Colby Covington
                      </a>
                      .
                    </p>
                    <p class="text-xs text-gray-500">15 min ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*                 About                        */}
          <div class="flex flex-col w-full 2xl:w-2/3">
            <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
              <h4 class="text-xl text-gray-900 font-bold">About</h4>
              <p class="mt-2 text-gray-700">{brandData.description}</p>
            </div>
            {/*                 Social Information                     */}
            <div class="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
              <h4 class="text-xl text-gray-900 font-bold">Social Media</h4>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4 flex ">
                <div className="items-center">
                  <a
                    target="_blank"
                    href={brandData.facebookURL}
                    class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <div className="flex justify-between">
                      <RiFacebookBoxLine size={20} className="text-[#3b5998]" />
                      <div className="text-[#244489] font-bold">1K Views</div>
                    </div>

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                    <div className="flex justify-between font-bold">
                      <div className="justify-center align-middle text-center">
                        4.42M
                        <div className="text-xs font-normal">Followers</div>
                      </div>
                      <div className="justify-center align-middle text-center">
                        90<div className="text-xs font-normal">Reactions</div>
                      </div>
                      <div className="justify-center align-middle text-center">
                        342<div className="text-xs font-normal">Comments</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="items-center">
                  <a
                    target="_blank"
                    href={brandData.instagramURL}
                    class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <div className="flex justify-between">
                      <FaInstagram size={20} className="text-[#d62976]" />
                      <div className="text-[#d62976] font-bold">1.3K Views</div>
                    </div>

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                    <div className="flex justify-between font-bold">
                      <div className="justify-center align-middle text-center">
                        4.42M
                        <div className="text-xs font-normal">Followers</div>
                      </div>
                      <div className="justify-center align-middle text-center">
                        90<div className="text-xs font-normal">Reactions</div>
                      </div>
                      <div className="justify-center align-middle text-center">
                        342<div className="text-xs font-normal">Comments</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="items-center">
                  <a
                    target="_blank"
                    href={brandData.twitterURL}
                    class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  >
                    <div className="flex justify-between">
                      <FiTwitter size={20} className="text-[#00acee]" />
                      <div className="text-[#00acee] font-bold">2K Views</div>
                    </div>

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                    <div className="flex justify-between font-bold">
                      <div className="justify-center align-middle text-center">
                        4.42M
                        <div className="text-xs font-normal">Followers</div>
                      </div>
                      <div className="justify-center align-middle text-center">
                        90<div className="text-xs font-normal">Reactions</div>
                      </div>
                      <div className="justify-center align-middle text-center">
                        342<div className="text-xs font-normal">Comments</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProfile;
