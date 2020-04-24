import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
	height: 200px;
	width: 100%;
	margin: 30px 0 0 0;
	padding: 30px;
	background: ${props => props.theme.colours.baseBlack};
`;

const Footer = () => {
	return (
		<FooterStyle>Footer</FooterStyle>
	)
};

export default Footer;
