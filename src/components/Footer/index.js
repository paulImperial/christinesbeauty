import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Legal from '../Legal/Legal';
import client from '../../helpers/sanity';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';
import { groq } from 'next-sanity';

const FooterStyle = styled.div`
  display: flex;
  width: 100%;
  margin: 30px 0 0 0;
  padding: 10px;
  background: ${(props) => props.theme.colours.shadeDarkGrey};
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  width: 150px;
`;

const SocialLogo = styled.img`
  width: 50px;
  z-index: 1;
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

const StyledLinkContainer = styled.ul`
  position: relative;
  list-style-type: none;
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: space-around;
  border-right: 1px solid ${(props) => props.theme.colours.baseWhite};
  @media (max-width: 650px) {
    border-right: none;
    padding-left: 0;
    padding-right: 0;
  }
`;

const StyledLink = styled.li`
  padding-bottom: 5px;
  margin: 0 10px;

  &:hover {
    color: ${(props) => props.theme.colours.pink};
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colours.baseBlack};
  font-size: 1rem;
`;

// const LinkContainer = styled(StyledLinkContainer)`
//   @media (max-width: 800px) {
//     display: none;
//   }
// `;

const SignUpContainer = styled(StyledLinkContainer)`
  border-left: none;
  width: 33%;
  @media (max-width: 800px) {
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colours.baseWhite};
    padding-bottom: 20px;
  }
`;

const SocialContainer = styled(StyledLinkContainer)`
  border-right: none;
  width: 33%;
  @media (max-width: 800px) {
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colours.baseWhite};
    padding-bottom: 20px;
  }
`;

const OpeningHoursContainer = styled(StyledLinkContainer)`
  flex-direction: column;
  padding-right: 40px;
  line-height: 2rem;
  width: 33%;
  @media (max-width: 800px) {
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.colours.baseWhite};
    padding-bottom: 20px;
  }
`;

const Today = styled.li`
  color: ${(props) => props.theme.colours.pink};
`;

const today = moment().isoWeekday();

const queryClient = new QueryClient();

const Footer = ({ social }) => {

    const { isLoading, error, data } = useQuery('openingTimes', async () => {
      return client.fetch(
        groq`*[_type == "openingTimes"]{
          _id,
          day,
          open,
          close,
          closed,
        }`
      );
    });
  
    if (isLoading) {
      return null;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  
    // Sort posts according to daysOfWeek order
    const orderedPosts = data ? [...data].sort((a, b) => daysOfWeek.indexOf(a.day) - daysOfWeek.indexOf(b.day)) : [];
  
  return (
    <FooterStyle>
      <SignUpContainer>
        <Legal />
      </SignUpContainer>
      <OpeningHoursContainer>
        <li>
          <strong>Opening Hours</strong>
        </li>
        {orderedPosts && orderedPosts.length > 0 ? (
          <ul>
            {orderedPosts.map((post, idx) => {
              // moment.js isoWeekday: 1 (Monday) ... 7 (Sunday)
              // daysOfWeek: ['monday', ... 'sunday']
              const isToday = today === idx + 1;
              const DayComponent = isToday ? Today : 'li';
              return (
                <DayComponent key={post._id}>
                  <strong>{post.day.charAt(0).toUpperCase() + post.day.slice(1)}</strong>:{' '}
                  {post.closed ? 'Closed' : `${post.open} - ${post.close}`}
                </DayComponent>
              );
            })}
          </ul>
        ) : (
          <p>No opening times available.</p>
        )}
      </OpeningHoursContainer>
      <SocialContainer>
        {social.map(({ title, image, link, social }) => {
          return (
            social && (
              <a href={link} target="_blank" key={title}>
                <StyledSocialLink>
                  <SocialLogo src={image} />
                </StyledSocialLink>
              </a>
            )
          );
        })}
      </SocialContainer>
    </FooterStyle>
  );
};

// Wrap the page with QueryClientProvider at the top level
function FooterComponent( { social }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Footer social={social} />
    </QueryClientProvider>
  );
}

export default FooterComponent;
