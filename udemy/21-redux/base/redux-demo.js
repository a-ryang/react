const redux = require("redux");

const coounterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

/** @deprecated createStore */
const store = redux.createStore(coounterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

console.log(store.getState()); // { counter: 1 }

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
