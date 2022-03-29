import { Container, Column, Row, Text, Link, Icon } from "./footerStyles";
import { Github as GithubLogo } from "@styled-icons/bootstrap/Github";
import { Linkedin as LinkedinLogo } from "@styled-icons/bootstrap/Linkedin";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Styledcomponents as StyledComponentsLogo } from "@styled-icons/simple-icons/Styledcomponents";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Column = function FooterColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};

Footer.Row = function FooterRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.IconLink = function FooterIconLink({ type, url, ...restProps }) {
  const icon =
    type == "github" ? (
      <GithubLogo />
    ) : type == "linkedin" ? (
      <LinkedinLogo />
    ) : type == "react" ? (
      <ReactLogo />
    ) : type == "styled" ? (
      <StyledComponentsLogo />
    ) : (
      ""
    );
  return (
    <Link href={url} target="_blank">
      <Icon>{icon}</Icon>
    </Link>
  );
};
