import { data } from "../utils/data";
import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { RecipeListPage } from "../pages/RecipeListPage";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState(``);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = searchField
    ? data.hits
        .filter((hit) => {
          const recipeLabelMatches = hit.recipe.label
            .toLowerCase()
            .includes(searchField.toLowerCase());

          const healthLabelMatches = hit.recipe.healthLabels.some((label) =>
            label.toLowerCase().includes(searchField.toLowerCase())
          );

          return recipeLabelMatches || healthLabelMatches;
        })
        .map((hit) => hit.recipe)
    : data.hits.map((hit) => hit.recipe);

  const handleRecipeClick = (recipe) => {
    clickFn(recipe);
  };

  return (
    <>
      <TextInput onChange={handleChange} w={1000} mb={10} />
      <RecipeListPage clickFn={handleRecipeClick} recipes={matchedRecipes} />
    </>
  );
};
