import React, { useState } from "react";
import { HiMenuAlt1 } from 'react-icons/hi';
import { FaUserCircle ,FaHome} from 'react-icons/fa';
import { CgImport} from 'react-icons/cg';
import { MdPendingActions} from 'react-icons/md';
import { BiLogOut,BiHistory } from 'react-icons/bi';
import { FaHandshake } from 'react-icons/fa';
// import { BsFilePost } from 'react-icons/bs';
// import { BsInfoCircle } from 'react-icons/bs';
// import { IoIosRocket } from 'react-icons/io';
// import { GiWorld } from 'react-icons/gi';
// import { GiWallet } from 'react-icons/gi';
// import { RiArticleLine } from 'react-icons/ri';
// import { BsQuestionCircleFill } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const navigate=useNavigate();
    const menus = [{ name: "Profile", link: "/BrandProfile", icon: FaUserCircle },
    { name: "Home", link: "/BrandHome", icon: FaHome },
    { name: "Pending Request", link: "/BrandPendingRequest", icon: MdPendingActions },
    { name: "Arrival Request", link: "/BrandArrivalRequest", icon: CgImport },
    { name: "Agreement", link: "/BrandConsignments", icon: FaHandshake },
    { name: "History", link: "/BrandHistory", icon: BiHistory },
    // { name: "Terms & Conditions", link: "/", icon: BsQuestionCircleFill },
    // { name: "About", link: "/", icon: BsInfoCircle },
    { name: "LogOut", link: "/", icon: BiLogOut },
    ];

    const logout = async () => {
        try {
    
          const res = await axios.get('/logout')
          console.log(res.data);
          if (res.data.success == true) {
            navigate('/');
          }
        } catch (err) {
          console.log(err);
    
        }
    
      }
    const [open, setOpen] = useState(true);

    return (
        <>
            <div className="flex fixed w-screen h-14">
                {/* <div className="py-3 bg-[#b7b8bb8f] w-14 justify-center rounded-xl hidden max-md:block text-gray-100 hover:text-blue-500"> */}
                <div className="py-3 bg-[#878990d2] w-14 justify-center rounded-xl hidden max-md:block text-gray-100 hover:text-blue-500">
                    <HiMenuAlt1
                        size={26}
                        className="cursor-pointer mx-auto"
                        onClick={() => setOpen(!open)}
                    />
                </div>
            </div>
            <section className={`max-md:mt-16 max-md:fixed flex gap-6 fixed`}>
                <div
                    className={`bg-[#878990d2] justify-center max-md:block h-screen w-14 max-md:${open && "hidden"} duration-500 rounded-xl text-gray-100 px-4`}
                >
                    <div className="mt-4 flex flex-col gap-4 relative">
                        {menus?.map((menu, i) => (
                            <Link
                                to={menu?.link}
                                key={i}
                                className={`${
                                    menu?.margin && "mt-5"
                                  } group flex items-center text-sm gap-3.5 font-medium p-0 my-2 rounded-md hover:text-blue-500`}
                            >
                                <div onClick={`${menu.name=='LogOut'?{logout}:{}}`}>{React.createElement(menu?.icon, { size: "25" })}</div>
                                <h2
                                    style={{
                                        transitionDelay: `${i + 3}00ms`,
                                    }}
                                    className={`whitespace-pre duration-500 `}
                                >
                                </h2>
                                <h2
                                    className={`absolute left-48 bg-white font-semibold whitespace-pre text-blue-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                                >
                                    {menu?.name}
                                </h2>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;