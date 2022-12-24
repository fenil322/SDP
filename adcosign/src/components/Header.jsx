import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo192.png'
const Header = () => {
    const langages=[
        'En1️⃣',
        'Brazil',
        'EnUS',
        'EnIN'
    ]
  return (

    <div className=' h-20 justify-center flex font-black '>
            <div className='header-new w-5/6 bg-white-50 flex'>
                <div className='logo' >
                    <NavLink to="/">
                    <img src={logo} className='h-20 pr-10'></img>
                    </NavLink>
                    
                </div>
                <nav className='menubar my-auto '>
                    <ul className='menu flex items-center text-lg '>
                        <li className='menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300 ' >

                            <NavLink to="/BrandIntro">For Brand</NavLink>
                        </li>
                        <li className='menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300' >
                            <NavLink to="/InfluencerIntro">For Influencers</NavLink>
                        </li>
                        <li className='menu-item py-3 px-4 hover:text-blue-500 ease-in duration-300' >
                            <NavLink to="">More</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className='login-buttons flex ml-auto my-auto'>
                    <select className='ml-5 py-3 -pr-1'>
                            {langages.map((option,index)=>{
                                return <option key={index}>{option}</option>
                            })}
                    </select>
                    
                    <div className='ml-5 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200  rounded '>Log in</div>
                    <div className='ml-5 bg-sky-400 px-7 py-3 hover:bg-sky-500 ease-in duration-200 rounded'>Sign Up</div>
                </div>
            </div>


    </div>
  )
}
                               

export default Header