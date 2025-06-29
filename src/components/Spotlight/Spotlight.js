import React from 'react';
import PropTypes from 'prop-types';

import { SpotlightContainer, SpotlightBox, SpotlightImage } from './Spotlight.styles';

const Spotlight = ({ brands }) => {
  return (
    <SpotlightContainer {...brands}>
      {brands.map((brand) => (
        <a href={brand.link} target="_blank" rel="noreferrer noopener" key={brand.link}>
          <SpotlightBox externalLink={'/images/external-link.png'}>
            <SpotlightImage image={brand.image} dark={brand.dark}></SpotlightImage>
          </SpotlightBox>
        </a>
      ))}
    </SpotlightContainer>
  );
};

export default Spotlight;
