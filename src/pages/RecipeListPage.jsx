import {
  Center,
  Heading,
  Card,
  CardBody,
  Text,
  Image,
  Grid,
  Box,
} from "@chakra-ui/react";

export const RecipeListPage = ({ recipes, clickFn }) => {
  // You can play around with the console log, but ultimately remove it once you are done
  // console.log(data.hits[0].recipe.label);

  return (
    <Center h="auto" flexDir="column">
      <Heading>Your Recipe App</Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {recipes.map((recipe, label) => (
          <Card key={label} cursor="pointer" onClick={() => clickFn(recipe)}>
            <CardBody>
              <Image src={recipe.image} h={100} w={100} />
              <Box className="Meal">
                {recipe.mealType.map((meal) => (
                  <Text color="red.800" key={meal}>
                    {meal}
                  </Text>
                ))}
              </Box>
              <Text fontWeight="medium">{recipe.label}</Text>
              {recipe.dietLabels.map((dietLabel) => (
                <Text key={dietLabel}>{dietLabel}</Text>
              ))}
              <Box>
                {recipe.cautions.map((caution) => (
                  <Text color="blue.800" key={caution}>
                    {caution}
                  </Text>
                ))}
              </Box>

              <Box>
                {recipe.dishType.map((dish) => (
                  <Text color="green.800" key={dish}>
                    {dish}
                  </Text>
                ))}
              </Box>

              <Box>
                {recipe.healthLabels
                  .filter(
                    (label) => label === "Vegan" || label === "Vegetarian"
                  )
                  .map((label) => (
                    <Text color="red.800" size="xl" key={label}>
                      {label}
                    </Text>
                  ))}
              </Box>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Center>
  );
};
