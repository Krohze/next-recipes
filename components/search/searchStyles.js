import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 30px auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-right: 10px;
  border: none;
  border: 1px solid ${(props) => props.theme.color.main};
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  text-align: center;
  border-radius: 3px;
  color: ${(props) => props.theme.color.dark};
  &::placeholder {
    color: ${(props) => props.theme.color.dark};
    font-weight: 100;
  }
  :focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.color.dark};
  }
  :focus::placeholder {
    color: transparent;
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.main};
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 700;
  &:hover {
    background-color: ${(props) => props.theme.color.dark};
    cursor: pointer;
  }
`;
