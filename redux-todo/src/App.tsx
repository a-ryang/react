import { Center, Container, Flex, VStack } from "@chakra-ui/react";
import AddTodo from "./components/AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./stores";
import { addTodo, removeTodo, toggleTodo } from "./stores/todos";
import Todos from "./components/Todos";

export default function App() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <Container height={"100vh"}>
      <Center h={"100vh"}>
        <Flex flexDirection="column">
          <AddTodo onAdd={handleAddTodo} />
          <Todos
            todos={todos}
            onToggle={handleToggleTodo}
            onRemove={handleRemoveTodo}
          />
        </Flex>
      </Center>
    </Container>
  );
}
