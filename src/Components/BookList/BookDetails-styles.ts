import { styled } from 'styled-components'

export const RootContainer = styled.div`
width: 100%;
max-height: 0;
overflow: hidden;
margin: 0;
padding: 0;
transition-duration: 0.5s;

th, td {
  border: 1px solid red;
}

&.visible {
  max-height: 6em;
}
`;