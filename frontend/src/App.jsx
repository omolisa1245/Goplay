import React, { useContext } from 'react'
import Sidebar from './component/Sidebar/Sidebar'
import SidebarLeft from './component/SidebarLeft/SidebarLeft'
import Navbar from './component/Navbar/Navbar'
import DisplayRoute from './DisplayRoute/DisplayRoute'
import Footer from './component/Footer/Footer'
import { PlayContext } from './context/PlayContext'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import LoginForm from './component/LoginForm/LoginForm'
import Home from './component/Home/Home'
import Apply from './component/Apply'






const App = () => {

    const { audioRef, track, showLogin, setShowLogin } = useContext(PlayContext)


    return (
        <>

            <div className='flex w-screen '>

                {showLogin ? <LoginForm setShowLogin={setShowLogin} /> : <></>}

                <div className="flex w-[20%]">
                    <Sidebar />

                </div>
                <div className='flex'>
                  
                    <div className='flex flex-col w-[90%]'>
                        <Home />
                        <Footer />
                    </div>
                    <audio ref={audioRef} src={track.file} preload='auto'></audio>
                       <div className='flex w-[20%] '>
                        <SidebarLeft className='hidden md:block'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App