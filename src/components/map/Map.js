import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { StyledMap, StyledContact, StyledImage, StyledContactText, StyledContactContainer } from './Map.styles';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: 51.48084,
  lng: -2.50043,
};

// const mapStyle = {
//   height: '300px',
//   width: '1px!important',
//   minWidth: '100%!important',
// };

const googleKey = process.env.NEXT_PUBLIC_GOOGLE_API;

const googleMapSource = `https://www.google.com/maps/embed/v1/view?center=51.48084,-2.50043&zoom=18&key=${googleKey}`;

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
    </StyledMap>
  );
};

Map.defaultProps = {};

export default React.memo(Map);
