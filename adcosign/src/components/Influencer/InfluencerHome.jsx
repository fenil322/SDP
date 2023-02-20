import React, { useEffect, useState } from "react";
import InfluencerHeader from "./InfluencerHeader";
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom'
import Card from "./Card";
import Navbar from "./Navbar";

const InfluencerHome = () => {
  const navigate = useNavigate();


  const [brandCard, setBrandCard] = useState({
    uname: "", shopName: "", brandType: "",
    phone: "", email: "", city: "", state: "", country: "",
    address: "", location: "", password: "", photo1: "", photo2: ""
  });
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
    <div className="h-[screen] flex">
      <Navbar />
      <div className="ml-14 w-screen">
        <InfluencerHeader page="InfluencerHome" />
        <div className="">
          <div className="grid grid-cols-3  px-20 ">

            {brandCard.length > 0 &&
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
