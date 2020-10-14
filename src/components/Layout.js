import React, { Fragment } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import navigation from '../cms/navigation';
import social from '../cms/social';
import Nav from './Generic/Navigation';

if (typeof window !== 'undefined') {
  require('../cms/curator-facebook');
  require('../cms/curator.instagram');
}

const Main = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  width: 90%;
`;

const HeroBanner = styled.div`
  margin: 0 auto;
  max-width: 1140px;
  width: 100%;
`;

const Layout = ({ children, hero, title }) => {
  const contact = !!title.includes('Contact');
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>{title}</title>
      </Head>
      <Header>
        <Nav navItems={navigation} />
      </Header>
      <HeroBanner>{hero}</HeroBanner>
      <Main>{children}</Main>
      <Footer navItems={navigation} social={social}></Footer>
      {contact && <script src="https://www.google.com/recaptcha/api.js"></script>}
      {contact && (
        <script>
          function onSubmit('6Lc6bNQZAAAAAPj5onNnT6D94gaV2YfZU-GwPLhr') {document.getElementById('demo-form').submit()};
        </script>
      )}
    </Fragment>
  );
};

export default Layout;
