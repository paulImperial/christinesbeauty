import React, { useState } from 'react';
import styled from 'styled-components';

const Navigation = styled.header`
  width: 100%;
  border-bottom: 10px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
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
        float: left;
      }
      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }
  a {
    opacity: 0.55;
    transition: all 0.6s;
		color: ${(props) => props.theme.colours.baseBlack};
		font-weight: 500;
    font-size: 1.25em;
  }
  a:hover {
    opacity: 1;
  }
  .fa-bars {
    display: none;
    color: ${(props) => props.theme.colours.baseBlack};
    font-size: 2rem;
  }
  nav {
		width: 100%;

  //   ul {
  //     display: flex;
  //     justify-content: space-between;
  //   }
  //   li {
  //     margin: 0 15px;
  //     justify-content: space-between;
  //     font-size: 1em;
  //   }
  //   a {
  //     font-size: 1em;
  //     text-decoration: none;
  //     .active {
  //       color: tomato;
  //     }
  //   }
  //   a.active {
  //     color: #222;
  //   }
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
    display: block;
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
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
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

const Nav = ({ navItems }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <Navigation>
      <nav className="nav">
        <i className="fa fa-bars" aria-hidden="true" onClick={(e) => handleToggle(e)} />
        <StyledLinkContainer className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
          {navItems.map(({ title, link, logo = '' }) => {
            return (
              <StyledLink>
                <StyledAnchor href={link}>{title}</StyledAnchor>
              </StyledLink>
            );
          })}
        </StyledLinkContainer>
      </nav>
    </Navigation>
  );
};

export default Nav;