import styled from 'styled-components';

export const PaginationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const PageNumber = styled.div<{isSelected: boolean}>`
  text-decoration: none;
  list-style-type:none;
  font-family: Abel;
  font-size: 25px;
  color: #116193;
  width: 20px;
  height: 20px;
  cursor: pointer;
  ${props => props.isSelected && {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#116193',
    padding: '10px',    
    borderRadius:  '50%',
    border: '3px solid #00e8e4', 
    color: '#00e8e4',
    boxShadow: '0 0 0 2px #116193',
    }    
  }  

  &:before {
    ${props => props.isSelected && {
      background: 'none',
      border: '4px solid #116193',
      padding: '20px',
    }}}
`;