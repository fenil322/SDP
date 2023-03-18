import React, { useEffect, useState } from "react";
import BrandHeader from "./BrandHeader";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

import loader from "../../Images/loader.gif"
import Modal from 'react-modal';

const BrandHistory = () => {

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [influencerId, setInfluencerId] = useState("");
  const navigate = useNavigate();
  const [profilecard, setprofilecard] = useState([]);

  const [loading, setloading] = useState(true);
  const getbrandcurrentconsignments = async () => {
    try {
      setloading(true);
      const res = await axios.get("consignment/getbrandcurrentconsignments");
      const data = res.data;
      console.log(data);
      setprofilecard(data.data);
      setloading(false);
      // console.log(profilecard)
    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message);
        navigate("/BrandHistory");
      }
    }
  };
  useEffect(() => {
    getbrandcurrentconsignments();
  }, []);

  const feedBackStore = async (event) => {
    event.preventDefault();
    setModalIsOpen(false);
    // You can save the feedback and rating in a database here
    console.log('Feedback:', review);
    console.log('Rating:', rating);
    console.log('UserId:', influencerId);
    const res = await axios.put('consignment/feedback', { review, rating, influencerId });
    console.log(res.data);
    if (res.data.success === true) {
      toast.success(res.data.message);
      await sleep(1500);
      window.location.reload();
    }
    setInfluencerId("")
    setReview('');
    setRating(0);
  };

  const handleStarClick = (value) => {
    if (value === rating) {
      // If the user clicks the same star twice, reset the rating to 0
      setRating(0);
    } else {
      // Round the rating to the nearest 0.5 and set it as the new rating
      setRating(Math.round(value * 2) / 2);
    }
  };


  return (
    <div className="flex flex-row h-screen">
      <Navbar />

      <div className=" ml-14 w-screen max-sm:ml-0">
        <BrandHeader page="History" />
        {loading === true ?
          <img src={loader} alt="laoding" className="h-52 mx-auto"
          />
          :
          <div className="mx-20 my-10  max-sm:mx-0 grid md:grid-cols-3 grid-cols-1 ">
            {profilecard.length == 0 ? (
              <h1 className="text-3xl font-bold text-center">
                No Consignments Found
              </h1>
            ) : (
              profilecard.map((item, index) => (
                <div className="mx-6 overflow-auto break-words bg-gray-100  shadow-lg rounded-2xl my-10">


                  <div className="flex ">
                    <div className="flex px-3 my-5">
                      <img
                        src={item.profile}
                        alt="myPic"
                        className="shadow-xl w-32 h-32 rounded-full  "
                      />

                      <div className=" mt-2 ml-5">
                        <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
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
                    <div className="mt-3 ml-5">
                      <div className="flex space-x-2.5 items-center mt-3">
                        <FiPhoneCall size={20} />
                        <div>{item.phone}</div>
                      </div>
                      <div className="flex space-x-2.5 items-center my-3">
                        <MdEmail size={20} />
                        <div>{item.email}</div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    class="flex m-1  mx-auto my-4 space-x-2 items-center px-3 py-2 bg-green-600 hover:bg-green-800 rounded-md drop-shadow-md"
                    onClick={() => {
                      setModalIsOpen(true)
                    }}
                  >
                    <span className="text-white" onClick={() => { setInfluencerId(item._id) }}>Give a Feedback</span>
                  </button>


                  {/* </Link > */}
                </div>
              ))
            )}
          </div>

        }
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="   left-0 right-0 m-auto w-1/4  bg-white rounded-2xl shadow-2xl border-2 p-5   z-50"
          overlayClassName="Overlay fixed top-1/3 left-0 right-0 bottom-0 bg-transparent z-40"
          ariaHideApp={false}
        >

          <form onSubmit={feedBackStore} className="justify-center text-center">
            <div className="mb-2 ">
              <label className="block text-gray-700 font-bold  mb-2" htmlFor="feedback">
                Feedback
              </label>


              <textarea
                className="form-textarea p-1 border-gray-200 border-2 rounded-lg w-5/6 placeholder:text-center  resize-none overflow-auto  "
                id="feedback"
                placeholder="Enter your feedback here"
                value={review}
                onChange={(event) => setReview(event.target.value)}
              />

            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold " htmlFor="rating">
                Rating
              </label>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-3xl cursor-pointer ${rating >= star ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    onClick={() => handleStarClick(star)}
                  >
                    {rating >= star ? '★' : '☆'}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-end ">
              <button
                className="bg-red-500 mx-auto hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                type="cancel"
                onClick={() => { setModalIsOpen(false) }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 mx-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"

              >
                Submit
              </button>
            </div>
          </form>
        </Modal>

        <ToastContainer autoClose={1000} />
      </div>
    </div>
  );
};

export default BrandHistory;
