import React from 'react'
import './SongItem'

const SongItem = ({name, desc, image,id}) => {
  return (
    <div className='related-container'>
         <div onClick={()=>playWithId(id)} >

            <div onClick={()=>navigate(`/song/${id}`)}  className="related-content">
                <img className='image-relate' src={image} alt="" />
                <div className="desc">
                    <p>{name}</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default SongItem