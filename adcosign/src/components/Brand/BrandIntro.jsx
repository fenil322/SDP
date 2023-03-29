import React from 'react'
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import card from '../../../src/Images/profilecard.gif'
// import BrandSignUp from './BrandSignUp';
const BrandIntro = () => {
    return (
        <div className=''>

            <Header />
            {/*                                brand intro abnner                                    */}

            <div className=' pt-10'>
                <div className='  w-5/6 m-auto header flex'>

                    <div className='text-left'>

                        <div className=''>
                            <div className='text-2xl'>
                                For Brands...

                            </div>
                            <div className='text-5xl font-medium mt-20'>
                                <div className=''>Pay influencers only when
                                </div>
                                <span>you get results
                                </span>

                            </div>
                        </div>

                        <div className=''>

                            <div className='text-3xl font-medium mt-10'>
                                <div className=''>Get sales while best-in-class
                                </div>
                                <span>analytics do the rest
                                </span>

                            </div>
                            <div className='text-2xl pt-8 max-w-4xl'>
                                With our 25k+ micro-influencers you can choose from a variety of payment models and control the ROI on your campaigns
                            </div>
                            <div className='flex'>
                                <NavLink to="/BrandSignUp">
                                    <div className='my-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200  rounded '>Get Started-it's free   </div>
                                </NavLink>
                            </div>

                        </div>
                    </div>
                    <div className='gif w-1/3 ml-auto'>
                        <img src={card} className='' />
                    </div>

                </div>
                <div className='w-5/6 m-auto text-left  bg-blue-600 rounded-xl mb-10 '>
                    <div className='my-10 text-2xl text-white ml-20 pt-10'>
                        Adcosign for brands
                    </div>
                    <div className='flex  justify-between'>

                        <div className='w-30  mx-20 bg-white my-20 p-5 rounded-2xl '><div className='text-blue-700 text-3xl'>25k+</div><div className=''>Micro-influencers on the platform</div></div>
                        <div className='w-30  mx-20 bg-white my-20 p-5 rounded-2xl'><div className='text-blue-700 text-3xl'>12M+</div><div className=''>Leads and sales generated for clients  </div></div>
                        <div className='w-30  mx-20 bg-white my-20 p-5 rounded-2xl'><div className='text-blue-700 text-3xl'>4</div><div className=''>Influence Marketing Managers</div></div>
                        <div className='w-30  mx-20 bg-white my-20 p-5 rounded-2xl'><div className='text-blue-700 text-3xl'>120+</div><div className=''>Happy clients with always-on campaigns</div></div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default BrandIntro