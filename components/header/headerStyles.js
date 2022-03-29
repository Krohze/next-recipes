import styled from "styled-components";
import { MagnifyingGlass } from "@styled-icons/entypo/MagnifyingGlass";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 10px 30px;
  border-bottom: 1px solid ${(props) => props.theme.color.contrast};
  background-color: white;
  color: ${(props) => props.theme.color.dark};
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
`;

export const Search = styled.div`
  margin: 0 0 0 auto;
`;

export const SearchIcon = styled(MagnifyingGlass)`
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.color.dark};
  &:hover {
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  background-color: white;
  color: white;
  border: 1px solid ${(props) => props.theme.color.main};
  border-radius: 3px;
  text-align: center;
  transition: width 0.5s;
  height: 30px;
  font-size: 16px;
  margin-left: ${({ active }) => (active === true ? "10px" : "0")};
  padding: ${({ active }) => (active === true ? "0 10px" : "0")};
  opacity: ${({ active }) => (active === true ? "1" : "0")};
  width: ${({ active }) => (active === true ? "200px" : "0")};
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
