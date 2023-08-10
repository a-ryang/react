import { DeleteIcon } from "@chakra-ui/icons";
import { ITodo } from "../stores/todos";
import { CSSProperties } from "react";

interface Props {
  readonly todo: ITodo;
  readonly onToggle: (id: number) => void;
  readonly onRemove: (id: number) => void;
}

export default function Todo({ todo, onToggle, onRemove }: Props) {
  const textStyle: CSSProperties = {
    textDecoration: todo.isDone ? "line-through" : "none",
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleRemove = () => {
    onRemove(todo.id);
  };

  return (
    <>
      <span onClick={handleToggle} style={textStyle}>
        {todo.text}
      </span>
      <span onClick={handleRemove}>
        <DeleteIcon />
      </span>
    </>
  );
}
