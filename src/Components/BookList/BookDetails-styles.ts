import { styled } from 'styled-components'

export const DetailsContainer = styled.div`
width: 100%;
max-height: 0;
overflow: hidden;
margin: 0;
padding: 0;
transition-duration: 0.5s;

&.visible {
  max-height: 6em;
}
`;