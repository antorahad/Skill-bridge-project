import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-navColor p-3">
            <div className="max-w-7xl mx-auto">
                <div className="navbar flex justify-between items-center">
                    <div className="navbar-start flex items-center gap-5">
                        <Link>
                            <span className="flex items-center justify-center gap-3">
                                <img src={logo} className="bg-baseColor w-10 h-10 rounded-lg p-2" />
                            </span>
                        </Link>
                        <div className="hidden lg:flex">
                            <ul className="flex items-center justify-center text-[14px] font-[400]">
                                <li className="px-3">
                                    <Link>
                                        Home
                                    </Link>
                                </li>
                                <li className="px-3">
                                    <Link>
                                        Courses
                                    </Link>
                                </li>
                                <li className="px-3">
                                    <Link>
                                        About Us
                                    </Link>
                                </li>
                                <li className="px-3">
                                    <Link>
                                        Pricing
                                    </Link>
                                </li>
                                <li className="px-3">
                                    <Link>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <ul className="flex items-center justify-center">
                            <li className="px-3">
                                <Link>
                                    <button className="btn bg-baseColor hover:bg-baseColor focus:bg-baseColor border-none outline-none text-white text-[14px] font-[600] rounded-md">
                                        Login
                                    </button>
                                </Link>
                            </li>
                        </ul>
                        <div className="lg:hidden">
                            <button
                                className="text-primaryColor focus:outline-none ms-3"
                                onClick={toggleMobileMenu}
                            >
                                {isMobileMenuOpen ? <IoMdClose size={20} /> : <RiMenu3Line size={20} />}
                            </button>
                        </div>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="lg:hidden">
                        <ul className="flex flex-col items-center justify-center text-[14px] font-[400]">
                            <li className="py-3">
                                <Link>
                                    Home
                                </Link>
                            </li>
                            <li className="py-3">
                                <Link>
                                    Courses
                                </Link>
                            </li>
                            <li className="py-3">
                                <Link>
                                    About Us
                                </Link>
                            </li>
                            <li className="py-3">
                                <Link>
                                    Pricing
                                </Link>
                            </li>
                            <li className="py-3">
                                <Link>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
