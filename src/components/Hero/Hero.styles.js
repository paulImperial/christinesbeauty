import styled from 'styled-components';

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.colours.shadeLightestGrey};
  width: 100vw;
  margin-left: -50vw;
  margin-right: -50vw;
  background: url('${(props) => props.image}') no-repeat 100% 60%;
  background-size: cover;

  @media (max-width: 640px) {
    background-image: none;
    background-color: #ffc9e2;
  }
`;

export const HeroWording = styled.div`
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
  
  @media (max-width: 640px) {
    min-height: 50vh;
    padding: 1.5rem 1rem;
  }
  
  @media (min-width: 641px) and (max-width: 1024px) {
    min-height: 65vh;
    padding: 2rem;
  }
  
  @media (min-width: 1025px) {
    min-height: 80vh;
    padding: 3rem 2rem;
  }
`;

export const HeroCTA = styled.div`
  position: absolute;
  left: 50%;
  bottom: 3.5rem;
  transform: translateX(-50%);
  z-index: 3;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1rem;

  @media (max-width: 640px) {
    bottom: 2rem;
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    bottom: 3rem;
  }

  @media (min-width: 1025px) {
    bottom: 4rem;
  }
`;

export const TitleText = styled.h1`
  font-family: 'Montserrat' !important;
  color: ${(props) => props.theme.colours.pink};
  font-weight: 100;
  text-align: center;
  max-width: 90vw;
  margin: 0;
  
  font-size: clamp(1.75rem, 6vw, 3.5rem);
  line-height: clamp(2.5rem, 8vw, 5rem);

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    line-height: clamp(2rem, 6vw, 3.5rem);
  }
  
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: clamp(2rem, 5.5vw, 3rem);
    line-height: clamp(3rem, 7vw, 4.5rem);
  }
  
  @media (min-width: 769px) {
    font-size: clamp(2.5rem, 6vw, 4rem);
    line-height: clamp(3.5rem, 8vw, 5.5rem);
  }
`;
