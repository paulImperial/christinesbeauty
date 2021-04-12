import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';

const Heading = styled.h1`
  margin-top: 2rem;
  text-align: left;
  font-size: 2.5rem;
  font-weight: 100;
  line-height: 2rem;
`;

const Reviews = () => {
  const title = `Christine's Beauty | Reviews`;

  return (
    <Layout title={title}>
      <Container column={true}>
        <Heading></Heading>
        <div className="elfsight-app-6f7f58e5-e39f-488d-a35a-b5e64b4307a7"></div>
      </Container>
    </Layout>
  );
};

export default Reviews;
