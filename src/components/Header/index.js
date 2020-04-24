import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
	margin: 0;
	padding: 10px;
	background: ${props => props.theme.colours.white};
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 1px solid #ccc;
	box-shadow: 0 1px 23px 3px rgba(0,0,0,0.1);
`;

const HeaderTitle = styled.h1`
	font-size: 3rem;
`;

const Logo = styled.img`
	width: 150px;
`;

const TelephoneNumber = styled.div`
	font-size: 1.5rem;

`;

const Header = () => {
	return (
		<HeaderStyle>
			<Logo src="/images/darklogo.png" alt="logo"/>
		</HeaderStyle>
	)
};

export default Header;
