import React, { useContext, useRef, useState } from 'react'
import { IoShuffleSharp, IoPlay, IoPlayForward } from "react-icons/io5";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { IoPauseSharp } from "react-icons/io5";
import { ImLoop } from "react-icons/im";
import { PlayContext } from "../../context/PlayContext";
import disc2 from "../../assets/disc2.jpg";






const Player = () => {

    const {
        seekBg,
        track,
        previous,
        next,
        seekSong,
        seekBar,
        playStatus,
        play,
        pause,
        time,
    } = useContext(PlayContext);

    const toggleLoop = () => {
        const newLoopState = !isLooping;
        setIsLooping(newLoopState);
        if (audioRef.current) {
            audioRef.current.loop = newLoopState;
        }
    };

    const audioRef = useRef(null);
    const [isLooping, setIsLooping] = useState(false);
    return (

        <div className="mt-16 w-[100%] block md:hidden h-[25vh] border border-white/40 rounded-xl">
            <div className="w-full h-full flex gap-24">

                {/* TOP DETAILS */}



                {/* PLAYER BOX */}
                <div className="flex w-full h-full flex-col items-center ">

                    <div
                        className="w-full h-full rounded-xl bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${disc2})`,
                            backgroundSize: "cover",   // 👈 makes image fit inside
                        }}
                    >

                        <div className='flex flex-col items-center -ml-7 my-7'>
                            {/* SOUND BARS */}
                            <div className="flex gap-1 h-[100px]">
                                {[1, 2, 3, 4, 5].map((bar) => (
                                    <span
                                        key={bar}
                                        className="w-[3rem] h-[3rem] bg-white/80 rounded animate-pulse"
                                    />
                                ))}
                            </div>

                            {/* CONTROLS */}
                            <div className="flex gap-8 ml-4 mb-2 text-[2rem] text-white">
                                <IoShuffleSharp />

                                <TbPlayerTrackPrevFilled
                                    onClick={previous}
                                    className="cursor-pointer"
                                />

                                {playStatus ? (
                                    <IoPauseSharp onClick={pause} className="cursor-pointer" />
                                ) : (
                                    <IoPlay onClick={play} className="cursor-pointer" />
                                )}

                                <IoPlayForward onClick={next} className="cursor-pointer" />

                                <ImLoop
                                    onClick={toggleLoop}
                                    className={`cursor-pointer ${isLooping ? "text-orange-400" : "text-gray-400"
                                        }`}
                                />
                            </div>
                        </div>

                        {/* SEEK BAR */}
                        <div className="flex items-center ml-18 gap-4 w-full">
                            <p className="text-white text-xl">
                                {time.currentTime.minute}:{time.currentTime.second}
                            </p>

                            <div
                                onClick={seekSong}
                                ref={seekBg}
                                className="w-[11rem] h-[3px] bg-white rounded-full cursor-pointer relative"
                            >
                                <hr
                                    ref={seekBar}
                                    className="absolute left-0 top-0 h-[3px] bg-orange-400 rounded-full border-none"
                                />
                            </div>

                            <p className="text-white text-xl">
                                {time.totalTime.minute}:{time.totalTime.second}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Player