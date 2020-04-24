import { css } from 'styled-components';

const sizes = {
	smallMobile: 400,
	mobile: 590,
	smallTablet: 700,
	largeTablet: 800,
	desktop: 900,
};

export default Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
	   @media (max-width: ${sizes[label]}px) {
		  ${css(...args)};
	   }
	`
	return acc
 }, {})
