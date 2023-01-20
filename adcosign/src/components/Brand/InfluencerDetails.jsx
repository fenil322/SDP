import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import siti from "../../Images/demo.JPG";
import BrandHeader from "./BrandHeader";
const InfluencerDetails = () => {
  return (
    <>
      <BrandHeader />
      <div>
        <link
          rel="stylesheet"
          href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
        />
        <link
          rel="stylesheet"
          // href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
        ></link>

        <div class="bg-white rounded-lg shadow-xl pb-8">
          <div
            x-data="{ openSettings: false }"
            class="absolute right-12 mt-4 rounded"
          ></div>
          <div class="w-full h-[250px]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCS3StOf9LlaFuAG5lUzzqduKG50o84t-sg&usqp=CAU"
              class="w-full h-full rounded-tl-lg rounded-tr-lg"
              alt="not available"
            />
          </div>
          <div className="flex justify-between align-middle mt-10">
            <div className="flex ml-20">
              <div class=" flex flex-col items-center -mt-24">
                <img
                  src={siti}
                  class="border-4 w-40 border-white rounded-full"
                  alt="pic"
                />
              </div>
              <div className="name -mt-8 ml-8">
                <div class=" flex items-center space-x-2 ">
                  <div className="flex-row">
                    <p class="text-2xl">Alia Bhatt</p>
                    <p class="text-sm text-gray-500">New York, USA</p>
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
                <button class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
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

          <div className="ml-20 mt-10">
            <div>
              <button
                type="button"
                class="py-1 px-2 mr-2 mb-2 text-sm font-semibold text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                TAGS ?
              </button>
            </div>
            <div className="flex my-2">
              <div>
                <button
                  type="button"
                  class="py-1 px-2 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Makeup
                </button>
              </div>

              <div>
                <button
                  type="button"
                  class="py-1 px-2 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Beauty
                </button>
              </div>
              <div>
                <button
                  type="button"
                  class="py-1 px-2 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-blue-200 rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Model
                </button>
              </div>
            </div>
          </div>
          <div className="ml-20">
            <div className="flex space-x-20">
              <div className="items-center">
                <a
                  href="#"
                  class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <div className="flex space-x-60">
                    <RiFacebookBoxLine size={20} className="text-[#3b5998]" />
                    <div className="text-[#244489] font-bold">1K Views</div>
                  </div>

                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                  <div className="flex space-x-20 font-bold">
                    <div>4.42M</div>
                    <div>342</div>
                    <div>90</div>
                  </div>
                  <div className="flex space-x-14 font-light text-xs">
                    <div>Followers</div>
                    <div>Reactions</div>
                    <div>Comments</div>
                  </div>
                </a>
              </div>
              <div className="items-center">
                <a
                  href="#"
                  class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <div className="flex space-x-56">
                    <FaInstagram size={20} className="text-[#d62976]" />
                    <div className="text-[#d62976] font-bold">1.3K Views</div>
                  </div>

                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                  <div className="flex space-x-20 font-bold">
                    <div>4.42M</div>
                    <div>90</div>
                    <div>342</div>
                  </div>
                  <div className="flex space-x-14 font-light text-xs">
                    <div>Followers</div>
                    <div>Reactions</div>
                    <div>Comments</div>
                  </div>
                </a>
              </div>
              <div className="items-center">
                <a
                  href="#"
                  class="bg-gray-100 block max-w-sm p-6  border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <div className="flex space-x-60">
                    <FiTwitter size={20} className="text-[#00acee]" />
                    <div className="text-[#00acee] font-bold">2K Views</div>
                  </div>

                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"></h5>
                  <div className="flex space-x-20 font-bold">
                    <div>4.42M</div>
                    <div>90</div>
                    <div>342</div>
                  </div>
                  <div className="flex space-x-14 font-light text-xs">
                    <div>Followers</div>
                    <div>Reactions</div>
                    <div>Comments</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex space-x-56">
            <div className="mt-8">
              <h2>Age Enagagement Rate</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerDetails;
