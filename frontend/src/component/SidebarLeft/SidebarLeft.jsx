import React, { useContext, useRef, useState } from "react";
import { IoShuffleSharp, IoPlay, IoPlayForward } from "react-icons/io5";
import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { IoPauseSharp } from "react-icons/io5";
import { ImLoop } from "react-icons/im";
import disc from "../../assets/disc2.jpg";
import { PlayContext } from "../../context/PlayContext";






const SidebarLeft = () => {

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
  const audioRef = useRef(null);
  const [isLooping, setIsLooping] = useState(false);
  const [loopMode, setLoopMode] = useState(0);

  

  const toggleLoop = () => {
    setLoopMode((prev) => (prev + 1) % 3);
};






  return (
    <div className="w-[20%]  text-white mt-20 -ml-6">

      <div className="hidden md:block fixed right-[10px] w-[18%] h-auto border border-white/40 rounded-xl">
        <div className="w-full flex flex-col gap-4">

          {/* TOP DETAILS */}
          <div className="flex flex-col items-center text-center gap-4 px-6 py-4">
            <img
              className="w-[12vw] h-[12vw] object-cover rounded-lg"
              src={track.image}
              alt=""
            />

            <div>
              <h4 className="text-white text-[1.2vw] mb-1">{track.name}</h4>
              <p className="text-white/70 text-[0.8vw]">{track.title}</p>
            </div>
          </div>

          <hr className="w-[80%] h-[1px] bg-white/50 mx-auto border-none" />

          {/* PLAYER BOX */}
          <div className="flex flex-col items-center border border-white/40 rounded-xl w-full h-[16vw]">

            <div
              className="w-full h-full rounded-xl bg-cover bg-center pt-[14%] lg:pt-[26%] pl-8 lg:pl-4"
              style={{ backgroundImage: `url(${disc})` }}
            >

              {/* SOUND BARS */}
              <div className="flex justify-center -ml-8 items-center gap-1 h-[100px]">
                {[1, 2, 3, 4, 5].map((bar) => (
                  <span
                    key={bar}
                    className="w-[1.5vw] h-[3vw] bg-white/80 rounded animate-pulse"
                  />
                ))}
              </div>

              <div className="-mt-8 xl:mt-0 -ml-4 xl:ml-0 px-2 xl:px-0">
                {/* CONTROLS */}
                <div className="flex gap-8 mb-2 text-white">
                  <IoShuffleSharp className="text-xl hidden lg:block" />

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

                  <div className="relative">
                    <ImLoop
                      onClick={toggleLoop}
                      className={`cursor-pointer ${loopMode ? "text-orange-400" : "text-gray-400"
                        }`}
                    />
                    {loopMode === 2 && (
                      <span className="absolute -top-2 -right-2 text-[10px] text-white">
                        1
                      </span>
                    )}
                  </div>
                </div>

                {/* SEEK BAR */}
                <div className="flex items-center gap-4 w-full">
                  <p className="text-white text-xs">
                    {time.currentTime.minute}:{time.currentTime.second}
                  </p>

                  <div
                    onClick={seekSong}
                    ref={seekBg}
                    className="w-[11vw] h-[3px] bg-white rounded-full cursor-pointer relative"
                  >
                    <hr
                      ref={seekBar}
                      className="absolute left-0 top-0 h-[3px] bg-orange-400 rounded-full border-none"
                    />
                  </div>

                  <p className="text-white text-xs">
                    {time.totalTime.minute}:{time.totalTime.second}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SidebarLeft;