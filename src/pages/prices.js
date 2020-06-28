import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';
import StyledAccordion from '../components/Accordion/Accordion';
import { useRouter } from 'next/router';
import prices from '../cms/prices';

const Heading = styled.h1`
  margin-top: 2rem;
  text-align: left;
  font-size: 2rem;
  font-weight: 100;
  line-height: 2rem;
`;

const Prices = () => {
	const router = useRouter();
	
	let itemToOpen = '';

  if (router.asPath.includes('#')) {

		const index = router.asPath.indexOf('#') + 1;

		 itemToOpen = router.asPath.substring(index);

	}

	console.log('prices value', itemToOpen)

  return (
    <Layout title={'Prices'}>
      <Container column={true}>
        <Heading>Christine’s Beauty Treatment Menu</Heading>
        <StyledAccordion prices={prices} itemToOpen={'shellac'} />
      </Container>
    </Layout>
  );
};

export default Prices;
