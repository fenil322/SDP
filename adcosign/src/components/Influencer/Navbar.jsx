import React, { useState } from "react";
import { HiMenuAlt1 } from 'react-icons/hi';
import { FaUserCircle ,FaHome} from 'react-icons/fa';
import { CgImport} from 'react-icons/cg';
import { MdPendingActions} from 'react-icons/md';
import { BiLogOut,BiHistory } from 'react-icons/bi';
import { FaHandshake } from 'react-icons/fa';
import { BsFilePost } from 'react-icons/bs';
import { BsInfoCircle } from 'react-icons/bs';
import { GiWorld } from 'react-icons/gi';
import { GiWallet } from 'react-icons/gi';
import { RiArticleLine } from 'react-icons/ri';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menus = [{ name: "Profile", link: "/InfluencerProfile", icon: FaUserCircle },
    { name: "Home", link: "/InfluencerHome", icon: FaHome },
    { name: "Pending Request", link: "/InfluencerPendingRequest", icon: MdPendingActions },
    { name: "Arrival Request", link: "/InfluencerArrivalRequest", icon: CgImport },
    { name: "Agreement", link: "/InfluencerConsignments", icon: FaHandshake },
    // { name: "Subscription", link: "/", icon: GiWallet },
    // { name: "Terms & Conditions", link: "/", icon: BsQuestionCircleFill },
    // { name: "About", link: "/", icon: BsInfoCircle },
    { name: "LogOut", link: "/", icon: BiLogOut },
    ];

    const [open, setOpen] = useState(true);

    return (
        <>
            <div className="flex fixed w-screen h-14">
                <div className="py-3 bg-[#b7b8bb8f] w-14 justify-center rounded-xl hidden max-md:block text-gray-100 hover:text-blue-500">
                    <HiMenuAlt1
                        size={26}
                        className="cursor-pointer mx-auto"
                        onClick={() => setOpen(!open)}
                    />
                </div>
            </div>
            <section className={`max-md:mt-16 max-md:fixed flex gap-6 fixed`}>
                <div
                    className={`bg-[#b7b8bb8f] justify-center max-md:block h-screen w-14 max-md:${open && "hidden"} duration-500 rounded-xl text-gray-100 px-4`}
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
                                <div>{React.createElement(menu?.icon, { size: "25" })}</div>
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