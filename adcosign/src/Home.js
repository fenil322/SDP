import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Header from './components/Header'
import homepage from './homepage.jpg'
// import dropDown from './components/dropDown'
import homegif from './Images/homegif.gif'
const Home = () => {

  let commonClass = "w-30 mx-20 bg-white my-20 p-5 rounded-sm";
  // from ss
  return (

    <div className=' bg-white'>
      <Header />


      {/*                                             Hero section banner                                    */}
      <div className='Hero-Section w-5/6 m-auto  mt-24'>

        <div className=' flex  items-center  '>
          <div className='text-left'>
            <div className='text-6xl font-medium'>
              Adcosign generates sales to brands via micro-influencers
            </div>
            <div className='text-3xl py-10'>
              Generate sales, attract customers and increase brand awareness. <b className='font-semibold'>Pay only for results.</b>

            </div>

            <div className='flex pt-8 text-lg'>

              <NavLink to='/BrandIntro'>
                <div className='mr-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200  rounded '  >I'm a Brand</div>
              </NavLink>
              <NavLink to='/InfluencerIntro'>

                <div className='mr-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200  rounded '>I'm a Creater </div>
              </NavLink>

            </div>
          </div>
          <img src={homegif} className='w-1/3 ml-auto  ' />

        </div>

      </div>
      <div className='mt-20'></div>
      {/*                                brand intro abnner                                    */}

      <div className=''>

        <div className='w-5/6 m-auto text-left'>
          <div className='text-2xl'>
            FOR BRANDS

          </div>
          <div className='text-6xl font-medium mt-10'>
            <div className=''>Pay influencers only when
            </div>
            <span>you get results
            </span>

          </div>
          <div className='text-3xl pt-8'>
            {/* Influencers are a performance-marketing channel */}
          </div>
        </div>

        <div className='w-5/6 m-auto text-left'>

          <div className='text-4xl font-medium mt-10'>
            <div className=''>Get sales while best-in-class
            </div>
            <span>analytics do the rest
            </span>

          </div>
          <div className='text-3xl py-10 max-w-4xl'>
            With our 25k+ micro-influencers you can choose from a variety of payment models and control the ROI on your campaigns
          </div>
          <div className='flex'>
            <NavLink to='/BrandSignUp'>
              <div className='my-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200  rounded '>Get Started-it's free   </div>
            </NavLink>
          </div>

        </div>
        <div className='w-5/6 m-auto text-left  bg-blue-700 '>
          <div className='my-10 text-2xl text-white ml-20 pt-10'>
            Adcosign for brands
          </div>
          <div className='flex  justify-between'>


            <div className='w-30 mx-20 bg-white my-20 p-5 rounded-sm '><div className='text-blue-700 text-3xl'>25k+</div><div className=''>Micro-influencers on the platform</div></div>
            <div className='w-30 mx-20 bg-white my-20 p-5 rounded-sm'><div className='text-blue-700 text-3xl'>12M+</div><div className=''>Leads and sales generated for clients  </div></div>
            <div className='w-30 mx-20 bg-white my-20 p-5 rounded-sm'><div className='text-blue-700 text-3xl'>4</div><div className=''>Influence Marketing Managers</div></div>
            <div className='w-30 mx-20 bg-white my-20 p-5 rounded-sm'><div className='text-blue-700 text-3xl'>120+</div><div className=''>Happy clients with always-on campaigns</div></div>
          </div>
        </div>
      </div>

      {/*     influencer intro banner                                                           */}


      <div className=''>

        <div className='w-5/6 m-auto text-left mt-20'>
          <div className='text-2xl'>
            FOR INFLUENCERS

          </div>
          <div className='text-6xl font-medium mt-10'>
            <div className=''>Choose top-tier companies
            </div>
            <span>to work with
            </span>

          </div>
          <div className='text-3xl pt-8'>
            {/* You choose who to work with even if you have only 1500 followers */}
          </div>
        </div>

        <div className='w-5/6 m-auto text-left'>

          <div className='text-4xl font-medium mt-10 max-w-3xl'>
            <div className=''>Platform for influencers to join
            </div>


          </div>
          <div className='text-3xl pt-8 max-w-4xl'>
            More than 200+ brands world-wide cooperate with DRIM influencers. No matter how many followers you have - you can earn with us </div>
          <div className='flex'>
            <NavLink to='/InfluencerSignUp'>


              <div className='my-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200  rounded '>Get Started-it's free   </div>
            </NavLink>
          </div>


        </div>
        <div className='w-5/6 m-auto text-left  bg-blue-700 '>
          <div className='my-10 text-2xl text-white ml-20 pt-10'>
            Adcosign for influencers
          </div>
          <div className='flex  justify-between'>

            <div className={commonClass}><div className='text-blue-700 text-3xl'>25k+</div><div className=''>influencers on the platform</div></div>
            <div className={commonClass}><div className='text-blue-700 text-3xl'>12M+</div><div className=''>Minimum number of followers to work with  </div></div>
            <div className={commonClass}><div className='text-blue-700 text-3xl'>4</div><div className=''>Max earnings in a single month by a single influencer so far</div></div>
            <div className={commonClass}><div className='text-blue-700 text-3xl'>120+</div><div className=''>Micro-influencers on the platform</div></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home