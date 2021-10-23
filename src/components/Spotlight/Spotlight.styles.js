import styled from 'styled-components';
import { rem } from 'polished';

export const SpotlightContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

export const SpotlightBox = styled.div`
  background-color: ${(props) => props.theme.colours.shadeLightestGrey};
  margin: 1rem 1rem;
  padding: 1rem;
  background: url('${(props) => props.externalLink}') no-repeat center center;
  background-size: 15%;
  background-position: right top;
  border: 1px solid transparent;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 12px 1px;
  }
`;

export const SpotlightImage = styled.div`
  position: relative;
  max-width: 100%;
  width: 180px;
  height: 60px;
  margin: 1rem;
  background: url('${(props) => props.image}') no-repeat center center;
  background-size: contain;
  border-radius: ${rem('6px')};
  padding: 10px;
  background-color: ${(props) => (props.dark ? '#000' : '#fff')};
`;
