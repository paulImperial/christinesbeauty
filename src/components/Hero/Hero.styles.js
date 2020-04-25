import styled from 'styled-components';
import { rem } from 'polished';

export const HeroContent = styled.div`
	padding: 20px;
	display: flex;
	justify-content: center;
`;

export const HeroImage = styled.div`
	position: relative;
	max-width: 100%;
	width: 100vw;
	height: 100vh;
	background: url('${props => props.image}') no-repeat 15% 42%;
	border-radius: ${rem('6px')};
	box-shadow: 0 1px 15px 1px rgba(0,0,0,0.2);
`;
