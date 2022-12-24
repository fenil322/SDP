import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Header'

const InfluencerIntro = () => {
   let commonClass='w-30 mx-20 bg-white my-20 p-5 rounded-sm'
    return (
        <div className=''>
            <Header />
            <div className=''>

            <div className='w-5/6 m-auto text-left mt-20'>
                <div className='text-2xl'>
                    For Influencer...

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
                    <div className='w-30 mx-20 bg-white my-20 p-5 rounded-sm'><div className='text-blue-700 text-3xl'>12M+</div><div className=''>Minimum number of followers to work with  </div></div>
                    <div className='w-30 mx-20 bg-white my-20 p-5 rounded-sm'><div className='text-blue-700 text-3xl'>4</div><div className=''>Max earnings in a single month by a single influencer so far</div></div>
                    <div className='w-30 mx-20 bg-white my-20 p-5 rounded-sm'><div className='text-blue-700 text-3xl'>120+</div><div className=''>Micro-influencers on the platform</div></div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default InfluencerIntro