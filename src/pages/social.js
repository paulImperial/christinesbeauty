import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';
import Social from '../components/Social/Social';

const socialPage = () => {
  const title = `Christine's Beauty | Gallery`;

  return (
    <Layout title={title}>
      <Container label="Have a look at examples of our work and posts on social media">
        <Social></Social>
      </Container>
    </Layout>
  );
};

export default socialPage;
