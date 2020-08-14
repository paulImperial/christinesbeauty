import React, { Fragment, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import AccordionPanel from '../Accordion/utils/AccordionPanel';
import { StyledAccordionPanel, StyledImage, StyledTable, StyledBlurb } from '../Accordion/utils/AccordionPanel.styles';
import currency from '../../helpers/currency';

const StyleAccordion = styled(Accordion)`
  max-width: 1140px;
  display: flex;
  flex-direction: column;

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
    @media (max-width: 650px) {
      padding: 0;
    }
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

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  width: 100%;
`;

const SmallText = styled.p`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 300;
`;

const StyledAccordion = ({ prices, ...props }) => {
  const myRef = useRef(null);

  const { name } = props.preExpand;

  useEffect(
    (myRef) => {
      window.scrollTo(0, 0);
      console.log('fired useEffect');
    },
    [myRef]
  );

  return (
    <StyleAccordion allowMultipleExpanded={false} preExpanded={name} allowZeroExpanded={true}>
      {prices.map((price) => (
        <AccordionItem key={price.id} id={price.id} uuid={price.id}>
          <AccordionItemHeading>
            <AccordionItemButton>{price.title}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel ref={myRef}>
            <AccordionPanel>
              <StyledImage image={price.image} />
              <StyledInfo id={price.id}>
                {price.blurb && <StyledBlurb>{price.blurb}</StyledBlurb>}
                <StyledTable>
                  <tr>
                    <th>Treatment</th>
                    <th>Price</th>
                  </tr>
                  {price.services.map((service) => {
                    return (
                      <tr>
                        <td>
                          {service.treatment} <br />
                          {service.extraInfo}
                        </td>
                        <td>
                          {currency(service.price)} {service.time && <Fragment>for {service.time}</Fragment>}{' '}
                        </td>
                      </tr>
                    );
                  })}
                </StyledTable>
                <SmallText>{price.disclaimer}</SmallText>
              </StyledInfo>
            </AccordionPanel>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </StyleAccordion>
  );
};

export default StyledAccordion;
