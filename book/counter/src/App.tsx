import { useState } from "react";
import styled from "@emotion/styled";

import { Button } from "components/Button";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.span`
  margin: 0 16px;
  font-size: 1.2rem;
`;

function App() {
  const [counter, setCounter] = useState(0);

  const sub = () => {
    setCounter(counter - 1);
  };

  const add = () => {
    setCounter(counter + 1);
  };

  return (
    <Container>
      <Title>Counter App</Title>
      <Contents>
        <Button label="-" onClick={sub} />
        <Label>{counter}</Label>
        <Button label="+" onClick={add} />
      </Contents>
    </Container>
  );
}

export default App;
