import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Card = ({ item }) => {
    const { uname, shopName, brandType,
        phone, email, city, state, country,
        address, location, password, photo1, photo2
    } = item

    const navigate = useNavigate();
    const branddetailpage = () => {
        navigate("/BrandDetails", { state: item })
    }

    return (
        <div>
            <div className="">
                <div className="ml-10 mt-10">
                    <div className="block flex items-center justify-between w-4/6 p-6 bg-gray-100 border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <img src={photo1} alt="" className="w-40 h-40 rounded-full ml-10" />
                        <div className='mr-8'>
                            <div className="mb-2 text-lg font-semibold  text-gray-900 dark:text-white">
                                Owner Name :
                            </div><span>{uname}</span>
                            <div className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                                Shop Name :
                            </div><span>{shopName}</span>
                            <div className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                                Type :
                            </div><span>{brandType}</span>
                            <div className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                                Shop Address :
                            </div><span>{address}</span>
                            <div>
                                <button
                                    type="button"
                                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-none text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                                    onClick={branddetailpage}
                                >
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card