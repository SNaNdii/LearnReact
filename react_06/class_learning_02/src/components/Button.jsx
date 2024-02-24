import styled from "styled-components";

// function Button(){
const Button = styled.button`
  border: 0px;
  background: ${({ theme }) => (theme === "dark" ? "#45171d" : "#fecea8")};
  color: ${({ theme }) => (theme === "light" ? "#45171d" : "#fecea8")};
  height: 40px;
  width: 130px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;


  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

// }

export default Button;
