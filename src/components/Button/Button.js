import React from 'react';
import { PinkButton } from './Button.styles';

const Button = ({ children, onClick, ...props }) => (
    <PinkButton
        onClick={onClick}
        {...props}
    >
        {children}
    </PinkButton>
);

export default Button;