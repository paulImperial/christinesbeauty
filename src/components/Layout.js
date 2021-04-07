import React, { Fragment } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import navigation from '../cms/navigation';
import social from '../cms/social';
import Nav from './Generic/Navigation';

// if (typeof window !== 'undefined') {
//   require('../cms/curator-facebook');
//   require('../cms/curator.instagram');
// }

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
  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" type="text/css" href="//cdn.curator.io/3.1/css/curator.css" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>{title}</title>
      </Head>
      <Header>
        <Nav navItems={navigation} />
      </Header>
      <HeroBanner>{hero}</HeroBanner>
      <Main>{children}</Main>
      <Footer navItems={navigation} social={social}></Footer>
      <script type="text/javascript" src="//cdn.curator.io/3.1/js/curator.js"></script>
      <script type="text/javascript" src="https://apps.elfsight.com/p/platform.js"></script>
    </Fragment>
  );
};

export default Layout;
