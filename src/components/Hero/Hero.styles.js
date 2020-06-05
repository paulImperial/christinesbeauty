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
	height: 80vh;
	background: url('${props => props.image}') no-repeat 100% 60%;
	background-size: cover;
	border-radius: ${rem('6px')};
`;
