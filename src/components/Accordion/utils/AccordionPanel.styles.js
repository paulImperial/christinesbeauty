import styled from 'styled-components';
import { rem } from 'polished';

export const StyledAccordionPanel = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledImage = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background: url('${(props) => props.image}') no-repeat 50% 50%;
	border-radius: ${rem('6px')};
	box-shadow: 0 1px 15px 1px rgba(0,0,0,0.2);
	max-width: 500px;
	max-height: 500px;
	filter: blur(10px);
	@media (max-width:850px){
		display: none;
	}
`;

export const StyledTable = styled.table`
  display: flex;
  flex-flow: column nowrap;
  font-size: 1rem;
  margin: 0.5rem;
  line-height: 2;
  border: 1px solid ${(props) => props.theme.colours.pink};
  flex: 1 1 auto;

  th {
    font-weight: 100;
    background-color: ${(props) => props.theme.colours.pink};
    font-size: 1.25rem;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row nowrap;
  }

  th > td {
    white-space: normal;
    justify-content: center;
  }

  tr {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    border-bottom: 1px solid ${(props) => props.theme.colours.pink};
  }

  /* tr:nth-of-type(even) {
    background-color: #f2f2f2;
  }

  tr:nth-of-type(odd) {
    background-color: #ffffff;
  } */

  td {
    display: flex;
    flex-flow: row;
    flex-grow: 1;
    flex-basis: 0;
    padding: 0.5em;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0px;
    justify-content: center;
    @media (max-width: 650px) {
      justify-content: left;
    }
  }
`;

export const StyledBlurb = styled.div`
  display: inline-block;
  padding: 30px;
  margin-top: 0;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.14);
  height: max-content;
  width: 100%;
  @media (max-width: 600px) {
    padding: 20px 10px 20px 10px;
  }
`;
