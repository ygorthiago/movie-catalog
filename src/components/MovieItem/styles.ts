import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieCard = styled(Link)`
  display: grid;
  background-color: #ebebeb;
  text-decoration: none;
  margin-bottom: 40px;

  &:hover{
    outline: 3px solid #0b4c75;
  }

  @media (min-width: 850px) {
    display: flex;
    justify-content: space-between;    
  }
`;

export const PosterContainer = styled.div`
  @media (min-width: 850px) {
    width: 30%;
  }
`;

export const PosterImage = styled.img`
  display: none;

  @media (min-width: 850px) {
    display: block;
    width: 100%;
    height: 100%;
    }
`;

export const BackdropImage = styled.img`
  display: flex;
  width: 100%;
  height: 30%;
  @media (min-width: 850px) {
    display: none;
    }
  
`;


export const MovieDescriptionContainer = styled.div`
  background-color: #ebebeb;  
  width: 100%;

  header {
    display: grid;
  } 
`;

export const MovieTitle = styled.div`
  height: 60px;
  background-color: #116193;

  h1 {
  margin-left: 2%;
  margin-top: 10px;
  width: 80%;
  font-family: Abel;
  color: #00e8e4;
  font-weight: lighter;
  font-size: 21px;
  @media (min-width: 850px) {
      margin-left: 100px;
      font-size: 27px
    }
  @media (min-width: 890px) {
      margin-left: 100px;
      font-size: 30px
    }
  }

`;


export const MovieRating = styled.div`
  margin-top: 28px;
  margin-left: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 7px solid #00e8e4;
  background-color: #116193;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;

  &:before {
  background: none;
  border: 4px solid #116193;
  content: "";
  display: block;
  position: absolute;
  pointer-events: none;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  }

  span {
    color: #00e8e4;
    font-size: 20px;
    font-family: Abel;
  }

  @media (min-width: 880px) {
      margin-left: 5px;
      font-size: 30px
    }

  @media (min-width: 850px) {
    margin-left: 20px;
  }
`;

export const Sinopse = styled.main`
  margin: 20px 20px;
  font-family: Lato;
  color: #555555;
  font-size: 18px;
  font-weight: bold;
`;

export const ReleaseDate = styled.div`
  margin-left: 60%;
  
  span {
    font-family: Abel;
    color: #969696;
    font-size: 18px;
  }

  @media (min-width: 850px) {
    margin-left: 100px;
  }
`;

export const MovieCategories = styled.footer`
    margin: 50px 20px;
    width: 90%;  
`;

export const Category = styled.span`
  padding: 5px;
  border: 1px solid #116193;
  margin-right: 10px;
  border-radius: 40px 40px; 
  background-color: #fff;
  color: #116193;
  text-decoration: none;
  font-family: Abel;
  font-weight: bold;
`;