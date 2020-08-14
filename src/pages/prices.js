import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';
import StyledAccordion from '../components/Accordion/Accordion';
import { useRouter } from 'next/router';
import Map from '../components/map/Map';
import prices from '../cms/prices';

const Heading = styled.h1`
  margin-top: 2rem;
  text-align: left;
  font-size: 2rem;
  font-weight: 100;
  line-height: 2rem;
`;

const Prices = () => {
  const { query } = useRouter();

  return (
    <Layout title={'Prices'}>
      <Container column={true}>
        <Heading>Christine’s Beauty Treatment Menu</Heading>
        <StyledAccordion prices={prices} preExpand={query} />
      </Container>
      <Container label="Finding Us">
        <Map />
      </Container>
    </Layout>
  );
};

export default Prices;
