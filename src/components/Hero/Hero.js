import React from 'react';
import PropTypes from 'prop-types';

import {
	HeroContent,
	HeroImage,
} from './Hero.styles';

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
