import React from 'react';
import PropTypes from 'prop-types';

import { CardContent, CardSection, CardLabel, CardImage, CardContainer } from './Card.styles';

const Card = ({ treatments, ...props }) => {
  return (
    <CardContainer>
      {treatments.map((treatment) => (
        <CardSection {...props} key={treatment.label}>
          <CardLabel>{treatment.label}</CardLabel>
          <CardContent>
            <CardImage image={treatment.image}></CardImage>
          </CardContent>
        </CardSection>
      ))}
    </CardContainer>
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
