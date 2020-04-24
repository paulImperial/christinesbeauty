import styled from 'styled-components';
import { rem } from 'polished';

// export const CardLabel = styled.h2`
// 	border: 1px solid #ccc;
// 	border-radius: ${rem('6px')};
// 	background: ${props => `${props.theme.colours.baseWhite}`};
// 	box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
// 	display: inline-block;
// 	position: absolute;
// 	bottom: -${rem('20px')};
// 	padding: ${rem('17px')} ${rem('10px')};
// 	height: unset;
// 	display: block;
// 	left: 19%;
// 	text-align: left;
// 	font-weight: normal;
// 	color: ${props => props.theme.colours.shadeDarkGrey};
// 	z-index:3;
// `;

export const HeroContent = styled.div`
	padding: 20px;
	display: flex;
	justify-content: center;
`;

// export const CardSection = styled.section`
// 	position: relative;
// 	${props => props.hasOffset && `
// 		margin-top: 3.75rem;
// 	`}
// 	//background: ${props => `${props.theme.colours.white}`};
// 	border-radius: ${rem('6px')};
// 	margin: 20px;
// 	border: 1px solid #ccc;
// 	box-shadow: 0 3px 10px 1px rgba(0,0,0,0.1);
// 	max-width: 28%;
// 	min-height: 300px;
// 		&:hover,
// 		&:focus,
// 		&:active {
// 		  ${props => props.theme.boxShadow(props.theme.colours.shadeDarkGrey)};
// 		  color: ${props => props.theme.colours.black};
// 		h2 {
// 			color: ${props => props.theme.colours.black};
// 		  }
// 		}
// `;

export const HeroImage = styled.div`
	position: relative;
	max-width: 100%;
	width: 100vw;
	height: 100vh;
	background: url('${props => props.image}') no-repeat 15% 50%;
	border-radius: ${rem('6px')};
	box-shadow: 0 1px 15px 1px rgba(0,0,0,0.2);
`;
