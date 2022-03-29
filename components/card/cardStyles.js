import styled, { keyframes } from "styled-components";
import { Timer } from "@styled-icons/ionicons-outline/Timer";
import { Upvote } from "@styled-icons/boxicons-solid/Upvote";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  &:hover {
    transform: translate(-2px, -2px);
    transition: 0.1s;
    box-shadow: 5px 5px ${(props) => props.theme.color.contrast};
    cursor: pointer;
  }
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px 30px;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  background-image: linear-gradient(white 0%, #e9fcfa 10%);
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
  justify-content: space-between;
  margin-top: auto;
  padding: 16px 24px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  align-items: center;
`;

export const TimerIcon = styled(Timer)`
  color: ${(props) => props.theme.color.contrast};
  height: 26px;
  width: 26px;
  margin-right: 5px;
`;

export const ScoreIcon = styled(Upvote)`
  color: ${(props) => props.theme.color.contrast};
  height: 26px;
  width: 26px;
  margin-right: 5px;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
   transform: rotate(360deg);
  }
`;
export const Spinner = styled.div`
  animation: ${rotate360} 2s linear infinite;

  border-top: 0px solid ${(props) => props.theme.color.main};
  border-right: 3px solid ${(props) => props.theme.color.main};
  border-bottom: 0px solid ${(props) => props.theme.color.main};
  border-left: 3px solid ${(props) => props.theme.color.contrast};

  background: transparent;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 50px auto 20px;
`;

export const NoCards = styled.h1`
  font-size: 32px;
  margin: 30px auto 0;
`;
