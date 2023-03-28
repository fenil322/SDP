import React, { useEffect, useState } from "react";
import BrandHeader from "./BrandHeader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Modal from 'react-modal';
import loader from "../../Images/loader.gif"
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const BrandConsignments = () => {
  const navigate = useNavigate();

  const [loading, setloading] = useState(true);
  const [profilecard, setprofilecard] = useState([]);
  const [cons, setCons] = useState([])
  const getbrandconsignments = async () => {
    try {
      setloading(true);
      const res = await axios.get("consignment/getbrandconsignments");
      const data = res.data;
      console.log(data);
      setprofilecard(data.data);
      setCons(data.cons)
      setloading(false);
    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message);
        navigate("/BradConsignments");
      }
    }
  };
  useEffect(() => {
    getbrandconsignments();
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

  const [inflencerId, setInfluencerId] = useState("");
  const [index, setIndex] = useState();
  const openModal = (data, id, index) => {
    // console.log(id); 
    setIndex(index)
    setFormData(data.AgreementDetail)
    // console.log(data._id);
    setInfluencerId(id)
    setIsOpen(true);
  };
  const openModal2 = (data, index, id) => {

    // console.log(data.AgreementDetail);
    // console.log(id);
    setIndex(index)
    setInfluencerId(id)
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
    setInfluencerId("");
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
          "consignment/askagrementdetails",
          { inflencerId, formData }
        );
        const resdata = res.data;
        console.log(resdata);
        if (resdata.success == true) {
          const updatedItem = { ...cons[index], detailRequest: 1, AgreementDetail: formData };
          const updatedItems = [...cons];
          updatedItems[index] = updatedItem;
          setCons(updatedItems);
          closeModal();
          toast.success(resdata.message);
        }
      } catch (err) {
        toast.error("Something went wrong");
        console.log(err);
      }
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();

    // console.log(formData); 
    if (
      window.confirm(
        "Are you sure you want to Confirm this agreement?"
      )
    ) {
      try {
        const res = await axios.put(
          "consignment/acceptAgreement",
          { inflencerId }
        );
        const resdata = res.data;
        console.log(resdata);
        if (resdata.success == true) {
          const updatedItems = [...profilecard];
          updatedItems.splice(index, 1);
          setprofilecard(updatedItems)
          closeModal();
          toast.success(resdata.message);
        }
      } catch (err) {
        toast.error("Something went wrong");
        console.log(err);
      }
    }
  };

  return (
    <div className="flex flex-row h-screen">
      <Navbar />

      <div className="h-screen ml-14 w-screen max-sm:ml-0">
        <BrandHeader page="Agreement" />
        {loading === true ?
          <img src={loader} alt="laoding" className="h-52 mx-auto"
          />
          :
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-10 px-10 grid-cols-1 ">
            {profilecard.length == 0 ? (
              <h1 className="text-3xl font-bold text-center">
                No Consignments Found
              </h1>
            ) : (
              profilecard.map((item, index) => (
                <div className="mx-10    break-words bg-gray-100  shadow-2xl border-2 rounded-xl my-10">

                  <div className="flex ">
                    <div className="flex px-3 my-5">
                      <img
                        src={item.profile}
                        alt="myPic"
                        className="shadow-xl w-32 h-32 rounded-full"
                      />

                      <div className=" mt-2 ml-5">
                        <h3 className="text-2xl text-slate-700 font-bold  mb-1">
                          {item.fname + " " + item.lname}
                        </h3>

                        <div className="text-xs mb-1  text-slate-400 font-bold uppercase">
                          <i className="fas fa-map-marker-alt text-slate-400 opacity-75"></i>
                          {item.gender}
                        </div>
                        <div className="text-xs  mb-2 text-slate-400 font-bold uppercase">
                          <i className="fas fa-map-marker-alt text-slate-400 opacity-75"></i>
                          {item.city + ", " + item.country}
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="border-y">
                    <div className="my-3 ml-5">
                      <div className="flex space-x-2.5 items-center mt-3">
                        <FiPhoneCall size={20} />
                        <div>{item.phone}</div>
                      </div>
                      <div className="flex space-x-2.5 items-center mt-3">
                        <MdEmail size={20} />
                        <div>{item.email}</div>
                      </div>
                    </div>
                  </div>
                  <div className=" my-3 space-y-3 items-center mx-10">
                    {
                      cons[index].detailRequest === 0 ?
                        <button
                          onClick={() => openModal(cons[index], item._id, index)}


                          className="flex m-1 mx-auto space-x-2  items-center px-3 py-2 bg-green-600 hover:bg-green-900 rounded-md drop-shadow-md"
                        >

                          <span class="text-white">Ask for Agreement details</span>
                        </button>
                        : <button
                          onClick={(e) => { openModal2(cons[index], index, item._id) }}
                          className="flex m-1 mx-auto space-x-2  items-center px-3 py-2 bg-green-600 hover:bg-green-900 rounded-md drop-shadow-md"
                        >
                          {/* <MdFileDownloadDone className="text-white" size={23} /> */}
                          <span class="text-white">View Details</span>
                        </button>

                    }
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
                              "consignment/deletetbrandpendingreq",
                              { data: { _id: item._id } }
                            );
                            const resdata = res.data;
                            console.log(resdata);
                            if (resdata.success == true) {
                              const updatedItems = [...profilecard];
                              updatedItems.splice(index, 1);
                              setprofilecard(updatedItems)
                              toast.success(resdata.message)
                            }
                          } catch (err) {
                            navigate("/InfluencerConsignments");
                            console.log(err);
                          }
                        } else {
                          navigate("/InfluencerConsignments");
                        }
                      }}
                      class="flex space-x-2 m-1 mx-auto items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md"
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


                  {/* </Link > */}
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
                <label className="block text-gray-700 font-bold mb-2" htmlFor="termsAndConditions">
                  Terms and Conditions...
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="termsAndConditions"
                  placeholder="Write Terms and Conditions"
                  defaultValue={formData?.termsAndConditions}
                  onChange={handleChange}
                ></textarea>
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
                  Send Form
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
            <form onSubmit={handleSubmit2}>
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
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Confirm Agreement
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div >
      <ToastContainer autoClose={1000} />
    </div >
  );
};

export default BrandConsignments;
