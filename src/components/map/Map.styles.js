import React from 'react';
import styled from 'styled-components';

export const StyledMap = styled.div`
	height: 400px;
	width: 650px;
	background:url('https://maps.googleapis.com/maps/api/staticmap?size=650x400&maptype=roadmap&key=AIzaSyCSQ0lWOA3almv5_l-HgfDoTZwgHDpsXfM&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7C104,+broad+street,+staple+hill,+bristol') no-repeat center center;
	border: 1px solid #ccc;
	box-shadow: 0 0 14px 3px rgba(0, 0, 0, 0.2);
	cursor: pointer;
		// https://maps.googleapis.com/maps/api/staticmap?center=51.48074330,-2.49908220&amp;zoom=16&amp;size=650x288&amp;format=png&amp;key=AIzaSyAqyFvGUF0iYGd1h2QUQiG_HPT7AA4JaUc)
`;
	
