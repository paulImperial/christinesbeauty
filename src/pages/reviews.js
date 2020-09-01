import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';
import { useRouter } from 'next/router';
import Map from '../components/map/Map';

const Heading = styled.h1`
  margin-top: 2rem;
  text-align: left;
  font-size: 2rem;
  font-weight: 100;
  line-height: 2rem;
`;

const Reviews = () => {
  const { query } = useRouter();

  return (
    <Layout title={'Reviews'}>
      <Container column={true}>
        <Heading>Our Reviews</Heading>
      </Container>
      <Container label="Finding Us">
        <Map />
      </Container>
    </Layout>
  );
};

export default Reviews;
