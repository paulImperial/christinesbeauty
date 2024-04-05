import styled from 'styled-components';

export const StyledLegalList = styled.ul`
    list-style-type: square;
    color: ${(props) => props.theme.colours.pink};
`;

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colours.baseBlack};
  font-size: 1rem;

  &:hover {
    color: ${(props) => props.theme.colours.baseMediumGrey};
  }
`;



