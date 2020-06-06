import React from 'react';
import { ThemeProvider } from 'styled-components';
import { rgba } from 'polished';
import media from './media';
import { createGlobalStyle } from "styled-components";

export const AppRoot = createGlobalStyle`
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css");
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');


html, body {
    margin: 0;
	padding: 0;
	overflow-x: hidden;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto' !important;
    text-align: left;
	cursor: default;
	font-weight: 300;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
	font-size: 18px;
	height: 100vh;
	text-rendering: optimizeLegibility;
	transition: all 0.5s ease;
	line-height: 1.6rem;
  }
`;

const boxShadow = color => `box-shadow: 0 10px 15px 4px ${rgba(color, 0.5)};`;

const theme = {
	...media,
	boxShadow,
	primaryDark: '#0D0C1D',
	primaryLight: '#EFFFFA',
	primaryHover: '#343078',
	mobile: '576px',
  colours: {
	baseWhite: '#ffffff',
	baseBlack: '#000000',
	baseDarkGrey: '#575755',
	baseMediumGrey: '#ddd',
	baseLightGrey: '#f7f7f7',
	baseLinkBlue: '#0076dc',
	baseLinkBlueAlt: '#0066dc',
	basePanelBg: '#fcf5f8',
	baseBackground: '#efefee',
	baseBackgroundBlue: '#f5f8fb',
	baseOutline: '#e1e1e1',
	borderBlue: '#a8b6d1',
	shadeLightestGrey: '#ededed',
	shadeLighterGrey: '#e6e6e6',
	shadeLightGrey: '#cccccc',
	shadeGrey: '#b3b3b3',
	shadeDarkGrey: '#999999',
	shadeDarkerGrey: 'gray',
	shadeDarkestGrey: '#0d0d0d',
	pink: rgba(216, 91, 145, 1),
	mildPink: rgba(216, 91, 145, 0.2),
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
	},
};

export const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
