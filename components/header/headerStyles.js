import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  height: 50px;
  z-index: 1;
  margin-bottom: 16px;
  border-bottom: 1px solid ${(props) => props.theme.color.contrast};
  background-color: white;
  color: ${(props) => props.theme.color.dark};
`;
