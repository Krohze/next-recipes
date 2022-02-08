import { Container } from "./footerStyles";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>Footer{children}</Container>;
}
