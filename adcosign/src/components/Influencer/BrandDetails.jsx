import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineLocationCity } from "react-icons/md";

import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InfluencerHeader from "./InfluencerHeader";
import Navbar from "./Navbar";

import loader from "../../Images/loader.gif";

const divStyle = {
  display: "flex",

  alignItems: "center",
  // justifyContent: "center",
  backgroundSize: "cover",
  height: "300px",
  width: "300px",
  borderRadius: "12px",
  margin: "20px",
  // padding: "20px",
  justifyContent: "space-between",
};

let settings = {
  // dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
};

const BrandDetails = () => {
  const [brandData, setbrandData] = useState({});
  const location = useLocation();
  const [influencerData, setInfluencerData] = useState([]);
  const [date,setDate]=useState();
  const [loading, setLoading] = useState(true);
  const createConsignment = async (e) => {
    e.preventDefault();
    const brandId = brandData?._id;
    const email = brandData?.email;
    // console.log(brandId);
    try {

      const res = await axios.post("consignment/sendrequesttobrand", { brandId: brandData._id, email: email })
      const data = res.data;
      console.log(data);
      console.log(data.status);
      if (res.status == 200) {
        toast.success(data.message)
      }
    } catch (err) {
      // console.log(err.response)
      // console.log(err.data.error);
      if (err.response.status == 400) {
        console.log(err.response.data);

        console.log(err.response.data.error);
        toast.error(err.response.data.error)
      }

      // console.log(err.response);
    }
  }

  const getConnectedInf = async (id) => {
    console.log(id);
    try {
      setLoading(true)
      const res = await axios.post('influencer/getconnectedinf', { id });
      const data = res.data;
      // console.log(data);
      setInfluencerData(data.data);
      setDate(data.date)
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    console.log(location.state);
    setbrandData(location.state);
    getConnectedInf(location.state._id)
  }, []);
  // useEffect(() => {
  // }, [brandData])

  const slideImages = brandData?.images;

  return (
    <div className="flex">
      <Navbar />
      <div className="h-screen ml-14 max-sm:ml-0 w-screen">
      <InfluencerHeader page={`Home > ${brandData.shopName}`} />
        <div className="w-9/12 m-auto  mt-5 pb-10 ">
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
          />
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
          ></link>

          <div class="bg-gray-100 rounded-lg shadow-2xl border-gray-300 border-2 pb-8">

            <div class="w-full h-[250px]">
              <img
                // src={brandData?.images[0].url!==undefined ? brandData.images[0].url:brandData.photo1  } 
                src={brandData?.photo1}
                class="w-full h-full rounded-tl-lg rounded-tr-lg"
                alt="not available"
              />
            </div>
            <div className="flex justify-between align-middle mt-10">
              <div className="flex ml-20">
                <div class=" flex flex-col items-center -mt-24">
                  <img
                    src={brandData?.logo}
                    class="border-4 w-40 border-white bg-gray-200 rounded-full"
                    alt="pic"
                  />
                </div>
                <div className="name -mt-8 ml-8">
                  <div class=" flex items-center space-x-2 ">
                    <div className="flex-row">
                      <p class="text-2xl">{brandData?.shopName}</p>
                      <p class="text-sm text-gray-500">{brandData?.brandType}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class=" flex  items-center lg:items-end -mt-10 -ml-40">
                <div class="flex items-center space-x-4 mt-2 justify-between">
                  <button
                    onClick={createConsignment}
                    class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                    </svg>
                    <span>Connect</span>
                  </button>
                  <button class="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span>Message</span>
                  </button>
                </div>
              </div>
              {/* <div className="flex border-4 mr-10 justify-center" > */}
              <div class="align-center mr-10">
                <button
                  type="button"
                  class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-semibold rounded-full text-sm px-2.5 py-1.5 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Share
                </button>
              </div>
              {/* </div> */}
            </div>

            <div className=" w-5/6 mx-auto">
              <div className="">
                <div className="py-3 mt-5 border-t border-gray-400 ">
                  <Carousel {...settings}>
                    {
                      slideImages?.map !== undefined &&
                      slideImages?.map((slideImage, index) => (
                        <Wrap>
                          <div key={index}>
                            <div
                              style={{
                                ...divStyle,
                                backgroundImage: `url(${slideImage.url})`,
                              }}
                            ></div>
                          </div>
                        </Wrap>
                      ))}
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="flex w-5/6 justify-between m-auto mt-10 border-b pb-10">
              {brandData?.description ?
                <div>
                  <h2 className="font-bold font-mono text-2xl">About Brand</h2>
                  <div className="">
                    {brandData?.description}
                  </div>
                </div> :
                ""
              }
              <div className="w-80">
                <h2 className="font-bold font-mono text-2xl w-80">
                  Brand Details
                </h2>
                <br></br>
                <div className="flex space-x-4">
                  <div>
                    <FiPhoneCall size={18} />
                  </div>
                  <div>{brandData?.phone}</div>
                </div>

                <br></br>
                <hr></hr>
                <br></br>
                <div className="flex space-x-4">
                  <div>
                    <MdOutlineLocationCity size={20} />
                  </div>
                  <div className="">{brandData?.address}</div>
                </div>

                <br></br>
                <hr></hr>
                <div className="">
                  <div className="my-3">Contact Us On</div>
                  <div className="flex space-x-5">

                    <a href={brandData?.instagramUrl} target="_blank" className="flex cursor-pointer">
                      <RiFacebookBoxLine size={20} className="text-[#3b5998]" />
                    </a>

                    <a href={brandData?.facebookUrl} target="_blank" className="flex cursor-pointer ">
                      <FaInstagram size={20} className="text-[#d62976]" />
                    </a>

                    <a href={brandData?.twitterUrl} target="_blank" className="flex cursor-pointer ">
                      <FiTwitter size={20} className="text-[#00acee]" />
                    </a>

                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div class="flex-1 w-5/6 mx-auto mt-4 p-8">
              <h4 class="text-xl text-gray-900 font-bold">Connected Peoples</h4>
              <div class="relative px-4">
                <div class="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                {/* <!-- start::Timeline item --> */}
                {loading === true ?
                  <img src={loader} alt="laoding" className="h-52 mx-auto"
                  />
                  :
                  <div>

                    {influencerData.length == 0 ? <div>No Influencer connected</div> :
                      influencerData?.map((data, index) => (
                        <div class="flex items-center w-full my-1 -ml-1.5">
                          <div class="w-1/12 z-10">
                            <div class="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                          </div>
                          <img src={data.profile} className="w-8 h-8 rounded-full mx-5 " alt="profile"/>
                          <div class="w-11/12">
                            <p class="text-sm font-semibold">{data.fname + " " + data.lname}</p>
                            <p class="text-xs text-gray-500">{date[index]}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                }

              </div>
            </div>
            {/* <div className="flex space-x-56">
            <div className="mt-8">{/* <h2>Age Enagagement Rate</h2></div>*/}
          </div>
        </div>
        <ToastContainer autoClose={1500} />
      </div>
    </div>
  );
};
const Carousel = styled(Slider)`
  il li button {
    &:before {
      font-size: 50px;
      color: white;
    }
  }
.slick-active{
  margin-right:0px;
  width:300px;
}
  .slick-list {
    // overflow: hidden;
    color: white;
    justify-content: space-between; 

  }
  button {
    z-index: 1;
    color: white;
  }
  .slick-dots li button:before {
    color: white;
  }
  .slick-next {
    right: 50px;
  }
  .slick-prev {
    left: 20px;
  }
`;

const Wrap = styled.div`
  // transition-duration: 300ms;
  // &:hover {
  //   border: 4px solid rgba(249, 249, 249, 0.8);
  // }
`;
export default BrandDetails;
