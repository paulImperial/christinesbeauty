import React from 'react';
import styled from 'styled-components';

const StyledSpinner = styled.img`
  width: 20%;
  height: 20%;
`;

const Spinner = () => {
  return <StyledSpinner src="/images/spinner.gif" alt="sending spinner" />;
};

export default Spinner;
