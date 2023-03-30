import React, { useState, useEffect } from "react";
import InfluencerHeader from "./InfluencerHeader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import { TiLocation } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import Modal from 'react-modal';
import loader from "../../Images/loader.gif"
const InfluencerConsignments = () => {
  const navigate = useNavigate();

  const [loading, setloading] = useState(true);
  const [profilecard, setprofilecard] = useState([]);
  const [cons, setCons] = useState([])
  const getconsignmets = async () => {
    try {
      setloading(true)
      const res = await axios.get("consignment/getinfluencerconsignments");
      const data = res.data;
      // console.log(data.cons);
      setprofilecard(data.data);
      setCons(data.cons)
      // console.log(profilecard);
      setloading(false)
    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message);
        navigate("/InfluencerLogin");
      }
    }
  };
  useEffect(() => {
    getconsignmets();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    Remarks: '',
    contact: "",
    startDate: "",
    endDate: "",
    adsType: "",
    termsAndConditions: "",
    amount: ""
  });

  const [brandId, setbrandId] = useState("");
  const [index, setIndex] = useState();
  const openModal = (data, id, index) => {
    // console.log(id); 
    setIndex(index)
    setFormData(data.AgreementDetail)
    // console.log(data._id);
    setbrandId(id)
    setIsOpen(true);
  };
  const openModal2 = (data, index) => {
    // console.log(data.AgreementDetail);
    setFormData(data.AgreementDetail)
    setIsOpen2(true);
  };

  const closeModal = () => {
    setFormData({
      name: '',
      email: '',
      Remarks: '',
      contact: "",
      startDate: "",
      endDate: "",
      adsType: "",
      termsAndConditions: "",
      amount: ""
    });
    setIsOpen(false);
    setIsOpen2(false);
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData); 
    if (
      window.confirm(
        "Are you sure you want to send agreement details?"
      )
    ) {
      try {
        const res = await axios.put(
          "consignment/agreementdetails",
          { brandId, formData }
        );
        const resdata = res.data;
        console.log(resdata);
        if (resdata.success == true) {
          closeModal();
          const updatedItem = { ...cons[index], detailSend: 1, AgreementDetail: formData };
          const updatedItems = [...cons];
          updatedItems[index] = updatedItem;
          console.log("update");
          console.log(updatedItems);
          // Update the state with the new array
          setCons(updatedItems);
          toast.success(resdata.message);
        }
      } catch (err) {
        toast.error("Something went wrong");
        console.log(err);
      }
    }
  };

  return (
    <div className="flex">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
        <InfluencerHeader page="Agreements" />
        {loading === true ?
          <img src={loader} alt="laoding" className="h-52 mx-auto"
          />
          :
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-10 px-10 grid-cols-1  max-sm:px-5  max-md:px-10">
            {profilecard.length == 0 ? (
              <h1 className="text-3xl font-bold ml-40">No Any Agreements</h1>
            ) : (
              profilecard.map((data, index) => (

                <div class="my-10  h-full items-center mx-10 justify-center border-2 border-gray-300 shadow-2xl bg-gray-100  rounded-2xl">
                  <img
                    //src={photo}
                    src={data.logo}
                    class="h-1/3 w-1/3 m-auto mt-5  "
                    alt="image"
                  />

                  <div class="px-5 ">
                    <div className="text-center">
                      <h3 class="text-3xl font-bold font-dmserif text-neutral-700">
                        {data.shopName}
                      </h3>

                      <p class=" text-xl text-gray-700 font-dmserif">
                        {data.brandType}
                      </p>
                    </div>

                    <div className="border-y-2 py-3">

                      <div className="flex space-x-2.5 items-center">

                        <FiPhoneCall size={20} />

                        <p class="mb-1 text-lg ">{data.phone}</p>
                      </div>

                      <div className="flex space-x-2.5 items-center">
                        <MdEmail size={20} />
                        <p class="mb-1 text-lg">{data.email}</p>

                      </div>

                      <div className="flex space-x-2.5 items-center">
                        <TiLocation size={20} />
                        <p class="mb-1 text-lg hover:text-blue-500 ">
                          {data.city + ", " + data.country}
                        </p>

                      </div>
                    </div>
                    <div className="flex mt-3  items-center mx-10">
                      {
                        cons[index].detailSend == 0
                          ?
                          <button
                            class="mx-auto flex space-x-2 items-center px-3 py-2 bg-green-500 hover:bg-green-800 rounded-md drop-shadow-md"
                            onClick={() => openModal(cons[index], data._id, index)}
                          >
                            <span class="text-white">Send Details</span>
                          </button>
                          : <button
                            class="mx-auto flex space-x-2 items-center px-3 py-2 bg-green-500 hover:bg-green-800 rounded-md drop-shadow-md"
                            onClick={() => openModal2(cons[index], index)}
                          >
                            <span class="text-white">View Details</span>
                          </button>}
                      <button
                        onClick={async (e) => {
                          e.preventDefault();
                          if (
                            window.confirm(
                              "Are you sure you want to delete this consignment?"
                            )
                          ) {
                            try {
                              const res = await axios.delete(
                                "consignment/deletetbrandreq",
                                { data: { _id: data._id } }
                              );
                              const resdata = res.data;
                              console.log(resdata);
                              if (resdata.success == true) {
                                const updatedItems = [...profilecard];
                                updatedItems.splice(index, 1);
                                setprofilecard(updatedItems)
                                toast.success("Agreement Removed Successfully")
                              }
                            } catch (err) {
                              navigate("/InfluencerConsignments");
                              console.log(err);
                            }
                          } else {
                            navigate("/InfluencerConsignments");
                          }
                        }}
                        class="mx-auto m flex space-x-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md"
                      >
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
                        <span class="text-white">Remove</span>
                      </button>
                    </div>
                  </div>
                </div>

              ))
            )}
          </div>
        }
        <Modal isOpen={isOpen}
          className="Modal"
          overlayClassName="Overlay"
          ariaHideApp={false}
          style={{
            content: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              borderRadius: '0.375rem',
              padding: '2rem',
              minWidth: '50%',
              maxHeight: 'calc(100vh - 4rem)',
              overflowY: 'auto'
            },
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 9999
            }
          }}
        >

          <div className="bg-gray-100  rounded-lg p-6 ">
            <h2 className="text-lg font-bold mb-4 ">Agreement Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  defaultValue={formData?.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  defaultValue={formData?.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="contact">
                  Contact
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="contact"
                  type="tel"
                  placeholder="Enter your contact number"
                  defaultValue={formData?.contact}
                  onChange={handleChange}
                />
              </div>
              <div className=" gap-x-10 grid grid-cols-2 max-sm:grid-cols-1">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="startDate">
                    Start Date
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="startDate"
                    type="date"
                    placeholder="Enter your startDate "
                    defaultValue={formData?.startDate?.substr(0, 10)}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="endDate">
                    End Date
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="endDate"
                    type="date"
                    placeholder="Enter your endDate "
                    defaultValue={formData?.endDate?.substr(0, 10)}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="adsType">
                    Ads Type
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="adsType"
                    type="text"
                    placeholder="Enter Type "
                    defaultValue={formData?.adsType}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
                    Amount
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="amount"
                    type="number"
                    placeholder="Enter  amount "
                    defaultValue={formData?.amount}
                    onChange={handleChange}
                  />
                </div>

              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Remarks">
                  Remarks
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Remarks"
                  placeholder="Enter your Remarks"
                  defaultValue={formData?.Remarks}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className={`cursor-pointer text-bold `} onClick={() => { setExpanded(!expanded) }}>Terms and Conditions...
                <p className={`${expanded ? "" : "hidden"}`}>
                  {formData?.termsAndConditions
                  }
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
        <Modal isOpen={isOpen2}
          className="Modal"
          overlayClassName="Overlay"
          ariaHideApp={false}
          style={{
            content: {
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              borderRadius: '0.375rem',
              padding: '2rem',
              minWidth: '50%',
              maxHeight: 'calc(100vh - 4rem)',
              overflowY: 'auto'
            },
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 9999
            }
          }}
        >

          <div className="bg-gray-100  rounded-lg p-6 ">
            <h2 className="text-lg font-bold mb-4 ">Agreement Detail</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                  Name : {formData?.name}
                </label>

              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                  Email : {formData?.email}
                </label>

              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="contact">
                  Contact : {formData?.contact}
                </label>

              </div>
              <div className=" gap-x-10 grid grid-cols-2 max-sm:grid-cols-1">
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="startDate">
                    Start Date : {formData?.startDate?.substr(0, 10)}
                  </label>

                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="endDate">
                    End Date : {formData?.endDate?.substr(0, 10)}
                  </label>

                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="adsType">
                    Ads Type : {formData?.adsType}
                  </label>

                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="amount">
                    Amount : {formData?.amount}
                  </label>

                </div>

              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Remarks">
                  Remarks : {formData?.Remarks}
                </label>

              </div>
              <div className={`cursor-pointer text-bold `} onClick={() => { setExpanded(!expanded) }}>Terms and Conditions...
                <p className={`${expanded ? "" : "hidden"}`}>
                  {formData?.termsAndConditions}
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  type="button"
                  onClick={closeModal}
                >
                  Cancel
                </button>

              </div>
            </form>
          </div>
        </Modal>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};

export default InfluencerConsignments;
