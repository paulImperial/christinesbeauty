import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const StyleAccordion = styled(Accordion)`
  .accordion {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin: 1rem 0;
  }

  .accordion__item {
    margin: 1rem 0;
  }

  .accordion__item + .accordion__item {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .accordion__button {
    background-color: ${(props) => props.theme.colours.pink};
    color: ${(props) => props.theme.colours.black};
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
  }

  .accordion__button:hover {
    background-color: ${(props) => props.theme.colours.pink};
    outline: none;
  }

  .accordion__button:before {
    display: inline-block;
    content: '';
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
  }

  .accordion__button[aria-expanded='true']::before,
  .accordion__button[aria-selected='true']::before {
    transform: rotate(45deg);
  }

  .accordion__panel {
    padding: 20px;
    animation: fadein 0.35s ease-in;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
    outline: none;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const StyledAccordion = ({prices}, ...props) => {
  return (
    <StyleAccordion>
	{prices.map(price => (
		<AccordionItem>
		  <AccordionItemHeading>
			<AccordionItemButton>{price.title}</AccordionItemButton>
		  </AccordionItemHeading>
		  <AccordionItemPanel>
			<p>{price.blurb}</p>
			{price.services.map((service) => {
			  return (
				<Fragment>
				  <p>{service.treatment}</p>
				  <p>{service.price}</p>
				</Fragment>
			  );
			})}
		  </AccordionItemPanel>
		</AccordionItem>
	))}
    </StyleAccordion>
  );
};

export default StyledAccordion;
