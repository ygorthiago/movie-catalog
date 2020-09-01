import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  display: inline;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f2f2f2;
  h1 {
    font-family: Abel;
    font-size: 128px;
    color: #116193;
  }
  h2 {
    font-family: Abel;
    font-size: 48px;
    color: #116193;
  }
`;

export const BackButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: Abel;
  font-weight: bold;
  font-size: 20px;
  color: #116193;
  width:100vw;
`;