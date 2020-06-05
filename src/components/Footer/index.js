import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0 0 0;
  padding: 10px;
  background: ${(props) => props.theme.colours.shadeDarkGrey};
`;

const Logo = styled.img`
  width: 150px;
`;

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
`;

const StyledLink = styled.li`
  padding-bottom: 5px;
  margin: 0 10px;

  &:hover {
    color: ${(props) => props.theme.colours.pink};
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colours.baseBlack};
  font-size: 1rem;
`;

const SocialContainer = styled(StyledLinkContainer)`
	border-right: none;
	flex-grow: 2;
`;

const OpeningHoursContainer = styled(StyledLinkContainer)`
	flex-direction: column;
	padding-right: 40px;
	line-height: 2rem;
`;

const Footer = ({ navItems, social }) => {
  return (
	<FooterStyle>
	  <StyledLinkContainer>
        {navItems.map(({ title, link, logo = '' }) => {
          return (
            <StyledLink>
              <StyledAnchor href={link}>{title}</StyledAnchor>
            </StyledLink>
          );
        })}
			</StyledLinkContainer>
		<OpeningHoursContainer>
				<li><strong>Opening Hours</strong></li>
				<li>Monday 8am - 4pm</li>
				<li>Tuesday 8am - 4pm</li>
				<>Wednesday 8am - 4pm</>
				<li>Thursday 8am - 4pm</li>
				<li>Friday 8am - 4pm</li>
				<li>Saturday 8am - 4pm</li>
				<li>Sunday Closed</li>
		</OpeningHoursContainer>
      <SocialContainer>
        {social.map(({ title, image, link }) => {
          return (
            <StyledSocialLink>
              <a href={link}>
                <SocialLogo src={image} />
              </a>
            </StyledSocialLink>
          );
        })}
      </SocialContainer>
    </FooterStyle>
  );
};

export default Footer;
