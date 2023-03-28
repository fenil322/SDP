import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ManagerHeader from "./ManagerHeader";
import axios from "axios";
import Navbar from "./Navbar";
import InfCard from "./InfCard";

const data = [
  {
    id: 101,
    fullname: " Damilare Anjorin",
    email: "damilareanjorin1@gmail.com",
    phone: " +2348106420637",
    status: "acive",
  },
  {
    id: 102,
    fullname: " Damilare Anjorin",
    email: "damilareanjorin1@gmail.com",
    phone: " +2348106420637",
    status: "acive",
  },
  {
    id: 103,
    fullname: " Damilare Anjorin",
    email: "damilareanjorin1@gmail.com",
    phone: " +2348106420637",
    status: "acive",
  },
  {
    id: 103,
    fullname: " Damilare Anjorin",
    email: "damilareanjorin1@gmail.com",
    phone: " +2348106420637",
    status: "acive",
  },
];

const AddNewInfluencer = () => {

  const [profilecard, setprofilecard] = useState([])
  const navigate = useNavigate();
  const sleep = ms => new Promise(r => setTimeout(r, ms));


  const callgetInfluencerPage = async () => {

    try {
      const res = await fetch("manager/getunverifiendInfluencer", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
        , credentials: "include"
      });
      const data = await res.json();
      // console.log(data.data)
      setprofilecard(data.data);
      console.log(profilecard)
    } catch (err) {
      //navigate("/BrandLogin");
      console.log(err)
    }
    // console.log(profilecard)
  }

  useEffect(() => {
    callgetInfluencerPage();
  }, [])
  const removeinf = (id) => {
    const updatedItems = profilecard.filter(item => item._id !== id);
    setprofilecard(updatedItems)
  }

  return (
    <div className="h-[screen] flex">
      <Navbar />
      <div className="ml-14 w-screen max-sm:ml-0">
        <ManagerHeader page="Add Influencer" />

        <div className="grid mt-10 px-20 max-sm:px-0 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profilecard.length == 0 ? <h1 className="text-center text-3xl font-bold mt-10">No New Request </h1> :
            profilecard.map((item, indes) => (
              <InfCard item={item} onData={removeinf} />
            ))
          }
        </div>
      </div>

      <div>
        {/* <div className="w-5/6 m-auto mt-10">
          <div class="align-middle border-b-2 inline-block min-w-full shadow overflow-hidden  shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
            <table class="min-w-full">
              <thead>
                <tr>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                    ID
                  </th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Fullname
                  </th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Email
                  </th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Phone
                  </th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Status
                  </th>

                  <th class="px-6 py-3 border-b-2 border-gray-300"></th>
                </tr>
              </thead>
              <tbody class="">
                {data.map((value, index) =>
                (
                  <tr key={index} className="">


                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div class="flex items-center">
                        <div>
                          <div class="text-sm leading-5 text-gray-800">
                            {value.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div class="text-sm leading-5 text-blue-900">
                        {value.fullname}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      {value.email}
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      {value.phone}
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative text-xs">{value.status}</span>
                      </span>
                    </td>

                    <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                      <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                        View Details

                      </button>
                      <div class="py-5">
                        <details class="group">
                          <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> What is a SAAS platform?</span>
                            <span class="transition group-open">
                              <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                              </svg>
                              View More
                            </span>
                          </summary>
                          <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                            SAAS platform is a cloud-based software service that allows users to access
                            and use a variety of tools and functionality.
                          </p>
                        </details>
                      </div>
                    </td>
                  </tr>


                ))} */}

        {/* <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">#1</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">
                      Damilare Anjorin
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    damilareanjorin1@gmail.com
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    +2348106420637
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span class="relative text-xs">active</span>
                    </span>
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">#1</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">
                      Damilare Anjorin
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    damilareanjorin1@gmail.com
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    +2348106420637
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span class="relative text-xs">not active</span>
                    </span>
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">#1</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">
                      Damilare Anjorin
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    damilareanjorin1@gmail.com
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    +2348106420637
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span class="relative text-xs">active</span>
                    </span>
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="flex items-center">
                      <div>
                        <div class="text-sm leading-5 text-gray-800">#1</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div class="text-sm leading-5 text-blue-900">
                      Damilare Anjorin
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    damilareanjorin1@gmail.com
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    +2348106420637
                  </td>
                  <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <span class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                      ></span>
                      <span class="relative text-xs">disabled</span>
                    </span>
                  </td>

                  <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                    <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                      View Details
                    </button>
                  </td>
                </tr> */}
        {/* </tbody>
            </table>
          </div>
        </div> */}
      </div>



    </div>
  );
};

export default AddNewInfluencer;
