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
          <br />
          <br />
          Call us on 07895 132474 or complete a{' '}
          <a href="" onClick={handleClick}>
            Free online enquiry form
          </a>{' '}
          and we will soon be in touch with you.
        </StyledP>
        {isOpen && <Form></Form>}
      </Container>
      <Container label="Finding Us" id="Find">
        <Map />
      </Container>
    </Layout>
  );
};

export default Contact;
