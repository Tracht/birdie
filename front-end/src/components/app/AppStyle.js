import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    font-family: sans-serif;
    > div {
      height: 100%;
    }
  }
`;

export const Logo = styled.img`
  width: 200px;
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative; 
  /* top: 50%; */
  /* left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 50%); */
  /* transform: translate(-50%, 50%); */
`;

export const Title = styled.h1`
  font-family: sans-serif;
  font-size: 24px;
  margin-bottom: 8px;
`;

export const SubTitle = styled.h3`
  font-family: sans-serif;
  font-size: 18px;
  margin-top: 0;
`;