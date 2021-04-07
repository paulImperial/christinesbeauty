import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';
import { useRouter } from 'next/router';
import Banner from '../components/Banner/Banner';

const Heading = styled.h1`
  margin-top: 2rem;
  text-align: left;
  font-size: 2.5rem;
  font-weight: 100;
  line-height: 2rem;
`;

const StyledSocialLink = styled.li`
  position: relative;
  padding-bottom: 5px;
  margin: 0 10px;

  &:hover {
    cursor: pointer;

    &:after {
      transition: all 0.2s ease-in-out;
      width: 75px;
      height: 75px;
      content: '';
      border: 2px solid ${(props) => props.theme.colours.pink};
      background-color: ${(props) => props.theme.colours.mildPink};
      border-radius: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -38px;
      margin-top: -42px;
      z-index: 0;
    }
  }
`;

const SocialLogo = styled.img`
  width: 50px;
  z-index: 1;
`;

const Social = () => {
  const { query } = useRouter();

  const title = `Christine's Beauty | Special Offers`;

  return (
    <Layout title={title}>
      <Container column={true}>
        <Heading>Special Offers</Heading>
        <Banner offerImage={'/images/april-offer.jpg'} showSpecial></Banner>
      </Container>
    </Layout>
  );
};

export default Social;
