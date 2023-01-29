import React from 'react'
// import InfluencerHome from './InfluencerHome'
import InfluencerLogin from './InfluencerLogin'
import { useState } from 'react';
// import { BsFillPersonFill } from 'react-icons/bs'
import axios from 'axios'
import { Navigate, NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const InfluencerSignUp = () => {
  const navigate = useNavigate();
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const [userdata, setuserdata] = useState({
    fname: "", lname: "", phone: "", email: "", city: "", state: "", country: "", password: "",
    age: "", instagram: "", instagramURL: "", instagramFollowers: "", instagramEngagementRate: "",
    facebook: "", facebookURL: "", facebookFollowers: "", facebookEngagementRate: "",
    twitter: "", twitterURL: "", twitterFollowers: "", twitterEngagementRate: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(e.target.value)
    setuserdata({ ...userdata, [name]: value });
  }
 

  const postdata = async (e) => {
    e.preventDefault();
    const { fname,phone, lname, email, city, state, country, password, age, instagram, instagramURL, instagramFollowers, instagramEngagementRate, facebook, facebookURL, facebookFollowers, facebookEngagementRate, twitter, twitterURL, twitterFollowers, twitterEngagementRate } = userdata;

    const res = await fetch("/influencer/signup", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,phone, lname, email, city, state, country, password, age, instagram, instagramURL, instagramFollowers, instagramEngagementRate, facebook, facebookURL, facebookFollowers, facebookEngagementRate, twitter, twitterURL, twitterFollowers, twitterEngagementRate
      }),
    })

    const data = await res.json();
    console.log(data)
    if(res.status==200){
      toast.success(data.message);
      await sleep(2200)
      navigate("/InfluencerLogin");
    }else{
      toast.error(data.error);
    }

  }

  const activebtn = 'flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none'
  const deactivebtn = 'flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none'
  //  var bsFillPersonFill=<BsFillPersonFill size={20}/>
  return (
    <div>
      <div className=''>
        <section className="bg-white dark:bg-gray-900">
          <div className="flex justify-center min-h-screen">
            {/* <div className="hidden bg-cover lg:block lg:w-2/5" style="background-image: url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')">
            </div> */}

            <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
              <div className="w-full">
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                  Get your free account now.
                </h1>

                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                </p>

                <div className="mt-6">
                  <h1 className="text-gray-500 dark:text-gray-300">Select type of account</h1>

                  <div className="mt-3 md:flex md:items-center md:-mx-2">
                    <NavLink to='/BrandSignUp' >

                      <button class={deactivebtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>

                        <span className="mx-2">
                          Brand

                        </span>
                      </button>
                    </NavLink>

                    <NavLink to='/InfluencerSignUp'>
                      <button class={activebtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>

                        <span className="mx-2">
                          Influencer
                        </span>
                      </button>
                    </NavLink>
                  </div>
                </div>

                <form method='POST' className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" >
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                    <input type="text" placeholder={"First Name"} name="fname"
                      value={userdata.fname}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                    <input type="text" placeholder={`Last name`} name="lname"
                      value={userdata.lname}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Contact Number</label>
                    <input type="tel" placeholder="XXX-XX-XXX-XX" name="phone"
                      value={userdata.phone}
                      // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                    <input type="email" placeholder="johnsnow@example.com" name="email"
                      value={userdata.email}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">City</label>
                    <input type="text" placeholder="City" name="city"
                      value={userdata.city}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">State</label>
                    <input type="text" placeholder="State" name="state"
                      value={userdata.state}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Country</label>
                    <input type="text" placeholder="Country" name="country"
                      value={userdata.country}
                      onChange={handleInput}
                      className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Age</label>
                    <input type="text" placeholder="Age" name="age"
                      value={userdata.age}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Instagram Handle</label>
                    <input type="text" placeholder="Instagram Handle" name="instagram"
                      value={userdata.instagram}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Instagram Follower</label>
                    <input type="text" placeholder="Instagram Follower" name='instagramFollowers'
                      value={userdata.instagramFollowers}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Instagram Engagement Rate</label>
                    <input type="text" placeholder="Engagement Rate" name='instagramEngagementRate'
                      value={userdata.instagramEngagementRate}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Url</label>
                    <input type="text" placeholder="Instagram Url" name='instagramURL'
                      value={userdata.instagramURL}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Facebook Handle</label>
                    <input type="text" placeholder="Facebook Handle" name='facebook'
                      value={userdata.facebook}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Facebook Follower</label>
                    <input type="text" placeholder="Facebook Follower" name='facebookFollowers'
                      value={userdata.facebookFollowers}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Facebook Engagement Rate</label>
                    <input type="text" placeholder="Engagement Rate" name='facebookEngagementRate'
                      value={userdata.facebookEngagementRate}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Url</label>
                    <input type="text" placeholder="Facebook url" name='facebookURL'
                      value={userdata.facebookURL}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Twitter Handle</label>
                    <input type="text" placeholder="Twitter Handle" name='twitter'
                      value={userdata.twitter}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Twitter Follower</label>
                    <input type="text" placeholder="Twitter Follower" name='twitterFollowers'
                      value={userdata.twitterFollowers}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Twitter Engagement Rate</label>
                    <input type="text" placeholder="Engagement Rate" name='twitterEngagementRate'
                      value={userdata.twitterEngagementRate}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Url</label>
                    <input type="text" placeholder="Twitter Url" name='twitterURL'
                      value={userdata.twitterURL}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                    <input type="password" placeholder="Enter your password" name='password'
                      value={userdata.password}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Confirm password</label>
                    <input type="password" placeholder="Enter your password" name='cpassword'
                      value={userdata.cpassword}
                      onChange={handleInput} className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                  </div>
                  <button
                    onClick={postdata}
                    className="flex items-center justify-between w-1/2 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <span >Sign Up</span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer autoClose={1500}/> 

    </div>
  )
}

export default InfluencerSignUp

