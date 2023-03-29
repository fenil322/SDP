import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';


const ManagerSignUp = () => {
  const navigate = useNavigate();
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  const [cpass, setcpass] = useState();
  const deactivebtn = 'flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-white rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none'
  const activebtn = '  hover:bg-blue-400 flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none'
  const [userdata, setuserdata] = useState({
    name: "", email: "", password: "", phone: ""
  });

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {

    if (passwordType === "password") {
      setPasswordType("text")
      //return;
    }
    else setPasswordType("password")
  }

  const [passwordConfirmType, setPasswordConfirmType] = useState("password");
  const toggleConfirmPassword = () => {
    if (passwordConfirmType === "password") {
      setPasswordConfirmType("text")
    }
    else setPasswordConfirmType("password")
  }

  let name, value;
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(e.target.value)
    setuserdata({ ...userdata, [name]: value });
  }

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, password, phone } = userdata;
    if (password == cpass) {
      const res = await fetch("/manager/signup", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, email, password, phone
        }),
      })
      const data = await res.json();
      console.log(data)
      if (res.status == 200) {
        toast.success(data.message);
        await sleep(2200)
        navigate("/ManagerLogin");
      } else {
        toast.error(data.error);
      }
      // .then(res => res.json())
      //   .then(navigate("/BrnadLogin"))
      //   .catch(err => console.log(err));
    } else {
      toast.error(
        "Passwords do not match");
    }
  }

  return (
    <div className='h-screen'>
      <div className=''>
        <section className="bg-white dark:bg-gray-900">
          <div className="flex justify-center ">
            <div className=" bg-cover block h-screen min-h-[screen] w-full bg-[url(https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)]">

              <div class="flex items-center h-full px-20 max-sm:px-10  bg-gray-900 bg-opacity-40">
                <div className='max-md:hidden max-sm:hidden'>
                  <h2 class="text-4xl font-bold text-white">Manager</h2>

                  <p class="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa</p>
                </div>
                <div className="flex items-center my-10 px-10 py-5 rounded-lg  mx-auto bg-opacity-20 bg-white">
                  <div className="flex-1">

                  <h2 class="text-2xl font-bold text-white">Manager</h2>
                    <form method='POST' >
                      <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 mb-5" >


                        <div>
                          <label className="block mb-2 text-sm text-white dark:text-gray-200">User Name</label>
                          <input type="text" placeholder={"User name"} name="name"
                            value={userdata.name}
                            onChange={handleInput} className="block w-full px-5 py-2 mt-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>



                        <div>
                          <label className="block mb-2 text-sm text-white dark:text-gray-200">Contact </label>
                          <input type="text" placeholder="XXX-XX-XXXX-XXX" name="phone"
                            value={userdata.phone}
                            onChange={handleInput} className="block w-full px-5 py-2 mt-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                          <label className="block mb-2 text-sm text-white dark:text-gray-200">Email address</label>
                          <input type="email" placeholder="johnsnow@example.com" name="email"
                            value={userdata.email}
                            onChange={handleInput} className="block w-full px-5 py-2 mt-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div></div>
                        <div>
                          <label className="block mb-2 text-sm text-white dark:text-gray-200">Password</label>
                          <div className="flex flex-row">
                            <input type={passwordType} placeholder="Enter your password" name='password'
                              value={userdata.password}
                              onChange={handleInput} className="block w-full px-5 py-2 mt-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                            <div className='cursor-pointer my-auto mx-2' onClick={togglePassword}>
                              {passwordType === "password" ? <AiFillEye className='text-white ' size={25} /> : <AiFillEyeInvisible size={25} className='text-white ' />}
                            </div>
                          </div>
                        </div>
                        <div>

                          <div>
                            <label className="block mb-2 text-sm text-white dark:text-gray-200">Confirm password</label>

                            <div className="flex flex-row">
                              <input type={passwordConfirmType} placeholder="Enter your password" name='cpassword'
                                value={cpass}
                                onChange={(e) => { setcpass(e.target.value) }}
                                className="block w-full px-5 py-2 mt-2 text-gray-900 placeholder-gray-500 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                              <div className='cursor-pointer my-auto mx-2' onClick={toggleConfirmPassword}>

                                {passwordConfirmType === "password" ? <AiFillEye className='text-white ' size={25} /> : <AiFillEyeInvisible size={25} className='text-white  ' />}
                              </div>
                            </div>
                          </div>
                        </div>


                      </div>

                      <button
                        onClick={postData}
                        className="flex mx-auto items-center mt-10  justify-between  px-6 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span >Sign Up </span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                        </svg>
                      </button>
                      <br>
                      </br>
                    </form>
                    <hr></hr>
                    <p class="mt-6 text-sm text-center text-white">Already have an account? <a href="ManagerLogin  " class="text-blue-200 focus:outline-none focus:underline hover:underline">Login here</a>... </p>
                  </div>
                </div></div>
            </div>
          </div>
        </section>
      </div >
      <ToastContainer autoClose={1500} />
    </div >
  )
}

export default ManagerSignUp