import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx"
import { MdOutlineEmail, MdLockOutline } from "react-icons/md"
import { IoPersonOutline } from "react-icons/io5"
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ setShowLogin }) => {

    const navigate = useNavigate()

    const [currState, setCurrState] = useState('signup')
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setData(prev => ({ ...prev, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault()

      
    }

    return (
        <div className="
            fixed inset-0 z-[1000]
            bg-[#021016]
            flex items-center justify-center
            p-4
        ">

            <form
                onSubmit={onLogin}
                className="
                    w-full max-w-md
                    bg-white/95
                    rounded-xl
                    shadow-xl
                    p-6
                    flex flex-col gap-4
                "
            >

                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold capitalize">
                        {currState}
                    </h2>

                    <RxCross2
                        onClick={() => setShowLogin(false)}
                        className="text-xl cursor-pointer"
                    />
                </div>

                {/* Name */}
                {currState !== "Login" && (
                    <div className="flex items-center gap-3 bg-gray-200/70 rounded-md px-3 py-2">
                        <IoPersonOutline className="text-lg text-gray-600" />
                        <input
                            name="name"
                            value={data.name}
                            onChange={onChangeHandler}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full bg-transparent outline-none text-sm"
                        />
                    </div>
                )}

                {/* Email */}
                <div className="flex items-center gap-3 bg-gray-200/70 rounded-md px-3 py-2">
                    <MdOutlineEmail className="text-lg text-gray-600" />
                    <input
                        name="email"
                        value={data.email}
                        onChange={onChangeHandler}
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-transparent outline-none text-sm"
                    />
                </div>

                {/* Password */}
                <div className="flex items-center gap-3 bg-gray-200/70 rounded-md px-3 py-2">
                    <MdLockOutline className="text-lg text-gray-600" />
                    <input
                        name="password"
                        value={data.password}
                        onChange={onChangeHandler}
                        type="password"
                        placeholder="Enter your password"
                        className="w-full bg-transparent outline-none text-sm"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="
                        w-full h-11
                        bg-[#01171d]
                        text-white
                        rounded-md
                        font-semibold
                        hover:bg-[#02222c]
                        transition
                    "
                >
                    Submit
                </button>

                {/* Forgot */}
                <p className="text-sm text-gray-700 cursor-pointer">
                    Forgot Password?
                </p>

                {/* Terms */}
                <div className="flex items-start gap-2 text-xs">
                    <input type="checkbox" className="mt-1" />
                    <span>
                        By clicking this checkbox you agree to the terms and
                        conditions of our company.
                    </span>
                </div>

                {/* Toggle */}
                <div className="text-sm flex flex-wrap gap-1">

                    {currState === "Login" ? (
                        <>
                            <span>Create a new account?</span>
                            <p
                                onClick={() => setCurrState("signup")}
                                className="text-blue-600 font-medium cursor-pointer"
                            >
                                Click here
                            </p>
                        </>
                    ) : (
                        <>
                            <span>Already have an account?</span>
                            <p
                                onClick={() => setCurrState("Login")}
                                className="text-blue-600 font-medium cursor-pointer"
                            >
                                Login here
                            </p>
                        </>
                    )}

                </div>

            </form>
        </div>
    )
}

export default LoginForm