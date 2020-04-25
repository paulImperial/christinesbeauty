import styled from 'styled-components';
import { rem } from 'polished';

export const CardContainer = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

export const CardLabel = styled.h2`
	border: 1px solid #ccc;
	background: ${props => `${props.theme.colours.baseWhite}`};
	box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
	display: inline-block;
	position: absolute;
	top: -${rem('50px')};
	padding: ${rem('17px')} ${rem('15px')};
	height: unset;
	display: block;
	left: 10%;
	text-align: left;
	font-weight: normal;
	color: ${props => props.theme.colours.black};
	z-index:3;
	min-width: 155px;
`;

export const CardContent = styled.div`
	padding: ${rem('20px')}
	padding-top: ${rem('16px')};

	> article,
	> p {
		padding: 0.5rem ${rem('20px')} 0;
	}
`;

export const CardSection = styled.div`
	padding: 1rem;
	position: relative;
	margin-top: 3.75rem;
	border-radius: ${rem('6px')};
	margin: 20px;
	border: 1px solid #ccc;
	box-shadow: 0 3px 10px 1px rgba(0,0,0,0.1);
	max-width: 28%;
	min-height: 300px;
		&:hover,
		&:focus,
		&:active {
			${props => props.theme.boxShadow(props.theme.colours.shadeDarkGrey)};
			color: ${props => props.theme.colours.black};
			h2 {
				color: ${props => props.theme.colours.pink};
			};
			cursor: pointer;
		}

`;

export const CardImage = styled.div`
	position: relative;
	max-width: 100%;
	width: 600px;
	height: 400px;
	background: url('${props => props.image}') no-repeat center center;
	background-size: cover;
	border-radius: ${rem('6px')};
`;
