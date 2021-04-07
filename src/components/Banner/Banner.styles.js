import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* border: 1px solid ${(props) => props.theme.colours.pink}; */
  padding: 1rem;
  box-shadow: ${(props) => props.theme.colours.pink} 0 0 38px 1px;
  border-radius: 15px;
`;

export const BannerHeader = styled.h2`
  font-size: 2.25rem;
  font-weight: 100;
`;

export const BannerText = styled.p``;

export const BannerLink = styled.a``;

export const BannerImage = styled.img`
  display: inline-block;
  max-width: 100%;
`;
