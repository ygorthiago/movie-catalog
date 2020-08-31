import styled from 'styled-components';

export const SearchInputSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 80px;
  margin-bottom: 30px;

  input {
    width: 100%;
    height: 50px;
    border-radius: 30px;
    border: none;
    background-color: #ebebeb;
    color: #84aac2;
    font-family: Abel;
    padding-left: 40px;
    font-size: 20px;

    &:focus, input:focus{
    outline: none;
    }

    &::-webkit-input-placeholder {
      color: #84aac2;
    }
  
    &:-moz-placeholder { /* Firefox 18- */
      color: #84aac2;  
    }
  
    &::-moz-placeholder {  /* Firefox 19+ */
      color: #84aac2;  
    }
  
    &:-ms-input-placeholder {  
      color: #84aac2;  
    }
  }


`;
