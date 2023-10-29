import { styled } from 'styled-components'

export const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
max-height: 0;
overflow: hidden;
margin: 0;
padding: 0;
transition: 0.5s;
text-align: left;
background-color: #29004e;

&.visible {
  max-height: 13em;
  padding: 1em;
}

h4 {
  margin: 0; 
}

p {
  margin: 0;
  padding: 0 0 0.5em 1em;
}
`;