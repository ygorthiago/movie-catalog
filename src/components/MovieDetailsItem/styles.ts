import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDetailsContainer = styled.article` 
        
  hr{
    border: 1px solid #00e8e4;
    background-color: #00e8e4;
  }
  section, footer {
    margin: 20px 30px;
    h1 {
    font-family: Abel;
    color: #116193;
    font-size: 20px;
    padding: 0px;
    height: 10px;
    }
  }
`;

export const BackButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-family: Abel;
  font-weight: bold;
  font-size: 20px;
  color: #116193;
  width:130px;
  padding: 20px;
  background-color: none;
`;

export const Main = styled.main`
  background-color: #f2f2f2; 
  display: flex;
  justify-content: space-around;
  height: auto;
`;

export const Datas = styled.div`
  width: 100%;
`

export const DetailsHeader = styled.header`
  background-color: #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-family: Abel;
  h1{
    margin-left: 30px;
    color: #116193;
    font-size: 20px;
    @media(min-width: 800px) {
      font-size: 30px;
    }
  }
  span{
    margin-right: 20px;
    color: #959595;
  }
`;

export const SinopseSection = styled.section`

  p {
    font-family: Lato;
    color: #555555;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const InformationSection = styled.section `

`;

export const InformationList = styled.ul`
  display: grid;
  justify-content: left;
  align-items: left;
  grid-template-columns: repeat(6, 1fr);
  list-style: none;
  padding: 0px;
  position: initial;
  margin-bottom: 80px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 20px;
  }
`;

export const InformationItem = styled.li`
  
  flex-direction: column;
  padding-top: 0px;
  text-align: center;
  padding-right: 10px;
  margin-bottom: 10px;
  h3 {
    font-family: Abel;
    font-size: 18px;
    color: #116193;  
    margin: 0px;
  }
  span {
    text-align: center;
    font-family: Lato;
    font-size: 14px;
    color: #555555;
    font-weight: bold;    
  }
`;

export const FooterSection = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export const GenreList = styled.div`
  display: flex;  
  grid-template-columns: repeat(4, 1fr);
  height: 40px;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr)
  }
  @media(max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);    
  }
`;

export const GenreItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 20px;
  width: auto;
  padding: 5px;
  border: 1px solid #116193;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 40px 40px; 
  background-color: #fff;
  color: #116193;
  text-decoration: none;
  font-family: Abel;
  font-weight: bold;
  font-size: 16px;
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

export const MovieRating = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  border: 10px solid #00e8e4;
  background-color: #116193;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 20px;
  &:before {
  background: none;
  border: 4px solid #116193;
  content: "";
  display: block;
  position: absolute;
  pointer-events: none;
  width: 112px;
  height: 111px;
  border-radius: 50%;
  }

  span {
    color: #00e8e4;
    font-size: 35px;
    font-family: Abel;
  }
`;

export const PosterContainer = styled.div` 
  @media (min-width: 950px) {
    width: 500px;
  }
`;

export const PosterImage = styled.img`
  display: none;

  @media (min-width: 750px) {
    display: block;
    width: 100%;
    height: 100%;
    }
`;

export const BackdropImage = styled.img`
  width: 100%;
  height: 30%;
  @media (min-width: 750px) {
    display: none;
    }
`;


export const VideoContainer = styled.div`
  margin-top: 40px;
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;