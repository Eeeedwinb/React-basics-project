import {
  Center,
  Heading,
  Card,
  CardBody,
  Text,
  Image,
  Flex,
  Grid,
  Box,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  // You can play around with the console log, but ultimately remove it once you are done
  console.log(data.hits[0].recipe.label);

  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {data.hits.map((hit, label) => (
          <Card key={label}>
            <CardBody>
              <Text fontWeight="medium">{hit.recipe.label}</Text>
              <Image src={hit.recipe.image} h={100} w={100} />
              {hit.recipe.dietLabels.map((dietLabel) => (
                <Text key={dietLabel}>{dietLabel}</Text>
              ))}
              <div>
                {hit.recipe.cautions.map((caution) => (
                  <Text color="blue.800" key={caution}>
                    {caution}
                  </Text>
                ))}
              </div>
              <div className="Meal">
                {hit.recipe.mealType.map((meal) => (
                  <Text color="red.800" key={meal}>
                    {meal}
                  </Text>
                ))}
              </div>
              <div className="Dish">
                {hit.recipe.dishType.map((dish) => (
                  <Text color="green.800" key={dish}>
                    {dish}
                  </Text>
                ))}
              </div>
              <div className="health_labels">
                {hit.recipe.healthLabels.includes("Vegan") &&
                hit?.recipe.healthLabels.includes("Vegetarian") ? (
                  <>
                    <Text>Vegan</Text>
                    <Text>Vegetarian</Text>
                  </>
                ) : hit?.recipe?.healthLabels?.includes("Vegan") ? (
                  <Text>Vegan</Text>
                ) : hit?.recipe?.healthLabels?.includes("Vegetarian") ? (
                  <Text>Vegetarian</Text>
                ) : (
                  <Text>NO OF BOTH</Text>
                )}
              </div>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Center>
  );
};
