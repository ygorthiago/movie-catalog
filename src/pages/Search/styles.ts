import styled from 'styled-components';

export const Main = styled.main`
  margin: 10px auto;
  width: 90%;    

  @media (min-width: 700px) {
      max-width: 1000px;
      margin: 10px auto;
  }
`;

export const MovieNotFound = styled.h1`
  font-family: Abel;
  text-align: center;
  color: #116193;
`;
