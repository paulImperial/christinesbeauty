import React from 'react';
import { array, bool, func } from 'prop-types';
import Link from 'next/link';
import { StyledMenu, StyledMenuLink } from './Menu.styled';

const Menu = ({ open, navItems, onLinkClick }) => {
  return (
    <StyledMenu open={open}>
      <nav>
        {navItems.map(({ title, link }) => (
          <StyledMenuLink key={title}>
            <Link href={link} passHref legacyBehavior>
              <a onClick={() => onLinkClick && onLinkClick()}>
                {title}
              </a>
            </Link>
          </StyledMenuLink>
        ))}
      </nav>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
  navItems: array.isRequired,
  onLinkClick: func,
};

Menu.defaultProps = {
  onLinkClick: null,
};

export default Menu;
