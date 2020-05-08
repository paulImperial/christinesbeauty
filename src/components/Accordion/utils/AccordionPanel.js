import React, { Fragment } from 'react';
import styled from 'styled-components';
import { StyledAccordionPanel, StyledImage, StyledTable, StyledField } from './AccordionPanel.styles';

const AccordionPanel = () => {

	return (
		<StyledAccordionPanel {...props}>
			<StyledImage image={image}></StyledImage>
			<StyledTable>
				<StyledField></StyledField>
			</StyledTable>
		</StyledAccordionPanel>
	)
}

export default AccordionPanel;
