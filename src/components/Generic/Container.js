import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`;
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'} ;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
`;

const Heading = styled.h2`
	margin-top: 2rem;
	text-align: left;
	font-size: 2rem;
	font-weight: 100;
`;

const Container = ({ children, label, column }) => {
  return (
    <Fragment>
      <Heading>{label}</Heading>
      <StyledContainer column={column}>{children}</StyledContainer>
    </Fragment>
  );
};

export default Container;
