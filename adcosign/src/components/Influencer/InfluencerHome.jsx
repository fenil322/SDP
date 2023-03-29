import React, { useEffect, useState } from "react";
import InfluencerHeader from "./InfluencerHeader";
import axios from "axios";
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import Card from "./Card";
import Navbar from "./Navbar";
import loader from "../../Images/loader.gif"

const InfluencerHome = () => {
  const navigate = useNavigate();


  const [brandCard, setBrandCard] = useState([]);
  const [loading, setloading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const callGetBrand = async () => {
    try {
      setloading(true);
      const res = await axios.get(`brand/getAllbrand${window.location.search}`);
      const data = res.data;
      // console.log(data)
      // if (data.success != true) {
      //   // console.log(data);
      //   navigate("/InfluencerLogin");
      // }
      console.log(data);
      setBrandCard(data.data);
      setloading(false);
      // console.log(brandCard);
    } catch (err) {
      console.log(err);
      // navigate("/InfluencerLogin")
    }
  }
  useEffect(() => {
    callGetBrand();
  }, [])

  return (
    <div className="h-[screen] flex ">
      <Navbar />
      <div className="ml-14 max-sm:ml-0 w-screen ">
        <InfluencerHeader page="Home" />
        <div className="">
          {
            loading == true ?
              <img src={loader} alt="laoding" className="h-52 mx-auto"
              /> :
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-20 max-sm:px-5  max-md:px-10">
                {brandCard.length > 0 &&
                  brandCard.map !== undefined &&
                  brandCard.map((item, index) => (
                    <Card item={item} key={index} />
                  ))
                }
              </div>
          }
        </div>


        <div className="mb-3 bottom-3 mx-auto left-0 right-0">
          <div class="flex justify-center">
            <nav aria-label="Page navigation example">
              <ul class="flex list-style-none">
                <li class="page-item disabled">
                  <a
                    class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href={`?page=${(parseInt(searchParams.get("page")) - 1) < 1 ? 1 : parseInt(searchParams.get("page")) - 1}`}

                  >
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class={`page-link relative block py-1.5 px-3 border-0 ${searchParams.get("page") == 1 ? `bg-sky-600 text-white` : `bg-transparent text-gray-800`}  outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`}
                    href="?page=1"
                  >
                    1
                  </a>
                </li>
                <li class="page-item active">
                  <a
                    class={`page-link relative block py-1.5 px-3 border-0 ${searchParams.get("page") == 2 ? `bg-sky-600 text-white` : `bg-transparent  text-gray-800`}  outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`}
                    href="?page=2"
                  >
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class={`page-link relative block py-1.5 px-3 border-0 ${searchParams.get("page") > 2 ? `bg-sky-600 text-white` : `bg-transparent  text-gray-800`}  outline-none transition-all duration-300 rounded hover:text-gray-800 hover:bg-gray-200 focus:shadow-none`}
                  //  href="?page=3"
                  >
                    {searchParams.get("page") <= 2 ? "..." : searchParams.get("page")}
                  </a>
                </li>
                <li class="page-item">
                  <a
                    class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                    href={`?page=${(parseInt(searchParams.get("page")) + 1)}`}
                  // onClick={()=>{
                  //   setSearchParams({page:window.location.search+1})
                  // }}
                  >
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerHome;
