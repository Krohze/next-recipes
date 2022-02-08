import { Fragment, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Search, Card } from "../components";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error, fetchRecipes } = useFetch();

  const handleClick = (event) => {
    event.preventDefault();

    fetchRecipes(searchTerm);
  };

  return (
    <Fragment>
      <Search>
        <Search.Input searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Search.Button onClick={handleClick}>Search</Search.Button>
      </Search>

      <Card.Grid>
        {loading ? (
          <p>LOADING...</p>
        ) : (
          data?.map((recipe, key) => (
            <Card key={key} recipe={recipe}>
              <Card.Image src={recipe.image} />
              <Card.Text>{recipe.soureName}</Card.Text>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Row>
                <Card.Info src={""}>{recipe.readyInMinutes}</Card.Info>
                <Card.Info src={""}>{recipe.spoonacularScore}</Card.Info>
              </Card.Row>
            </Card>
          ))
        )}
      </Card.Grid>
    </Fragment>
  );
}
