import React from 'react';
import PropTypes from 'prop-types';
import { BannerWrapper, BannerHeader, BannerImage, BannerLink, BannerText } from './Banner.styles';

const Banner = ({ header, image, link, text }) => {
  return (
    <BannerWrapper>
      <BannerHeader>{header}</BannerHeader>
      <BannerText>{text}</BannerText>
    </BannerWrapper>
  );
};

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
