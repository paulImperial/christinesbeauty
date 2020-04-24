import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`;

const Heading = styled.h2`
	margin-top: 2rem;
	text-align: left;
	font-size: 2rem;
	font-weight: 100;
`;

const Container = ({ children, label }) => {
  return (
    <Fragment>
      <Heading>{label}</Heading>
      <StyledContainer>{children}</StyledContainer>
    </Fragment>
  );
};

export default Container;
