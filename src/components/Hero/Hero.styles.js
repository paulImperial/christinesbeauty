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
		background: none;
	}
`;

export const HeroWording = styled.div`
	position: absolute;
	z-index: 2;
	font-size: 3rem;
	align-self: end;
	justify-self: center;
	display: flex;
	justify-items: center;
	align-items: center;
	width: min-content;
	bottom: 0;
	right: 0;
`;

export const TitleText = styled.h1`
	position: relative;
	color: ${props => props.theme.colours.baseBlack};
	z-index: 2;
	color: ${props => props.theme.colours.pink};
	line-height: 4rem;
	text-shadow: 1px 2px #000;
`;
