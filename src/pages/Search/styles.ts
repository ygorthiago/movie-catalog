import styled from 'styled-components';

export const Main = styled.main`
  margin: 10px auto;
  width: 90%;

  @media (min-width: 700px) {
      max-width: 1000px;
      margin: 10px auto;
  }
`;

export const Pagination = styled.div`
  display: flex;
  min-width: 500px;
  justify-content: center;
  align-items: center;
`;

export const PaginationButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationItem = styled.div`
  margin: 0 10px;
  font-family: Abel;
  color: #116193;
  font-weight: bold;
  font-size: 25px;
`;