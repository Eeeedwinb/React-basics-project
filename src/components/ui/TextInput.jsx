import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange }) => {
  return <Input placeholder="Search recipes" onChange={onChange}></Input>;
};
