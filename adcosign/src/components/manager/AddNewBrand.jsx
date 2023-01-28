import React from "react";
import ManagerHeader from "./ManagerHeader";
import Card from "./Card";
import { Link, NavLink } from "react-router-dom";
const cardProfile = [
  {
    imgsrc:
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    name: "Adidas",
    type: "shoes",
    desc: "Contrary to popular belief. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    contact: " +91 82006575767",
    email: "adidas@gmail.com",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    address: "Mota Varachha",
    location: "MahaDev Chowk",
  },
  {
    imgsrc:
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    name: "Nyka",
    type: "beauty",
    desc: "The standard chunk of  is reproduced below for those interested.going through the cites of the word in classical literature",
    contact: "+91 98636575767",
    email: "nyka@gmail.com",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    address: "Vaniyavad , Collage Road",
    location: "Nadiad",
  },
  {
    imgsrc:
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    name: "Apple Company",
    type: "devices",
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    contact: "+91 35436575767",
    email: "apple@gmail.com",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    address: "Vip Road",
    location: "Katargam ,surat",
  },
];

const AddNewBrand = () => {
  return (
    <div>
      <ManagerHeader />
      <div>
        {" "}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cardProfile.map((item) => (
            <NavLink to="">
              <Card item={item} />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddNewBrand;
