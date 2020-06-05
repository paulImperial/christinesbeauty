import styled from 'styled-components';
import { rem } from 'polished';

export const StyledAccordionPanel = styled.div`
	display: flex;
	width: 80%;
`;

export const StyledImage = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background: url('${props => props.image}') no-repeat;
	background-size: cover;
	border-radius: ${rem('6px')};
	box-shadow: 0 1px 15px 1px rgba(0,0,0,0.2);
`;

export const StyledTable = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

export const StyledBlurb = styled.div`
	display: inline-block;
	margin: 20px;
	padding: 20px;
	margin-top: 0;
	box-shadow: 0 0 15px 0 rgba(0,0,0,0.14);
	height: max-content;
`;
