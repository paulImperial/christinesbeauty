import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CameoContainer = styled.div`
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
	height: 200px;
	width: 200px;
	border-radius: 60%;
	overflow: hidden;
	border-width: 2px;
	border-style: solid;
	border-color: rgb(238, 238, 238);
	border-image: initial;
	position: absolute;
	top: -50px;
	right: 0;
	@media (max-width: 800px){
		display: none;
	}
`;

const Image = styled.div`
height: 200px;
width: 200px;
	background-color: #fff;
	z-index: 1;
	color: rgb(37, 37, 37);
	width: 100%;
	display: flex;
	justify-content: space-around;
	-webkit-box-align: center;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	position: relative;
	background: url('${props => props.image}') no-repeat 30%;
	background-size: cover;
	overflow: hidden;
	border: 5px solid #fff;
	background-color: white;
  box-shadow: rgba(0, 0, 0, 0.53) 0px 0px 12px, rgba(0, 0, 0, 0.52) 0px 0px 12px;
  border-radius: 60%;
  overflow: hidden;
  border-width: 5px;
  border-style: solid;
  border-color: rgb(238, 238, 238);
  border-image: initial;
`;

const Cameo = ({ image }) => {
  return (
		<CameoContainer>
			<Image image={image} alt={'Christine'} />
		</CameoContainer>

  );
};

Cameo.propTypes = {
  image: PropTypes.string,
};

export default Cameo;
