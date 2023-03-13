import React, { useEffect, useState } from "react";
import BrandHeader from "./BrandHeader";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
// import {Rating} from "@mui/lab"
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/StarIcon';
import Rating from '@mui/material/Rating';
const BrandHistory = () => {
  const navigate = useNavigate();
  const [profilecard, setprofilecard] = useState([])
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const getbrandcurrentconsignments = async () => {
    try {
      const res = await axios.get('consignment/getbrandcurrentconsignments');
      const data = res.data;
      console.log(data);
      setprofilecard(data.data)


      // console.log(profilecard)

    } catch (err) {
      if (err.response.status == 422) {
        toast.error(err.response.data.message)
        navigate('/BradConsignments')
      }
    }
  }
  useEffect(() => {
    getbrandcurrentconsignments()
  }, [])

  const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
  }


  return (
    <div className="flex flex-row h-screen">
      <Navbar />

      <div className=" ml-14 w-screen">
        <BrandHeader page="History" />
        <div className="my-10 mx-10  grid grid-cols-2 max-sm:grid-cols-1">
          {
            profilecard.length == 0 ? <h1 className="text-3xl font-bold text-center">No Consignments Found</h1> :
              profilecard.map((item, index) => (
                <a
                  href="#"
                  class="flex flex-col  w-5/6 items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                  <img
                    class="object-cover overflow-auto w-full rounded-full h-96 md:h-48 max-sm:h-52 md:w-48 md:rounded-full md:rounded-full-lg m-2 p-2"
                    src={item.profile}
                    alt=""
                  />
                  <div class="flex flex-col   justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.fname} {item.lname}
                    </h5>
                    <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                      {item.email}
                    </p>
                    <p class="mb-2 font-semibold text-gray-700 dark:text-gray-400">
                      {item.phone}
                    </p>

                    <div>
                      {/* <button
                    onClick={async (e) => {
                      e.preventDefault();
                      try {
                        const res = await axios.put('consignment/payment', { id: item._id })
                        const resdata = res.data;
                        console.log(resdata)
                        if (resdata.success == true) {
                          window.location.reload();
                        }
                      } catch (err) {
                        console.log(err);
                      }
                    }}
                    className="flex m-1 space-x-2 items-center px-3 py-2 bg-green-600 hover:bg-green-800 rounded-md drop-shadow-md">
                    <span class="text-white">Make Payment</span>
                  </button> */}
                      <button
                        type="button"
                        class="flex m-1 space-x-2 items-center px-3 py-2 bg-green-600 hover:bg-green-800 rounded-md drop-shadow-md"
                      >
                        <span className="text-white">Give a Feedback</span>
                      </button>
                      {/* <Box
                        sx={{
                          width: 200,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Rating
                          name="hover-feedback"
                          value={value}
                          precision={0.5}
                          getLabelText={getLabelText}
                          onChange={(event, newValue) => {
                            setValue(newValue);
                          }}
                          onChangeActive={(event, newHover) => {
                            setHover(newHover);
                          }}
                          //emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && (
                          <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                        )}
                      </Box> */}
                      {/* <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      /> */}
                    </div>
                  </div>
                </a>
              ))}
        </div>
      </div>
    </div>
  );
};

export default BrandHistory;
