import { Container, Grid, Title, Text, Row, Image, Icon } from "./cardStyles";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Grid = function CardGrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
};

Card.Image = function CardImage({ src, ...restProps }) {
  return <Image src={src} {...restProps} />;
};

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Card.Text = function CardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Card.Info = function CardInfo({ icon, children, ...restProps }) {
  return (
    <Row {...restProps}>
      <Icon src={icon} />
      <p>{children}</p>
    </Row>
  );
};

Card.Row = function CardRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};
