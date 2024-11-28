import { data } from "../utils/data";
import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { RecipeListPage } from "../pages/RecipeListPage";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits
    .filter((hit) =>
      hit.recipe.label.toLowerCase().includes(searchField.toLowerCase())
    )
    .map((hit) => hit.recipe.label);

  console.log(matchedRecipes);
  console.log("search field", searchField);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <label>Search for recipes</label>
      <TextInput value={searchField} onChange={handleChange} w={1000} mb={10} />
      <RecipeListPage clickFn={clickFn} recipe={matchedRecipes} />
    </>
  );
};
