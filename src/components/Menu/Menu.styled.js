import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${(props) => props.theme.colours.baseWhite};
  transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  max-width: 300px;
  z-index: 9;
  box-shadow: ${(props) => props.open ? '0 10px 27px rgba(0, 0, 0, 0.05)' : 'none'};
  padding-top: 100px;

  nav {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: 931px) {
    top: 0;
    right: 0;
    left: auto;
    height: 100vh;
    width: 30vw;
    max-width: 380px;
    min-width: 280px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding-top: 100px;
    transform: ${(props) => props.open ? 'translateX(0)' : 'translateX(100%)'};
  }
`;

export const StyledMenuLink = styled.li`
  list-style: none;
  border-bottom: 1px solid #f0f0f0;
  padding: 20px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colours.baseBlack};
    font-size: 1.25rem;
    font-weight: 500;
    transition: color 0.3s ease;
    display: block;

    &:hover {
      color: ${(props) => props.theme.colours.pink};
    }
  }

  &:first-child {
    padding-top: 10px;
  }
`;
