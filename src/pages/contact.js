import React from 'react';
import styled from 'styled-components';
import Layout from './layout';
import Container from '../components/Generic/Container';

const Heading = styled.h1`
	margin-top: 2rem;
	text-align: left;
	font-size: 2rem;
	font-weight: 100;
`;

const Contact = () => {
	return (
	  <Layout>
		<Container column={true}>
			<Heading>Contact Us</Heading>
		</Container>
	  </Layout>
	);
  };
  
  export default Contact;
