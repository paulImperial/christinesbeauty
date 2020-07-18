import React from 'react';
import { StyledMap, StyledContact, StyledImage, StyledContactText, StyledContactContainer } from './Map.styles';

const mapStyle = {
  height: '300px',
  width: '1px!important',
  minWidth: '100%!important',
};

const googleKey = process.env.NEXT_PUBLIC_GOOGLE_API;

const googleMapSource = `https://www.google.com/maps/embed/v1/view?zoom=15&center=51.4809132,-2.5003898&key=${googleKey}`;

51.4809132, -2.5003898;
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
      <iframe style={mapStyle} src={googleMapSource}></iframe>
    </StyledMap>
  );
};

Map.propTypes = {};

Map.defaultProps = {};

export default Map;
