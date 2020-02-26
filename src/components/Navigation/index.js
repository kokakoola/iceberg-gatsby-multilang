import React from 'react';
import useMenu from '../useMenu';
import useTranslations from '../useTranslations';

import * as S from './styled';

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
                  <a
                      href={menu.link}
                      aria-label={menu.name}
                      activeClassName="active"
                      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                      onClick={() => handleToggleMenu()}
                  >
                      {menu.name}
                  </a>
              ))}

              <S.NavigationButton to="" aria-label="Login">
                  {button}
              </S.NavigationButton>
          </div>
      </>
  )
};

export default Navigation;
