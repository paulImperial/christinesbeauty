import React from 'react';
import styled from 'styled-components';

export const StyledSplitText = styled.div`
	width: 100%;
	display: flex;
`;

const SplitText = ({children})  => {
	return (
	  <StyledSplitText>{children}</StyledSplitText>
	);
  };
  
  export default SplitText;
