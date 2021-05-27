import React, { Component } from 'react';
import {lightTheme, darkTheme, device} from '../theme';
import styled from 'styled-components';

export const LogoSVG = styled.svg`
    width: 200px;
	height: auto;
	float: left;
	margin-top:20px;
	@media ${device.tablet}{
		width: 130px;
	}
`;

export default class Logo extends Component {
    render(){
        const theme = this.props.theme==='dark'?lightTheme: darkTheme;
        return (
					<a href="/ajf013/#/">
					</a>
				);
    }
}