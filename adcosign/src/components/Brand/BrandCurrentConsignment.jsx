import React from "react";
import BrandHeader from "./BrandHeader";
import siti from "../../Images/demo.JPG";
const BrandCurrentConsignment = () => {
  return (
    <div>
      <BrandHeader />
      <div className="ml-60 mt-10 ">
        <a
          href="#"
          class="flex flex-col w-4/6 items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-full h-96 md:h-auto md:w-48 md:rounded-full md:rounded-full-lg m-2 p-2"
            src={siti}
            alt=""
          />
          <div class="flex flex-col   justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Shwetangi Satasiya
            </h5>
            <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
              swetangisatasiya1610@gmail.com
            </p>
            <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
              8200729509
            </p>
            <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
              Amount:4000
            </p>
            <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
              Start Date : 2023-04-10
            </p>
            <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
              End Date : 2024-10-18
            </p>
            <div>
              <button
                type="button"
                class="focus:outline-none text-white bg-green-800 hover:bg-green-700 focus:ring-2 focus:ring-green-300 rounded-lg font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500"
              >
                Give a Feedback
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BrandCurrentConsignment;
