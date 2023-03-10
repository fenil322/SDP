import React, { useEffect, useState } from 'react'
import InfluencerHeader from './InfluencerHeader'
import axios from 'axios'
import ReqArrivalCard from './ReqArrivalCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const InfluencerArrivalRequest = () => {

  const navigate = useNavigate();
  const location=useLocation();
  const [profilecard, setprofilecard] = useState([])
  const getBrandRequest = async () => {
    try {
      const res = await axios.get('consignment/getbrandreq');
      const data = res.data;
      console.log(data.data);
      setprofilecard(data.data)
      console.log(profilecard)
      
    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message)
        navigate('/InfluencerLogin')
      }
    }

  }
  useEffect(() => {
    getBrandRequest()
    console.log(location);
  }, [])

  return (
    <div className='flex h-screen'>
      <Navbar />
    <div className=' ml-14 w-screen'>
      <InfluencerHeader page="Arrival Requests" />
      <div className='flex grid  md:grid-cols-3'>
        {
          profilecard.length == 0 ?
           <h1 className="text-3xl font-bold text-center">No Request Found</h1> :
            profilecard.map((item) => (

              <ReqArrivalCard item={item} />

            ))}
      </div>
      <ToastContainer autoClose={500} />
    </div>
    </div>
  )
}

export default InfluencerArrivalRequest