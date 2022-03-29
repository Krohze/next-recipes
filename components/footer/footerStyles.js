import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.color.contrast};
  color: ${(props) => props.theme.color.dark};
  padding: 30px 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 5px;
`;

export const Link = styled.a`
  text-decoration: none;
  margin: 0 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.svg`
  width: 35px;
  height: 35px;
  color: ${(props) => props.theme.color.main};
  ${Link}:hover & {
    color: ${(props) => props.theme.color.dark};
  }
`;
