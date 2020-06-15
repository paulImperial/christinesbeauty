import styled from 'styled-components';

export const HeroContent = styled.div`
	display: flex;
	justify-content: flex-end;;
`;

export const HeroImage = styled.div`
	position: relative;
	max-width: 100%;
	width: 100vw;
	height: 80vh;
	background: url('${props => props.image}') no-repeat 100% 60%;
	background-size: cover;
	@media (max-width: 800px) {
		height: 50vh;
	}
`;

export const HeroWording = styled.div`
	position: absolute;
	z-index: 2;
	font-size: 3rem;
	width: 500px;
	height: 300px;
	background-color: ${props => props.theme.colours.baseWhite};
	opacity: 0.5;
	align-self: flex-end;
	justify-self: end;
	padding: 1rem;
`;

export const TitleText = styled.h1`
	position: relative;
	color: ${props => props.theme.colours.baseBlack};
	z-index: 2;
	color: ${props => props.theme.colours.pink};
	line-height: 4rem;
	text-shadow: 1px 2px #000;
`;
