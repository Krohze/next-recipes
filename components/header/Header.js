import { Container } from "./headerStyles";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>Recipes{children}</Container>;
}
