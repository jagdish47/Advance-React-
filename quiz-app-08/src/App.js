import Header from "./Header";
import Main from "./Main";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  status: "loading",
  //loading, error, ready, active, finished
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "Ready" };

    case "dataFailed":
      return { ...state, status: "Failed" };
    default:
      throw new Error("Action Unknown");
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div>
      <Header />
      <Main>
        <p>1/15</p>
        <p>Questions</p>
      </Main>
    </div>
  );
};

export default App;
