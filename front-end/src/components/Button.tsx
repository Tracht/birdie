import styled from 'styled-components';

const Button = styled.button`
  color: mediumslateblue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid mediumslateblue;
  border-radius: 3px;

  &:hover {
     // Buton when hovered
    background-color: mediumslateblue; 
    color: white;
  }

`;

export default Button;