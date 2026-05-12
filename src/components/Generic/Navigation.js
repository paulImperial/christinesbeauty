import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Burger from '../Burger';
import Menu from '../Menu';
import social from '../../cms/social';

const Navigation = styled.header`
  width: 100%;
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem 0 0;
  background-color: ${(props) => props.theme.colours.baseWhite};

  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;

    p {
      width: 500px;
      display: block;
    }
    em {
      font-size: 0.5em;
      float: left;
      display: block;
      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
      }
    }
  }
  a {
    opacity: 0.75;
    transition: all 0.6s;
    color: ${(props) => props.theme.colours.baseBlack};
    font-weight: 500;
    font-size: 1.25em;
  }
  a:hover {
    opacity: 1;
  }

  @media only screen and (max-width: 400px) {
    padding: 0px;
    .logo {
      display: none;
    }
  }
  @media only screen and (max-width: 930px) {
    height: auto;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0px;
      margin-left: -5px;
      a {
        padding: 20px 0px;
      }
    }
  }
`;

const StyledLinkContainer = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
`;

const StyledLink = styled.li`
  transition: border-bottom 0.5s;
  cursor: pointer;
  padding-bottom: 5px;
  margin: 0 10px;

  border-bottom: 3px solid #fff;

  &:hover {
    border-bottom: 3px solid ${(props) => props.theme.colours.pink};
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colours.baseBlack};
  font-size: 1.25rem;
`;

const SocialLinks = styled.div`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  gap: 0.75rem;
  align-items: center;

  @media only screen and (max-width: 930px) {
    display: none;
  }
`;

const SocialIcon = styled.img`
  width: 28px;
  height: 28px;
  display: block;
`;

const Overlay = styled.div`
  display: ${(props) => props.open ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 8;
  opacity: ${(props) => props.open ? '1' : '0'};
  transition: opacity 0.3s ease-in-out;
`;

const Nav = ({ navItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <Navigation>
        <Burger open={isExpanded} setOpen={setIsExpanded} />
        <SocialLinks>
          {social
            .filter((item) => item.title === 'Facebook' || item.title === 'Instagram')
            .map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                title={item.title}
              >
                <SocialIcon src={item.image} alt={item.title} />
              </a>
            ))}
        </SocialLinks>
      </Navigation>
      <Overlay open={isExpanded} onClick={() => setIsExpanded(false)} />
      <Menu open={isExpanded} navItems={navItems} onLinkClick={() => setIsExpanded(false)} />
    </>
  );
};

export default Nav;
