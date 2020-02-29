import React from 'react';
import useMenu from '../useMenu';
import useTranslations from '../useTranslations';
import { Link } from 'gatsby'

const Navigation = ({ isActive, handleToggleMenu }) => {
  const menuItems = useMenu();
  const { button } = useTranslations();

  return (
      <>
          <div
              className={
                  isActive
                      ? 'active text-sm lg:flex-grow'
                      : 'text-sm lg:flex-grow'
              }
          >
              {menuItems.map(menu => (
                  <Link
                      to={menu.link}
                      aria-label={menu.name}
                      activeClassName="active"
                      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                      onClick={() => handleToggleMenu()}
                  >
                      {menu.name}
                  </Link>
              ))}
          </div>
      </>
  )
};

export default Navigation;
