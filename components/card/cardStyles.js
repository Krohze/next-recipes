import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  &:hover {
    transform: translate(-2px, -2px);
    transition: 0.1s;
    box-shadow: 5px 5px ${(props) => props.theme.color.contrast};
  }
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

export const Title = styled.h2`
  font-size: 28px;
  padding: 0px 24px 24px 24px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 700;
  padding: 8px 24px 8px 24px;
  color: ${(props) => props.theme.color.contrast};
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  color: ${(props) => props.theme.color.contrast};
  height: 16px;
  width: 16px;
  margin-right: 5px;
`;
