import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiContactsFill, RiFacebookBoxLine } from "react-icons/ri";
import { TiLocation, TiPlus } from "react-icons/ti";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiPhoneCall, FiTwitter } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaAddressBook, FaInstagram ,FaLocationArrow} from "react-icons/fa";

function Card({ item, onData }) {
  const navigate = useNavigate();
  const { _id, uname, shopName, brandType, phone, email, city, state, country,
    address, location, photo, instagramUrl, facebookUrl } = item
  return (
    <>
      <div className="">
        <div className="flex flex-col mx-auto max-w-md items-center justify-center  border-2 border-gray-300 shadow-2xl rounded-2xl bg-gray-100 hover:shadow-xl hover:shadow-black/20">


          <div class="p-4">
            <div className="text-center">
              <h3 class="text-3xl font-bold font-dmserif text-neutral-700">
                {shopName}
              </h3>


              <p class="mb-1 text-xl text-gray-700 font-dmserif">
                {brandType}
              </p>
            </div>


            <div className=" border-y-2 py-5 ">

              <div className="mt-3 ">
                <div className="flex space-x-2.5 items-center mt-3">
                  <FiPhoneCall size={20} />
                  <div>{phone}</div>
                </div>
                <div className="flex space-x-2.5 items-center mt-3">
                  <MdEmail size={20} />
                  <div>{email}</div>
                </div>
                <div className="flex space-x-2.5 items-center mt-3">
                  <TiLocation size={20} />
                  <div>{city + ", " + state + ", " + country}</div>
                </div>
                <div className="flex space-x-2.5 items-center mt-3">
                  <FaAddressBook size={20} />
                  <div className="overflow-hidden">{address}</div>
                </div>
                <div className="flex space-x-2.5 items-center mt-3">
                  <BiCurrentLocation size={20} />
                  <a href={location} target="_blank " className="hover:text-blue-400">click here...</a>
                </div>
              </div>


            </div>

          </div> <div className="flex space-x-10">
            <a href={instagramUrl} target="_blank" className="flex cursor-pointer">
              <RiFacebookBoxLine size={30} className="text-[#3b5998]" />
            </a>

            <a href={facebookUrl} target="_blank" className="flex cursor-pointer ">
              <FaInstagram size={30} className="text-[#d62976]" />
            </a>
          </div>

          <div className="flex justify-center space-x-6 my-5">
            <div>
              <button

                onClick={async (e) => {
                  e.preventDefault()
                  console.log("hello")
                  try {
                    const res = await axios.put("manager/validatebrand", { email })
                    const data = res.data;
                    console.log(data)
                    if (data.success == true) {
                      onData(_id)
                      // window.location.reload();
                      toast.success("Brand Validation Success")
                    }
                  } catch (err) {
                    navigate("/AddNewBrand");
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
                  
                  try {

                    const res = await axios.delete("manager/deletebrand", { data: { email: email } });
                    const data = res.data;
                    console.log(data)
                    if (data.success == true) {
                      // window.location.reload();
                      onData(_id)
                      toast.success("Brand Removed Successfully")
                    }
                  } catch (err) {
                    navigate("/AddNewBrand");
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
        <ToastContainer autoClose={1000} />
      </div>
    </>
  );
}
export default Card;
