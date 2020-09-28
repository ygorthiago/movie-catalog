import styled from 'styled-components';

export const SearchInputSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 80px;
  margin-bottom: 30px;

  input {
    flex: 1;
    width: 100%;
    height: 50px;
    border-radius: 30px 0 0 30px;
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

    @media (max-width: 550px) {
      font-size: 16px;
    }
  }

  button {
    border-radius: 0 30px 30px 0;
    width: 30%;
    border: none;
    height: 52px;
    font-family: Abel;
    font-size: 24px;
    background-color: #116193;
    color: #fff;
    outline: none;
    cursor: pointer;
    transition: opacity 0.5s;

    &:hover {
      opacity: 0.9;
    }
  }
`;
