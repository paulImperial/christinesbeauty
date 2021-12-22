import React, { Fragment, useRef, useEffect } from 'react';
import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import AccordionPanel from '../Accordion/utils/AccordionPanel';
import { StyledImage, StyledTable, StyledBlurb } from '../Accordion/utils/AccordionPanel.styles';
import currency from '../../helpers/currency';

const StyleAccordion = styled(Accordion)`
  max-width: 1140px;
  display: flex;
  flex-direction: column;

  .keepleft {
    text-align: left;
    justify-content: left;
  }

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
  const { name } = props.preExpand;

  const refs = prices.reduce((acc, price) => {
    acc[price.id] = useRef();
    return acc;
  }, {});

  const handleClick = (id) => {
    if (id === name) {
      console.log('the same');
      return null;
    }
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  useEffect(() => {
    if (name) {
      refs[name].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [name, refs]);

  return (
    <StyleAccordion preExpanded={name} allowZeroExpanded={true} allowMultipleExpanded={true}>
      {prices.map((price) => (
        <div ref={refs[price.id]} key={price.id} uuid={price.id}>
          <AccordionItem key={price.id} id={price.id} uuid={price.id} onClick={() => handleClick(price.id)}>
            <AccordionItemHeading key={price.id}>
              <AccordionItemButton>{price.title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <AccordionPanel>
                <StyledImage image={price.image} />
                <StyledInfo id={price.id}>
                  {price.blurb && <StyledBlurb>{price.blurb}</StyledBlurb>}
                  <StyledTable>
                    <thead>
                      <tr>
                        <th>Treatment</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {price.services.map((service) => {
                        return (
                          <tr key={service.treatment}>
                            <td className="keepleft">
                              {service.treatment}
                              {service.dagger && <sup>&nbsp;&dagger;</sup>} <br />
                              {service.extraInfo}
                            </td>
                            <td>
                              {currency(service.price)} {service.time && <Fragment>for {service.time}</Fragment>}{' '}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </StyledTable>
                  <SmallText>
                    {price.disclaimer} <sup>&dagger;</sup>Using hot wax
                  </SmallText>
                </StyledInfo>
              </AccordionPanel>
            </AccordionItemPanel>
          </AccordionItem>
        </div>
      ))}
    </StyleAccordion>
  );
};

StyledAccordion.defaultProps = {
  preExpand: {
    name: '',
  },
};

export default StyledAccordion;
