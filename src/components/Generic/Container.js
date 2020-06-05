import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`;
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'} ;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  background-color: ${props => props.background};
  max-width: ${props => props.full ? '90rem' : '72.5rem'};
`;

const Heading = styled.h2`
	margin-top: 2rem;
	text-align: left;
	font-size: 2.25rem;
	font-weight: 100;
`;

const Container = ({ children, label, column, background, id, full=false }) => {
  return (
    <Fragment>
      <Heading id={id}>{label}</Heading>
      <StyledContainer column={column} background={background} full={full}>{children}</StyledContainer>
    </Fragment>
  );
};

export default Container;
