import React from 'react';
import PropTypes from 'prop-types';
import { Container, Input, Button } from './SignUp.styles';

const SignUp = ({ ...props }) => {
  return (
    <Container>
      <p>Enter you email address and sign up to hear about special offers and more exciting promotions.</p>
      <Input type="email" required></Input>
      <Button type="submit">Sign Up</Button>
    </Container>
  );
};

SignUp.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

SignUp.defaultProps = {
  children: null,
  label: null,
};

export default SignUp;
