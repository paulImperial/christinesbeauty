import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';
import { useRouter } from 'next/router';
import Map from '../components/map/Map';
import Banner from '../components/Banner/Banner';

const Heading = styled.h1`
  margin-top: 2rem;
  text-align: left;
  font-size: 2.5rem;
  font-weight: 100;
  line-height: 2rem;
`;

const Reviews = () => {
  const { query } = useRouter();

  const title = `Christine's Beauty | Reviews`;

  return (
    <Layout title={title}>
      <Container column={true}>
        <Heading>Our Reviews</Heading>
        <Banner
          header={'Coming soon ...'}
          text={
            'You will be able to see reviews soon, in the meantime, please link to our Facebook page for reviews of our services.'
          }
        ></Banner>
      </Container>
      <Container label="Finding Us">
        <Map />
      </Container>
    </Layout>
  );
};

export default Reviews;
