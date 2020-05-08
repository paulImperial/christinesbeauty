import styled from 'styled-components';

const StyledAccordionPanel = styled.div`
	display: flex;
	width: 80%;
	border: 1px solid red;
`;

const StyledImage = styled.div`
	position: relative;
	max-width: 100%;
	width: 100vw;
	height: 100vh;
	background: url('${props => props.image}') no-repeat;
	background-size: cover;
	border-radius: ${rem('6px')};
	box-shadow: 0 1px 15px 1px rgba(0,0,0,0.2);
`;

const StyledTable = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const StyledField = styled.div`
	display: inline-block;
`;
