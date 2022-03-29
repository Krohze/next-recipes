import {
  Container,
  Grid,
  Title,
  Text,
  Row,
  Info,
  Image,
  TimerIcon,
  ScoreIcon,
  Spinner,
  NoCards,
} from "./cardStyles";

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

Card.Info = function CardInfo({ children, type }) {
  return (
    <Info>
      {type == "time" ? <TimerIcon /> : type == "score" ? <ScoreIcon /> : ""}
      <p>
        {children} {type == "time" ? "mins" : ""}
      </p>
    </Info>
  );
};

Card.Row = function CardRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Card.Spinner = function CardSpinner() {
  return <Spinner />;
};

Card.NoCards = function CardNoCards() {
  return <NoCards>No results</NoCards>;
};
