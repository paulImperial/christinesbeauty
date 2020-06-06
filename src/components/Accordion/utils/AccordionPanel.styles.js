import styled from 'styled-components';
import { rem } from 'polished';

export const StyledAccordionPanel = styled.div`
	display: flex;
	width: 100%;
`;

export const StyledImage = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background: url('${props => props.image}') no-repeat 50% 50%;
	border-radius: ${rem('6px')};
	box-shadow: 0 1px 15px 1px rgba(0,0,0,0.2);
	max-width: 500px;
	max-height: 500px;
	filter: blur(10px);
	@media (max-width:850px){
		display: none;
	}
`;

export const StyledTable = styled.ul`
	display: flex;
	flex-direction: column;
`;

export const StyledBlurb = styled.div`
	display: inline-block;
	padding: 30px;
	margin-top: 0;
	box-shadow: 0 0 15px 0 rgba(0,0,0,0.14);
	height: max-content;
	width: 100%;
	@media (max-width: 600px) {
		padding: 20px 10px 20px 10px;
	}
`;
