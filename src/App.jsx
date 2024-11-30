import { useState } from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import { RecipeSearch } from "./components/RecipeSearch";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  // Your state code here
  const [userRecipe, setUserRecipe] = useState();

  return (
    <Center className="app" flexDir={"column"} gap={6}>
      {userRecipe ? (
        <RecipePage choice={userRecipe} clickFn={setUserRecipe} />
      ) : (
        <Box margin={6}>
          <Heading size="2xl" margin={5} color="white" textAlign={"center"}>
            Recipe Checker
          </Heading>
          <RecipeSearch clickFn={setUserRecipe} />
        </Box>
      )}
    </Center>
  );
};
