
import React, { Fragment } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Theme } from '../../Theme';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AppRoot } from '../../Theme/';
import navigation from '../../cms/navigation';
import Navigation from '../../components/Generic/Navigation';
import social from '../../cms/social';
import Nav from '../../components/Generic/Navigation';

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

const Layout = ({ children, hero }) => {
	
  return (
    <Fragment>
	  <Theme>
	  <AppRoot />
		<Head>
		<link rel="shortcut icon" href="/images/favicon.ico" />
          <title>Christine's Beauty</title>
        </Head>
		<Header>
			<Nav navItems={navigation} />
		</Header>
		<HeroBanner>{hero}</HeroBanner>
        <Main>{children}</Main>
        <Footer navItems={navigation} social={social}></Footer>
	  </Theme>
	  <script> </script>
    </Fragment>
  );
};

export default Layout;
