import logo from '../assets/logo.svg'
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa6";

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-white">
            <footer className="flex flex-wrap flex-col lg:flex-row items-start justify-between gap-10 p-10 max-w-7xl mx-auto">
                <aside className='flex flex-col items-start'>
                    <img src={logo} className="w-10 h-10 bg-baseColor p-2 rounded-lg" />
                    <div className='mt-3 flex flex-col gap-5'>
                        <span className='flex items-center gap-3 text-[16px] font-[400]'>
                            <MdEmail />
                            <a href="">hello@skillbridge.com</a>
                        </span>
                        <span className='flex items-center gap-3 text-[16px] font-[400]'>
                            <FaPhone />
                            <a href="">+91 91813 23 2309</a>
                        </span>
                        <span className='flex items-center gap-3 text-[16px] font-[400]'>
                            <FaLocationDot />
                            <a href="">123 Innovation Avenue
                                Tech City</a>
                        </span>
                    </div>
                </aside>
                <nav>
                    <header className="mb-3 text-primaryColor text-[18px] font-[600]">Home</header>
                    <div className='flex flex-col gap-5 text-[16px] font-[400]'>
                        <a className="link link-hover">Benefits</a>
                        <a className="link link-hover">Our Courses</a>
                        <a className="link link-hover">Our Testimonials</a>
                        <a className="link link-hover">Our FAQ</a>
                    </div>
                </nav>
                <nav>
                    <header className="mb-3 text-primaryColor text-[18px] font-[600]">About us</header>
                    <div className='flex flex-col gap-5 text-[16px] font-[400]'>
                        <a className="link link-hover">Company</a>
                        <a className="link link-hover">Achievements</a>
                        <a className="link link-hover">Our Goals</a>
                    </div>
                </nav>
                <nav>
                    <header className="mb-3 text-primaryColor text-[18px] font-[600]">Social Profiles</header>
                    <div className='flex gap-7'>
                        <Link>
                            <span className='hover:text-baseColor'>
                                <FaFacebook size={20} />
                            </span>
                        </Link>
                        <Link>
                            <span className='hover:text-baseColor'>
                                <FaTwitter size={20} />
                            </span>
                        </Link>
                        <Link>
                            <span className='hover:text-baseColor'>
                                <FaLinkedin size={20} />
                            </span>
                        </Link>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;