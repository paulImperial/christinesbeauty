import styled from 'styled-components';

// const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?size=650x400&maptype=roadmap&key=${googleKey}&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C104,+broad+street,+staple+hill,+bristol`

export const StyledMap = styled.div`
  display: flex;
  width: 100%;
  cursor: pointer;
  flex-direction: column;
`;

export const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.25rem 0;
  width: 100%;
`;

export const StyledImage = styled.img`
  display: inline-block;
  margin-bottom: 1.25rem;
  margin-right: 1rem;
`;

export const StyledContactText = styled.div`
  display: inline-block;
  font-weight: 300;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colours.pink};
`;

export const StyledContactContainer = styled.div`
  display: flex;
  justify-content: center;
`;
