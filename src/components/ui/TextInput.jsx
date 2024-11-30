import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange }) => {
  return (
    <Input
      w={{ base: "15em", lg: "35em" }}
      m={2}
      bgColor={"white"}
      placeholder="Search recipes"
      onChange={onChange}
    ></Input>
  );
};
