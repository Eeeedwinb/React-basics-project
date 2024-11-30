import {
  Center,
  Card,
  CardBody,
  Text,
  Image,
  Grid,
  Box,
  Flex,
  Tag,
} from "@chakra-ui/react";

export const RecipeListPage = ({ recipes, clickFn }) => {
  return (
    <Center h="auto" w="100%" flexDir="column">
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(4, 1fr)" }}
        gap={8}
        m={4}
        pl={{ base: 0, lg: "30" }}
        pr={{ base: 0, lg: "30" }}
      >
        {recipes.map((recipe, label) => (
          <Card
            bgColor="white"
            w={{ base: "100%", lg: "18em" }}
            borderRadius="5%"
            key={label}
            cursor="pointer"
            onClick={() => clickFn(recipe)}
            overflow="hidden"
          >
            <Image
              src={recipe.image}
              h={{ base: "14em", lg: "10em" }}
              w="full"
              objectFit="cover"
              border
            />
            <CardBody>
              <Flex flexDir="column" textAlign="center">
                <Box>
                  {recipe.mealType.map((meal) => (
                    <Text
                      color="gray.600"
                      textTransform="uppercase"
                      fontSize="xs"
                      key={meal}
                    >
                      {meal}
                    </Text>
                  ))}
                </Box>
                <Text fontWeight="medium" fontSize={{ base: "xl", lg: "2xl" }}>
                  {recipe.label}
                </Text>
                <Box>
                  {recipe.healthLabels
                    .filter(
                      (label) => label === "Vegan" || label === "Vegetarian"
                    )
                    .map((label) => (
                      <Tag
                        bgColor="purple.100"
                        textColor="purple.800"
                        textTransform="uppercase"
                        fontSize="xs"
                        key={label}
                        m={1}
                      >
                        {label}
                      </Tag>
                    ))}
                </Box>
                <Box>
                  {recipe.dietLabels.map((dietLabel) => (
                    <Tag
                      bgColor="green.100"
                      textColor="green.800"
                      textTransform="uppercase"
                      fontSize="xs"
                      key={dietLabel}
                      m={1}
                    >
                      {dietLabel}
                    </Tag>
                  ))}
                </Box>

                <Box>
                  {recipe.dishType.map((dish) => (
                    <Text key={dish}>
                      Dish:{" "}
                      <Text as="span" fontWeight="medium">
                        {dish}
                      </Text>
                    </Text>
                  ))}
                </Box>
                <Box>
                  <Text align="center">Cautions:</Text>
                  {recipe.cautions.map((caution) => (
                    <Tag
                      bgColor="red.100"
                      textColor="red.800"
                      textTransform="uppercase"
                      fontSize="xs"
                      key={caution}
                      m={1}
                    >
                      {caution}
                    </Tag>
                  ))}
                </Box>
              </Flex>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Center>
  );
};
