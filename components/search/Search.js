import { Container, Input, Button } from "./searchStyles";

export default function Search({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Search.Input = function SearchInput({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  return (
    <Input
      value={searchTerm}
      onChange={({ target }) => setSearchTerm(target.value)}
      placeholder="Search for a recipe"
      {...restProps}
    />
  );
};

Search.Button = function SearchButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
