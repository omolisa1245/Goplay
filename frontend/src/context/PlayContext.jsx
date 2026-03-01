import { createContext, useRef, useState, useEffect, useCallback } from "react";
import { songData } from "../assets/data";





export const PlayContext = createContext()

const PlayContextProvider = (props) => {

    const audioRef = useRef()
    const seekBg = useRef()
    const seekBar = useRef()
    const [track, setTrack] = useState(songData[0])
    const [playStatus, setPlayStatus] = useState(false)
    const [selectedItems, setSelectedItems] = useState([]);
    const [count, setCount] = useState(0);
    const [showLogin, setShowLogin] = useState(false)
    const [token, setToken] = useState('')
    const [userData, setUserData] = useState('')
    const [loopMode, setLoopMode] = useState(0);



    const handleSelectItem = (itemName) => {
        const itemToAdd = songData.find(item => item.name === itemName);
        if (itemToAdd && !selectedItems.some(item => item.id === itemToAdd.id)) {
            setSelectedItems([...selectedItems, itemToAdd]);
        }
    };

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const [time, setTime] = useState({
        currentTime: {
            second: 0,
            minute: 0
        },
        totalTime: {
            second: 0,
            minute: 0
        }
    })

    useEffect(() => {

        if (!audioRef.current) return;

        const updateTime = () => {
            seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
            const current = audioRef.current.currentTime || 0;
            const duration = audioRef.current.duration || 0;

            setTime({
                currentTime: {
                    minute: Math.floor(current / 60),
                    second: Math.floor(current % 60)
                },
                totalTime: {
                    minute: Math.floor(duration / 60),
                    second: Math.floor(duration % 60)
                }
            });
        };

        audioRef.current.addEventListener("timeupdate", updateTime);

        return () => {
            audioRef.current?.removeEventListener("timeupdate", updateTime);
        };
    }, []);


    const play = () => {
        audioRef.current.play();
        setPlayStatus(true);
    }

    const pause = () => {
        audioRef.current.pause();
        setPlayStatus(false);
    }

    const playWithId = async (id) => {
        await setTrack(songData[id])
        await audioRef.current.play()
        setPlayStatus(true)
    }

    const previous = async () => {
        if (track.id > 0) {
            await setTrack(songData[track.id - 1])
            await audioRef.current.play();
            setPlayStatus(true)
        }
    }
    const next = async () => {
        if (track.id < songData.length - 1) {
            await setTrack(songData[track.id + 1]);
        } else {
            // if last song
            if (loopMode === 1) {
                await setTrack(songData[0]); // restart playlist
            } else {
                return;
            }
        }

        audioRef.current.currentTime = 0;
        await audioRef.current.play();
        setPlayStatus(true);
    };

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration)
    }




    const getUserData = async (userId) => {



        useEffect(() => {
            const audio = audioRef.current;
            if (!audio) return;

            const handleEnded = () => {

                // 🔁 LOOP ONE SONG
                if (loopMode === 2) {
                    audio.currentTime = 0;
                    audio.play();
                    return;
                }

                // 🔁 LOOP PLAYLIST OR NORMAL NEXT
                next();
            };

            audio.addEventListener("ended", handleEnded);

            return () => {
                audio.removeEventListener("ended", handleEnded);
            };

        }, [loopMode, track]);

         
    };

    useEffect(() => {
        getUserData();
    }, [token]);





    useEffect(() => {
        if (!token && localStorage.getItem("token")) {
            setToken(localStorage.getItem("token"));


        }
    }, [])







    const contextValue = {
        audioRef,
        seekBar,
        seekBg,
        time, setTime,
        playStatus, setPlayStatus,
        track, setTrack,
        play,
        pause,
        playWithId,
        previous, next,
        seekSong,
        handleSelectItem,
        selectedItems,
        incrementCount, count,
        showLogin, setShowLogin,
        token, setToken

    }

    return (
        <PlayContext.Provider value={contextValue}>
            {props.children}
        </PlayContext.Provider>
    )

}

export default PlayContextProvider