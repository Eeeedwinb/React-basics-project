import { useState } from "react";
import { Center } from "@chakra-ui/react";
import { RecipeSearch } from "./components/RecipeSearch";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  // Your state code here
  const [userRecipe, setUserRecipe] = useState();

  return (
    <Center className="app">
      {userRecipe ? (
        <RecipePage choice={userRecipe} clickFn={setUserRecipe} />
      ) : (
        <RecipeSearch clickFn={setUserRecipe} />
      )}
    </Center>
  );
};
