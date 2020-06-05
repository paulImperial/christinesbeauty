import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledLinkContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
`;

const StyledLink = styled.li`
  transition: border-bottom 0.5s;

  padding-bottom: 5px;
  margin: 0 10px;

  border-bottom: 3px solid #fff;

  &:hover {
    border-bottom: 3px solid ${(props) => props.theme.colours.pink};
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colours.baseBlack};
  font-size: 1.25rem;
`;

const Navigation = ({ navItems }) => {
  return (
    <StyledLinkContainer>
      {navItems.map(({ title, link, logo = '' }) => {
        return (
          <StyledLink>
            <StyledAnchor href={link}>{title}</StyledAnchor>
          </StyledLink>
        );
      })}
    </StyledLinkContainer>
  );
};

export default Navigation;
