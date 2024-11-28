import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange }) => {
  return <Input className="input" onChange={onChange}></Input>;
};
