import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Card({ item }) {
  const navigate = useNavigate();
  const { uname, shopName, brandType, phone, email, city, state, country,
    address, location, password, photo } = item
  return (
    <>
      <div className="">
        <div className="flex min-h-screen items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/20">
          <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow ">
            <img
              //src={photo}
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              alt="image"
            />
            <div class="p-4">
              <div className="text-center">
                <h3 class="text-3xl font-bold font-dmserif text-neutral-700">
                  {shopName}
                </h3>

                <p class="mb-1 text-xl text-gray-700 font-dmserif">
                  {brandType}
                </p>
              </div>

              <div>
                <p class="mb-3 text-lg italic  group-hover:opacity-500 text-gray-600 ">
                  {item.desc}
                </p>
              </div>
              <br></br>
              <hr></hr>
              <br></br>
              <div className="flex space-x-2.5 items-center">
                <div>
                  <RiContactsFill size={20} />
                </div>
                <div>
                  <p class="mb-1 text-lg ">{phone}</p>
                </div>
              </div>
              <div className="flex space-x-2.5 items-center">
                <div>
                  <MdMarkEmailUnread size={20} />
                </div>
                <div>
                  <p class="mb-1 text-lg">{email}</p>
                </div>
              </div>

              <div className="flex space-x-2.5 items-center">
                <div>
                  <BiCurrentLocation size={20} />
                </div>
                <div>
                  <p class="mb-1 text-lg ">{item.location}</p>
                </div>
              </div>
              <p class="mb-1 ml-8 text-lg ">
                {city + " " + state}
              </p>

              <p class="mb-1 ml-8 text-lg">{country}</p>
              <p class="mb-1 ml-8 text-lg ">{address}</p>
            </div>
            <div className="flex justify-center space-x-6 mb-5">
              <div>
                <button

                  onClick={async (e) => {
                    e.preventDefault()
                    console.log("hello")
                    try {
                      const res = await axios.put("manager/validatebrand",{email})
                      const data = res.data;
                      console.log(data)
                      if (data.success == true) {
                        window.location.reload();
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
                    console.log("hello2")   
                    try {

                      const res = await axios.delete("manager/deletebrand",{ data:{email:email}});
                      const data = res.data;
                      console.log(data)
                      if (data.success == true) {
                        window.location.reload();
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
        </div>
      </div>
    </>
  );
}
export default Card;
