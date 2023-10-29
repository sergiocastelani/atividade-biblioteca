import styled from "styled-components";

export const Container = styled.div`
  padding: 0 0 5em 0;

  > form {
    width: 80%;
    max-width: 500px;
    margin: 0 auto;
    padding: 1em;
    color: #eec4ff;
    background-color: #9542e1e8;
    border-radius: 0.5em;
    display: flex;
    flex-direction: column;
  }

  > form > .form-control {
    margin-bottom: 1em;
  }

  textarea {
    resize: vertical;
  }
`;