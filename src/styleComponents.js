import { buildQueries } from '@testing-library/react'
import styled from 'styled-components'




export const Button = styled.button`
height: 50px;
width: 20%;
color: black;
background-color: #588E89; 
background-image: linear-gradient(90deg, #588E89, lightpink);
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
margin-top: 20px;
font-weight: bold;
border-radius: 10px;
margin-bottom: 20px;
text-align: center;
`

export const Paragraph = styled.p`
font-family: Arial, Helvetica, sans-serif;
font-size: 15px;
margin-top: 30px;
color: black;
text-align: center;
font-weight: bold;
margin-bottom: 30px;
`

export const H1 = styled.h1`
/* Set the background color */
background: linear-gradient(90deg, #588E89 , red);
/* Mask the color to the text, and remove the rest  */
-webkit-background-clip: text;
/* Make the text fill color value transparent so the masked background color comes through */
-webkit-text-fill-color: transparent;
font-family: Arial, Helvetica, sans-serif;
font-size: 45px;
margin-top: 40px;
font-weight: bold;
margin-bottom: 40px;
text-align: center;
`

export const H2 = styled.h2`
/* Set the background color */
background: linear-gradient(90deg, #A9F1DF , #FFBBBB );
/* Mask the color to the text, and remove the rest  */
-webkit-background-clip: text;
/* Make the text fill color value transparent so the masked background color comes through */
-webkit-text-fill-color: transparent;
font-family: Arial, Helvetica, sans-serif;
font-size: 40px;
margin-top: 30px;
font-weight: bold;
margin-bottom: 30px;
text-align: center;
`

export const H3 = styled.h3`
/* Set the background color */
background: linear-gradient(90deg, #588E89, #dd4c4f);
/* Mask the color to the text, and remove the rest  */
-webkit-background-clip: text;
/* Make the text fill color value transparent so the masked background color comes through */
-webkit-text-fill-color: transparent;
font-family: Arial, Helvetica, sans-serif;
font-size: 35px;
margin-top:30px;
font-weight: bold;
margin-bottom: 30px;
text-align: center;
`

export const H4 = styled.h4`
/* Set the background color */
background: linear-gradient(90deg, #588E89, #dd4c4f);
/* Mask the color to the text, and remove the rest  */
-webkit-background-clip: text;
/* Make the text fill color value transparent so the masked background color comes through */
-webkit-text-fill-color: transparent;
font-family: Arial, Helvetica, sans-serif;
font-size: 30px;
margin-top:30px;
font-weight: bold;
margin-bottom: 30px;
text-align: center;
`

export const UL = styled.ul`
list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: black;
  position: fixed;
  top: 0;
  width: 100%;
`

export const LI = styled.li`
float: right;
`

export const A = styled.a`
display: block;
background: linear-gradient(90deg, #588E89, #dd4c4f);
/* Mask the color to the text, and remove the rest  */
-webkit-background-clip: text;
/* Make the text fill color value transparent so the masked background color comes through */
-webkit-text-fill-color: transparent;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 20px;
`


export const INPUT = styled.input.attrs(props => ({
    type: "text",
    size: props.size || "1em",
  }))`

`

// export const Form = styled.