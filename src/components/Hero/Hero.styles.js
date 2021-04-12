import styled from 'styled-components';

export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeroImage = styled.div`
  position: relative;
  max-width: 100%;
  width: 100vw;
  height: 83vh;
  background: url('${(props) => props.image}') no-repeat 100% 60%;
  background-size: cover;
  opacity: 0.65;
  @media (max-width: 800px) {
    height: 85vh;
    background-size: auto;
  }
`;

export const HeroWording = styled.div`
  position: absolute;
  z-index: 2;
  font-size: 2.5rem;
  align-self: center;
  justify-self: center;
  display: flex;
  justify-items: center;
  align-items: center;
  width: max-content;
  padding: 1rem;
  border-radius: 3rem;
  @media (max-width: 800px) {
    font-size: 2.2rem;
    width: min-content;
  }
`;

export const TitleText = styled.h1`
  font-family: 'Devonshire' !important;
  position: relative;
  color: ${(props) => props.theme.colours.pink};
  z-index: 2;
  line-height: 7rem;
  text-shadow: 4px 3px 7px #000;
  font-size: 7rem;
  font-weight: 100;
  @media (max-width: 415px) {
    font-size: 6rem;
    line-height: 6rem;
  }
  @media (max-width: 321px) {
    font-size: 5rem;
    line-height: 5rem;
  }
`;
