import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
function Card({ item }) {
  return (
    <>
      <div className="relative max-w-md mx-10 md:max-w-2xl  min-w-0 break-words bg-white  shadow-lg rounded-xl my-10">
        <div className="px-6">
          <div className="flex flex-wrap ">
              <div className="flex px-4 my-5">
                <div className="w-20 h-20 rounded-full">
                  <img
                    src={item.imgsrc}
                    alt="myPic"
                    // style={{borderradius:50%}}
                    className="shadow-xl w-full h-full rounded-full  "
                  />
                </div>
                <div className=" mt-2 ml-10">
                  <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">
                    {item.name}
                  </h3>

                  <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>
                    {item.citycountry}
                  </div>
                </div>
              </div>
            <div className="w-full flex justify-center">
              {/* <div className="w-full text-center mt-20">
                <div className="flex justify-center lg:pt-4 pt-8 pb-0">
                  <div className="p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                      {item.photo}
                    </span>
                    <span className="text-sm text-slate-400">Photos</span>
                  </div>
                  <div className="p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                      {item.followers}
                    </span>
                    <span className="text-sm text-slate-400">Followers</span>
                  </div>

                  <div className="p-3 text-center">
                    <span className="text-xl font-bold block uppercase tracking-wide text-slate-700">
                      {item.following}
                    </span>
                    <span className="text-sm text-slate-400">Following</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="text-base font-serif ">
            <span>Catagories</span>
          </div>
          <div className=" ">
            <span className="bg-blue-50 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
              {item.cat1}
            </span>
            <span className="bg-blue-50 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-200dark:text-gray-300">
              {item.cat2}
            </span>
            <span className="bg-blue-50 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-200 dark:text-gray-300">
              {item.cat3}
            </span>
          </div>

          <div className="mt-6 py-5 border-t border-slate-200 ">
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <p className="font-light leading-relaxed text-slate-600 mb-4">
                  {item.discription}
                </p>
              </div>
              <div className="flex  items-center">
                <AiOutlineFacebook size={20} className="text-[#3b5998] " />
                <div className="text-[#3b5998] mr-3 ml-1">3.3K</div>

                <AiOutlineInstagram size={20} className="text-[#E4405F]" />
                <div className="text-[#E4405F] mr-3 ml-1">3.3K</div>

                <CiTwitter size={20} className="text-[#1DA1F2]" />
                <div className="text-[#1DA1F2] mr-3 ml-1">3.3K</div>
              </div>
              {/* <div className="flex">
                <div className="flex">
                  <div className="">
                    <svg
                      className="w-10 h-10 fill-current text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                    </svg>
                  </div>
                  <div>
                    <h2>3.3K</h2>
                  </div>
                </div>

                <div className="flex">
                  <div>
                    <svg
                      className="w-10 h-10 fill-current bg-gradient-to-r from-pink-500 to-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </div>
                  <div>
                    <h2>2.5K</h2>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex">
                    <svg
                      className="w-10 h-10 fill-current text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                    <div>
                      <h2>1.6K</h2>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* 
<footer className="relative pt-6 pb-2 mt-6">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-slate-500 font-semibold py-1">
                Tailwind CSS Component from <a href="https://www.creative-tim.com/product/notus-design-system-pro?ref=tailwindcomponents" className="text-slate-700 hover:text-slate-500" target="_blank">Notus PRO Html</a> by <a href="https://www.creative-tim.com" className="text-slate-700 hover:text-slate-500" target="_blank"> Creative Tim</a>.
            </div>
            </div>
        </div>
    </div>
</footer> */}
    </>
  );
}

export default Card;
