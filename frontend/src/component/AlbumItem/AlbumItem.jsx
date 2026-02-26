import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlayContext } from "../../context/PlayContext";

const AlbumItem = ({ name, desc, image, id }) => {
  const { playWithId } = useContext(PlayContext);
  const navigate = useNavigate();

  return (
    <div id="album" className="w-full">

      {/* IMAGE CARD */}
      <div
        onClick={() => playWithId(id)}
        className="
          w-full
          cursor-pointer
          rounded-xl
          overflow-hidden
          group
          relative
        "
      >
        <img
          onClick={() => navigate(`/song/${id}`)}
          src={image}
          alt={name}
          className="
            w-full
            h-[140px]
            sm:h-[160px]
            md:h-[180px]
            lg:h-[200px]
            object-cover
            rounded-xl
            transition
            duration-300
            group-hover:scale-105
          "
        />

        {/* OPTIONAL OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-black/0
            group-hover:bg-black/30
            transition
            duration-300
          "
        />
      </div>

      {/* TEXT */}
      <div className="flex items-center justify-between px-1 pt-2">

        <p
          className="
            text-xs
            sm:text-sm
            md:text-base
            lg:text-sm
            text-white
            font-medium
            truncate
          "
        >
          {name}
        </p>

      </div>
    </div>
  );
};

export default AlbumItem;