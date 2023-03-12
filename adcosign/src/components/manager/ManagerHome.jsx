import React from 'react'
import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ManagerHeader from './ManagerHeader'
import Navbar from './Navbar'

const ManagerHome = () => {

  const navigate = useNavigate()

  const loadData = async () => {
    try {
      const res = await fetch("manager/managerhome", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
        , credentials: "include"
      });

      const data = await res.json();
      console.log(data)

      if (data.success == false) {
        navigate("/ManagerLogin");
      }
    } catch (err) {
      navigate("/ManagerLogin");
    }

  }

  useEffect(() => {
    loadData();
  }, [])
  return (
    <div className="h-[screen] flex">
      <Navbar />
      <div className="ml-14 w-screen">
        <ManagerHeader page="Home" />
        <h1 className="mx-32 mt-10 text-3xl font-bold">Manager Home Page</h1> 
      </div>
    </div>
  )
}

export default ManagerHome