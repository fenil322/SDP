import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo192.png'
const Header = () => {
    const langages = [
        'En1️⃣',
        'Brazil',
        'EnUS',
        'EnIN'
    ]
    let menuitemCommoncss = "rounded-sm px-3 py-1 hover:bg-gray-100 hover:text-blue-500 cursor-pointer"
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
                        <li className='menu-item py-3 px-4  ease-in duration-300' >

                            {/* more items */}
                            <div>
                                <div class="group inline-block">
                                    <button
                                        class="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                                    >
                                        <span class="pr-1 font-semibold flex-1 hover:text-blue-500 cursor-pointer">More</span>
                                        <span>
                                            <svg
                                                class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                />
                                            </svg>
                                        </span>
                                    </button>
                                    <ul
                                        class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
                                    >
                                        <NavLink to='/ManagerSignUp'>

                                            <li class={menuitemCommoncss}>Work as manager</li>
                                        </NavLink>
                                        <li class={menuitemCommoncss}>Contact</li>
                                        <li class={menuitemCommoncss}>About Us</li>
                                    </ul>
                                </div>
                            </div>

                        </li>
                    </ul>
                </nav>
                <div className='login-buttons flex ml-auto my-auto'>
                    <select className='ml-5 py-3 -pr-1 cursor-pointer'>
                        {langages.map((option, index) => {
                            return <option key={index}>{option}</option>
                        })}
                    </select>

                    <div>
                        <div class="group inline-block">
                            <NavLink to='/InfluencerLogin'>


                                <button
                                    class="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                                >
                                    <span class="pr-1 font-semibold flex-1 cursor-pointer">
                                        <div className='ml-5 my-1 bg-gray-300 px-7 py-3 hover:bg-gray-400 ease-in duration-200  rounded cursor-pointer'>Log in</div>
                                    </span>

                                </button>
                            </NavLink>

                        </div>
                    </div>
                    <div>
                        <div class="group inline-block">
                            <NavLink to='/InfluencerSignUp'>


                                <button
                                    class="outline-none focus:outline-none  px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                                >
                                    <span class="pr-1 font-semibold flex-1 cursor-pointer">
                                        <div className='ml-1 my-1 bg-sky-400 px-7 py-3 hover:bg-sky-500 ease-in duration-200 rounded cursor-pointer'>Sign Up</div>
                                    </span>

                                </button>
                            </NavLink>



                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}


export default Header