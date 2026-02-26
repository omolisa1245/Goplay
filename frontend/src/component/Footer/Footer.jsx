import React from "react";
import logo from "../../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
        <div
            id="footer"
            className="w-full mx-auto px-4 -ml-5 md:ml-28 lg:ml-4 xl:ml-0 mt-16 text-white"
        >
            {/* TOP SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 justify-center gap-18 lg:justify-between">

                {/* ABOUT */}
                <div className="hidden md:flex  flex-col gap-4  sm:w-[45%] lg:w-[260px] text-center lg:text-left items-center lg:items-start">
                    <img src={logo} alt="logo" className="w-[140px]" />

                    <p className="text-xs lg:text-sm text-white/90 leading-relaxed">
                        Welcome to a music experience built to uplift your spirit and draw
                        you closer to God. This Gospel Music Player was created with a
                        mission: to make worship accessible, peaceful, and powerful wherever
                        you are.
                    </p>
                </div>

                {/* USERS */}
                <div className="hidden md:flex flex-col gap-4 w-full sm:w-[45%] lg:w-[200px] text-center  lg:text-center">
                    <h4 className="text-lg font-semibold">For Users</h4>
 
                    <div className="flex flex-col gap-3 text-white/90">
                        <p className="hover:text-blue-400 cursor-pointer">Download</p>
                        <p className="hover:text-blue-400 cursor-pointer">Help Center</p>
                        <p className="hover:text-blue-400 cursor-pointer">Go Premium</p>
                        <p className="hover:text-blue-400 cursor-pointer">WordPress</p>
                    </div>
                </div>

                {/* COMPANY */}
                <div className="hidden md:flex flex-col gap-4 w-full sm:w-[45%] lg:w-[200px] text-center lg:text-left">
                    <h4 className="text-lg font-semibold">Company</h4>

                    <div className="flex flex-col gap-3 text-white/90">
                        <p className="hover:text-blue-400 cursor-pointer">About</p>
                        <p className="hover:text-blue-400 cursor-pointer">Contact</p>
                        <p className="hover:text-blue-400 cursor-pointer">Advertising</p>
                        <p className="hover:text-blue-400 cursor-pointer">News</p>
                    </div>
                </div>
            </div>

            {/* BOTTOM CARD */}
            <div className="mt-10 w-[70%] lg:w-[85%] xl:w-[100%] bg-[rgb(1,34,43)] rounded-xl p-6 flex flex-col items-center gap-6 text-center">

                {/* COPYRIGHT */}
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
                    <p>© 2023 GoPlay All rights reserved.</p>
                    <span className="hidden sm:block w-[1px] h-6 bg-white/40"></span>
                    <p className="cursor-pointer hover:text-blue-400">Privacy Policy</p>
                    <span className="hidden sm:block w-[1px] h-6 bg-white/40"></span>
                    <p className="cursor-pointer hover:text-blue-400">EULA</p>
                    <span className="hidden sm:block w-[1px] h-6 bg-white/40"></span>
                    <p className="cursor-pointer hover:text-blue-400">Podcast T&C</p>
                    <span className="hidden sm:block w-[1px] h-6 bg-white/40"></span>
                    <p className="cursor-pointer hover:text-blue-400">Sitemap</p>
                </div>

                {/* SOCIAL */}
                <div className="flex gap-6 text-xl">
                    <FaLinkedin className="cursor-pointer hover:text-blue-400" />
                    <FaSquareInstagram className="cursor-pointer hover:text-pink-400" />
                    <RiWhatsappFill className="cursor-pointer hover:text-green-400" />
                    <BsTwitterX className="cursor-pointer hover:text-sky-400" />
                </div>
            </div>
        </div>
    );
};

export default Footer;