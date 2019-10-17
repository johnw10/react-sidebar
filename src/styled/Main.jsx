import styled from "styled-components";

export default styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 120px auto 0 auto;
  max-width: 1200px;

  @media (max-width: 968px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 40px 0 40px;
  }
`;
