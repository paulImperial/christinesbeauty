import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  flex-wrap: no-wrap;
  position: relative;
  background-color: ${(props) => props.background};
  border: 1px solid #000;
  padding: 10px;
  margin: 0 1rem;

  &:hover {
    box-shadow: 0 0 10px 1px ${(props) => props.theme.colours.shadeDarkGrey};
    background-color: ${(props) => props.theme.colours.pink};
    cursor: pointer;
  }
`;

const StyledParagraph = styled.p`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 300;
  padding: 5px;
  margin: 5px;
`;

const Button = ({ buttonText, primary, handleClick }) => {
  return (
    <StyledButton
      onClick={() => {
        handleClick();
      }}
    >
      <StyledParagraph>{buttonText}</StyledParagraph>
    </StyledButton>
  );
};

export default Button;
