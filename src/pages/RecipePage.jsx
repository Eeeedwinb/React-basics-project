import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Image,
  Tag,
  Text,
} from "@chakra-ui/react";

export const RecipePage = ({ choice, clickFn }) => {
  const nutrientsToFilter = ["PROCNT", "FAT", "CHOCDF", "CHOLE", "NA"];

  return (
    <Center
      flexDir="column"
      bgColor="white"
      w={{ base: "100%", lg: "70%" }}
      h={{ base: "auto", lg: "full" }}
      gap={2}
      overflow="hidden"
      textAlign="center"
      borderBottomRadius={{ base: "auto", lg: "2%" }}
    >
      <Flex>
        <Button onClick={() => clickFn()} variant="ghost">
          Back to homepage
        </Button>
      </Flex>
      <Image src={choice.image} w="full" h="14em" objectFit="cover" />

      <Text color="gray.600" textTransform="uppercase" fontSize="xs">
        {choice.mealType} | {choice.dishType}
      </Text>
      <Text fontSize="4xl" fontWeight="medium" ml={2} mr={2}>
        {choice.label}
      </Text>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(2, 50%)" }}
        textAlign={{ base: "auto", lg: "left" }}
        m={4}
        pl={{ base: 0, lg: 5 }}
        pr={{ base: 0, lg: 5 }}
      >
        <Box>
          <Box mb={2}>
            <Text as="span">Total cooking time:</Text>{" "}
            <Text as="span" fontWeight="medium">
              {choice.totalTime} minutes
            </Text>
          </Box>
          <Box mb={4}>
            <Text as="span">Servings:</Text>{" "}
            <Text as="span" fontWeight="medium">
              {choice.yield}
            </Text>
          </Box>

          <Box mb={4}>
            <Text fontWeight="medium" mb={1}>
              Ingredients:
            </Text>
            {choice.ingredientLines.map((label) => (
              <Text textAlign="left" key={label} mb={1}>
                {label}
              </Text>
            ))}
          </Box>
        </Box>
        <Box>
          <Box mb={4}>
            <Flex flexDir="row">
              <Box>
                <Text mb={1}>Health Labels:</Text>
                {choice.healthLabels.map((label) => (
                  <Tag
                    bgColor="purple.100"
                    textColor="purple.800"
                    textTransform="uppercase"
                    fontSize={{ base: "xs", lg: "sm" }}
                    fontWeight="semibold"
                    key={label}
                    ml={2}
                    mb={2}
                  >
                    {label}
                  </Tag>
                ))}
              </Box>
            </Flex>
          </Box>
          <Box mb={4}>
            <Text mb={1}>Diet:</Text>
            {choice.dietLabels.map((label) => (
              <Tag
                bgColor="green.100"
                textColor="green.800"
                textTransform="uppercase"
                fontSize={"sm"}
                fontWeight={"medium"}
                key={label}
                ml={2}
                mb={2}
              >
                {label}
              </Tag>
            ))}
          </Box>
          <Box mb={4}>
            <Text mb={1}>Cautions:</Text>
            {choice.cautions.map((label) => (
              <Tag
                bgColor="red.100"
                textColor="red.800"
                textTransform="uppercase"
                fontWeight={"medium"}
                fontSize={"sm"}
                key={label}
                ml={2}
                mb={2}
              >
                {label}
              </Tag>
            ))}
          </Box>
          <Box mb={4}>
            <Text fontWeight={"medium"}>Total Nutrients:</Text>
            <Grid
              templateColumns={"repeat(2, 1fr)"}
              templateRows={{ base: "repeat(2, auto)", lg: "repeat(2, 1fr)" }}
              gap={2}
            >
              <Text>
                {choice.calories.toFixed(0)}{" "}
                <Text as="span" textTransform="uppercase" fontWeight={"medium"}>
                  Calories
                </Text>
              </Text>
              {nutrientsToFilter.map((label) => {
                const nutrient = choice.totalNutrients[label];
                return (
                  <Text key={label}>
                    {nutrient.quantity.toFixed(0)} {nutrient.unit}{" "}
                    <Text
                      as="span"
                      textTransform="uppercase"
                      fontWeight={"medium"}
                    >
                      {nutrient.label}
                    </Text>
                  </Text>
                );
              })}
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Center>
  );
};
