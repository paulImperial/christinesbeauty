import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CardContent, CardSection, CardLabel, CardImage, CardContainer } from './Card.styles';

const Card = ({ treatments, ...props }) => {
  const router = useRouter();

  return (
    <CardContainer>
      {treatments.map((treatment) => (
        <CardSection {...props} key={treatment.label}>
          <CardContent>
            <a onClick={() => router.push({ pathname: treatment.link, query: { name: treatment.query } })}>
              <CardImage image={treatment.image}></CardImage>
            </a>
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
