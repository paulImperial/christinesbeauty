import React from 'react';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Card',
  component: Card,
};

export const Text = () => <Card onClick={action('clicked')}>Hello Button</Card>;


