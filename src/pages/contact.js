import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';

const Heading = styled.h1`
	margin-top: 2rem;
	text-align: left;
	font-size: 2rem;
	font-weight: 100;
`;

const Contact = () => {
	return (
	  <Layout title={'Contact Page'}>
		<Container column={true}>
			<Heading>Contact Us</Heading>
			<p>Please do get in touch to find out more about our services or to request an appointment. 
			 Call us on 07895 132474 or complete a Free online enquiry and we will soon be in touch with you.</p>
		</Container>
	  </Layout>
	);
  };
  
  export default Contact;
