import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import social from '../../cms/social';
import { BannerWrapper, BannerHeader, BannerImage, BannerLink, BannerText } from './Banner.styles';

const SocialLogo = styled.img`
  width: 50px;
  z-index: 1;
`;

const StyledSocialLink = styled.li`
  position: relative;
  padding-bottom: 5px;
  margin: 0 10px;

  &:hover {
    cursor: pointer;

    &:after {
      transition: all 0.2s ease-in-out;
      width: 75px;
      height: 75px;
      content: '';
      border: 2px solid ${(props) => props.theme.colours.pink};
      background-color: ${(props) => props.theme.colours.mildPink};
      border-radius: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -38px;
      margin-top: -42px;
      z-index: 0;
    }
  }
`;

const StyledLinkContainer = styled.ul`
  position: relative;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-right: 1px solid ${(props) => props.theme.colours.baseWhite};
  @media (max-width: 650px) {
    border-right: none;
    padding-left: 0;
    padding-right: 0;
  }
`;

const SocialContainer = styled(StyledLinkContainer)`
  border-right: none;
`;

const Banner = ({ header = '', images, link, offerImage = '', showSpecial, text, showReview }) => {
  return (
    <BannerWrapper>
      <BannerHeader>{header}</BannerHeader>
      <BannerText>{text}</BannerText>
      <SocialContainer>
        <BannerImage src={offerImage}></BannerImage>
        {showReview &&
          social.map(({ title, image, link, review }) => {
            return (
              review && (
                <a href={link} target="_blank">
                  <StyledSocialLink key={title}>
                    <SocialLogo src={image} />
                  </StyledSocialLink>
                </a>
              )
            );
          })}
      </SocialContainer>
    </BannerWrapper>
  );
};

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
