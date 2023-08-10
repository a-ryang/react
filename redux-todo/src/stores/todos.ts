// actions
const ADD_TODO = "todo/ADD" as const;
const TOGGLE_TODO = "todo/TOGGLE" as const;
const REMOVE_TODO = "todo/REMOVE" as const;

// actions creators
export const addTodo = (text: string) => ({ type: ADD_TODO, payload: text });

export const toggleTodo = (id: number) => ({ type: TOGGLE_TODO, payload: id });

export const removeTodo = (id: number) => ({ type: REMOVE_TODO, payload: id });

type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>;

export interface ITodo {
  id: number;
  text: string;
  isDone: boolean;
}

const initialState: ITodo[] = [];

// reducer
const todos = (state = initialState, action: TodoAction): ITodo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          isDone: false,
        },
      ];

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default todos;
