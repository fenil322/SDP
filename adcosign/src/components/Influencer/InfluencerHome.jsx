import React from "react";
import InfluencerHeader from "./InfluencerHeader";

const InfluencerHome = () => {
  return (
    <>
      <div className="">
        <InfluencerHeader />
        <div className="">
          <div className="ml-10 mt-10">
            <a
              href="#"
              class="block w-4/6 p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h6 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Shop Owner Name:
              </h6>
              <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Shop Name:
              </h5>
              <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Shop Address:
              </h5>
              {/* <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p> */}
              <div>
                <button
                  type="button"
                  class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-none text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  View More
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerHome;
