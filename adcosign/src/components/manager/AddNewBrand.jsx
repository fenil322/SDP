import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ManagerHeader from "./ManagerHeader";
import Card from "./Card";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const AddNewBrand = () => {

  const [profilecard, setprofilecard] = useState([])
  const navigate = useNavigate();
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const callgetInfluencerPage = async () => {

    try {
      const res = await fetch("manager/getunverifiedbrand", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
        , credentials: "include"
      });

      const data = await res.json();
      // console.log(data.data)
      setprofilecard(data.data);
      console.log(profilecard)
    } catch (err) {
      //navigate("/BrandLogin");
      console.log(err)
    }
  }


  useEffect(() => {
    callgetInfluencerPage();
  }, [])
const removebrand=(id)=>{
const updatedItems = profilecard.filter(item => item._id !== id);
setprofilecard(updatedItems)
}
  return (
    <div className="h-[screen] flex">
      <Navbar />
      <div className="ml-14 w-screen max-sm:ml-0">
        <ManagerHeader page="Add Brand" />
       
        <div className="grid mt-10 px-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {profilecard.length ==0 ?<h1 className="text-center text-3xl font-bold mt-10">No New Request </h1>:
            profilecard.map((item) => (

              <Card item={item} onData={removebrand} />

            ))}
        </div>
      </div>

     
    </div>
  );
};

export default AddNewBrand;
