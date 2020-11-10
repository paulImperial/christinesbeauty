import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {
  StyledMap,
  StyledContact,
  StyledImage,
  StyledContactText,
  StyledContactContainer,
  BodyText,
} from './Map.styles';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: 51.48084,
  lng: -2.50043,
};

const googleKey = process.env.NEXT_PUBLIC_GOOGLE_API;

const googleMapSource = `https://www.google.com/maps/embed/v1/place?q=51.48065,-2.50070&zoom=15&key=${googleKey}`;

const Map = () => {
  return (
    <StyledMap>
      <StyledContact>
        <StyledContactContainer>
          <StyledImage src="/images/icons/phone.svg" />
          <StyledContactText>07895 132474</StyledContactText>
        </StyledContactContainer>
        <StyledContactContainer>
          <StyledImage src="/images/icons/location2.svg" />
          <StyledContactText>104, Broad Street, Staple Hill, Bristol, BS16 5NJ</StyledContactText>
        </StyledContactContainer>
      </StyledContact>
      <iframe style={containerStyle} src={googleMapSource}></iframe>
      <BodyText>
        The salon is easy to reach, with the bus stopping just a few steps away, and being just a couple of minutes’
        drive from the Ring Road. Based in a converted outbuilding of my family home, with separate access, the location
        provides both privacy and convenience, all at ground level, with free onsite parking usually available.
      </BodyText>
    </StyledMap>
  );
};

Map.defaultProps = {};

export default React.memo(Map);
