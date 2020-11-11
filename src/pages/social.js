import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';
import Social from '../components/Social/Social';
import Router from 'next/router';

const socialPage = () => {
  const title = `Christine's Beauty | Social Hub`;

  return (
    <Layout title={title}>
      <Container label="Social Hub">
        <Social></Social>
      </Container>
    </Layout>
  );
};

export default socialPage;
