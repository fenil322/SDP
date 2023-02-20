import React from "react";
import { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { NavLink, Link, useNavigate, useParams } from "react-router-dom";
import InfluencerDetails from "./InfluencerDetails";

function Card({ item }) {


  const { fname, lname, phone, email, city, state, country, password,
    age, instagram, instagramURL, instagramFollowers, instagramEngagementRate,
    facebook, facebookURL, facebookFollowers, facebookEngagementRate,
    twitter, twitterURL, twitterFollowers, twitterEngagementRate,
    photo, cat1 = "fation", cat2 = "study", cat3 = "dance", discription = "hello i am there"

  } = item;

  const navigate = useNavigate();
  const influencerdetailpage = () => {
    navigate("/InfluencerDetails", { state: item })
  }

  return (
    <>
      <div className="relative max-w-md mx-10 md:max-w-2xl  min-w-0 break-words bg-white  shadow-lg rounded-xl my-10">
        {/* <Link to={{
          pathname: '/InfluencerDetails',
          state: { data:data}
        }} > */}
        <div className="cursor-pointer"
          onClick={influencerdetailpage}>
          <div className="cursor-pointer">
            <div className="px-6">
              <div className="flex flex-wrap ">
                <div className="flex px-4 my-5">
                  <div className="w-20 h-20 rounded-full">
                    <img
                      src={photo}
                      alt="myPic"
                      className="shadow-xl w-full h-full rounded-full  "
                    />
                  </div>
                  <div className=" mt-2 ml-10">
                    <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                      {fname + " " + lname}
                    </h3>

                    <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                      {city + ", " + country}
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                </div>
              </div>
              <div className="text-base font-serif ">
                <span>Catagories</span>
              </div>
              <div className=" ">
                <span className="bg-blue-50 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  {cat1}
                </span>
                <span className="bg-blue-50 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-200dark:text-gray-300">
                  {cat2}
                </span>
                <span className="bg-blue-50 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-gray-300">
                  {cat3}
                </span>
              </div>

              <div className="mt-6 py-5 border-t border-slate-200 ">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4">
                    <p className="font-light leading-relaxed text-slate-600 mb-4">
                      {discription}
                    </p>
                  </div>
                  <div className="flex  items-center">
                    <AiOutlineFacebook size={20} className="text-[#3b5998] " />
                    <div className="text-[#3b5998] mr-3 ml-1">{instagramFollowers}</div>

                    <AiOutlineInstagram size={20} className="text-[#E4405F]" />
                    <div className="text-[#E4405F] mr-3 ml-1">{facebookFollowers}</div>

                    <CiTwitter size={20} className="text-[#1DA1F2]" />
                    <div className="text-[#1DA1F2] mr-3 ml-1">{twitterFollowers}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </Link > */}
      </div>
    </>
  );
}

export default Card;
