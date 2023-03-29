import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Header'
import card from '../../../src/Images/profilecard2.gif'

const InfluencerIntro = () => {
    let commonClass = 'w-30 mx-20 bg-white my-20 p-5 rounded-2xl'
    return (
        <div className=''>
            <Header />
            <div className=' pt-10'>
                <div className='  w-5/6 m-auto header flex'>

                    <div className='text-left'>

                        <div className=''>
                            <div className='text-2xl'>
                                For Influencer...

                            </div>
                            <div className='text-5xl font-medium mt-10'>
                                <div className=''>Choose top-tier companies
                                </div>
                                <span>to work with
                                </span>

                            </div>

                        </div>

                        <div className=''>

                            <div className='text-3xl font-medium mt-10 max-w-3xl'>
                                <div className=''>Platform for influencers to join
                                </div>
                            </div>
                            <div className='text-2xl pt-8 max-w-4xl'>
                                More than 200+ brands world-wide cooperate with DRIM influencers. No matter how many followers you have - you can earn with us </div>
                            <div className='flex'>
                                <NavLink to='/InfluencerSignUp'>

                                    <div className='my-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200  rounded '>Get Started-it's free   </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='gif w-1/3 ml-auto'>
                        <img src={card} className='' />
                    </div>
                </div>
                <div className='w-5/6 m-auto text-left mb-10 bg-blue-600  rounded-xl'>
                    <div className='my-10 text-2xl text-white ml-20 pt-10'>
                        Adcosign for influencers
                    </div>
                    <div className='flex  justify-between'>

                        <div className={commonClass}><div className='text-blue-700 text-3xl'>25k+</div><div className=''>influencers on the platform</div></div>
                        <div className='w-30 mx-20 bg-white my-20 p-5 rounded-2xl'><div className='text-blue-700 text-3xl'>12M+</div><div className=''>Minimum number of followers to work with  </div></div>
                        <div className='w-30 mx-20 bg-white my-20 p-5 rounded-2xl'><div className='text-blue-700 text-3xl'>4</div><div className=''>Max earnings in a single month by a single influencer so far</div></div>
                        <div className='w-30 mx-20 bg-white my-20 p-5 rounded-2xl'><div className='text-blue-700 text-3xl'>120+</div><div className=''>Micro-influencers on the platform</div></div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfluencerIntro