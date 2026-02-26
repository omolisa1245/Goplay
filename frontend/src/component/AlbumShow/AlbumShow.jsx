import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { songData } from '../../assets/data'
import { HiDotsHorizontal } from "react-icons/hi"
import { IoPlay, IoPauseSharp } from "react-icons/io5"
import { MdOutlineAddBox } from "react-icons/md"
import { PlayContext } from '../../context/PlayContext'
import wave from '../../assets/wave.png'

const AlbumShow = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const albumsData = songData[id]
    const related = songData.slice(8, 14)

    const {
        count,
        handleSelectItem,
        play,
        pause,
        playStatus,
        time
    } = useContext(PlayContext)

    return (
        <div className="w-[95%] mx-auto mt-20 px-4 text-white">

            {/* Top Section */}
            <div className="flex flex-wrap items-center gap-8">

                <img
                    src={albumsData.image}
                    alt=""
                    className="w-[140px] sm:w-[200px] lg:w-[240px] h-[140px] sm:h-[200px] lg:h-[240px] object-cover rounded-lg"
                />

                <div className="flex-1 min-w-[250px]">

                    <p className="text-sm opacity-70">Playlist</p>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-1">
                        {albumsData.name}
                    </h2>

                    <h4 className="opacity-80">{albumsData.title}</h4>

                    <span className="text-sm opacity-70">
                        {albumsData.desc}
                    </span>

                    <p className="mt-2 text-sm opacity-60">
                        <b>Go-Play</b> • 1,323,224 likes • <b>50 songs</b> • about 2hrs 30min
                    </p>

                    {/* Icons */}
                    <div className="flex flex-wrap gap-6 mt-4">

                        <div className="flex flex-col items-center cursor-pointer">
                            <span className="material-symbols-outlined text-xl">
                                favorite
                            </span>

                            <div className="flex items-center gap-2">
                                <h5 className="text-sm">Like</h5>
                                <p className="bg-gray-600 px-2 rounded text-xs">
                                    {count}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer">
                            <MdOutlineAddBox
                                onClick={() => handleSelectItem(albumsData.name)}
                                className="text-2xl"
                            />
                            <p className="text-sm">Repeat</p>
                        </div>

                        <div className="flex flex-col items-center cursor-pointer">
                            <HiDotsHorizontal className="text-2xl" />
                            <p className="text-sm">More</p>
                        </div>

                    </div>

                </div>
            </div>


            {/* Player */}
            <div className="flex flex-wrap items-center gap-6 mt-10">

                {playStatus
                    ? <IoPauseSharp
                        onClick={pause}
                        className="text-4xl bg-white text-black rounded-full p-1 cursor-pointer"
                    />
                    : <IoPlay
                        onClick={play}
                        className="text-4xl bg-white text-black rounded-full p-1 cursor-pointer"
                    />
                }

                <div className="flex items-center gap-4 flex-wrap">

                    <p className="text-sm opacity-60">
                        {time.currentTime.minute}:{time.currentTime.second}
                    </p>

                    <img
                        src={wave}
                        alt=""
                        className="w-[120px] sm:w-[200px] lg:w-[300px]"
                    />

                    <p className="text-sm opacity-60">
                        {time.totalTime.minute}:{time.totalTime.second}
                    </p>

                </div>

            </div>

            <hr className="my-8 border-gray-600" />


            {/* Related Songs */}
            <div>

                <h2 className="text-xl mb-4 font-semibold">
                    Related Songs
                </h2>

                <div className="flex gap-4 overflow-x-auto pb-3">

                    {related.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(`/song/${item.id}`)}
                            className="min-w-[120px] cursor-pointer"
                        >

                            <img
                                src={item.image}
                                alt=""
                                className="w-[120px] h-[120px] object-cover rounded-lg"
                            />

                            <p className="text-sm mt-1">
                                {item.name}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default AlbumShow