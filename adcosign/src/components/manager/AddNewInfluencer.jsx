import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ManagerHeader from "./ManagerHeader";
import { TiPlus } from "react-icons/ti";
import axios from "axios";

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

  const [profilecard, setprofilecard] = useState([{
    fname: "", lname: "", phone: "", email: "", city: "", state: "", country: "", password: "",
    age: "", instagram: "", instagramURL: "", instagramFollowers: "", instagramEngagementRate: "",
    facebook: "", facebookURL: "", facebookFollowers: "", facebookEngagementRate: "",
    twitter: "", twitterURL: "", twitterFollowers: "", twitterEngagementRate: "",
    photo: "", cat1: "fation", cat2: "study", cat3: "dance", discription: "hello i am there"
    // ,name:this.fname + " " + this.lname,
  }])
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

  return (
    <div>
      <ManagerHeader />

      <div className=" grid grid-cols-1 md:grid-cols-2 ">
      {
        profilecard.length > 0 &&
        profilecard.map((item, indes) => (
            <div className="flex ml-60 mt-10 max-w-lg bg-white  ">
              
                <img
                  class="object-cover w-full rounded-full h-60 md:h-auto md:w-48 md:rounded-full md:rounded-full-lg m-2 p-2"
                  src={item.photo}
                  alt=""
                />
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.fname+" " +item.lname}
                    
                  </h5>
                  <p class="mb-3 font-normal text-gray-800 dark:text-gray-400">
                    {item.city+", "+item.state+", "+item.country}
                    
                     </p>
                  <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">
                    {item.email}

                  </p>
                  <div>
                    <div className="flex justify-center space-x-6 mb-5">
                      <div>
                        <button

                          onClick={async (e) => {
                            e.preventDefault()
                            console.log("hello")
                            try {
                              const res = await axios.put("manager/validateinfluencer",{email:item.email})
                              const data = res.data;
                              console.log(data)
                              if (data.success == true) {
                                window.location.reload();
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
                            console.log("hello2")
                            try {

                              const res = await axios.delete("manager/deleteinfluencer",{data:{email:item.email}})
                              
                              // { data:{email:email}});
                              const data = res.data;
                              console.log(data)
                              if (data.success == true) {
                                window.location.reload();
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
                </div>
             
          </div>
        ))
      }
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
