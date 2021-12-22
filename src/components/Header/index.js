import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

const HeaderStyle = styled.div`
  margin: 0;
  padding-top: 10px;
  padding-left: 10px;
  background: ${(props) => props.theme.colours.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 1px 23px 3px rgba(0, 0, 0, 0.1);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
`;

const Logo = styled.img`
  width: 130px;
  @media (max-width: 440px) {
    width: 75px;
  }
`;

const TelephoneNumber = styled.div`
  font-size: 1.5rem;
`;

const Header = ({ children }) => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <Link href="/" passHref>
          <Logo src="/images/darklogo.jpg" alt="logo" />
        </Link>
        {children}
      </HeaderContainer>
    </HeaderStyle>
  );
};

export default Header;
