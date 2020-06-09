import styled from 'styled-components';

export const HeroContent = styled.div`
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
	@media (max-width: 800px) {
		height: 50vh;
	}
`;
