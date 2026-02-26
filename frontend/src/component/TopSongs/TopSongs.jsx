import React, { useContext, useRef } from 'react'
import { songData } from '../../assets/data'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { PlayContext } from '../../context/PlayContext';

const TopSongs = ({name, desc, image,id}) => {
    
    const navigate = useNavigate();
    const team_image = useRef();
    const {playWithId} = useContext(PlayContext)
    let tx = 0;

    const slideForward = () => {
        if (tx > -222) {
            tx -= 5;
        }
        team_image.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 5;
        }
        team_image.current.style.transform = `translateX(${tx}%)`
    }
    return (
        <div onClick={()=>playWithId(id)} id='foreign'>

            <div onClick={()=>navigate(`/song/${id}`)}  className="album-content">
                <img src={image} alt="" />
                <div className="desc">
                    <p>{name}</p>
                </div>
            </div>

        </div>
    )
}

export default TopSongs