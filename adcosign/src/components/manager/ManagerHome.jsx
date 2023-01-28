import React from 'react'
import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import ManagerHeader from './ManagerHeader'

const ManagerHome = () => {

  const navigate = useNavigate()
  
  const loadData=async ()=>{
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

      if(data.success==false){
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
    <div>
      <ManagerHeader />
      <div className='text-3xl'>
        hello this is my manager home page
      </div>
    </div>
  )
}

export default ManagerHome