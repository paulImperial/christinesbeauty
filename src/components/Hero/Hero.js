import React from 'react';
import PropTypes from 'prop-types';
import { HeroContent, HeroImage, HeroWording, HeroCTA, TitleText } from './Hero.styles';
import PinkButtonWithClick from '../TreatWellCTA';

const Hero = ({ label, image, ...props }) => {
  return (
    <HeroContent alt={'Hero Image'} image={image} {...props}>
      <HeroWording>
        <TitleText>Welcome&nbsp;to Christine's Beauty</TitleText>
      </HeroWording>
      <HeroCTA>
        <PinkButtonWithClick />
      </HeroCTA>
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
