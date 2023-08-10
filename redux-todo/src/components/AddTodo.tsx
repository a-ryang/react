import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";

interface Props {
  readonly onAdd: (text: string) => void;
}

export default function AddTodo({ onAdd }: Props) {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsError(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value.length === 0) {
      setIsError(true);
      return;
    }
    onAdd(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl typeof="form" isInvalid={isError}>
        <FormLabel>✅ TODO</FormLabel>
        <Flex gap={"1rem"}>
          <Input
            placeholder="할 일을 입력하세요"
            size="md"
            value={value}
            onChange={handleChange}
          />
          <Button type="submit" colorScheme="green">
            <AddIcon />
          </Button>
        </Flex>
        {isError && <FormErrorMessage>입력해주세요 !</FormErrorMessage>}
      </FormControl>
    </form>
  );
}
