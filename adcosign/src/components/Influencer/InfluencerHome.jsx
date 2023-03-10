import React, { useEffect, useState } from "react";
import InfluencerHeader from "./InfluencerHeader";
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom'
import Card from "./Card";
import Navbar from "./Navbar";

const InfluencerHome = () => {
  const navigate = useNavigate();


  const [brandCard, setBrandCard] = useState([]);
  const callGetBrand = async () => {
    try {
      const res = await axios.get("brand/getAllbrand");
      const data = res.data;
      // console.log(data)
      if (data.success != true) {
        // console.log(data);
        navigate("/InfluencerLogin");
      }
      setBrandCard(data.data);
      // console.log(brandCard);
    } catch (err) {
      console.log(err);
      navigate("/InfluencerLogin");
    }
  }
  useEffect(() => {
    callGetBrand();
  }, [])

  return (
    <div className="h-[screen] flex ">
      <Navbar />
      <div className="ml-14 max-sm:ml-0 w-screen">
        <InfluencerHeader page="Home" />
        <div className="">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-20 max-sm:px-5  max-md:px-10">
            {brandCard.length > 0 &&
            brandCard.map!==undefined&&
              brandCard.map((item, index) => (
                <Card item={item} key={index} />
              ))
            }
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfluencerHome;
