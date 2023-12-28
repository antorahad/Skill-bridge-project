import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <div className="bg-navColor p-3">
            <div className="max-w-7xl mx-auto">
                <div className="navbar">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;