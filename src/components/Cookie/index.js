import React, { useState } from 'react';
import styled from 'styled-components';
import Cookies from 'js-cookie';
import Button from '../../components/Generic/Button';

const CookieContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 30px;
  background-color: ${(props) => props.theme.colours.shadeGrey};
  border-top: 1px solid ${(props) => props.theme.colours.baseWhite};
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

const StyledParagraph = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
`;

let showCookie = Cookies.get('privacycookie');

const Cookie = ({ cookieText }) => {
  return (
    !showCookie && (
      <CookieContainer>
        <StyledParagraph>{cookieText}</StyledParagraph>
        <Button buttonText={'Learn more'}></Button>
        <Button
          handleClick={() => {
            Cookies.set('privacycookie', true);
          }}
          buttonText={'OK, got it'}
          primary
        ></Button>
      </CookieContainer>
    )
  );
};

export default Cookie;
