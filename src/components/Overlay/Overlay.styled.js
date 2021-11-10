import styled from 'styled-components';

const StyledOverlay = styled.div`
position:fixed;
top: 0;
left:0;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;

width:100%;
height: 100vh;
background-color: gray;
`;


const Text = styled.p`
width: 700px;
padding:30px;
background-color: #fff;
`;

const Label = styled.span`
  display: block;
  margin-top: 10px;
  padding: 5px;
  background-color: #fff;
  color: tomato;
  text-align: center;
  border: 3px solid black;
  cursor: pointer;
`

export {StyledOverlay,Text, Label};