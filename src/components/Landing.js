import React, { Component } from 'react';
import styled from 'styled-components';
import {device} from '../theme';
import StarButton from './StarButton';
import SocialMedia from './SocialMedia';
import {Fade} from 'react-reveal';
import Typewriter from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.css";

export const LandingDiv = styled.div`
					width: 60%;
					margin-top: 80px;
					justify-content: center;
					align-items: center;
					@media ${device.tablet} {
						margin-top: 60px;
						width: 95%;
					}
					padding-right: 10px;
					padding-left: 7px;
				`;

export const Title = styled.h1`
    font-family: "Google Sans Bold";
    text-align: center;
    font-size: 50px;
    letter-spacing:2px;
    line-height: 1.4;
    @media ${device.tablet}{
        font-size: 40px;
        letter-spacing: 1.5px;
        line-height: 1.4;
    }
`

export const Caption = styled.h3`
    font-family: "Google Sans Regular";
    width: 60%;
    margin: 0 auto;
    padding: 0;
    letter-spacing: 1.5px;
    line-height: 1.3;
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
	@media ${device.tablet}{
        width: 90%;
    }
`;

export default class Landing extends Component {
    render(){
        return (
					<LandingDiv>
						<Fade bottom duration="1500" distance="40px">
							{/* <Title>
								Hope You Find the Answers of All Your Questions Here!
							</Title> */}
							<h1 style={{paddingTop: '3rem', margin: 'auto 0', marginleft: '40px', color:'blueviolet'}}>
							<Typewriter 
								loop
								cursorcursorStyle="_"
								typeSpeed={80}
								deleteSpeed={40}
								delaySpeed={1000}
								words={['Hope you find the answers of All your Questions here!']}
								></Typewriter>

							</h1>
						</Fade>
						<Fade bottom duration="2500" distance="20px">
							<StarButton theme={this.props.theme} />
						</Fade>
						<Fade bottom duration="3000" distace="20px">
							<SocialMedia />
						</Fade>
						<Fade bottom duration="3500" distace="20px">
							<Caption>
								Follow me on social media and send me Questions that you don't
								find here.
							</Caption>
						</Fade>
					</LandingDiv>
				);
    }
}