import React from 'react'
// import InfluencerHome from './InfluencerHome'
import InfluencerLogin from './InfluencerLogin'
import { useState } from 'react';
// import { BsFillPersonFill } from 'react-icons/bs'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
// import { useHistory } from "react-router-dom"


const InfluencerSignUp = () => {
  // const history = useHistory();

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

  const postData = async (e) => {
    e.preventDefault();
    const { fname, lname, email, city, state, country, password, age, instagram, instagramURL, instagramFollowers, instagramEngagementRate, facebook, facebookURL, facebookFollowers, facebookEngagementRate, twitter, twitterURL, twitterFollowers, twitterEngagementRate } = userdata;

    const res = await fetch("/influencer/influencersignup", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname, lname, email, city, state, country, password, age, instagram, instagramURL, instagramFollowers, instagramEngagementRate, facebook, facebookURL, facebookFollowers, facebookEngagementRate, twitter, twitterURL, twitterFollowers, twitterEngagementRate
      }),
    })
    if (res.json().status != 404) {
      // history.push("/InfluencerLogin")
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
                    <NavLink to='/BrandSignUp'>

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
                    <input type="text" placeholder="XXX-XX-XXXX-XXX" name="phone"
                      value={userdata.phone}
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
                    onClick={postData}
                    className="flex items-center justify-between w-1/2 px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <span >Sign Up </span>

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


      {/*<MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol />
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit="">
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBRow>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        required
                        name="name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        required
                        name="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your password"
                        icon="lock"
                        group
                        type="password"
                        validate
                        required
                        name="password"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your Phone Number"
                        icon="phone-alt"
                        group
                        type="tel"
                        validate
                        required
                        name="phone"
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your Age"
                        icon="calendar-plus"
                        group
                        type="number"
                        validate
                        required
                        name="age"
                        value={age}
                        onChange={(e) => setage(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your City"
                        icon="city"
                        group
                        type="text"
                        validate
                        required
                        name="city"
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your State"
                        icon="warehouse"
                        group
                        type="text"
                        validate
                        required
                        name="state"
                        value={state}
                        onChange={(e) => setstate(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your country"
                        icon="flag"
                        group
                        type="text"
                        validate
                        required
                        name="country"
                        value={country}
                        onChange={(e) => setcountry(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your Instagram Handle"
                        icon="user-edit"
                        group
                        type="text"
                        validate
                        required
                        name="instagram"
                        value={instagram}
                        onChange={(e) => setinstagram(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your Instagram URL"
                        icon="link"
                        group
                        type="url"
                        validate
                        required
                        name="instagramURL"
                        value={instagramURL}
                        onChange={(e) => setinstagramURL(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your Instagram Followers"
                        icon="users"
                        group
                        type="text"
                        validate
                        required
                        name="instagramFollowers"
                        value={instagramFollowers}
                        onChange={(e) => setinstagramFollowers(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your Instagram Engagement Rate"
                        icon="star"
                        group
                        type="number"
                        validate
                        required
                        name="instagramEngagementRate"
                        value={instagramEngagementRate}
                        onChange={(e) =>
                          setinstagramEngagementRate(e.target.value)
                        }
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your FaceBook Handle"
                        icon="user-edit"
                        group
                        type="text"
                        validate
                        required
                        name="facebook"
                        value={facebook}
                        onChange={(e) => setfacebook(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your FaceBook URL"
                        icon="link"
                        group
                        type="url"
                        validate
                        required
                        name="facebookURL"
                        value={facebookURL}
                        onChange={(e) => setfacebookURL(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your FaceBook Followers"
                        icon="users"
                        group
                        type="text"
                        validate
                        required
                        name="facebookFollowers"
                        value={facebookFollowers}
                        onChange={(e) => setfacebookFollowers(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your Facebook Engagement Rate"
                        icon="star"
                        group
                        type="number"
                        validate
                        required
                        name="facebookEngagementRate"
                        value={facebookEngagementRate}
                        onChange={(e) =>
                          setfacebookEngagementRate(e.target.value)
                        }
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your Twitter Handle"
                        icon="user-edit"
                        group
                        type="text"
                        validate
                        name="twitter"
                        value={twitter}
                        onChange={(e) => settwitter(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your Twitter URL"
                        icon="link"
                        group
                        type="url"
                        validate
                        name="twitterURL"
                        value={twitterURL}
                        onChange={(e) => settwitterURL(e.target.value)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your Twitter Followers"
                        icon="users"
                        group
                        type="text"
                        validate
                        name="twitterFollowers"
                        value={twitterFollowers}
                        onChange={(e) => settwitterFollowers(e.target.value)}
                      />
                    </MDBCol>
                    <MDBCol md="6" className="md-3">
                      <MDBInput
                        label="Your Twitter Engagement Rate"
                        icon="star"
                        group
                        type="number"
                        validate
                        name="twitterEngagementRate"
                        value={twitterEngagementRate}
                        onChange={(e) =>
                          settwitterEngagementRate(e.target.value)
                        }
                      />
                    </MDBCol>
                  </MDBRow>
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn>
                </div>
              </form>

              <div
                className="msg"
                id="msg"
                style={{
                  textAlign: "center",
                  flexDirection: "column",
                  flex: "auto",
                }}
              ></div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol />
      </MDBRow>
    </MDBContainer> */}

    </div>
  )
}

export default InfluencerSignUp

