import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';
import Form from '../components/Form/Form';
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
          <StyledImage src="/images/icons/phone.svg" />
          <StyledContactText>07895 132474</StyledContactText>
        </StyledContactContainer>
        <StyledContactContainer>
          <StyledImage src="/images/icons/email.svg" />
          <StyledContactText><a href="mailto: christine.patch@outlook.com">christine.patch@outlook.com</a></StyledContactText>
        </StyledContactContainer>
      </Container>
      <Container label="Finding Us" id="Find">
        <Map />
      </Container>
    </Layout>
  );
};

export default Contact;
