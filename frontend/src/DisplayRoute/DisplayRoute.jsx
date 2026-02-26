import React, { useRef,useEffect } from 'react'
import './DisplayRoute.css'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Home/Home'
import AlbumShow from '../component/AlbumShow/AlbumShow'
import { useLocation } from 'react-router-dom'
import { songData } from '../assets/data'
 
import Navbar from '../component/Navbar/Navbar'
import ScrollToTop from '../component/scrollToTop'

const DisplayRoute = () => {

      const displayRef = useRef()
        const location = useLocation()
        const isSong = location.pathname.includes('song')
        const songId = isSong? location.pathname.slice(-1) : "";
        const bgColor = songData[Number(songId)].bgColor
       
        
      
    
    
        useEffect(() => {
         if(isSong){
            displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`
         }
         else{
             displayRef.current.style.background = 'rgba(2, 16, 22, 1)'
         }
        })
        
    return (
        <div ref={displayRef} className='routes-holder'>
            <ScrollToTop/>
            <Routes>
            
                <Route path='/' element={<Home />} />
                <Route path='/song/:id' element={<AlbumShow/>} />
            </Routes>
        </div>
    )
}

export default DisplayRoute