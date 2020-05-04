import React from 'react';
import styled from 'styled-components';
import Layout from './layout';
import Container from '../components/Generic/Container';
import StyledAccordion from '../components/Accordion/Accordion';

import prices from '../cms/prices';

const Heading = styled.h1`
	margin-top: 2rem;
	text-align: left;
	font-size: 2rem;
	font-weight: 100;
`;

const Prices = () => {
	return (
	  <Layout>
		<Container column={true}>
			<Heading>Christine’s Beauty Treatment Menu</Heading>
			<StyledAccordion prices={prices}/>
		</Container>
	  </Layout>
	);
  };
  
  export default Prices;
