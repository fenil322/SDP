import React from "react";
import BrandHeader from "./BrandHeader";
import InfluencerDetails from "./InfluencerDetails";
import { ReactDOM } from "react";
import Card from "./Cards";
import { useEffect, useState } from "react";
import { NavLink, redirect, useNavigate, useSearchParams } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import client from "../../api/client"
import axios from "axios";

import Navbar from './Navbar'


import loader from "../../Images/loader.gif"

const BrandHome = () => {

  const [profilecard, setprofilecard] = useState([])
  const [age,setAge]=useState("");
  const navigate = useNavigate();
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setloading] = useState(true);
  const callgetInfluencerPage = async () => {
    try {
     setloading(true)
      const res = await axios.get(`influencer/getAllInfluencer${window.location.search}`);

      const data = res.data;
      // console.log(data)
      if (data.success != true) {
        console.log(data);
        navigate("/BrandLogin");
      }

      setprofilecard(data.data);
      // console.log(profilecard)
      setloading(false) 

    } catch (err) {
      console.log(err);
      navigate("/BrandLogin");

    }
  }


  useEffect(() => {
    callgetInfluencerPage();
  }, [])

  return (
    <div className="flex flex-row h-[screen]">
      <Navbar />
      <div className="ml-14 w-screen h-[screen]">
        <BrandHeader page="Home" />
        {loading === true ?
          <img src={loader} alt="laoding" className="h-52 mx-auto"
          />
          : <div>
        <div className="flex">
        
           {/* <div className="">
            <aside class="w-64" aria-label="Sidebar">
              <div class="px-3 py-4 overflow-y-auto rounded-tr-3xl rounded-r-3xl bg-blue-900 text-gray-100">
                <ul class="space-y-2">
                  <li>
                    <link
                      rel="stylesheet"
                      href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
                    />

                    <div class="max-w-2xl mx-auto bg-opacity-0">
                      <form>  
                        <label
                          for="default-search"
                          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                        >
                          Search
                        </label>
                        <div class="relative">
                          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg
                              class="w-5 h-5 text-gray-500 dark:text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              ></path>
                            </svg>
                          </div>
                          <input
                            type="search"
                            id="default-search"
                            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search Here..."
                            required
                          />
                          <button
                            type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                  </li>

                  <li className="pt-0.5">
                    <div class="flex justify-left mt-2 mb-2">
                      <div>
                        <h1 className="font-semibold py-1 font-mono text-xl">
                          Gender
                        </h1>
                        <div class="flex items-center">
                          <input
                            id="default-radio-1"
                            type="radio"
                            value=""
                            name="default-radio"
                            class="w-4 h-4 bg-gray-100 border-gray-300"
                          />
                          <label
                            for="default-radio-1"
                            class="ml-2 text-sm font-medium dark:text-gray-300 "
                          >
                            <h3 className="text-gray-300 font-mono text-lg">
                              Male
                            </h3>
                          </label>
                        </div>
                        <div class="flex items-center ">
                          <input
                            checked
                            id="default-radio-2"
                            type="radio"
                            value=""
                            name="default-radio"
                            class="w-4 h-4  bg-gray-100 border-gray-300 "
                          />
                          <label
                            for="default-radio-2"
                            class="ml-2 text-sm font-medium  dark:text-gray-300"
                          >
                            <h3 className="text-gray-300 font-mono text-lg">
                              Female
                            </h3>
                          </label>
                        </div>
                        <div class="flex items-center">
                          <input
                            checked
                            id="default-radio-2"
                            type="radio"
                            value=""
                            name="default-radio"
                            class="w-4 h-4  bg-gray-100 border-gray-300 "
                          />
                          <label
                            for="default-radio-2"
                            class="ml-2 text-sm font-medium  dark:text-gray-300"
                          >
                            <h3 className="text-gray-300 font-mono text-lg">
                              Both
                            </h3>
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div className="mt-2 mb-2">
                        <h2 className="text-gray-100 font-semibold py-1 font-mono text-xl">
                          By Age
                        </h2>
                      </div>
                      <div className="mt-2 mb-6">
                        <select
                          name="cars"
                          id="cars"
                          className="text-gray-100 bg-slate-500 rounded-full w-full border-none"
                          // onChange={}
                        >
                          <option value="18-20">18-20</option>
                          <option value="21-32">21-32</option>
                          <option value="33-44">33-44</option>
                          <option value="45-60">45-60</option>
                        </select>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div className="mt-2 mb-2">
                        <h2 className="text-gray-100 font-semibold py-1 font-mono text-xl">
                          By Ethinicity
                        </h2>
                      </div>
                      <div className="mt-2 mb-6">
                        <select
                          name="cars"
                          id="cars"
                          className="text-gray-100 bg-slate-500 rounded-full w-full border-none"
                        >
                          <option value="18-20">Asian</option>
                          <option value="saab">Europian</option>
                          <option value="opel">Indian</option>
                          <option value="audi">Canadian</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="mt-2 mb-2">
                        <h2 className="text-gray-100 font-semibold py-1 font-mono text-xl">
                          By Location
                        </h2>
                      </div>
                      <div className="mt-2 mb-6">
                        <select
                          name="cars"
                          id="cars"
                          className="text-gray-100 bg-slate-500 rounded-full w-full border-none"
                        >
                          <option value="">Surat</option>
                          <option value="">Nadiad</option>
                          <option value="">Rajkot</option>
                          <option value="">Vadodra</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="mt-2 mb-2">
                        <h2 className="text-gray-100 font-semibold py-1 font-mono text-xl">
                          Followers
                        </h2>
                      </div>
                      <div className="mt-2 mb-6">
                        <select
                          name="followers"
                          id="followers"
                          className="text-gray-100 bg-slate-500 rounded-full w-full border-none"
                        >
                          <option value="">1K-2K</option>
                          <option value="">3K-4K</option>
                          <option value="">5K-6K</option>
                          <option value="">7K-8K</option>
                        </select>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div className="mt-2 mb-2">
                        <h2 className="text-gray-100 font-semibold py-1 font-mono text-xl">
                          Catagories
                        </h2>
                      </div>
                      <select
                        name=""
                        id=""
                        className="text-gray-100 bg-slate-500 rounded-full w-full border-none"
                      >
                        <option value="">Songs</option>
                        <option value="">Fashion</option>
                        <option value="">Games</option>
                        <option value="">Dance</option>
                      </select>
                    </div>
                  </li>
                  <li></li>
                </ul>
              </div>
            </aside>
          </div>  */}

          <div className="">
            {/* <div className="mx-20 font-medium font-mono text-xl">
              <h1>Connect Your Interested Influencer...</h1>
            </div> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-20 max-sm:px-5  max-md:px-10 ">
              {profilecard.length > 0 &&
                // profilecard.map((item) => (
                profilecard.map((item) => (
                  <Card item={item} />
                ))
              }
            </div>
          </div>
        </div>
        <div className="mb-10">  
          <div class="flex justify-center">
            <nav aria-label="Page navigation example">
              <ul class="flex list-style-none">
                <li class="page-item disabled">
                  <a
                   class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                   href={`?page=${(parseInt(searchParams.get("page"))-1)<1?1:parseInt(searchParams.get("page"))-1}`}
                   
                  >
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class={`page-link relative block py-1.5 px-3 border-0 ${searchParams.get("page")==1?`bg-blue-600 text-white`:`bg-transparent text-gray-800`}  outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`}
                    href="?page=1"
                  >
                    1
                  </a>
                </li>
                <li class="page-item active">
                  <a
                     class={`page-link relative block py-1.5 px-3 border-0 ${searchParams.get("page")==2?`bg-blue-600 text-white`:`bg-transparent  text-gray-800`}  outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`}
                     href="?page=2"
                  >
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a
                     class={`page-link relative block py-1.5 px-3 border-0 ${searchParams.get("page")>2  ?`bg-blue-600 text-white`:`bg-transparent  text-gray-800`}  outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`}
                  //  href="?page=3"
                  >
                    {searchParams.get("page")<=2?"...":searchParams.get("page")}
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href={`?page=${(parseInt(searchParams.get("page"))+1)}`}
                    // onClick={()=>{
                    //   setSearchParams({page:window.location.search+1})
                    // }}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        </div>}
        <ToastContainer autoClose={1000}/>
      </div>

    </div>
  );
};

export default BrandHome;
