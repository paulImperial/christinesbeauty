import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';
import { useRouter } from 'next/router';
import Map from '../components/map/Map';
import specialOffers from '../cms/special-offers';
import Banner from '../components/Banner/Banner';

const Heading = styled.h1`
  margin-top: 2rem;
  text-align: left;
  font-size: 2.5rem;
  font-weight: 100;
  line-height: 2rem;
`;

const Social = () => {
  const { query } = useRouter();

  const title = `Christine's Beauty | Special Offers`;

  return (
    <Layout title={title}>
      <Container column={true}>
        <Heading>Special Offers</Heading>
        <Banner
          header={'Coming soon ...'}
          text={
            'You will be able to see special offers soon, in the meantime, please link to our Facebook or Instagram page for news of of our special offers.'
          }
        ></Banner>
      </Container>
      <Container label="Finding Us">
        <Map />
      </Container>
    </Layout>
  );
};

export default Social;
