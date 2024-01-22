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
