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
  const [brandData, setbrandData] = useState({
    _id: "",
    uname: "",
    shopName: "",
    brandType: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    country: "",
    address: "",
    location: "",
    password: "",
    photo1: "",
    photo2: "",
  });
  const createConsignment = async (e) => {
    e.preventDefault();
    const brandId = brandData._id;
    const email = brandData.email;
    console.log(brandId);
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

  const location = useLocation();
  const consollog = () => {
    console.log(location);
    setbrandData(location.state);
    // console.log(brandData);
  };
  useEffect(() => {
    consollog();
  }, []);
  const slideImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 1",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
      caption: "Slide 2",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 3",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 4",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      caption: "Slide 5",
    },
  ];

  return (
    <div className="flex">
      <Navbar />
      <div className="h-screen ml-14 w-screen">
        <InfluencerHeader page="Brand Detail" />
        <div className="w-9/12 m-auto  mt-5 pb-10 ">
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
          />
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
          ></link>

          <div class="bg-gray-100 rounded-lg shadow-xl pb-8">

            <div class="w-full h-[250px]">
              <img
                src="https://images.unsplash.com/photo-1572196459043-5c39f99a7555?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80 "
                class="w-full h-full rounded-tl-lg rounded-tr-lg"
                alt="not available"
              />
            </div>
            <div className="flex justify-between align-middle mt-10">
              <div className="flex ml-20">
                <div class=" flex flex-col items-center -mt-24">
                  <img
                    src={brandData.photo1}
                    class="border-4 w-40 border-white bg-gray-200 rounded-full"
                    alt="pic"
                  />
                </div>
                <div className="name -mt-8 ml-8">
                  <div class=" flex items-center space-x-2 ">
                    <div className="flex-row">
                      <p class="text-2xl">{brandData.shopName}</p>
                      <p class="text-sm text-gray-500">{brandData.brandType}</p>
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
                    {slideImages.map((slideImage, index) => (
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
            <div className="flex w-5/6  m-auto my-10 pb-10">
              {brandData.description != null ?
                <div>
                  <h2 className="font-bold font-mono text-2xl">About Brand</h2>
                  <div className="w-1/2">
                    {brandData.description}
                  </div>
                </div> :
                <div></div>
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
                  <div>{brandData.phone}</div>
                </div>

                <br></br>
                <hr></hr>
                <br></br>
                <div className="flex space-x-4">
                  <div>
                    <MdOutlineLocationCity size={20} />
                  </div>
                  <div className="">{brandData.address}</div>
                </div>

                <br></br>
                <hr></hr>
                <div className="">
                  <div className="my-3">Contact Us On</div>
                  <div className="flex space-x-5">
                    <div className="flex ">

                      <RiFacebookBoxLine size={20} className="text-[#3b5998]" />
                    </div>

                    <div className="flex ">
                      <FaInstagram size={20} className="text-[#d62976]" />
                    </div>

                    <div className="flex ">
                      <FiTwitter size={20} className="text-[#00acee]" />
                    </div>
                  </div>
                </div>
                <div></div>
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
