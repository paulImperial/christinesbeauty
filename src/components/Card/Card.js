import React from 'react';
import PropTypes from 'prop-types';

import {
	CardContent,
	CardSection,
	CardLabel,
	CardImage,
} from './Card.styles';

const Card = ({ children, label, image,  ...props }) => {
	const hasLabel = !!label;
	return (
		<CardSection hasOffset={hasLabel} {...props}>
			{ hasLabel && <CardLabel>{label}</CardLabel> }
			<CardContent hasOffset={hasLabel}>
				<CardImage image={image}></CardImage>
				{ children }
			</CardContent>
		</CardSection>
	);
};

Card.propTypes = {
	children: PropTypes.node,
	label: PropTypes.string,
};

Card.defaultProps = {
	children: null,
	label: null,
};

export default Card;
