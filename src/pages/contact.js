import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';
import Map from '../components/map/Map';

const Heading = styled.h1`
  margin-top: 2rem;
  text-align: left;
  font-size: 2.5rem;
  font-weight: 100;
`;

const StyledP = styled.p`
  font-size: 1.25rem;
`;

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.5rem 0 0.5rem 0;
  width: 100%;
`;

const StyledImage = styled.img`
  display: inline-block;
  margin-bottom: 1.25rem;
  margin-right: 1rem;
`;

const StyledContactText = styled.div`
  display: inline-block;
  font-weight: 300;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colours.pink};
`;

const StyledContactContainer = styled.div`
  display: flex;

`;

const Contact = () => {
  const title = `Christine's Beauty | Contact Page`;

  const [isOpen, setisOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setisOpen(!isOpen);
  };

  return (
    <Layout title={title}>
      <Container column={true}>
        <Heading>Contact Us</Heading>
        <StyledP>
          Please do get in touch to find out more about our services or to request an appointment.
        </StyledP>
        <StyledContactContainer>
          <StyledImage src="/images/icons/sms.svg" alt="Phone" />
          <a href="sms:07895132474" style={{ textDecoration: 'none' }}>
            <StyledContactText>07895 132474</StyledContactText>
          </a>
        </StyledContactContainer>
        <StyledP>
          Or contact us through our social media channels:
          <a href="https://www.instagram.com/christinesbeautyx/" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.5rem', marginRight: '0.5rem', verticalAlign: 'middle' }}>
            <img src="/images/icons/instagram.svg" alt="Instagram" style={{ width: '28px', height: '28px', verticalAlign: 'middle' }} />
          </a>
          <a href="https://www.facebook.com/christinesbeauty2018" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '0.5rem', verticalAlign: 'middle' }}>
            <img src="/images/icons/facebook.svg" alt="Facebook" style={{ width: '28px', height: '28px', verticalAlign: 'middle' }} />
          </a>
        </StyledP>
      </Container>
      <Container label="Finding Us" id="Find">
        <Map />
      </Container>
    </Layout>
  );
};

export default Contact;
