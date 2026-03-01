import React, { useContext, useState } from 'react'
import icon1 from '../../assets/icon1.png'
import { IoSearchOutline } from "react-icons/io5"
import { useNavigate } from 'react-router-dom'
import { PlayContext } from '../../context/PlayContext'

const Navbar = () => {

    const navigate = useNavigate()
    const { setShowLogin } = useContext(PlayContext)

    return (
        <div className="
            fixed top-0
            lg:left-54
            xl:left-30
            md:left-38
            z-50
            w-full
            flex justify-center
        ">

            <div className="
                w-full
                max-w-[1100px]
                bg-[#112329]
                text-white
                h-16
                flex items-center

                xl:gap-40
                lg:gap-40
                gap-0
                px-4 md:px-8
                rounded-b-xl
                shadow-lg
            ">

                {/* Search */}
                <div className="relative ml-12 md:ml-0 w-[60%] lg:w-[60%] xl:w-[80%]">

                    <input
                        type="text"
                        placeholder="Search by artist, song or album"
                        className="
                            md:w-[80%]
                            w-[60%]
                            lg:w-[60%]
                            xl:w-[80%]
                            bg-gray-600/50
                            placeholder-gray-300
                            text-sm
                            md:text-base
                            rounded-full
                            py-2
                            pl-4
                            pr-10
                            outline-none
                            focus:ring-2
                            focus:ring-orange-400
                            
                        "
                    />

                    <IoSearchOutline className="
                        absolute
                        right-48
                        lg:right-63
                        md:right-28
                        top-1/2
                        -translate-y-1/2
                        text-lg
                        md:text-xl
                        text-white
                    " />

                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4 ml-4">

                    {
                        localStorage.getItem("token") ? (
                            <img
                                src={icon1}
                                alt="profile"
                                className="
                                    w-8 h-8
                                    md:w-9 md:h-9
                                    rounded-full
                                    bg-white
                                    p-1
                                    cursor-pointer
                                "
                            />
                        ) : (
                            <span
                                onClick={() => setShowLogin(true)}
                                className="
                                    text-sm
                                    md:text-base
                                    cursor-pointer
                                    hover:text-orange-400
                                    transition
                                    -ml-45
                                    hidden md:block
                                "
                            >
                                Login
                            </span>
                        )
                    }

                </div>

            </div>

        </div>
    )
}

export default Navbar