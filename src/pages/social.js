import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';
import Social from '../components/Social/Social';
import Router from 'next/router';

const BodyText = styled.p`
  margin: 10px 0;
  padding: 5px;
  font-size: 1.25rem;
`;

const socialPage = () => {
  const title = `Christine's Beauty | Social Hub`;

  const reloadSocial = () => {
    if (process.browser) {
      Router.reload(window.location.pathname);
    }
  };

  return (
    <Layout title={title}>
      <Container label="Social Hub">
        <Social></Social>
      </Container>
    </Layout>
  );
};

export default socialPage;
