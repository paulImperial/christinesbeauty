import React from 'react';
import { array, bool, func } from 'prop-types';
import Link from 'next/link';
import { StyledMenu, StyledMenuLink, BookNowButton } from './Menu.styled';

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
      <BookNowButton 
        href="https://widget.treatwell.co.uk/place/396704/menu/" 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={() => onLinkClick && onLinkClick()}
      >
        Book Now
      </BookNowButton>
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
