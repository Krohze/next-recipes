import axios from "axios";
import { useState } from "react";

export function useFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = (searchTerm = "") => {
    const url =
      searchTerm == ""
        ? `https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=24&addRecipeInformation=true&apiKey=73d95ab19d8b46ccbc8ef8dda36c44f5`
        : `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&number=24&addRecipeInformation=true&apiKey=73d95ab19d8b46ccbc8ef8dda36c44f5`;

    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return { data, loading, error, fetchRecipes };
}
