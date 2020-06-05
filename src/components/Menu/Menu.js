import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styles';

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="/" tabIndex={tabIndex}>
        About us
      </a>
      <a href="/" tabIndex={tabIndex}>
        Pricing
        </a>
      <a href="/" tabIndex={tabIndex}>
        Contact
        </a>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
