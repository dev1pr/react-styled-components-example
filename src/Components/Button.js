import styled, { keyframes } from "styled-components";

const frames = keyframes`
from{
  transform: rotate(0deg)
}

to{
  transform: rotate(360deg)
}
`;

const Button = styled.button`
  background: red;
  &:hover {
    background: blue;
  }
  animation: ${frames} 2s linear infinite;
`;

export default Button;
