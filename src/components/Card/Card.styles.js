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
	position: relative;
	margin-top: 3.75rem;
	border-radius: ${rem('6px')};
	margin: 20px;
	transition: border-color .3s, box-shadow .5s, transform .3s;

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
			transform: scale(1.01);
			box-shadow: rgba(0, 0, 0, 0.2) 0px 9px 12px 10px;
			transition: all 250ms ease 0s;
		}
	
	@media (max-width: ${({ theme }) => theme.mobile}) {
		max-width: 100%;
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
