import { Text } from "@chakra-ui/react";

import { ITodo } from "../stores/todos";
import Todo from "./Todo";

interface Props {
  readonly todos: ITodo[];
  readonly onToggle: (id: number) => void;
  readonly onRemove: (id: number) => void;
}

export default function Todos({ todos, onToggle, onRemove }: Props) {
  if (todos.length === 0)
    return <Text fontSize="sm">등록된 할 일이 없어요.</Text>;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} onToggle={onToggle} onRemove={onRemove} />
        </li>
      ))}
    </ul>
  );
}
