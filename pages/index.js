import { Fragment, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Header, Footer, Search, Card } from "../components";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, fetchRecipes } = useFetch();

  const handleSubmit = () => {
    fetchRecipes(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") handleSubmit();
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Fragment>
      <Header>
        <Header.Title>Recipes</Header.Title>
        <Header.Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onKeyPress={handleKeyPress}
        />
      </Header>
      <Search>
        <Search.Input
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onKeyPress={handleKeyPress}
        />
        <Search.Button onClick={handleSubmit}>Search</Search.Button>
      </Search>

      <Card.Grid>
        {loading ? (
          <Card.Spinner />
        ) : data?.length <= 0 ? (
          <Card.NoCards />
        ) : (
          data?.map((recipe, key) => (
            <Card
              key={key}
              recipe={recipe}
              onClick={() => window.open(recipe.sourceUrl, "_blank")}
            >
              <Card.Image src={recipe.image} />
              <Card.Text>{recipe.sourceName}</Card.Text>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Row>
                <Card.Info type="time">{recipe.readyInMinutes}</Card.Info>
                <Card.Info type="score">{recipe.spoonacularScore}</Card.Info>
              </Card.Row>
            </Card>
          ))
        )}
      </Card.Grid>
      <Footer>
        <Footer.Column>
          <Footer.Row>
            <Footer.Text>Made with:</Footer.Text>
          </Footer.Row>
          <Footer.Row>
            <Footer.IconLink type="react" url="https://reactjs.org/" />
            <Footer.IconLink
              type="styled"
              url="https://styled-components.com/"
            />
          </Footer.Row>
        </Footer.Column>
        <Footer.Column>
          <Footer.Row>
            <Footer.Text>Find me at:</Footer.Text>
          </Footer.Row>
          <Footer.Row>
            <Footer.IconLink
              type="github"
              url="https://github.com/yurisbittencourt?tab=repositories"
            />
            <Footer.IconLink
              type="linkedin"
              url="https://www.linkedin.com/in/yuri-bittencourt-8804ab16a"
            />
          </Footer.Row>
        </Footer.Column>
      </Footer>
    </Fragment>
  );
}
