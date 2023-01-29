import React from "react";
import InfluencerHeader from "./InfluencerHeader";
// import  { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import { toast } from "react-toastify";

const InfluencerProfile = () => {
  // const history = useHistory();
  // const [image, setImage]=useState("");
  // const [url ,setUrl]=useState("");
  return (
    <body className="bg-slate-50 p-6">
      <div>
        <InfluencerHeader />

        <div className="flex items-center justify-center">
          <div className="bg-slate-200 w-1/5 mt-10 rounded-lg">
            <div className="flex items-center justify-center pt-10 flex-col">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"
                alt="No available"
                className="rounded-full w-32"
              ></img>

              <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3">
                Shwetangi Satasiya{" "}
              </h1>
              <h3 className="text-gray-400 text-sm"> Influencer</h3>
              <h3 className="text-gray-500 text-sm">Surat,Gujarat,India</h3>

              <div className="flex-justify-between p-4">
                <button className="text-base font-bold uppercase text-blue-50  border-2 py-2 px-6 bg-blue-500 ">
                  {" "}
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-slate-200 w-1/5 mt-7 ">
            <div className="flex items-center justify-center pt-7 flex-col">
              <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
                Upload image
              </h1>

              <form class="flex items-center space-x-6">
                <div class="shrink-0">
                  <img
                    class="h-16 w-16 object-cover rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"
                    alt="Current pictures"
                  />
                </div>
                <label class="block">
                  <span class="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-50 file:text-blue-700
      hover:file:bg-violet-100
    "
                  />
                </label>
              </form>
              <div className="flex-justify-between p-3 px-14">
                <button className="text-base font-bold  rounded-none text-blue-50  border-2 py-2 px-6 bg-blue-500">
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default InfluencerProfile;
