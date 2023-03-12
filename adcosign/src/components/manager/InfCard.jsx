import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { TiPlus } from "react-icons/ti";

const InfCard = ({ item }) => {
    const navigate = useNavigate();
    return (
        <div className="flex ml-60 mt-10 w-full bg-white shadow-2xl ">

            <img
                class="object-cover w-full rounded-full h-60 md:h-auto md:w-48 md:rounded-full md:rounded-full-lg m-2 p-2"
                src={item.photo}
                alt="not image"
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.fname + " " + item.lname}

                </h5>
                <p class="mb-3 font-normal text-gray-800 dark:text-gray-400">
                    {item.city + ", " + item.state + ", " + item.country}

                </p>
                <p class="mb-3 font-normal text-gray-900 dark:text-gray-400">
                    {item.email}

                </p>
                <div>
                    <div className="flex justify-center space-x-6 mb-5">
                        <div>
                            <button

                                onClick={async (e) => {
                                    e.preventDefault()
                                    console.log("hello")
                                    try {
                                        const res = await axios.put("manager/validateinfluencer", { email: item.email })
                                        const data = res.data;
                                        console.log(data)
                                        if (data.success == true) {
                                            window.location.reload();
                                        }
                                    } catch (err) {
                                        navigate("/AddNewInfluencer");
                                        console.log(err)
                                    }
                                }}

                                class="flex space-x-2 items-center px-3 py-2 bg-green-700 hover:bg-green-800 rounded-md drop-shadow-md">
                                <TiPlus size={24} className="fill-white" />
                                <span class="text-white">Add</span>
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={async (e) => {
                                    e.preventDefault()
                                    console.log("hello2")
                                    try {

                                        const res = await axios.delete("manager/deleteinfluencer", { data: { email: item.email } })

                                        // { data:{email:email}});
                                        const data = res.data;
                                        console.log(data)
                                        if (data.success == true) {
                                            window.location.reload();
                                        }
                                    } catch (err) {
                                        navigate("/AddNewInfluencer");
                                        console.log(err);
                                    }


                                }}
                                class="flex space-x-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-800 rounded-md drop-shadow-md">
                                <svg
                                    class="fill-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M 10 2 L 9 3 L 3 3 L 3 5 L 21 5 L 21 3 L 15 3 L 14 2 L 10 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
                                </svg>
                                <span class="text-white">Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfCard