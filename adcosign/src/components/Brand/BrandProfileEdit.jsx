import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import BrandHeader from './BrandHeader';
import Navbar from './Navbar';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const BrandProfileEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [brandData, setbrandData] = useState({});
  const [logo, setLogo] = useState("");
  const [logourl, setLogourl] = useState("");
  const [dimage, setDImage] = useState("");
  const [durl, setDUrl] = useState("");
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const Baseurl = 'https://api.cloudinary.com/v1_1/djhql8xzq/image/upload/';
  const preset = "adcosign_img";
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {

    setbrandData(location.state)
    // console.log(location.state);
  }, [])

  const imageupload = async (e) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", preset);
    data.append("cloud_name", "djhql8xzq");
    try {
      // setLoading(true);
      await axios.post(Baseurl, data)
        .then(res => {
          setUrl(res.data.secure_url)
        });
    } catch (err) {
      toast.error("image not uploaded");
      console.error(err);
      return;
    }
  }
  const logoupload = async (e) => {
    const data = new FormData();
    data.append("file", logo);
    data.append("upload_preset", preset);
    data.append("cloud_name", "djhql8xzq");
    try {
      // setLoading(true);
      await axios.post(Baseurl, data)
        .then(res => {
          setLogourl(res.data.secure_url)
        });
    } catch (err) {
      toast.error("image not uploaded");
      console.error(err);
      return;
    }
  }
  const dimageupload = async (e) => {
    const data = new FormData();
    data.append("file", dimage);
    data.append("upload_preset", preset);
    data.append("cloud_name", "djhql8xzq");
    try {
      // setLoading(true);
      await axios.post(Baseurl, data)
        .then(res => {
          setDUrl(res.data.secure_url)
        });
      } catch (err) {
      toast.error("image not uploaded");
      console.error(err);
      return;
    }
    console.log(durl);
  }
  const logostore = async () => {
    try {
      setbrandData({ ...brandData, logo: logourl })
      const res = await axios.put("/brand/logoupload", { logo: logourl,type:1 })
      console.log(res.data);
      const data = res.data;
      // console.log(data);
      if (data.success == true) {
        toast.success(data.message);
        await sleep(1500)
        setLogourl("");
        window.location.reload();
        navigate("/BrandProfile")
      }
    } catch (err) {
      console.log(err)
    }
  }
  
  const imagestore = async () => {
    try {

      const res = await axios.put("/brand/imageuplaod", { image: url })
      console.log(res.data);
      const data = res.data;
      // console.log(data);
      if (data.success == true) {
        toast.success(data.message);
        await sleep(1500)
        setUrl("")
        // window.location.reload();
        // navigate("/BrandProfile")
      }
    } catch (err) {
      console.log(err)
    }
  }
  
  const dimagestore = async () => {
    try {
      setbrandData({ ...brandData, photo1: durl })
      const res = await axios.put("/brand/logoupload", { photo1: durl, type: 2 })
      console.log(res.data);
      const data = res.data;
      // console.log(data);
      if (data.success == true) {
        toast.success(data.message);
        await sleep(1500)
        setDUrl("")
        navigate("/BrandProfile")
        window.location.reload();
      }
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    // e.preventDefault();
    if (durl) {
      dimagestore()
    }
  }, [durl])
  useEffect(() => {
    if (logourl) {
      logostore()
    }
  }, [logourl])

  useEffect(() => {
    if (url) {
      console.log(url)
      imagestore()
    }
  }, [url])

  return (
    <div className="flex flex-row h-screen">
      <Navbar />

      <div className=" ml-14 w-screen max-sm:ml-0">
        <BrandHeader page="Edit Profile" />
        <div>
          <div className="flex items-center justify-center">
            <div className="bg-gray-200 max-sm:w-5/6 w-1/2 mt-10 rounded-lg">
              <div className="flex items-center justify-center pt-10 flex-col">
                <img
                  //src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QY2ioIRa17CorwDpwkHIujVaLvc6R_FpMA&usqp=CAU"
                  src={brandData?.logo}
                  alt="No logo"
                  className="rounded-full w-32 h-32"
                />

                <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3">
                  {brandData.uname}
                </h1>
                <h3 className="text-gray-400 text-sm"> Brand</h3>
                <h3 className="text-gray-500 text-sm">
                  {brandData.city + ", " + brandData.state + ", " + brandData.country}
                </h3>
                <h3 className="text-gray-500 text-sm pb-10">
                  {brandData.email}
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="bg-gray-200 w-1/2 mt-7 max-sm:w-5/6 ">
              <div className="flex items-center justify-center pt-7 flex-col">
                <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
                  Upload Logo
                </h1>

                <form className="flex items-center max-sm:flex-col space-x-6" >
                  <div className="shrink-0">
                    <img
                      className="h-16 w-16 object-cover rounded-full"
                      src={brandData.logo}
                      alt="Current pictures"
                    />
                  </div>
                  <label className="block">
                    {/* <span className="sr-only">Choose profile photo</span> */}
                    <input
                      type="file"
                      enctype="multipart/form-data"
                      className="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:bg-violet-100
                                  "
                      name="logo"
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                        setLogo(e.target.files[0])
                        // console.log(image);
                      }}

                    />
                  </label>
                </form>
                <div className="flex-justify-between p-3 px-14">
                  <button
                    onClick={logoupload}
                    className="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Upload
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 w-1/2 mt-7 max-sm:w-5/6 ">
              <div className="flex items-center justify-center pt-7 flex-col">
                <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
                  Upload Display image
                </h1>

                <form className="flex items-center max-sm:flex-col space-x-6" >
                  <div className="shrink-0">
                    <img
                      className="h-16 w-16 object-cover rounded-full"
                      src={brandData.photo1}
                      alt="Current pictures"
                    />
                  </div>
                  <label className="block">
                    {/* <span className="sr-only">Choose profile photo</span> */}
                    <input
                      type="file"
                      enctype="multipart/form-data"
                      className="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:bg-violet-100
                                  "
                      name="logo"
                      onChange={(e) => {
                        console.log(e.target.files[0]);
                        setDImage(e.target.files[0])
                        // console.log(image);
                      }}

                    />
                  </label>
                </form>
                <div className="flex-justify-between p-3 px-14">
                  <button
                    onClick={dimageupload}
                    className="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Upload
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 w-1/2 mt-7 max-sm:w-5/6 ">
              <div className="flex items-center justify-center pt-7 flex-col">
                <h1 className="text-gray-900 font-semibold text-xl mt-5 p-3 text-center">
                  Add more images
                </h1>

                <form className="flex  max-sm:flex-col items-center space-x-6" >
                  <label className="block">
                    {/* <span className="sr-only">Choose profile photo</span> */}
                    <input
                      type="file"
                      enctype="multipart/form-data"
                      className="block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-blue-50 file:text-blue-700
                                    hover:file:bg-violet-100
                                  "
                      name="images"
                      onChange={(e) => {
                        // console.log(e.target.files[0]);
                        setImage(e.target.files[0])
                        // console.log(image);
                      }}

                    />
                  </label>
                </form>
                <div className="flex-justify-between p-3 px-14">
                  <button
                    onClick={imageupload}
                    className="px-5 py-3 text-md justify-center item-center text-center tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Upload
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  )
}

export default BrandProfileEdit