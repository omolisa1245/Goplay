import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import DisplayAlbum from '../DisplayAlbum/DisplayAlbum'
import Trending from '../Trending/Trending'
import TopSongs from '../TopSongs/TopSongs'
import Footer from '../Footer/Footer'
import Display from '../Display/Display'
import Player from '../Player/Player'

const Home = ({albumId}) => {
  return (
    <div className='w-[61%] ml-0 md:ml-22 lg:ml-5 xl:ml-0 '>
         <Navbar/>
         <Player/>
         <Hero/>
        <DisplayAlbum id={albumId} />
        <Display/>

    </div>
  )
}

export default Home