import React from 'react';
import { StyledMap, StyledContact, StyledImage, StyledContactText, StyledContactContainer } from './Map.styles';

const mapStyle = {
  height: '300px',
  width: '1px!important',
  minWidth: '100%!important',
};

const Map = () => {

  return (
    <StyledMap>
      <StyledContact>
        <StyledContactContainer>
          <StyledImage src="/images/icons/phone.svg" />
          <StyledContactText>01222 2222222</StyledContactText>
        </StyledContactContainer>
        <StyledContactContainer>
          <StyledImage src="/images/icons/location2.svg" />
          <StyledContactText>104, Broad Street, Staple Hill, Bristol, BS16 5NJ</StyledContactText>
        </StyledContactContainer>
      </StyledContact>
      <iframe
        style={mapStyle}
        src="https://www.google.com/maps/embed/v1/place?q=104%2C%20broad%20street%2C%20staple%20hill%2C%20bristol%2C%20bs16%205nj&key=AIzaSyAB3MMqT3qque02waQxy0VjA7d5iqxIxN0"
      ></iframe>
    </StyledMap>
  );
};

Map.propTypes = {};

Map.defaultProps = {};

export default Map;
