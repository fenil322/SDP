import React from "react";
import { TiPlus } from "react-icons/ti";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { TiLocation } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ReqArrivalCard({ item, onData }) {
  const navigate = useNavigate();
  const {
    _id,
    logo,
    uname,
    shopName,
    brandType,
    phone,
    email,
    city,
    state,
    country,
    address,
    location,
    photo1,
  } = item;
 
  const branddetailpage = () => {
    navigate("/BrandDetails", { state: item });
  };

  return (
    <>


      <div class="mt-10 h-full items-center mx-10 justify-center border-2 border-gray-300 shadow-2xl bg-gray-100  rounded-2xl ">
        <img
          //src={photo}
          src={logo}
          class="h-1/3 w-1/3 m-auto mt-5 cursor-pointer "
          alt="image"
          onClick={()=>branddetailpage()}
        />

        <div class="px-5 ">
          <div className="text-center">
            <h3 class="text-3xl font-bold font-dmserif text-neutral-700">
              {shopName}
            </h3>

            <p class=" text-xl text-gray-700 font-dmserif">{brandType}</p>
          </div>

          <div className="border-y-2 py-3">

            <div className="flex space-x-2.5 items-center ">
           
              <FiPhoneCall size={20} />
             
                <p class="mb-1 text-lg ">{phone}</p>
              
            </div>
            <div className="flex space-x-2.5 items-center">
            <MdEmail size={20} />
                <p class="mb-1 text-lg">{email}</p>
             
            </div>

            <div className="flex space-x-2.5 items-center ">
            <TiLocation size={20} />
                <p class="mb-1 text-lg hover:text-blue-500 ">{city + ", " + state}</p>
             
            </div>
          </div>

          <div className="flex justify-center space-x-6 my-5 ">

            <button

              onClick={async (e) => {
                e.preventDefault()
                console.log("hello")
                try {
                  const res = await axios.put("consignment/acceptbrandreq", { email, _id })
                  const data = res.data;
                  console.log(data)
                  if (data.success == true) {
                    onData(_id)
                    toast.success("Request Accepted Successfully ")
                  }
                } catch (err) {
                  console.log(err)
                  navigate("/InfluencerArrivalRequest");
                }
              }}

              class="flex space-x-2 items-center px-3 py-2 bg-green-700 hover:bg-green-800 rounded-md drop-shadow-md">
              <TiPlus size={24} className="fill-white" />
              <span class="text-white">Accept</span>
            </button>

            <button
              onClick={async (e) => {
                e.preventDefault()

                if (window.confirm("Are you sure you want to reject this request?")) {
                  try {

                    const res = await axios.delete("consignment/deletetbrandreq", { data: { _id: _id } });
                    const data = res.data;
                    // console.log(data)
                    if (data.success == true) {
                      toast.error("Request Rejeccted Successfully")
                      onData(_id)
                      // window.location.reload();
                    }
                  } catch (err) {
                    navigate("/InfluencerArrivalRequest");
                    console.log(err);
                  }
                } else {
                  navigate("/InfluencerArrivalRequest");
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
              <span class="text-white">Reject</span>
            </button>

          </div>
        </div>
      </div>

      <ToastContainer autoClose={500} />


      {/* <div className="">
        <div className="mt-20 h-screen items-center justify-center  ">
          <div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow ">
            <img
              //src={photo}
              src={logo}
              class="h-5/6 w-5/6 m-auto mt-5  object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
              alt="image"
            />
            <div class="p-4">
              <div className="text-center">
                <h3 class="text-3xl font-bold font-dmserif text-neutral-700">
                  {shopName}
                </h3>

                <p class=" text-xl text-gray-700 font-dmserif">
                  {brandType}
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
                  
                    <p class="mb-1 text-lg hover:text-blue-500 ">{location}</p>
                  
                </div>
              </div>
              
            </div>
            <div className="flex justify-center space-x-6 mb-5">
              <div>
                <button

                  onClick={async (e) => {
                    e.preventDefault()
                    console.log("hello")
                    try {
                      const res = await axios.put("consignment/acceptbrandreq", { email, _id })
                      const data = res.data;
                      console.log(data)
                      if (data.success == true) {
                        window.location.reload();
                      }
                    } catch (err) {
                      console.log(err)
                      navigate("/InfluencerArrivalRequest");
                    }
                  }}

                  class="flex space-x-2 items-center px-3 py-2 bg-green-700 hover:bg-green-800 rounded-md drop-shadow-md">
                  <TiPlus size={24} className="fill-white" />
                  <span class="text-white">Accept</span>
                </button>
              </div>
              <div>
                <button
                  onClick={async (e) => {
                    e.preventDefault()
                    console.log("hello2")
                    if (window.confirm("Are you sure you want to reject this request?")) {
                      try {

                        const res = await axios.delete("consignment/deletetbrandreq", { data: { _id: _id } });
                        const data = res.data;
                        console.log(data)
                        if (data.success == true) {
                          window.location.reload();
                        }
                      } catch (err) {
                        navigate("/InfluencerArrivalRequest");
                        console.log(err);
                      }
                    } else {
                      navigate("/InfluencerArrivalRequest");
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
                  <span class="text-white">Reject</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default ReqArrivalCard;
