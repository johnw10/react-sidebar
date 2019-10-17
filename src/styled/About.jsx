import styled from "styled-components";

export const Styledp = styled.p`
  margin: 50px 60px 20px auto;
  font-size: 1.2rem;

  @media (max-width: 968px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Styledli = styled.li`
  color: #fa5738;
  margin-bottom: 20px;
  border-bottom: 1px dotted blue;
  padding-bottom: 10px;
`;

export const Styledul = styled.ul`
  list-style: none;
  margin-top: 40px;
  padding: 0px;
`;

export const Styledh1 = styled.h1`
  font-size: 3rem;

  @media (max-width: 968px) {
    text-align: center;
    border-bottom: 4px solid black;
    padding-bottom: 5px;
  }
`;

export const Styledh2 = styled.h2`
  margin-top: 40px;

  @media (max-width: 968px) {
    text-align: center;
    margin-top: 9rem;
  }
`;
