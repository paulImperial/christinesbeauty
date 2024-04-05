import React from 'react';
import { StyledLegalList, StyledAnchor } from './Legal.styles';

const Legal = () => {
  return (
<StyledLegalList>        
    <li><StyledAnchor href="/images/documents/Christines Beauty Terms and Conditions.pdf" target="_blank">Terms and Conditions</StyledAnchor></li>
    <li><StyledAnchor href="/images/documents/Cancellation, Booking Fee and No Show Policy.pdf" target="_blank">Cancellation, Rearrangements and Booking Deposit Policy</StyledAnchor></li>
    <li><StyledAnchor href="/images/documents/Christine's Beauty Privacy Notice.pdf" target="_blank">Privacy Notice</StyledAnchor></li>
</StyledLegalList>
  );
};

export default Legal;
