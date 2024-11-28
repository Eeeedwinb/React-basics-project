import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export const RecipePage = ({ choice, clickFn }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const nutrientsToFilter = ["PROCNT", "FAT", "CHOCDF", "CHOLE", "NA"];

  return (
    <Center flexDir={`column`} gap={4}>
      <Heading>Het recept:</Heading>
      <Box>{choice.label}</Box>
      <Image src={choice.image} w={100} h={100} borderRadius={"2xl"} />
      <Box>Meal type: {choice.mealType}</Box>
      <Box>Dish type: {choice.dishType}</Box>
      <Box>Total cooking time:{choice.totalTime}</Box>
      <Box>Diet:{choice.dietLabels}</Box>
      <Box>Cautions: {choice.cautions}</Box>
      <Box>Health labels: {choice.healthLabels}</Box>
      <Box>Ingredients:{choice.ingredientLines}</Box>
      <Box>Servings:{choice.yield}</Box>
      <Box>
        Total Nutrients:
        <Text color="red.800" size="xl">
          {choice.calories.toFixed(0)} Calories
        </Text>
        {nutrientsToFilter.map((label) => {
          const nutrient = choice.totalNutrients[label];
          return (
            <Text color="red.800" size="xl" key={label}>
              {nutrient.quantity.toFixed(0)} {nutrient.unit} {nutrient.label}
            </Text>
          );
        })}
      </Box>
      <Flex>
        <Button onClick={() => clickFn()} variant="ghost">
          Go back
        </Button>
      </Flex>
    </Center>
  );
};
