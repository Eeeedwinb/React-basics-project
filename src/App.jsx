import { useState } from "react";
import { Center, Heading } from "@chakra-ui/react";
import { RecipeSearch } from "./components/RecipeSearch";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  // Your state code here
  const [userRecipe, setUserRecipe] = useState();

  return (
    <Center className="app" flexDir={"column"} margin={6} gap={6}>
      <Heading size="2xl" margin={2} color="white" textAlign={"center"}>
        Edwins Recipe Checker
      </Heading>
      {userRecipe ? (
        <RecipePage choice={userRecipe} clickFn={setUserRecipe} />
      ) : (
        <>
          <RecipeSearch clickFn={setUserRecipe} />
        </>
      )}
    </Center>
  );
};
