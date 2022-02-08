import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.color.contrast};
  color: ${(props) => props.theme.color.dark};
`;
