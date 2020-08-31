import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #116193;
`;

export const HeaderTitle = styled(Link)`
  font-family: Abel;
  font-size: 45px;
  color: #00e8e4;
  font-weight: lighter;
  text-decoration: none;
`;
