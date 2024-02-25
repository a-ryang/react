# Form

## Form 관리

### State(상태) & 일반 Handler로 사용자 입력 수집 및 관리 - 1

```jsx
const [enteredEmail, setEnteredEmail] = useState("");
const [enteredPassword, setEnteredPassowrd] = useState("");

function handleEmailChange(event) {
  setEnteredEmail(event.target.value);
}

function handlePasswordChange(event) {
  setEnteredPassowrd(event.target.value);
}

// ...
<input
  id="email"
  type="email"
  name="email"
  value={enteredEmail}
  onChange={handleEmailChange}
/>;
```

### State(상태) & 일반 Handler로 사용자 입력 수집 및 관리 - 2

```jsx
const [enteredValues, setEnteredValues] = useState({
  email: "",
  password: "",
});

function handleInputChange(identifier, value) {
  setEnteredValues((prev) => ({ ...prev, [identifier]: event.target.value }));
}

...

<input
  id="email"
  type="email"
  name="email"
  value={enteredValues.email}
  onChange={(event) => handleInputChange("email", event.target.value)}
/>
```

### Refs(참조)로 사용자 입력 수집 및 관리

```jsx
const email = useRef();
const password = useRef();

function handleSubmit(event) {
  event.preventDefault();

  const enteredEmail = email.current.value;
  const enteredPassword = password.current.value;

  event.target.reset();
}

...

<input id="email" type="email" name="email" ref={email} />
```

### FormData & 브라우저 API로 값 다루기

복잡한 Form 다룰 때 좋음

```jsx
function handleSubmit(event) {
  event.preventDefault();

  // FormData로 값에 접근하려면 모든 input에 name 속성과 값이 있어야 함
  const fd = new FormData(event.target);

  const acquisitionChannel = fd.getAll("acquisition");
  const data = Object.fromEntries(fd.entries());
  data.acquisition = acquisitionChannel;
}
```

## Form 초기화

```jsx
function handleSubmit(event) {
  event.target.reset();
}
```

## 유효성 검사

## State(상태)로 매 키보드 입력마다 유효성 검증

```jsx
const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  function handleInputChange(identifier, value) {
    setEnteredValues((prev) => ({ ...prev, [identifier]: value }));
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={enteredValues.email}
            onChange={(event) => handleInputChange("email", event.target.value)}
            onBlur={() => handleInputBlur("email")}
          />
```

### Form 제출시 입력 검증

```jsx
const [formIsInvalid, setFormIsInvalid] = useState({
  email: false,
});

const email = useRef();
const password = useRef();

function handleSubmit(event) {
  event.preventDefault();

  const enteredEmail = email.current.value;
  const enteredPassword = password.current.value;

  const emailIsValid = enteredEmail.includes("@");

  if (!emailIsValid) {
    setFormIsInvalid((prev) => ({
      ...prev,
      email: true,
    }));
    return;
  }

  setFormIsInvalid({
    email: false,
  });

  console.log("http request");
}
```

### 훅으로 분리

- `HookStateLogin.jsx` `useInput.js` 참고
