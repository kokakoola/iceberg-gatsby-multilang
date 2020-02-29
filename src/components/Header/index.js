import React, { useState } from 'react';
import useTranslations from '../useTranslations';
import Navigation from '../Navigation';
import Languages from '../Languages';
import ButtonMenu from '../ButtonMenu';
import Logo from '../Logo';

const Header = () => {
  const { home } = useTranslations();
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }

  return (
      <nav className="flex items-center justify-between flex-wrap bg-white-500 p-6">
          <a
              className="flex items-center flex-shrink-0 mr-6"
              href="/"
              title={home}
              aria-label={home}
          >
              <Logo />
          </a>
          <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                  <svg
                      className="fill-current h-3 w-3"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <title>Menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
              </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div>
                  <a
                      href="#"
                      className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
                  >
                      Download
                  </a>
              </div>
          </div>
                  <Languages />


              <ButtonMenu
                  handleClick={handleToggleMenu}
                  isActive={toggleMenu}
              />
                  <Navigation
                      isActive={toggleMenu}
                      handleToggleMenu={handleToggleMenu}
                  />
              <a href="#" to="/" title={home} aria-label={home}>
                  <Logo />
              </a>

      </nav>
  )
};

export default Header;
