import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
	HeroContent,
	HeroImage,
} from './Hero.styles';

const PageTitle = styled.h1`
	color: ${props => props.theme.colours.pink};
	position: absolute;
	opacity: 1;
	font-size: 3rem;
`;

const Hero = ({ label, image,  ...props }) => {
	return (
			<HeroContent {...props}>
				<HeroImage image={image}></HeroImage>
			</HeroContent>
	);
};

Hero.propTypes = {
	children: PropTypes.node,
	label: PropTypes.string,
};

Hero.defaultProps = {
	children: null,
	label: null,
};

export default Hero;
