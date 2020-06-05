import React, { Fragment } from 'react';
import styled from 'styled-components';
import { StyledAccordionPanel, StyledImage, StyledTable, StyledField } from './AccordionPanel.styles';

const AccordionPanel = props => {

	return (
		<StyledAccordionPanel>
			{props.children}
		</StyledAccordionPanel>
	)
}

export default AccordionPanel;
