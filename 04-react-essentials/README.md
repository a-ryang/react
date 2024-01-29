## JSX를 꼭 사용하지 않아도된다

```js
React.createElement(element, props, child);
```

```js
React.createElement(
  "div",
  { id: "content" },
  React.createElement("p", null, "Hello World")
);
```

## Fragments

JSX 표현식은 하나의 상위 혹은 부모 요소를 가져야 한다.

```jsx
return <header></header><main></main> // error: 값을 두 개 이상 반환할 수 없음
```

리액트 내장 `fragments` 컴포넌트를 사용하면, 형제 컴포넌트를 감싼 root 컴포넌트로 사용할 수 있다.

```jsx
import { Fragment } from "react";
return (
  <Fragment>
    <header></header>
    <main></main>
  </Fragment>
);
```

```jsx
return (
  <>
    <header></header>
    <main></main>
  </>
);
```

## 옛 상태를 기반으로 올바르게 상태 업데이트하기

state를 변경할 떄 이전 값을 기반으로 변경해야 하는 경우, 다음 예시처럼 상태를 변경하는 것은 잘못된 방법이다:

```jsx
const [isEditing, setIsEditing] = useState(false);

function handleEditClick() {
  setIsEditing(!isEditing); // Bad
}
```

이전 state를 기반으로 state를 업데이트하려면, state 업데이트 함수에 새로운 함수를 전달해야 한다. 이 방법으로 상태의 최신 값을 보장한다:

```jsx
const [isEditing, setIsEditing] = useState(false);

function handleEditClick() {
  setIsEditing((isEditing) => !isEditing); // Good
}
```

왜 함수로 보내야할까?

`setIsEditing(!isEditing)`를 사용할 때, 리액트는 state 변경에 대한 스케줄을 조정한다.
state 변경은 즉시 발생하지 않고, 리액트가 미래에 수행할 상태 변경을 스케줄링한다.

```jsx
const [isEditing, setIsEditing] = useState(false);

function handleEditClick() {
  setIsEditing(!isEditing); // true로 state 업데이트 스케줄링
  setIsEditing(!isEditing); // true로 state 업데이트 스케줄링
}
```

이 상황에서 함수를 사용하면, 리액트는 각 상태 업데이트에 대해 최신의 `isEditing` 값을 사용하여 올바르게 동작한다.
