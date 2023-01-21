import React from "react";
import InfluencerHeader from "./InfluencerHeader";
import siti from "../../Images/brand1.jpg";

const InfluencerCurrentConsignments = () => {
  return (
    <div>
      <InfluencerHeader />
      <div className="ml-60 mt-10 ">
        <a
          href="#"
          class="flex flex-col w-4/6 items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-none h-96 md:h-auto md:w-48 md:rounded-none md:rounded-none-lg m-1 p-1"
            src={siti}
            alt=""
          />
          <div class="flex flex-col   justify-between p-6 leading-normal">
            <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
              Owner Name :
            </p>
            <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
              Address :
            </p>
            <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
              Contact No. :
            </p>
            <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
              Amount :
            </p>
            <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
              Start Date:
            </p>
            <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
              End Date:
            </p>
            <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
              Payment Status: Done
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default InfluencerCurrentConsignments;
