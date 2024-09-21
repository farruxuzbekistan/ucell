import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-gray-600 lg:bg-gray-800/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-gray-800" : "bg-gray-800/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-8 py-4">
        {/* Logo */}
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        {/* Navigation Links */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-gray-800 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block text-xl font-medium text-white uppercase transition-colors hover:text-purple-400 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-4 lg:py-2 lg:text-sm ${
                  item.url === pathname ? "text-white" : "text-gray-400"
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Hamburger Menu Icon */}
          <HamburgerMenu />
        </nav>

        {/* New Account Link (Desktop) */}
        <a
          href="#signup"
          className="hidden lg:block text-gray-400 hover:text-white transition-colors mr-4"
        >
          New account
        </a>

        {/* Sign In Button (Desktop) */}
        <Button className="hidden lg:flex" href="#login">
          Kirish
        </Button>

        {/* Mobile Menu Toggle Button */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
