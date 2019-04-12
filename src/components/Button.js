import styled from 'styled-components';


// use of style component
export const ButtonContainer = styled.button`
  text-transform: capitalize; //capatilized the text
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue); //access the color variable from the index.css
  color: var(--lightBlue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover{
    background: var(--lightBlue);
    color: var(--manBlue);
  }
  $:focus{
    outline:non;
  }
`;