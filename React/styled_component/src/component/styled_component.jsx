/*
https://styled-components.com/ 

CSS for the <Component> Age

Styled-components is a popular CSS-in-JS library for React that lets 
you use tagged template literals to style your components. 
It removes the mapping between components and styles, meaning 
when you define your styles, you are actually creating a normal 
React component with those styles attached.


Install : npm install styled-components

use Import : import styled from 'styled-components'

create : 
const Myheading=styled.h1`
  normal-css
`;


*/

import React from 'react'
import styled from 'styled-components'

function Styled_component() {

    const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    background-color:red;
  `;


    const Basic = styled.button`
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    color:white;
    display:block;
    margin:0 auto;
    background-color:LightGray;
    `;
    
    const Btn_red = styled(Basic)`
    background-color:red;
  `;
    const Btn_green = styled(Basic)`
    background-color:green;
  `;
    const Btn_blue = styled(Basic)`
    background-color:blue;
  `;
    const Btn_orange = styled(Basic)`
    background-color:orange;
  `;

    const MyButton = styled.button`
    border:2px solid palevioletred;
    font-weight:bolder;
    border-radius:10px;
    padding:10px 35px;
    background:none;
    color:palevioletred;
    display:block;
    margin:0 auto;
    &:hover{
            background : palevioletred;
            color:white;
    }
`

    const Props_btn = styled.button`
/* Adapt the colors based on primary prop */
    background: ${props=>props.primary ? "palevioletred" : "White"} ;
    color: ${props=>props.primary ? "White" : "palevioletred" };
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    `;


    return (
        <div>
            <h1>Styled_component</h1>

            <Title>
                Hello i am Custome Styled Component
            </Title>

            <Basic>Basic Btn</Basic>
            <Btn_red>Red Button</Btn_red>
            <Btn_blue>Blue Button</Btn_blue>
            <Btn_green>Green Button</Btn_green>
            <Btn_orange>Orange Button</Btn_orange>

            <hr />

            <MyButton>My Button</MyButton>

            <hr />
            
            <Props_btn>Withaout Props</Props_btn>
            <Props_btn primary>Withaout Props</Props_btn>
        </div>
    )
}

export default Styled_component