import { styled } from 'styled-components'

export const RootContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 0 5em 0;

  & > table {
    color: #a971ff;
    background-color: #2f203ce8;
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

export const ActionButtonsCell = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledButton = styled.button`
  color: #fff;
  background-color: #6822a9;
  border: none;
  border-radius: 0.2em;
  padding: 0.7em;
  margin: 0 0.5em;

  &:hover {
    background-color: #7423bf;
    cursor: pointer;
  }
`;
