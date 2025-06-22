import React, { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import useDarkMode from "../../useDarkMode";

const NavBar = (props) => {
    const { isMobile } = props;
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    return (
        <nav className="flex items-center">
            <div className="flex items-center">
                <div className="text-20 font-bold mr-2">Serendale</div>

                {isDarkMode ? (
                    <FaSun
                        size={"24px"}
                        color="#D94FD5"
                        className="cursor-pointer"
                        onClick={() => toggleDarkMode(!isDarkMode)}
                    />
                ) : (
                    <FaMoon
                        size={"24px"}
                        color="#D94FD5"
                        className="cursor-pointer"
                        onClick={() => toggleDarkMode(!isDarkMode)}
                    />
                )}
            </div>
            <ul className="md:flex md:gap-10 ml-auto text-16 font-semibold">
                {openMenu && isMobile ? (
                    <MdClose
                        size={"24px"}
                        className="cursor-pointer"
                        onClick={handleMenu}
                    />
                ) : !openMenu && isMobile ? (
                    <FiMenu
                        size={"24px"}
                        className="cursor-pointer"
                        onClick={handleMenu}
                    />
                ) : (
                    <>
                        <li className="btn-hover">Features</li>
                        <li className="btn-hover">Menu</li>
                        <li className="btn-hover">Our Story</li>
                        <li className="btn-hover md:ml-28">Contract</li>
                    </>
                )}

                {openMenu && isMobile && (
                    <div className="absolute right-8 bg-white p-8 text-center text-13 text-black z-10">
                        <li className="">Features</li>
                        <li className="">Menu</li>
                        <li className="">Our Story</li>
                        <li className="">Contract</li>
                    </div>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
