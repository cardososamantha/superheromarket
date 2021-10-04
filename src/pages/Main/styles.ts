import styled from "styled-components";
import defaultAvatar from "../../assets/default_avatar.png";

interface ButtonProps {
  color?: string;
}

export const Container = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px;

  h1 {
    width: 100%;
    max-width: 1200px;
    color: #fff;
    text-align: left;
    font-size: 48px;
    font-family: 'Anton', sans-serif;
    font-style: italic;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #000;
  }
`;

export const SearchContainer = styled.div`
  height: 64px;
  width: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  overflow: hidden;
  -webkit-transform: skew(-10deg); 
      -ms-transform: skew(-10deg); 
          transform: skew(-10deg); 

  input {
    font-size: 20px;
    background: transparent;
    padding: 8px 24px;
    height: 100%;
    flex: 1;
  }

  button {
    width: 72px;
    height: 100%;
    background: #fff;
    color: #fff;
  }
`;

export const HeroesListContainer = styled.div`
  width: 100%;

  ul {
    margin-top: 40px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-basis: 21%;
  }
`;

export const HeroItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  margin: 48px 64px;
  width: 216px;
  height: 400px;
  transition: 0.2s;
  position: relative;
  -webkit-transform: skew(-10deg);
      -ms-transform: skew(-10deg);
      transform: skew(-10deg); 
      transform-origin: bottom left;

  a {
    width: 100%;
    height: 75%;
    overflow: hidden;
    transition: 0.2s;

    &:hover {
      filter: grayscale(60%);
    }

    img {
      margin-left: 20px solid transparent;
      height: 100%;
      width: 100%;
      object-fit: cover;
      border: 7px solid #fff;
      outline: 5px solid black;
      outline-offset: -.3rem;
    }


  }

  span {
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-size: 24px;
    margin: 8px 0;
    width: 100%;
    font-family: 'Anton', sans-serif;
    font-style: italic;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #000;
  }
`;

export const Button = styled.button<ButtonProps>`
  background: ${(props) => props.color ?? "#4272a6"};
  text-transform: uppercase;
  font-weight: bold;
  height: 32px;
  color: #fff;
  width: 100%;
  margin-top: 4px;
  transition: 0.2s;
  -webkit-transform: skew(-10deg);
      -ms-transform: skew(-10deg);
          transform: skew(-10deg); 
    border: 3px solid #000;
    outline: 2px solid #fff;
    outline-offset: -.3rem;

  &:hover {
    opacity: 0.7;
  }
`;
