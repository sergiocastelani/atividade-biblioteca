import { styled } from 'styled-components'

export const RootContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 0 5em 0;

  & > table {
    color: #eec4ff;
    background-color: #9542e1e8;
    border-radius: 0.5em;
    border-spacing: 0;
    border-collapse: separate;
    padding: 0;
  }

  & > table > thead > tr {
    font-size: 2em;
  }

  & > table > thead > tr > th {
    padding: 1em;
    border-bottom: 1px solid #eec4ff;
  }

  & > table > tbody > tr {
    text-align: center;
  }

  & > table > tbody > tr > td {
  }

  & > table > tbody > tr.book-line > td {
    padding: 1em;
    border-bottom: 1px solid #eec4ff;
  }

  & > table > tfoot > tr > td {
    text-align: center;
    padding: 1em;	
  }
`;

export const ButtonsCell = styled.div`
  display: flex;
`;