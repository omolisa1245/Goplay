import React, { useEffect, useRef } from 'react'
import './DisplayAlbum.css'
import {  songData } from '../../assets/data'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useLocation, useNavigate } from 'react-router-dom'
import AlbumItem from '../AlbumItem/AlbumItem';
import TopSongs from '../TopSongs/TopSongs';
import Trending from '../Trending/Trending';

const DisplayAlbum = ({ id }) => {

   const collect = songData.slice(18,22)
    const albumData = songData.slice(0,4)
    const foreign = songData.slice(5,9)
    const Recent = songData.slice(9,14)
     return (
        <div className='album-container'>
            <div className="album-holder">
                <div className="topic-cont">
                    <h2>Top Songs</h2>
                   
                </div>
                <div  className="album-details">
                    {
                        albumData.map((item, index) => (<AlbumItem key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))
                    }
                </div>
            </div>

            <div className="album-holder">
                <div className="topic-cont">
                    <h2>Naija Hit</h2>

                </div>
                <div className="album-details">
                    {
                        collect.map((item, index) => (<Trending key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))


                    }
                </div>
            </div>

            <div className="album-holder">
                <div className="topic-cont">
                    <h2>Foreign Hit</h2>
                  
                </div>
                <div className="album-details">
                    {
                        foreign.map((item, index) => (<TopSongs key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))
                    }
                </div>
            </div>

            <div className="album-holder">
                <div className="topic-cont">
                    <h2>Recently Added</h2>
                  
                </div>
                <div className="album-details">
                    {
                        Recent.map((item, index) => (<TopSongs key={index} name={item.name} desc={item.desc} image={item.image} id={item.id} />))
                    }
                </div>
            </div>
          


        </div>
    )
}

export default DisplayAlbum