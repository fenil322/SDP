import React from "react";
import BrandHeader from "./BrandHeader";
import img from "../../Images/demo.JPG";
const BrandArrivalRequest = () => {
  return (
    <div>
      <BrandHeader />
      <div className="ml-60 mt-10">
        <a
          href="#"
          class="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-full h-96 md:h-auto md:w-48 md:rounded-full md:rounded-full-lg m-2 p-2"
            src={img}
            alt=""
            
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Shwetangi Satasiya
            </h5>
            <p class="mb-3 font-normal text-gray-800 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021.
            </p>
            <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">
              Thank You!
            </p>
            <div>
              <button
                type="button"
                class="focus:outline-none text-white bg-green-600 hover:bg-green-500 focus:ring-2 focus:ring-green-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-500"
              >
                confirm
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BrandArrivalRequest;
