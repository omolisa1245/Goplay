import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { GoHome, GoPerson } from "react-icons/go";
import { BiSolidCategory, BiSolidPlaylist } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { HiMenuAlt3 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { PlayContext } from "../../context/PlayContext";
import logo from "../../assets/logo.png";

const Sidebar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { selectedItems } = useContext(PlayContext);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <div className="lg:hidden fixed top-4 left-4 z-[1000]">
        <HiMenuAlt3
          className="text-white text-3xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[999] lg:hidden"
          onClick={closeMenu}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-0 left-0 h-screen z-[1000]
          bg-[rgb(17,35,41)] p-5 rounded-r-xl
          xl:w-[260px] lg:w-[190px] md:w-[130px] w-[80px] overflow-y-auto
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* LOGO */}
        <img
          src={logo}
          alt="logo"
          onClick={() => {
            navigate("/");
            closeMenu();
          }}
          className="w-[140px] mb-6 cursor-pointer"
        />

        <h5 className="text-[16px] text-[rgb(223,193,130)] py-6">
          Music
        </h5>

        {/* MENU */}
        <div className="mb-4">

          {/* HOME */}
          <div
            onClick={closeMenu}
            className="flex items-center gap-3 mb-2 px-3 py-2 rounded-full cursor-pointer hover:bg-white/15 transition"
          >
            <GoHome className="text-white text-[20px]" />
            <span className="text-white hidden lg:block text-sm">
              <Link to="Hero" smooth duration={500}>
                Home
              </Link>
            </span>
          </div>

          {/* CATEGORY */}
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 mb-2 px-3 py-2 rounded-full cursor-pointer hover:bg-white/15 transition"
          >
            <BiSolidCategory className="text-white text-[20px]" />
            <span className="text-white hidden lg:block text-sm">Categories</span>
          </div>

          {/* DROPDOWN */}
          {open && (
            <div className=" mb-3">
              <ul className="flex flex-col gap-2">

                <li
                  onClick={closeMenu}
                  className="text-sm px-4 py-2 rounded-full cursor-pointer hover:bg-white/20"
                >
                  <Link className="text-white" to="album" smooth duration={500}>
                    Top Songs
                  </Link>
                </li>

                <li
                  onClick={closeMenu}
                  className="text-sm px-4 py-2 rounded-full cursor-pointer hover:bg-white/20"
                >
                  <Link className="text-white" to="trending" smooth duration={500}>
                    Naija Hit
                  </Link>
                </li>

                <li
                  onClick={closeMenu}
                  className="text-sm px-4 py-2 rounded-full cursor-pointer hover:bg-white/20"
                >
                  <Link className="text-white" to="foreign" smooth duration={500}>
                    Foreign Hit
                  </Link>
                </li>

              </ul>
            </div>
          )}

          {/* ARTIST */}
          <div
            onClick={closeMenu}
            className="flex items-center gap-3 mb-2 px-3 py-2 rounded-full cursor-pointer hover:bg-white/15 transition"
          >
            <GoPerson className="text-white text-[20px]" />
            <span className="text-white hidden lg:block text-sm">
              <Link to="Artist" smooth duration={500}>
                Artists
              </Link>
            </span>
          </div>

          {/* PLAYLIST */}
          <div className="flex items-center gap-3 mb-2 px-3 py-2 rounded-full cursor-pointer hover:bg-white/15 transition">
            <BiSolidPlaylist className="text-white text-[20px]" />
            <span className="text-white hidden lg:block text-sm">Playlists</span>
          </div>

          {/* SELECTED */}
          <div className="mt-2">
            <ul className="flex flex-col gap-2">
              {selectedItems.map((item) => (
                <li key={item.id} className="text-sm px-4 py-2 rounded-full">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-white/30 my-4" />

        {/* BOTTOM */}
        <div className="hidden lg:block">
          <h5 className="text-[16px] text-[rgb(223,193,130)] py-4">
            Browse
          </h5>

          <div className="flex flex-col gap-3">

            <p
              onClick={closeMenu}
              className="border border-white rounded-full w-[140px] h-[38px] flex items-center justify-center text-white text-sm cursor-pointer hover:border-[rgb(231,213,155)] transition"
            >
              <Link to="footer" smooth duration={500}>
                About Us
              </Link>
            </p>

            <p
              onClick={closeMenu}
              className="border border-white rounded-full w-[140px] h-[38px] flex items-center justify-center text-white text-sm cursor-pointer hover:border-[rgb(231,213,155)] transition"
            >
              <Link to="footer" smooth duration={500}>
                Contact
              </Link>
            </p>

          </div>
        </div>

        {/* LOGOUT */}
        <div className="flex items-center gap-4 mt-8 pl-4 cursor-pointer">
          <LuLogOut className="text-white  text-[20px]" />
          <p
            className="text-white text-sm hidden lg:block"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Log Out
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;