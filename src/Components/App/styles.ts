import styled from "styled-components";

import bgImage from "../../assets/library-bg.jpg";

export const Container = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;

  .title-img {
    display: block;
    margin: 0 auto;
    width: 80%;
    max-width: 700px;
  }
`;