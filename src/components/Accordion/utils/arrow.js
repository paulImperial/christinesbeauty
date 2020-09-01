import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledArrow = styled.img`
  animation: bouncing 1s infinite ease-in-out;
  bottom: 0;
  display: block;
  height: 50px;
  left: 50%;
  margin-left: -25px;
  position: absolute;
  width: 50px;

  @keyframes bouncing {
    0% {
      bottom: 0;
    }
    50% {
      bottom: 20px;
    }
    100% {
      bottom: 0;
    }
  }
`;

const Arrow = (props) => {
  return (
    <div>
      <StyledArrow src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_keyboard_arrow_down_48px-128.png" />
    </div>
  );
};

export default Arrow;
