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
    height: 87vh;
    width: 100vw;
    background-size: auto;
    background-color: #ffc9e2;
    background-image: none;
  }
`;

export const HeroWording = styled.div`
  text-align: center;
  font-family: 'Montserrat';
  position: absolute;
  z-index: 2;
  font-size: 4rem;
  align-self: center;
  justify-self: center;
  display: flex;
  justify-items: center;
  align-items: center;
  border-radius: 3rem;
  @media (max-width: 800px) {
    font-size: 2rem;
    width: min-content;
  }
`;

export const TitleText = styled.h1`
  font-family: 'Montserrat' !important;
  position: relative;
  color: ${(props) => props.theme.colours.pink};
  z-index: 2;
  font-weight: 100;
  line-height: 7rem;
`;
