import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';
import StyledAccordion from '../components/Accordion/Accordion';
import { useRouter } from 'next/router';
import Map from '../components/map/Map';
import prices from '../cms/prices';
import { brands } from '../cms/brands';
import Spotlight from '../components/Spotlight/Spotlight';

const Heading = styled.h1`
  margin-top: 2rem;
  text-align: left;
  font-size: 2.5rem;
  font-weight: 100;
  line-height: 3rem;
`;

const Prices = () => {
  const { query } = useRouter();

  const title = `Christine's Beauty | Treatment Menu`;

  return (
    <Layout title={title}>
      <Container column={true}>
        <Heading>Christine’s Beauty Treatment Menu</Heading>
        <StyledAccordion prices={prices} preExpand={query} />
      </Container>
      <Container label="Products We Use">
        <Spotlight brands={brands}></Spotlight>
      </Container>
    </Layout>
  );
};

export default Prices;
