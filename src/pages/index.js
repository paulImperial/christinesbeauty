import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Container from '../components/Generic/Container';
import Card from '../components/Card/Card';
import Hero from '../components/Hero/Hero';
import Map from '../components/map/Map';
import Spotlight from '../components/Spotlight/Spotlight';
import Cameo from '../components/Cameo';
import Social from '../components/Social/Social';
import { brands } from '../cms/brands';
import { treatments } from '../cms/treatments';

const BodyText = styled.p`
  margin: 10px 0;
  padding: 5px;
  font-size: 1.25rem;
`;

const Home = () => {
	//const { Treatments } = content;

  return (
    <Layout title={"main page"}>
			<Container full={true}>
			<Cameo image={'/images/christineBW.jpg'} />
        <Hero image={'/images/room.jpg'} />
      </Container>
      <BodyText>
        I would like to offer you a warm welcome to Christine’s Beauty, my own independent salon, tucked away in a
        peaceful corner of Staple Hill Bristol BS16, but less than a minute’s walk from the main road Broad Street.
      </BodyText>
      <BodyText>
        I am dual qualified as a beauty therapist and complementary therapist, with level 2 and 3 VTCT qualifications
        gained at Bath College and South Gloucestershire and Stroud College and experience gained working in two local
        salons. I am a fully insured professional practitioner and a member of the Guild of Beauty Therapists. I enjoy
        making people feel confident, relaxed and revitalised. My favourite treatments are facials, pedicures and
        waxing. My speciality is eyebrow treatments, creating a perfect shape to suit your face.
      </BodyText>
      <BodyText>
        Here at Christine’s Beauty my aim is to provide high quality treatments at affordable prices in a calm and
        caring environment where you feel relaxed.
      </BodyText>
      <Container label="Treatments" id="Treatments">
        <Card treatments={treatments}></Card>
	  </Container>
	  <BodyText>
	  	I offer these treatments to both men and women in a private and relaxing environment. 
	  </BodyText>
	  <BodyText>
        My main aim from the moment you enter Christine’s Beauty is for you to feel welcomed and comfortable. Throughout
        the treatment I aim for you to feel transported away from your everyday life with an opportunity to take a real
        break. Whether beauty treatments are part of your normal routine, or you’ve decided to treat yourself, it’s Your
        Time.
      </BodyText>
      <BodyText>
        I also focus on personal customer care from when you first come to the salon to when you leave. You will feel
        pampered and spoiled here at Christine’s Beauty. I look forward to seeing you.
      </BodyText>
      <Container label="Products We Use">
        <Spotlight brands={brands}></Spotlight>
      </Container>
		<Container label="Social" id="Social">
			<Social></Social>
	  </Container>
      <Container label="Special Offers"></Container>
      <Container label="Reviews"></Container>
      <Container label="Finding Us" id="Find">
        <Map />
        <BodyText>
          The salon is easy to reach, with the bus stopping just a few steps away, and being just a couple of minutes’
          drive from the Ring Road. Based in a converted outbuilding of my family home, with separate access, the
          location provides both privacy and convenience, all at ground level, with free onsite parking usually
          available.
        </BodyText>
	  </Container>
    </Layout>
  );
};

export default Home;
