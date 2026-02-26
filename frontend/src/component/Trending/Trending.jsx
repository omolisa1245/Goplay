import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PlayContext } from '../../context/PlayContext';


const Trending = ({name, desc, image,id}) => {
    const {playWithId} = useContext(PlayContext)
     const navigate =useNavigate();
    return (
        <div onClick={()=>playWithId(id)} id='trending'>
            <div onClick={()=>navigate(`/song/${id}`)}  className="album-content">
                <img src={image} alt="" />
                <div className="desc">
                    <p>{name}</p>
                </div>
            </div>

        </div>
    )
}

export default Trending