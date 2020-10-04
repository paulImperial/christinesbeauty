import styled from 'styled-components';

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colours.shadeLightestGrey};
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 14px 5px;
`;

export const BannerHeader = styled.h2`
  font-size: 2.25rem;
  font-weight: 100;
`;

export const BannerText = styled.p``;

export const BannerLink = styled.a``;

export const BannerImage = styled.img``;
