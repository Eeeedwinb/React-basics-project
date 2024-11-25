import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { Center } from "@chakra-ui/react";
import { RecipeChoice } from "./components/RecipeChoice";

export const App = () => {
  // Your state code here
  const [userRecipe, setUserRecipe] = useState();

  return (
    <Center className="app">
      {userRecipe ? (
        <RecipeChoice recipe={userRecipe} />
      ) : (
        <>
          <RecipeListPage />
        </>
      )}
    </Center>
  );
};
